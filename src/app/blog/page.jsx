
import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const blogs = [
    {
      title: "Top 10 Luxury Properties in Downtown Dubai",
      date: "September 25, 2025",
      author: "Manvi Sharma",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
      description:
        "Explore the most prestigious apartments and penthouses in the heart of Downtown Dubai, offering skyline views and unmatched luxury.",
    },
    {
      title: "Why Dubai Marina is the Best Place to Invest in 2025",
      date: "October 3, 2025",
      author: "Aarav Patel",
      image:
        "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1000&q=80",
      description:
        "Dubai Marina continues to attract investors with high ROI, vibrant lifestyle, and modern waterfront living. Here’s why it’s a smart choice.",
    },
    {
      title: "Palm Jumeirah Villas: The Epitome of Coastal Luxury",
      date: "September 15, 2025",
      author: "Sara Khan",
      image:
        "https://images.unsplash.com/photo-1580738315017-ba3bf13e31a3?auto=format&fit=crop&w=1000&q=80",
      description:
        "From private beaches to infinity pools, Palm Jumeirah villas redefine modern luxury. Discover the top villas available this season.",
    },
    {
      title: "The Future of Real Estate in Dubai’s Business Bay",
      date: "August 22, 2025",
      author: "Rohit Verma",
      image:
        "https://images.unsplash.com/photo-1664190053321-4ef213299eec?auto=format&fit=crop&w=1000&q=80",
      description:
        "Business Bay’s skyline continues to evolve with futuristic architecture and smart residential spaces ideal for professionals.",
    },
  ];

  return (
    <>
      <section>
        <Image
          src="/aboutProperties.jpg"
          alt="About Dubai Properties"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "70vh", objectFit: "cover" }}
        />
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Latest Insights from{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Dubai Real Estate
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with expert insights, investment tips, and luxury
              market trends from the Dubai property landscape.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3 gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {blog.date}
                    </div>
                    <span>•</span>
                    <span>{blog.author}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {blog.description}
                  </p>

                    <Link href={"/blog-detail"} > 
                  <button className="flex items-center text-blue-700 font-semibold text-sm hover:underline" style={{cursor:"pointer"}}>
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Stay Ahead in Dubai’s Real Estate Market
              </h3>
              <p className="text-white/80">
                Subscribe to our newsletter to get the latest property insights,
                trends, and investment updates delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-white rounded-lg w-64 text-gray-800 focus:outline-none"
              />
              <button className="bg-white text-blue-700 font-semibold px-5 py-3 rounded-lg shadow hover:bg-slate-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
