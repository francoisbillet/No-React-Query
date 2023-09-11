import { useEffect, useState } from "react";
import { Post } from "../types/posts";

export function Posts() {
  const [posts, setPosts] = useState<Post[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then((posts: Post[]) => setPosts(posts))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, []);

  function displayPosts() {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error : {error}</div>;
    }
    return (
      <ul>
        {posts?.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }

  return displayPosts();
}
