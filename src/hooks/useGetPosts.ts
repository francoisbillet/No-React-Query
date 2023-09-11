import { Post } from "../types/posts";
import { useQuery } from "./useQuery";

export function useGetPosts() {
  return useQuery<Post[]>(() =>
    fetch("http://localhost:3000/api/posts").then((res) => res.json())
  );
}
