import styled from "styled-components";

import Student from "../components/StudentComponent";
function STDInfo() {
  return (
    <Main>
      <Ul>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
      </Ul>
      <Ul>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
      </Ul>
      <Ul>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
        <li>
          <Student />
        </li>
      </Ul>
    </Main>
  );
}

const Ul = styled.ul`
  margin-top: 7%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Main = styled.div`
  background: linear-gradient(180deg, rgba(17, 17, 17, 0.07) 0.28%, rgba(17, 17, 17, 0.07) 100%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

// const Navigation = styled.nav`
//   height: 164px;
//   flex-shrink: 0;
//   margin-top: 200px;
//   background-color: #404040;
// `;

export default STDInfo;
