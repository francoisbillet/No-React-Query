import { Post } from "../types/posts";
import { useGetPosts } from "../hooks/useGetPosts";

export function Posts() {
  const { posts, isLoading, error } = useGetPosts();

  function displayPosts() {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error : {error}</div>;
    }
    return (
      <ul>
        {posts?.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }

  return displayPosts();
}
