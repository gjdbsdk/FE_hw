import { Link } from "react-router-dom";
import styled from "styled-components";

const Headerclass = styled.section`
  position: relative;
`;
const HeaderMenu = styled.section`
  display: flex;
  position: absolute;
  top: 10px;
  right: 0;
`;
const HeaderLink = styled.section`
  border: 1px solid #333;
  padding: 10px;
  margin-left: 10px;
  background-color: #efefef;
  font-weight: bold;
  border-radius: 4px;
`;

function Header() {
  return (
    <Headerclass>
      <h1>
        <Link to="/">영어 단어장 만들기</Link>
      </h1>
      <HeaderMenu>
        <HeaderLink>
          <Link to="/create_word">단어 추가</Link>
        </HeaderLink>
        <HeaderLink>
          <Link to="/create_day">Day 추가</Link>
        </HeaderLink>
      </HeaderMenu>
    </Headerclass>
  );
}
export default Header;
