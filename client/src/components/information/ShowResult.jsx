import React, { useEffect } from 'react';
import {useDispatch, useSelector } from "react-redux";
import EachResult from './EachResult';
import "../../assets/css/showResult.css";


const ShowResult = () => {
  const {checkedRepoList} = useSelector((state)=>state.user);


  return (
    <div className='show-result-container'>
      {checkedRepoList.map((elm,i)=>{
        return <EachResult key={i} elm={elm}/>
      })}
    </div>
  )
}

export default ShowResult