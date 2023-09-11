import { Post } from "../types/posts";
import { useQuery } from "./useQuery";

export function useGetPost(postId: number) {
  return useQuery<Post>(() =>
    fetch(`http://localhost:3000/api/posts/${postId}`).then((res) => res.json())
  );
}
