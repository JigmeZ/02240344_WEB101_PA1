import Post from "./Post";

const Feed = () => {
  const posts = [
    { username: "Dua Lipa", handle: "dualipa", content: "It’s snowing!! ❄️", imageUrl: "/images/posts/snow-post.jpg", likes: 61_000, comments: 532, shares: 2_800_000 },
    { username: "Elon Musk", handle: "elonmusk", content: "AI is the future.", imageUrl: "/images/posts/ai-post.jpg", likes: 150_000, comments: 2_000, shares: 3_000_000 },
  ];

  return (
    <div className="flex-1 overflow-y-scroll">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default Feed;
