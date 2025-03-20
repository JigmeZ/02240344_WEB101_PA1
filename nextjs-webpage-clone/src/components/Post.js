import Image from "next/image";
import { useState } from "react";

const Post = ({ 
  username, 
  handle, 
  content, 
  imageUrl, 
  likes, 
  comments, 
  shares 
}) => {
  const [isVideoMuted] = useState(true);

  return (
    <div 
      className="relative h-screen snap-start border-b border-gray-700 p-4"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Profile Section with Adjusted Margins */}
      <div className="absolute top-6 left-6 z-20 flex items-center space-x-4 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
        <div className="relative">
          <Image 
            src={`/images/profiles/${handle}.png`}
            alt="Profile" 
            width={48}
            height={48}
            className="rounded-full border-2 border-blue-500"
            onError={(e) => {
              e.target.src = '/images/profiles/default.png';
            }}
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-black"></div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-white text-lg tracking-tight">
            {username}
          </p>
          <p className="text-gray-300 text-sm font-medium">
            @{handle}
          </p>
        </div>
      </div>

      {/* Content Area with Margin Adjustments */}
      <div className="h-full flex flex-col justify-center pt-20 mx-4">
        <p className="text-white text-2xl mb-6 font-medium">{content}</p>
        
        {imageUrl && (
          <div className="relative w-full h-[65vh]">
            <Image
              src={`/images/posts/${imageUrl}`}
              alt="Post content"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-xl"
              priority
            />
          </div>
        )}
      </div>

      {/* Engagement Metrics with Right Margin */}
      <div className="absolute bottom-24 right-6 space-y-5 text-white z-20">
        <div className="flex flex-col items-center space-y-1">
          <button className="p-2 hover:bg-white/10 rounded-full transition-all">
            <span className="text-2xl">❤️</span>
          </button>
          <span className="text-xs font-medium">{likes.toLocaleString()}</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <button className="p-2 hover:bg-white/10 rounded-full transition-all">
            <span className="text-2xl">💬</span>
          </button>
          <span className="text-xs font-medium">{comments.toLocaleString()}</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <button className="p-2 hover:bg-white/10 rounded-full transition-all">
            <span className="text-2xl">🔄</span>
          </button>
          <span className="text-xs font-medium">{shares.toLocaleString()}</span>
        </div>
      </div>

      {/* Centered Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {[1, 2, 3].map((_, i) => (
          <div 
            key={i}
            className="h-1 w-8 bg-gray-600 rounded-full transition-all"
            style={{ 
              width: i === 0 ? '32px' : '8px',
              backgroundColor: i === 0 ? 'white' : '#4B5563' 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const PostsContainer = () => {
  const posts = [
    { 
      username: "Dua Lipa", 
      handle: "dualipa", 
      content: "It’s snowing!! ❄️", 
      imageUrl: "snow-post.jpg",
      likes: 61_000, 
      comments: 532, 
      shares: 2_800_000 
    },
    { 
      username: "Elon Musk", 
      handle: "elonmusk", 
      content: "AI is the future.", 
      imageUrl: "ai-post.jpg",
      likes: 150_000, 
      comments: 2_000, 
      shares: 3_000_000 
    }
  ];

  return (
    <div className="overflow-y-scroll snap-y snap-mandatory h-screen">
      {posts.map((post) => (
        <Post
          key={post.handle}
          username={post.username}
          handle={post.handle}
          content={post.content}
          imageUrl={post.imageUrl}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
        />
      ))}
    </div>
  );
};

export default Post;