"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Adjust this path based on your project
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface BlogData {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  contentMarkdown: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const fetchBlogs = async () => {
    const snapshot = await getDocs(collection(db, "blogs"));
    const blogsData: BlogData[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<BlogData, "id">),
    }));
    setBlogs(blogsData);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const toggleBlog = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-4xl mx-auto p-6 my-20 mb-5">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Insights</h2>
      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="rounded-lg p-5 border-b transition">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleBlog(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <span className="text-2xl text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              <AnimatePresence initial={false} mode="wait">
                {openIndex === index && (
                  <motion.div
                    key={`accordion-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden mt-4"
                  >
                    <div className="space-y-4 text-gray-700">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        width={800}
                        height={400}
                        className="rounded-md w-full object-cover"
                      />

                      <p className="text-sm text-gray-500">
                        By {blog.author} | {blog.date} | {blog.readTime}
                      </p>

                      <div className="prose max-w-none prose-headings:font-semibold prose-li:marker:text-gray-400">
                        <ReactMarkdown>{blog.contentMarkdown}</ReactMarkdown>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
