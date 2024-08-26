import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/CMD_logo 4.png";

function STDInfo() {
  return (
    <>
      {/* <Navigation>
        <Link to="/timetable">
          <button>시간표</button>
        </Link>
        <Link to="/noticeBoard">
          <button>게시판</button>
        </Link>
        <Link to="/studentinform">
          <button>학생정보</button>
        </Link>
      </Navigation> */}
      <Main>
        <Ul>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
        </Ul>
        <Ul>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
        </Ul>
        <Ul>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
          <li>
            <Set>
              <Log src={Logo}></Log>
              <Set1>
                <Name>
                  <b>1218 김이름</b>
                </Name>
                <Button>더보기</Button>
              </Set1>
            </Set>
          </li>
        </Ul>
      </Main>
    </>
  );
}

const Ul = styled.ul`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

const Name = styled.text`
  color: #232323;
  font-size: 23px;
`;

const Log = styled.img`
  width: 28%;
`;

const Set = styled.div`
  width: 300px;

  transform: rotate(0.094deg);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-left: 10rem;
`;

const Main = styled.div`
  width: 1920px;
  height: 924px;
  background: linear-gradient(180deg, rgba(17, 17, 17, 0.07) 0.28%, rgba(17, 17, 17, 0.07) 100%);
  display: flex;
  flex-direction: row;
`;

// const Navigation = styled.nav`
//   height: 164px;
//   flex-shrink: 0;
//   margin-top: 200px;
//   background-color: #404040;
// `;

export default STDInfo;
