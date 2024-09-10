import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { getNotiDetail } from '../apis/get/getNotiDetail';
import { patchAnnc } from '../apis/post/patchAnnounce';

export const AnnounceEdit = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    content: ""
  });

  useEffect(() => {
    getNotiDetail(id).then(res => {
      if(res) {
        setData({
          title: res.data.title,
          content: res.data.content
        })
      }
    })
  }, [])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  const handleSubmit = () => {
    patchAnnc(data, id).then(res => {
      if(res) {
        console.log(res);
        alert("글이 성공적으로 수정되었습니다.😎");
        window.location.href = "/Announcement";
      } else {
        alert("수정에 실패했습니다. 다시 시도해주세요.")
      }
    })
  }

  return <Wrapper>
    <BoxFlex>
      <Textbox>
        <Title name="title" placeholder="제목" value={data.title} onChange={handleChange}/>
        <Text name="content" rows="25" cols="155" value={data.content} placeholder="내용을 입력해주세요." onChange={handleChange} />
      </Textbox>
      <FinButton onClick={handleSubmit}>
        <img src="/imgs/Notice.svg" alt="" /> 
        <h1>작성 완료</h1>
      </FinButton>
    </BoxFlex>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
`

const BoxFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`

const Textbox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 670px;
  margin-top: 30px;
  background: white;
  border-radius: 50px;
`

const Title = styled.input`
  width: 95%;
  height: 40px;
  margin-top: 40px;
  border-bottom: 1px solid gray;
  font-size: 25px;
  font-weight: bolder;
`

const Text = styled.textarea`
  margin-top: 5px;
  width: 95%;
  font-size: 16px;
`

const FinButton = styled.button`
  gap: 10px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  width: 200px;
  height: 50px;
  cursor: pointer;
  margin-top: 20px;
  background: white;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bolder;
  &:hover { border: 1px solid black;}
`