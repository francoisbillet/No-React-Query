import { useState } from "react";

export function useDeletePost() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  async function deletePost(postId: number) {
    setIsLoading(true);
    return new Promise((resolve, reject) =>
      fetch(`http://localhost:3000/api/posts/${postId}`, {
        method: "DELETE",
      })
        .then((res) => resolve(res.json()))
        .catch((error) => {
          setError(error);
          reject();
        })
        .finally(() => setIsLoading(false))
    );
  }

  return { deletePost, isLoading, error };
}
