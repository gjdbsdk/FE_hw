import PostListItem from "../list/PostListItem";
import PostBox from "../styleComponents/PostBox";
import { Link } from "react-router-dom";

export default function PostList({ posts }) {
  if (!Array.isArray(posts)) {
    return <p>게시글이 없습니다.</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <Link to={`/post_view_page/${post.id}`}>
          <PostBox key={post.id}>
            <PostListItem post={post} />
          </PostBox>
        </Link>
      ))}
    </div>
  );
}
