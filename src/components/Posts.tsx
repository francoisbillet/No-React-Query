import { Post } from "../types/posts";
import { useGetPosts } from "../hooks/useGetPosts";

interface PostProps {
  changeActivePostId: (postId: number) => void;
}

export function Posts({ changeActivePostId }: PostProps) {
  const { data: posts, isLoading, error } = useGetPosts();

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
          <li key={post.id}>
            <a
              href="#"
              onClick={() => changeActivePostId(post.id)}
              className="underline text-blue-500"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <h2 className="font-bold">Posts </h2>
      {displayPosts()}
    </>
  );
}
