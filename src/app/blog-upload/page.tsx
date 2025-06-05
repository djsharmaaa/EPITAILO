"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface BlogFormData {
  title: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  markdownContent: string;
}

const BlogUploadForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<BlogFormData>();
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: BlogFormData) => {
    setUploading(true);
    setSuccess(false);

    try {
      await addDoc(collection(db, "blogs"), {
        title: data.title,
        author: data.author,
        date: data.date,
        readTime: data.readTime,
        coverImage: data.coverImage,
        contentMarkdown: data.markdownContent,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      reset();
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Something went wrong!");
    }

    setUploading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow mb-150">
      <h2 className="text-2xl font-bold mb-4 text-center">Upload Blog Content</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("title", { required: true })}
          placeholder="Title"
          className="w-full border p-2 rounded"
        />
        <input
          {...register("author", { required: true })}
          placeholder="Author"
          className="w-full border p-2 rounded"
        />
        <input
          {...register("date", { required: true })}
          placeholder="Date (e.g., 2025-06-04)"
          type="date"
          className="w-full border p-2 rounded"
        />
        <input
          {...register("readTime", { required: true })}
          placeholder="Read Time (e.g., 5 min read)"
          className="w-full border p-2 rounded"
        />
        <input
          {...register("coverImage", { required: true })}
          placeholder="Cover Image URL"
          className="w-full border p-2 rounded"
        />

        <label className="block font-semibold mt-4 mb-2">Markdown Content:</label>
        <textarea
          {...register("markdownContent", { required: true })}
          placeholder="Paste your full blog markdown content here..."
          rows={12}
          className="w-full border p-3 rounded font-mono text-sm"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Blog"}
        </button>

        {success && (
          <p className="text-green-600 text-sm mt-2">Blog uploaded successfully!</p>
        )}
      </form>
    </div>
  );
};

export default BlogUploadForm;
