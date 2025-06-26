import { useParams } from "react-router-dom";
import data from "../../db/data.json";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import { useState } from "react";
import Textinput from "../ui/TextInput";
import Button from "../ui/Button";

const Back = styled.button`
  display: flex;
  justify-content: center;
  width: 100px;
  background: silver;
  border-radius: 10px;
  padding: 10px;
  margin-left: 10px;
  margin-top: 10px;
  border: none;
`;

const Hugger = styled.section`
  margin: 5px;
  border: 2px solid silver;
  padding: 10px;
  border-radius: 10px;
`;
const Title = styled.h2`
  padding: 10px;
`;
export default function PostViewPage() {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const post = data.posts.find((p) => p.id === postId);

  const [comments, setComments] = useState(post?.comments || []);
  const [newComment, setNewComment] = useState("");

  if (!data.posts) {
    return <p>해당 글을 찾을 수 없습니다.</p>;
  }

  const addComment = () => {
    if (newComment.trim() === "") return;

    const newId =
      comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
    const commentsAdded = {
      id: newId,
      content: newComment,
    };
    setComments([...comments, commentsAdded]);
    setNewComment("");
  };

  return (
    <div>
      <Link to="/">
        <Back>뒤로 가기</Back>
      </Link>
      <Hugger>
        <Title>{post.title}</Title>
        <p>{post.content}</p>
      </Hugger>
      <h3>댓글</h3>
      <CommentList comments={comments} />
      <Textinput
        placeholder="댓글을 입력하세요. "
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></Textinput>

      <Button onClick={addComment}>댓글 작성하기</Button>
    </div>
  );
}
