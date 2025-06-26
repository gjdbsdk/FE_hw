import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Textinput from "../ui/TextInput";
import Button from "../ui/Button";
import ContentInput from "../styleComponents/ContentInput";
import { Link } from "react-router-dom";
import MyBlogName from "../styleComponents/MyBlogName";

export default function PostWritePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading && titleRef.current && contentRef.current) {
      const title = titleRef.current.value;
      const content = contentRef.current.value;

      if (!title || !content) {
        alert("제목과 내용을 모두 입력해주세요.");
        return;
      }
      setIsLoading(true);
      fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("게시글이 등록되었습니다.");
          navigate("/");
          setIsLoading(false);
        } else {
          alert("게시글 등록 실패.");
          setIsLoading(false);
        }
      });
    }
  }
  return (
    <div>
      <MyBlogName>
        <Link to="/">나의 미니 블로그</Link>
      </MyBlogName>

      <form onSubmit={onSubmit}>
        <Textinput placeholder="제목을 입력하세요." ref={titleRef}></Textinput>
        <ContentInput
          placeholder="내용을 입력하세요."
          ref={contentRef}
        ></ContentInput>
        <Button style={{ opacity: isLoading ? 0.3 : 1 }}>
          {isLoading ? "작성 중..." : "작성 완료"}
        </Button>
      </form>
    </div>
  );
}
