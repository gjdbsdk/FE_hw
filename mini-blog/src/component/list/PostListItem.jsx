import { Link } from "react-router-dom";

export default function PostListItem({ post }) {
  return (
    <div>
      <Link to={`/post_view_page/${post.id}`}>
        <h4>{post.title}</h4>
      </Link>
    </div>
  );
}
