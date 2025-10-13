import React from "react";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

export default function BlogDetailPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/aboutProperties.jpg"
          alt="Dubai Blog Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            The Future of Real Estate in{" "}
            <span className="text-[#c19b2f]">Dubai’s Business Bay</span>
          </h1>
          <div className="flex justify-center gap-4 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} /> August 22, 2025
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <User size={16} /> Rohit Verma
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Business Bay, one of Dubai’s most vibrant neighborhoods, is rapidly
            transforming into a futuristic urban hub that blends luxury
            residential spaces with world-class commercial infrastructure. With
            its prime location near Downtown Dubai and continuous government
            investment, the area is poised to become the city’s central business
            and lifestyle district by 2030.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            A Skyline That Defines Modern Dubai
          </h2>
          <p className="mb-6">
            The skyline of Business Bay features some of Dubai’s most stunning
            architectural marvels. From the twisting designs of luxury
            high-rises to the waterfront promenades along the Dubai Canal,
            residents experience a blend of elegance and innovation that defines
            the city’s future vision.
          </p>

          <Image
            src="https://images.unsplash.com/photo-1664190053321-4ef213299eec?auto=format&fit=crop&w=1200&q=80"
            alt="Business Bay Dubai"
            width={1200}
            height={0}
            className="rounded-2xl shadow-lg my-10 w-full object-cover"
            style={{height:"300px"}}
          />

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Investment Opportunities and Growth
          </h2>
          <p className="mb-6">
            Investors are increasingly drawn to Business Bay for its high rental
            yields and proximity to major landmarks such as the Burj Khalifa and
            Dubai Mall. With the expansion of green spaces, smart homes, and
            sustainable building initiatives, the area offers excellent
            long-term potential for both residential and commercial investors.
          </p>

          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 my-8">
            “Business Bay represents Dubai’s evolution into a global hub of
            innovation and luxury living — a district where the future is being
            built today.”
          </blockquote>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Lifestyle and Connectivity
          </h2>
          <p>
            With easy access to Sheikh Zayed Road, Dubai Metro, and the
            waterfront, residents enjoy seamless connectivity. The neighborhood
            offers fine dining, luxury retail, and cultural experiences — making
            it a top destination for professionals and families alike.
          </p>
        </article>

        {/* Author Box */}
        <div className="mt-16 bg-white shadow-md rounded-2xl p-8 flex items-center gap-6">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Author"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-1">
              Rohit Verma
            </h4>
            <p className="text-gray-600 text-sm mb-2">
              Real Estate Analyst & Dubai Property Specialist
            </p>
            <p className="text-gray-500 text-sm">
              Rohit has over 10 years of experience in Dubai’s property market,
              providing expert insights on luxury investments and upcoming
              developments.
            </p>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Top 10 Luxury Properties in Downtown Dubai",
                img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Why Dubai Marina is the Best Place to Invest in 2025",
                img: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Palm Jumeirah Villas: The Epitome of Coastal Luxury",
                img: "https://images.unsplash.com/photo-1580738315017-ba3bf13e31a3?auto=format&fit=crop&w=800&q=80",
              },
            ].map((post, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                <div className="relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition mb-1">
                    {post.title}
                  </h4>
                  <button className="text-blue-700 text-sm font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
