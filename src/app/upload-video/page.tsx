"use client";

import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { doc, runTransaction } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function UploadVideoPage() {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const CLOUDINARY_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;
  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("✅ Logged in successfully");
    } catch (err) {
      console.error("Login error:", err);
      setMessage("❌ Login failed. Check your credentials.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setFile(null);
    setVideoUrl("");
    setMessage("🔒 Logged out successfully");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setMessage("");
    setVideoUrl("");
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("⚠️ Please select a video file first.");
      return;
    }

    setUploading(true);
    setMessage("");

    try {
      // Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_PRESET);

      const cloudinaryRes = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!cloudinaryRes.ok) throw new Error("Cloudinary upload failed");

      const data = await cloudinaryRes.json();
      const uploadedUrl = data.secure_url;
      setVideoUrl(uploadedUrl);

      // Save to Firestore
      await runTransaction(db, async (transaction) => {
        const counterRef = doc(db, "counters", "epitailo_reels");
        const counterDoc = await transaction.get(counterRef);

        let currentCount = 1;
        if (!counterDoc.exists()) {
          transaction.set(counterRef, { count: 1 });
        } else {
          currentCount = counterDoc.data().count + 1;
          transaction.update(counterRef, { count: currentCount });
        }

        const newVideoDocRef = doc(db, "videos", `epitailo_reel_${currentCount}`);
        transaction.set(newVideoDocRef, {
          url: uploadedUrl,
          uploadedAt: new Date(),
          fileName: file.name,
          reelNumber: currentCount,
          uploadedBy: {
            uid: user?.uid,
            email: user?.email,
          },
        });
      });

      setMessage("✅ Video uploaded and saved to Firestore successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("❌ Upload failed. Please try again.");
    } finally {
      setUploading(false);
      setFile(null);
    }
  };

  return (
    <main
      className="flex justify-center px-4 pt-22 mb-130 bg-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/ddztecdya/image/upload/v1748689651/qgbgny26a84o0l60ubjs.png')",
        backgroundSize: "350%", // Zoom level (100% is default)
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-xl mt-20 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Upload Video
        </h1>

        {!user ? (
          <div className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // <-- controlled input fix here
              placeholder="Email"
              className="w-full px-4 py-2 border bg-[#898989] border-gray-900 rounded"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // <-- controlled input fix here
              placeholder="Password"
              className="w-full px-4 py-2 border bg-[#898989] border-gray-900 rounded"
            />
            <button
              onClick={handleLogin}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-[#898989]"
            >
              Login
            </button>
            {message && (
              <p className="text-center text-sm text-red-600">{message}</p>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
              <span>Logged in as: {user.email}</span>
              <button
                onClick={handleLogout}
                className="text-orange-600 hover:underline"
              >
                Logout
              </button>
            </div>

            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              disabled={uploading}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-600 file:text-white hover:file:bg-orange-700"
            />

            {file && (
              <video
                className="w-full rounded mt-2"
                src={URL.createObjectURL(file)}
                controls
              />
            )}

            <button
              onClick={handleUpload}
              disabled={uploading || !file}
              className={`w-full px-4 py-2 bg-orange-600 text-white rounded ${
                uploading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-700"
              }`}
            >
              {uploading ? "Uploading..." : "Upload Video"}
            </button>

            {message && (
              <p className="text-center text-sm text-gray-800 whitespace-pre-line">
                {message}
              </p>
            )}

            {videoUrl && (
              <video src={videoUrl} controls className="mt-4 rounded w-full" />
            )}
          </div>
        )}
      </div>
    </main>
  );
}
