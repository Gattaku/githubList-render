import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Root = () => {


    const navigate = useNavigate();

    useEffect(()=>{
        console.log("ここ通ってます！")
        navigate("/login");
    },[])

  return (
    <div>Root</div>
  )
}

export default Root