import { deleteAnnc } from "../apis/post/deleteAnnounce";
import { styled } from "styled-components";

export const Announce = ({id, title}) => {
  const handleClick = (e) => {
    if(e.target.name!=="button") { window.location.href = `/AnnounceRead/${id}` }
  }

  const handleEdit = () => {
    window.location.href = `/AnnounceEdit/${id}`
  }

  const handleDelete = () => {
    if(window.confirm("정말 삭제하시겠습니까?")) {
      deleteAnnc(id).then(res => {
        if(res) {
          alert("삭제되었습니다");
          window.location.reload();
        }
      })
    }
  }

  return <Wrapper onClick={handleClick}>
    <Title>{title}</Title>
    <Buttons>
      <Button name="button" src="/imgs/edit.svg" alt="" title="글 수정하기" onClick={handleEdit}/>
      <Button name="button" src="/imgs/delete.svg" alt="" title="글 삭제하기" onClick={handleDelete}/>
    </Buttons>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 155px;
  padding-left: 10%;
  padding-right: 10%;
  cursor: pointer;
  background: white;
  box-sizing: border-box;
  border-radius: 0px 20px 20px 20px;
`

const Buttons = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
`

const Button = styled.img`
  width: 45px;
  height: 45px;
  transition: 0.1s;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 15px;
  &:hover {
    background: whitesmoke;
    transition: 0.1s;
  }
`