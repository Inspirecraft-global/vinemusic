import React from 'react';
import { newsPosts } from '../../data/news';
import { Link } from 'react-router-dom';

export default function NewsGrid() {
  return (
    <div className="aboutus px-4 lg:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsPosts.map((post) => (
          <Link
            key={post.id}
            to={`/news/${post.id}`}
            className="relative rounded-lg overflow-hidden block group"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[240px] md:h-[280px] lg:h-[320px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <h3 className="font-semibold text-lg md:text-xl leading-snug">
                {post.title}
              </h3>
              <div className="text-xs md:text-sm text-white/80 mt-2">
                {post.date} • {post.time}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


