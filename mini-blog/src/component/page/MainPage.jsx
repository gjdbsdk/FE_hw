import { useEffect, useState } from "react";
import PostList from "../list/PostList";
import { Link } from "react-router-dom";
import MyBlogName from "../styleComponents/MyBlogName";
import data from "../../db/data.json";
import Button from "../ui/Button";

export default function MainPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data.posts);
  }, []);

  return (
    <div>
      <MyBlogName>
        <Link to="/">나의 미니 블로그</Link>
      </MyBlogName>
      <Link to="/post_write_page">
        <Button>글 작성하기</Button>
      </Link>
      <PostList posts={posts} />
    </div>
  );
}
