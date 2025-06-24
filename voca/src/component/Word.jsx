import { useState } from "react";
import styled from "styled-components";

const TableTd = styled.td`
  width: 25%;
  height: 70px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 26px;
`;

const TableFirstTd = styled.td`
  height: 70px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 26px;
  width: 10%;
`;

const DeleteButton = styled.button`
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  border: 0 none;
  border-radius: 6px;
  padding: 10px 20px;
  color: #fff;
  background-color: dodgerblue;
  margin-left: 10px;
  color: #fff;
  background-color: firebrick;
`;
const Buttons = styled.button`
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  border: 0 none;
  border-radius: 6px;
  padding: 10px 20px;
  color: #fff;
  background-color: dodgerblue;
`;

const StyledTr = styled.tr`
  &.off {
    background: #eee;
    color: #ccc;
  }
`;

function Word({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }
  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({
            ...word,
            id: 0,
          });
        }
      });
    }
  }

  if (word.id === 0) return null;

  return (
    <StyledTr className={isDone ? "off" : ""}>
      <TableFirstTd>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </TableFirstTd>
      <TableTd>{word.eng}</TableTd>
      <TableTd>{isShow && word.kor}</TableTd>
      <TableTd>
        <Buttons onClick={toggleShow}>
          {isShow ? "뜻 숨기기" : "뜻 보기"}
        </Buttons>
        <DeleteButton onClick={del}>삭제</DeleteButton>
      </TableTd>
    </StyledTr>
  );
}
export default Word;
