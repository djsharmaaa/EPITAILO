"use client";
import React, { useState } from "react";
import { blogs, BlogItem } from "@/data/Blogs";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Blogs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleBlog = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-4xl mx-auto p-6 my-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Blogs</h2>
      <div className="space-y-6">
        {blogs.map((blog: BlogItem, index: number) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="border rounded-lg shadow-sm p-5 transition hover:shadow-md">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleBlog(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
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

                      <p className="text-base">{blog.content.introduction}</p>

                      {blog.content.reasons && (
                        <div>
                          <h4 className="font-semibold mt-4">Why its important:</h4>
                          <ul className="list-disc pl-5">
                            {blog.content.reasons.map((reason, i) => (
                              <li key={i}>{reason}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {blog.content.grades && (
                        <div>
                          <h4 className="font-semibold mt-4">Product Grades:</h4>
                          {blog.content.grades.map((grade, i) => (
                            <div key={i} className="border p-3 rounded mb-3 bg-gray-50">
                              <h5 className="font-semibold">{grade.title}</h5>
                              <p><strong>Use For:</strong> {grade.useFor}</p>
                              <p><strong>Coverage:</strong> {grade.coverage}</p>
                              <ul className="list-disc pl-5">
                                {grade.features.map((f, j) => (
                                  <li key={j}>{f}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {blog.content.factors && (
                        <div>
                          <h4 className="font-semibold mt-4">Key Selection Factors:</h4>
                          <ul className="list-disc pl-5">
                            {blog.content.factors.map((factor, i) => (
                              <li key={i}>{factor}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {blog.content.tips && (
                        <div>
                          <h4 className="font-semibold mt-4">Tips:</h4>
                          <ul className="list-disc pl-5">
                            {blog.content.tips.map((tip, i) => (
                              <li key={i}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <p className="mt-4 font-medium text-green-700">
                        {blog.content.conclusion}
                      </p>
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
