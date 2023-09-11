import { useGetPost } from "../hooks/useGetPost";

interface PostProps {
  activePostId: number;
}

export const Post = ({ activePostId }: PostProps) => {
  const { data: post, isLoading, error } = useGetPost(activePostId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <>
      <h2 className="font-bold">{post?.title}</h2>
      <p>{post?.content}</p>
    </>
  );
};
