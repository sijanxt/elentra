"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/page-hero";
import { blogs, BlogPost } from "@/lib/blogs";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export default function BlogIndexPage() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  // Get all unique tags for filter tabs
  const tags = ["All", ...Array.from(new Set(blogs.map((b) => b.tag)))];

  // Filtered blog list
  const filteredBlogs = selectedTag === "All" 
    ? blogs 
    : blogs.filter((b) => b.tag === selectedTag);

  // Take the first blog as the featured one
  const featuredBlog = blogs[0];
  // Other blogs for grid
  const gridBlogs = blogs.slice(1);

  return (
    <div className="min-h-screen bg-white text-secondary">
      {/* Hero Section */}
      <PageHero
        title="Journal & Insights"
        description="Exploring the intersection of modern architecture, timeless design, and premium engineering for contemporary living spaces."
        bgImage="/hero/about_hero.png"
        bgOpacity={0.4}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tag Filter Tabs */}
          <div className="flex justify-center border-b border-zinc-200 pb-4 mb-16 gap-6 sm:gap-10 overflow-x-auto">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`pb-2 text-sm font-montserrat uppercase tracking-wider transition-all relative whitespace-nowrap ${
                  selectedTag === tag
                    ? "text-zinc-950 font-bold font-semibold"
                    : "text-zinc-400 font-light hover:text-zinc-600"
                }`}
              >
                {tag}
                {selectedTag === tag && (
                  <motion.div
                    layoutId="activeBlogTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cream-500"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Render layout based on filter */}
          {selectedTag === "All" ? (
            <div className="space-y-20">
              {/* Featured Section */}
              {featuredBlog && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Left: Image (7 columns) */}
                  <div className="lg:col-span-7 bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-200 aspect-[16/10] relative group">
                    <Link href={`/blog/${featuredBlog.slug}`} className="block w-full h-full">
                      <Image
                        src={featuredBlog.image}
                        alt={featuredBlog.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-103"
                        priority
                        unoptimized
                      />
                    </Link>
                  </div>

                  {/* Right: Info (5 columns) */}
                  <div className="lg:col-span-5 space-y-6">
                    <span className="text-xs font-montserrat font-bold text-cream-600 uppercase tracking-widest block">
                      Featured Reading • {featuredBlog.tag}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-cormorant font-light text-zinc-900 tracking-wide leading-tight group-hover:text-cream-600 transition-colors">
                      <Link href={`/blog/${featuredBlog.slug}`}>
                        {featuredBlog.title}
                      </Link>
                    </h2>
                    <p className="text-zinc-500 font-light leading-relaxed">
                      {featuredBlog.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-xs text-zinc-400 font-montserrat pt-2">
                      <span className="flex items-center gap-1.5 font-light">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredBlog.date}
                      </span>
                      <span className="flex items-center gap-1.5 font-light">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredBlog.readTime}
                      </span>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-zinc-100 overflow-hidden relative border border-zinc-200">
                          <Image
                            src={featuredBlog.author.avatar}
                            alt={featuredBlog.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-zinc-800">{featuredBlog.author.name}</div>
                          <div className="text-[10px] text-zinc-400 font-light">{featuredBlog.author.role}</div>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${featuredBlog.slug}`}
                        className="flex items-center gap-1 text-xs font-montserrat font-bold uppercase tracking-widest text-cream-600 hover:text-cream-800 transition-colors"
                      >
                        Read Post <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Grid Section for remaining articles */}
              {gridBlogs.length > 0 && (
                <div className="border-t border-zinc-100 pt-20">
                  <h3 className="text-xs font-montserrat font-bold text-zinc-400 uppercase tracking-widest mb-10">
                    More Articles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {gridBlogs.map((blog, index) => (
                      <motion.div
                        key={blog.slug}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="group flex flex-col justify-between"
                      >
                        <div>
                          {/* Image */}
                          <div className="bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200 aspect-[16/10] relative mb-6">
                            <Link href={`/blog/${blog.slug}`} className="block w-full h-full">
                              <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-103"
                                unoptimized
                              />
                            </Link>
                          </div>

                          <div className="space-y-3">
                            <span className="text-[10px] font-montserrat font-bold text-cream-600 uppercase tracking-widest block">
                              {blog.tag}
                            </span>
                            <h4 className="text-2xl font-cormorant font-light text-zinc-900 tracking-wide line-clamp-2 hover:text-cream-600 transition-colors">
                              <Link href={`/blog/${blog.slug}`}>
                                {blog.title}
                              </Link>
                            </h4>
                            <p className="text-zinc-500 text-sm font-light leading-relaxed line-clamp-2">
                              {blog.excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between">
                          <div className="flex items-center gap-4 text-[11px] text-zinc-400 font-montserrat">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {blog.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {blog.readTime}
                            </span>
                          </div>

                          <Link
                            href={`/blog/${blog.slug}`}
                            className="flex items-center gap-1 text-[11px] font-montserrat font-bold uppercase tracking-widest text-cream-600 hover:text-cream-800 transition-colors"
                          >
                            Read <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Layout for filter selection (Flat Grid) */
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTag}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredBlogs.map((blog) => (
                  <div key={blog.slug} className="group flex flex-col justify-between border border-zinc-200/60 rounded-3xl p-6 hover:shadow-xs transition-all bg-zinc-50/20">
                    <div>
                      {/* Image */}
                      <div className="bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200/80 aspect-[16/10] relative mb-6">
                        <Link href={`/blog/${blog.slug}`} className="block w-full h-full">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-103"
                            unoptimized
                          />
                        </Link>
                      </div>

                      <div className="space-y-3">
                        <span className="text-[10px] font-montserrat font-bold text-cream-600 uppercase tracking-widest block">
                          {blog.tag}
                        </span>
                        <h4 className="text-2xl font-cormorant font-light text-zinc-900 tracking-wide line-clamp-2 hover:text-cream-600 transition-colors">
                          <Link href={`/blog/${blog.slug}`}>
                            {blog.title}
                          </Link>
                        </h4>
                        <p className="text-zinc-500 text-sm font-light leading-relaxed line-clamp-2">
                          {blog.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-[11px] text-zinc-400 font-montserrat">
                        <span>{blog.date}</span>
                        <span>{blog.readTime}</span>
                      </div>

                      <Link
                        href={`/blog/${blog.slug}`}
                        className="flex items-center gap-1 text-[11px] font-montserrat font-bold uppercase tracking-widest text-cream-600 hover:text-cream-800 transition-colors"
                      >
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

        </div>
      </section>
    </div>
  );
}
