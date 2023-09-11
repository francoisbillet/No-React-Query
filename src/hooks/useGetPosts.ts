import { useState, useEffect } from "react";
import { Post } from "../types/posts";

export function useGetPosts() {
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

  return { posts, isLoading, error };
}
