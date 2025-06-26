import { useEffect, useState } from "react";
import PostList from "../list/PostList";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../db/data.json";
import Button from "../ui/Button";

const Myblogname = styled.h3`
  display: flex;
  justify-content: center;
`;

export default function MainPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data.posts);
  }, []);

  return (
    <div>
      <Myblogname>
        <Link to="/">나의 미니 블로그</Link>
      </Myblogname>
      <Link to="/post_write_page">
        <Button>글 작성하기</Button>
      </Link>
      <PostList posts={posts} />
    </div>
  );
}
