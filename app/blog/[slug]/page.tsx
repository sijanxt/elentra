import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/lib/blogs";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Find related articles (excluding the current one)
  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#fcfbfa] pt-32 pb-24 text-secondary">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Back Button */}
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-montserrat uppercase tracking-[0.2em] text-zinc-400 hover:text-cream-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-6 mb-12 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="text-xs font-semibold font-montserrat uppercase tracking-[0.25em] text-cream-600">
              {blog.tag}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 font-cormorant italic leading-tight tracking-wide">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-zinc-400 font-montserrat pt-2">
            <span className="flex items-center gap-1.5 font-light">
              <Calendar className="w-3.5 h-3.5" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5 font-light">
              <Clock className="w-3.5 h-3.5" />
              {blog.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="bg-zinc-50 rounded-[2rem] overflow-hidden border border-cream-200/60 aspect-[16/9] relative mb-16 shadow-[0_12px_40px_rgba(0,0,0,0.015)]">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Article Body Content */}
        <article className="prose max-w-none mb-20 font-lora">
          <div className="space-y-8 text-base sm:text-lg text-zinc-700 leading-relaxed font-light">
            {blog.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        {/* Author Bio */}
        <div className="bg-white rounded-3xl p-8 border border-cream-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col sm:flex-row items-center gap-6 mb-24">
          <div className="w-16 h-16 rounded-full bg-zinc-100 overflow-hidden relative shrink-0 border border-zinc-200">
            <Image
              src={blog.author.avatar}
              alt={blog.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center sm:text-left space-y-1">
            <span className="text-[10px] font-bold text-zinc-400 font-montserrat uppercase tracking-wider block">
              Written By
            </span>
            <h4 className="text-lg font-montserrat font-semibold text-zinc-800">
              {blog.author.name}
            </h4>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              {blog.author.name} serves as Elentra's {blog.author.role}, steering our dedication to luxury architecture and high-performance engineering.
            </p>
          </div>
        </div>

        {/* Related Articles Footer */}
        {relatedBlogs.length > 0 && (
          <div className="border-t border-zinc-200/80 pt-16 mt-16">
            <h3 className="text-xs font-montserrat font-bold text-zinc-400 uppercase tracking-widest mb-10 text-center">
              Continue Reading
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((relBlog) => (
                <div key={relBlog.slug} className="group flex flex-col justify-between border border-cream-200/50 rounded-3xl p-6 bg-white hover:shadow-xs transition-all">
                  <div>
                    <div className="bg-zinc-50 rounded-2xl overflow-hidden aspect-[16/10] relative mb-6">
                      <Link href={`/blog/${relBlog.slug}`} className="block w-full h-full">
                        <Image
                          src={relBlog.image}
                          alt={relBlog.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-103"
                          unoptimized
                        />
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <span className="text-[10px] font-montserrat font-bold text-cream-600 uppercase tracking-widest block">
                        {relBlog.tag}
                      </span>
                      <h4 className="text-xl font-cormorant font-light text-zinc-900 tracking-wide line-clamp-2 hover:text-cream-600 transition-colors">
                        <Link href={`/blog/${relBlog.slug}`}>
                          {relBlog.title}
                        </Link>
                      </h4>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-400 font-light font-montserrat">{relBlog.date}</span>
                    <Link
                      href={`/blog/${relBlog.slug}`}
                      className="flex items-center gap-1 text-[10px] font-montserrat font-bold uppercase tracking-widest text-cream-600 hover:text-cream-800 transition-colors"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
