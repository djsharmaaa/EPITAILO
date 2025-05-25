"use client";
import React, { useState } from "react";
import { blogs, BlogItem } from "@/data/Blogs";
import Image from "next/image";

const Blogs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleBlog = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Blogs</h2>
      <div className="space-y-6">
        {blogs.map((blog: BlogItem, index: number) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm p-5 transition hover:shadow-md"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleBlog(index)}
            >
              <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
              <span className="text-2xl text-gray-600">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <div className="mt-4 space-y-4">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  width={800}
                  height={400}
                  className="rounded-lg"
                />

                <div className="text-sm text-gray-500">
                  By <span className="font-medium">{blog.author}</span> •{" "}
                  {new Date(blog.date).toLocaleDateString()} • {blog.readTime}
                </div>

                <p className="text-gray-700">{blog.metaDescription}</p>

                {/* Content Breakdown */}
                <div className="space-y-3 text-gray-800">
                  <h4 className="text-lg font-semibold mt-4">Introduction</h4>
                  <p>{blog.content.introduction}</p>

                  <h4 className="text-lg font-semibold mt-4">Why the Right Adhesive Matters</h4>
                  <ul className="list-disc list-inside">
                    {blog.content.reasons.map((reason, i) => (
                      <li key={i}>{reason}</li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold mt-4">Epitailo’s Adhesive Grades</h4>
                  {blog.content.grades.map((grade, i) => (
                    <div key={i} className="border p-3 rounded-md bg-gray-50 mb-2">
                      <p className="font-bold">{grade.title}</p>
                      <p><strong>Use for:</strong> {grade.useFor}</p>
                      <p><strong>Features:</strong> {grade.features.join(", ")}</p>
                      <p><strong>Coverage:</strong> {grade.coverage}</p>
                    </div>
                  ))}

                  <h4 className="text-lg font-semibold mt-4">Factors to Consider</h4>
                  <ul className="list-disc list-inside">
                    {blog.content.factors.map((factor, i) => (
                      <li key={i}>{factor}</li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold mt-4">Pro Tips</h4>
                  <ul className="list-disc list-inside">
                    {blog.content.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold mt-4">Final Word</h4>
                  <p>{blog.content.conclusion}</p>
                </div>

                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline block mt-4"
                >
                  Read Full Blog ↗
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;