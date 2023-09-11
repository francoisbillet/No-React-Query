import { useState } from "react";
import { Post } from "../types/posts";

export function useUpdatePost(postId: number) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  function updatePost(updatedPost: Post) {
    setIsLoading(true);
    fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }

  return { updatePost, isLoading, error };
}
