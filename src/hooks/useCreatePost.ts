import { useState } from "react";
import { PostRequest } from "../types/posts";

export function useCreatePost() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  function createPost(newPost: PostRequest) {
    setIsLoading(true);
    fetch("http://localhost:3000/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }

  return { createPost, isLoading, error };
}
