import { useState } from "react";
import { PostRequest } from "../types/posts";
import { useMutation } from "./useMutation";

export function useCreatePost() {
  return useMutation<PostRequest>((newPost: PostRequest) =>
    fetch("http://localhost:3000/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then((res) => res.json())
  );
}
