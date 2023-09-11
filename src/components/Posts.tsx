import { Post, PostRequest } from "../types/posts";
import { useGetPosts } from "../hooks/useGetPosts";
import { PostForm } from "./PostForm";
import { useCreatePost } from "../hooks/useCreatePost";

interface PostProps {
  changeActivePostId: (postId: number) => void;
}

export function Posts({ changeActivePostId }: PostProps) {
  const { data: posts, isLoading, error } = useGetPosts();
  const {
    createPost,
    isLoading: isLoadingCreatePost,
    error: errorCreatePost,
  } = useCreatePost();

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

  function onSubmit(values: PostRequest) {
    createPost(values);
  }

  return (
    <>
      <h2 className="font-bold">Posts </h2>
      {displayPosts()}
      <hr className="border-gray-600 my-1" />
      <div>
        <h2 className="font-bold">Add Post</h2>
        <PostForm onSubmit={onSubmit} />
        {isLoadingCreatePost && <div>Loading...</div>}
        {errorCreatePost && <div>Error creating post: {errorCreatePost}</div>}
      </div>
    </>
  );
}
