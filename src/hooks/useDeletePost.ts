import { useState } from "react";
import { useMutation } from "./useMutation";

export function useDeletePost() {
  return useMutation<number>((postId: number) =>
    fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: "DELETE",
    }).then((res) => res.json())
  );
}
