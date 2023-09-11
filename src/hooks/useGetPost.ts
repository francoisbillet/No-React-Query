import { useEffect, useState } from "react";
import { Post } from "../types/posts";

export function useGetPost(postId: number) {
  const [post, setPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/api/posts/${postId}`)
      .then((res) => res.json())
      .then((post: Post) => setPost(post))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, []);

  return { post, isLoading, error };
}
