import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import "../../assets/css/description.css";
import {useDispatch, useSelector } from "react-redux";
import {setDescription,setCheckedList,removeCheckedList,setCheckedRepoList} from "../../redux/features/userSlice";

const EachDescription = (props) => {

    const dispatch = useDispatch();
    const {repoInfo} = useSelector((state)=> state.user.value);
    const {checkedList} = useSelector((state)=> state.user);
    const {description} = props;
    const [toggleSwitch, setToggleSwitch] = useState(false);

    const handleToggleChange = () => {
        setToggleSwitch(!toggleSwitch);
        dispatch(setDescription(description));
        if(!toggleSwitch) {
            dispatch(setCheckedList(description));
        } else {
            dispatch(removeCheckedList(description));
        };
        const tempCheckedList = [...checkedList];
        if (!toggleSwitch){
            tempCheckedList.push(description);
        } else {
            const index = tempCheckedList.findIndex((elm)=> elm === description);
            tempCheckedList.splice(index,1);
        }
        // console.log(tempCheckedList);

        if (tempCheckedList.length !==0) {
            const matchList = repoInfo.filter((elm)=> {
              const description = elm.description;
              if (tempCheckedList.length > description.length) return false;
              for (const descriptionContent of tempCheckedList) {
                if (!description.includes(descriptionContent)) {
                  return false;
                }
              }
              return true;
            });
            dispatch(setCheckedRepoList(matchList));
          } else {
            dispatch(setCheckedRepoList(repoInfo));
          }
    }


  return (
    <div className='each-description'>
        <div className="toggle-switch">
            <Switch 
                checked={toggleSwitch}
                onChange={handleToggleChange}
                color='primary'
            />
        </div>
        <div className='description-content'>
            <label htmlFor="">{description}</label>
        </div>
    </div>
  )
}

export default EachDescription