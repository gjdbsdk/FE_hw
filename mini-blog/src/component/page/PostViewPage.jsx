import { useParams, useNavigate, Link } from "react-router-dom";
import Hugger from "../styleComponents/Hugger";
import Back from "../styleComponents/Back";
import Title from "../styleComponents/Title";

import CommentList from "../list/CommentList";
import { useEffect, useState } from "react";
import Textinput from "../ui/TextInput";
import Button from "../ui/Button";

export default function PostViewPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("글 없음");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setComments(data.comments || []);
      })
      .catch(() => {
        alert("해당 글을 찾을 수 없습니다.");
        navigate("/");
      });
  }, [id, navigate]);

  if (!post) {
    return <p>로딩 중 ...</p>;
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
