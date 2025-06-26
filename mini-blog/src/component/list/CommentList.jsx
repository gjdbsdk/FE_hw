import CommentListItem from "./CommentListItem";
import styled from "styled-components";

const Hugger = styled.section`
  margin: 5px;
  border: 2px solid silver;
  padding: 10px;
  border-radius: 10px;
`;
export default function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return <p>아직 댓글이 없습니다.</p>;
  }

  return (
    <div>
      {comments.map((comment) => (
        <Hugger>
          <CommentListItem key={comment.id} comment={comment} />
        </Hugger>
      ))}
    </div>
  );
}
