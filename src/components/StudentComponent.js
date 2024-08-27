import styled from "styled-components";
import Logo from "../assets/CMD_logo 4.png";
import { Link } from "react-router-dom";

const Student = () => {
  return (
    <Link to="/seemore">
      <Button>
        <Set>
          <Log src={Logo}></Log>
          <Name>
            <b>1218 김이름</b>
          </Name>
        </Set>
      </Button>
    </Link>
  );
};

const Log = styled.img`
  width: 28%;
`;

const Name = styled.text`
  color: #232323;
  font-size: 23px;
`;

const Set = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  gap: 6px;
`;
const Set1 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  color: #a3a3a3;
  background-color: linear-gradient(180deg, rgba(17, 17, 17, 0.07) 0.28%, rgba(17, 17, 17, 0.07) 100%);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export default Student;
