import { useState } from "react";
import { Posts } from "./components/Posts";
import { Post } from "./components/Post";
import { useGetPosts } from "./hooks/useGetPosts";

function App() {
  const [activePostId, setActivePostId] = useState<number | null>(null);

  return (
    <div className="p-2">
      <div className="flex gap-2">
        <a
          href="#"
          onClick={() => setActivePostId(null)}
          className="underline text-blue-500"
        >
          All posts
        </a>
        <Stats />
      </div>
      <hr className="border-gray-600 my-1" />
      <main>
        {!activePostId ? (
          <Posts changeActivePostId={setActivePostId} />
        ) : (
          <Post
            activePostId={activePostId}
            changeActivePostId={setActivePostId}
          />
        )}
      </main>
    </div>
  );
}

function Stats() {
  const { data: posts, isLoading, error } = useGetPosts();

  function displayTotalPosts() {
    if (isLoading) {
      return "...";
    }
    return posts?.length;
  }

  return (
    <>
      <p>Total Posts : {displayTotalPosts()}</p>
      {error && <div>Error: {error}</div>}
    </>
  );
}

export default App;
