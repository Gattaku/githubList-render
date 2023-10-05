import React from 'react';
import "../../assets/css/informationStyle.css";
import {useDispatch, useSelector } from "react-redux";
import "../../assets/css/description.css";
import EachDescription from './EachDescription';

const DescriptionTop = () => {
    const {descriptionObj,repoInfo} = useSelector((state)=> state.user.value);
    const descriptionList = Object.keys(descriptionObj);
  
    return (
      <div className='description'>
        <h4 className='repo-header'>リポジトリー数：{repoInfo.length}</h4>
        <div className='description-container'>
          {descriptionList.map((description,i)=>{
            return <EachDescription key={i} description={description} />
          })}
        </div>
      </div>
    )
}

export default DescriptionTop