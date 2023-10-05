import React from 'react'
import UserInfo from './UserInfo'
import DescriptionTop from './DescriptionTop'
import "../../assets/css/informationStyle.css"

const Header = () => {
  return (
    <div className='header'>
        <UserInfo /> 
        <DescriptionTop />
    </div>
  )
}

export default Header