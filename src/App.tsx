import { useState } from "react";
import { Posts } from "./components/Posts";
import { Post } from "./components/Post";

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
      </div>
      <hr className="border-gray-600 my-1" />
      <main>
        {!activePostId ? (
          <Posts changeActivePostId={setActivePostId} />
        ) : (
          <Post activePostId={activePostId} />
        )}
      </main>
    </div>
  );
}

export default App;
