import React, { useState } from 'react';
import githubImg from "../assets/imges/github.png"
import  "../assets/css/loginStyle.css";
import github from '../api/github';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { setUser,setCheckedRepoList } from '../redux/features/userSlice';
import GitHubIcon from '@mui/icons-material/GitHub';


const Login = () => {

    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = async(e) => {
        e.preventDefault();
        try {
            const result = await github.getInformation(userName);
            console.log(result)
            if (result.data.message === "Not Found"){
                alert("ユーザーが存在しません。再度入力して下さい");
            } else {
                dispatch(setUser(result.data));
                dispatch(setCheckedRepoList(result.data.repoInfo));
                navigate("/information");
            }
        } catch (err) {
            alert(err);
        }
        setUserName("");
    }

    const inputChange = (e) => {
        setUserName(e.target.value);
    }


  return (
    <div className="login">
        <div className='login-top'>
            <div>
                <img src={githubImg} alt='#' />
            </div>
            <div className="input-container">
                <form action="" onSubmit={submitHandler}>
                    <input className='input-text' type="text" placeholder='ユーザー名を入力' value={userName} onChange={inputChange}/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login