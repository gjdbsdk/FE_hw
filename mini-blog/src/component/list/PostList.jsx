import PostListItem from "../list/PostListItem";
import styled from "styled-components";

const PostBox = styled.section`
  margin: 5px;
  border: 2px solid silver;
  padding: 10px;
  border-radius: 10px;
`;

export default function PostList({ posts }) {
  if (!Array.isArray(posts)) {
    return <p>게시글이 없습니다.</p>; // 혹은 로딩 상태 등
  }

  return (
    <div>
      {posts.map((post) => (
        <PostBox key={post.id}>
          <PostListItem post={post} />
        </PostBox>
      ))}
    </div>
  );
}
