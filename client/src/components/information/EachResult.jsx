import React from 'react';
import "../../assets/css/showResult.css";

const EachResult = (props) => {
    const {elm} = props;
  return (
    <div className='card-container'>
      <div className='card-header'>
        <div className='card-title'>{`Title : ${elm.title}`}</div>
        <div className='create-date'>Created : {elm.createDate}</div>
        <div className='card-description'>Description : {elm.description.join("/")}</div>
      </div>
      <div className='card-button'>
          <a href={elm.url} target='_blank' rel='noopener noreferrer'>
              <button className='repo-button'>リポジトリー</button>
          </a>
      </div>
    </div>
  )
}

export default EachResult