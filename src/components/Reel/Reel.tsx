"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Video {
  id: string;
  url: string;
  reelNumber?: number;
}

interface VideoState {
  muted: boolean;
  paused: boolean;
}

export default function ReelPage() {
  const [videoList, setVideoList] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number | null>(null);
  const scrollSpeed = 0.5;

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [videoStates, setVideoStates] = useState<Record<string, VideoState>>({});

  useEffect(() => {
    async function fetchVideos() {
      setLoading(true);
      try {
        const videosRef = collection(db, "videos");
        const q = query(videosRef, orderBy("reelNumber", "asc"));
        const querySnapshot = await getDocs(q);
        const videosData: Video[] = [];
        const initialStates: Record<string, VideoState> = {};
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          videosData.push({ id, url: data.url, reelNumber: data.reelNumber });
          initialStates[id] = { muted: true, paused: true };
        });
        setVideoList(videosData);
        setVideoStates(initialStates);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, []);

  const autoScroll = useCallback(() => {
    if (!scrollRef.current || isScrolling) return;
    const container = scrollRef.current;
    container.scrollLeft += scrollSpeed;
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      container.scrollLeft = 0;
    }
    rafId.current = requestAnimationFrame(autoScroll);
  }, [isScrolling]);

  useEffect(() => {
    if (!loading && videoList.length > 0) {
      rafId.current = requestAnimationFrame(autoScroll);
    }
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [loading, videoList, autoScroll]);

  const handleMouseEnter = () => {
    setIsScrolling(true);
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
    if (!loading && videoList.length > 0 && rafId.current === null) {
      rafId.current = requestAnimationFrame(autoScroll);
    }
  };

  const handleVideoMouseEnter = (key: string) => {
    const video = videoRefs.current[key];
    if (video) {
      video.play().catch((err) => console.warn("Autoplay failed:", err));
      setVideoStates((prev) => ({
        ...prev,
        [key]: { ...prev[key], paused: false },
      }));
    }
  };

  const handleVideoMouseLeave = (key: string) => {
    const video = videoRefs.current[key];
    if (video) {
      video.pause();
      video.currentTime = 0;
      setVideoStates((prev) => ({
        ...prev,
        [key]: { ...prev[key], paused: true },
      }));
    }
  };

  const toggleMute = (key: string) => {
    const video = videoRefs.current[key];
    if (video) {
      video.muted = !video.muted;
      setVideoStates((prev) => ({
        ...prev,
        [key]: { ...prev[key], muted: video.muted },
      }));
    }
  };

  const loopedList = [...videoList, ...videoList, ...videoList];

  if (loading) {
    return (
      <section className="w-full py-12 px-4 md:px-6 bg-gray-100 overflow-hidden mb-20 text-center">
        <div className="max-w-screen-xl mx-auto">
          <div className="animate-pulse flex space-x-4 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-48 h-64 flex-shrink-0 rounded-xl bg-gray-200"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (videoList.length === 0) {
    return (
      <section className="w-full py-12 px-4 md:px-6 bg-gray-100 overflow-hidden mb-20 text-center">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-gray-500">No reels found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 px-4 md:px-6 bg-gray-100 overflow-hidden mb-140">
      <div className="max-w-screen-xl mx-auto relative">
        <div className="flex items-center justify-between mb-8 px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Featured Reels
          </h2>
          <a
            href="https://www.instagram.com/epitailo.tileadhesive"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors group"
          >
            Watch More
            <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth gap-4 px-2 touch-pan-x"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {loopedList.map((item, index) => {
              const key = `${item.id}-${index}`;
              return (
                <div
                  key={key}
                  className="w-64 flex-shrink-0 rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[9/16] bg-black relative group">
                    <video
                      ref={(el) => {
                        videoRefs.current[key] = el;
                      }}
                      src={item.url}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loop
                      muted={videoStates[key]?.muted ?? true}
                      playsInline
                      onMouseEnter={() => handleVideoMouseEnter(key)}
                      onMouseLeave={() => handleVideoMouseLeave(key)}
                    />
                    <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        className="bg-black/50 text-white p-1.5 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMute(key);
                        }}
                      >
                        {videoStates[key]?.muted ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
