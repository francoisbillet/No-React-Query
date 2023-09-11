import { Post } from "../types/posts";
import { useMutation } from "./useMutation";

export function useUpdatePost(postId: number) {
  return useMutation<Post>((updatedPost: Post) =>
    fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    }).then((res) => res.json())
  );
}
