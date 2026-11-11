import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import { newsPosts } from '../../data/news';

export default function NewsDetails() {
  const { id } = useParams();
  const post = newsPosts.find((p) => p.id === id) || newsPosts[0];

  return (
    <div className="min-h-screen font-lato">
      {/* Header with image banner that also fills the navbar background */}
      <div className="relative news-hero">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[260px] md:h-[360px] lg:h-[620px] object-cover"
        />
        <div className="absolute z-50" />
        {/* Navbar over the banner */}
        <div className="absolute top-0 left-0 right-0">
          <div className="w-full px-2 lg:px-24 pt-12">
            <Navbar />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center">
            NEWS
          </h1>
        </div>
      </div>

      {/* Article body */}
      <div className="aboutus px-4 lg:px-24 py-12">
        <div className="max-w-3xl mx-auto bg-black/20 rounded-xl p-6 md:p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            {post.title}
          </h2>
          <div className="text-sm text-white/80 mb-8">
            {post.date} • {post.time}
          </div>
          {post.content.map((p, idx) => (
            <p key={idx} className="text-base md:text-lg leading-8 mb-6">
              {p}
            </p>
          ))}

          {/* Comment form (dummy) */}
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4">Leave a comment</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="bg-transparent border border-white/30 rounded-md p-3 outline-none placeholder-white/60"
              />
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border border-white/30 rounded-md p-3 outline-none placeholder-white/60"
              />
              <div className="md:col-span-2">
                <textarea
                  rows="5"
                  placeholder="Write your comment..."
                  className="w-full bg-transparent border border-white/30 rounded-md p-3 outline-none placeholder-white/60"
                />
              </div>
              <div className="md:col-span-2 flex justify-start">
                <button
                  type="button"
                  className="text-[#4B0082] bg-white px-6 py-3 rounded-md font-medium cursor-pointer transition-colors"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Link to list grid */}
        <div className="max-w-5xl justify-center flex mx-auto mt-12">
          <Link
            to="/news"
            className="inline-block bg-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-colors"
          >
            View More News
          </Link>
        </div>
      </div>
    </div>
  );
}
