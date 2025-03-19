const Widget = () => {
    return (
      <div className="p-4 w-[300px] bg-black text-white">
        <h2 className="text-lg font-bold">Who to follow</h2>
        <div className="mt-3 space-y-3">
          <FollowSuggestion username="PhotoshopExpert" handle="PHOTOSHOPTWITCH" />
          <FollowSuggestion username="Business Bhutan" handle="business_bhutan" />
        </div>
      </div>
    );
  };
  
  const FollowSuggestion = ({ username, handle }) => (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-bold">{username}</p>
        <p className="text-gray-400">@{handle}</p>
      </div>
      <button className="bg-blue-500 px-4 py-1 text-white rounded-full">Follow</button>
    </div>
  );
  
  export default Widget;
  