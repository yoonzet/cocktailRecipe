import React from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { likeState } from '../atoms';

const Btn = styled.button`
  all: unset;
  color: #eee;
  font-size:20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    transform: scale(110%);
  }
`

function LikeBtn({cocktail}) {
  const [likeItem, setLikeItem] = useRecoilState(likeState);
  const likedItem = likeItem?.find(
    item => item.idDrink === cocktail.idDrink
  )
  const addLikeClick = () => {
    if (likeItem.findIndex(
      result =>
      cocktail.idDrink === result.idDrink
    ) === -1
    ){
      setLikeItem((oldLikeItem) => [...oldLikeItem,{...cocktail}])
    } else {
      setLikeItem((oldLikeItem) =>
        oldLikeItem.filter(
          likeItem => likeItem.idDrink !== cocktail.idDrink
        )
      );
    }

  }

  return (
    <Btn onClick={addLikeClick}>{likedItem ? <FaHeart /> : <FaRegHeart />}</Btn>
  );

}

export default LikeBtn;