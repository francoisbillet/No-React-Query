import { useDeletePost } from "../hooks/useDeletePost";
import { useGetPost } from "../hooks/useGetPost";
import { useUpdatePost } from "../hooks/useUpdatePost";
import { PostRequest } from "../types/posts";
import { PostForm } from "./PostForm";

interface PostProps {
  activePostId: number;
  changeActivePostId: (postId: number | null) => void;
}

export const Post = ({ activePostId, changeActivePostId }: PostProps) => {
  const { data: post, isLoading, error } = useGetPost(activePostId);
  const {
    updatePost,
    isLoading: isLoadingUpdatePost,
    error: errorUpdatePost,
  } = useUpdatePost(activePostId);
  const {
    deletePost,
    isLoading: isLoadingDeletePost,
    error: errorDeletePost,
  } = useDeletePost();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error : {error}</div>;
  }

  function onSubmit(values: PostRequest) {
    updatePost({ ...values, id: activePostId });
  }

  async function onDelete() {
    await deletePost(activePostId);
    changeActivePostId(null);
  }

  return (
    <>
      <h2 className="font-bold">{post?.title}</h2>
      <p>{post?.content}</p>
      <button onClick={onDelete} className="bg-amber-400 p-1">
        Delete Post
      </button>
      {isLoadingDeletePost && <div>Loading...</div>}
      {errorDeletePost && <div>Error deleting post: {errorDeletePost}</div>}
      <hr className="border-gray-600 my-1" />
      <div>
        <h2 className="font-bold">Edit Post</h2>
        {post && (
          <PostForm
            initialValues={{ title: post.title, content: post.content }}
            onSubmit={onSubmit}
          />
        )}
        {isLoadingUpdatePost && <div>Loading...</div>}
        {errorUpdatePost && <div>Error updating post: {errorUpdatePost}</div>}
      </div>
    </>
  );
};
