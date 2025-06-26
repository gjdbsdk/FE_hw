import CommentListItem from "./CommentListItem";
import Hugger from "../styleComponents/Hugger";

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
