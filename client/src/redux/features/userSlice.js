import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
    checkedList: [],
    checkedRepoList: [],
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },
        setDescription: (state, action) => {
            state.value.descriptionObj[action.payload] = !state.value.descriptionObj[action.payload];
        },
        setCheckedList: (state, action) => {
            state.checkedList.push(action.payload);
        },
        removeCheckedList: (state, action) => {
            const checkDescription = action.payload;
            const index = state.checkedList.findIndex((elm) => elm === checkDescription);
            state.checkedList.splice(index, 1);
        },
        resetCheckedList: (state) => {
            state.checkedList = [];
        },
        setCheckedRepoList: (state, action) => {
            state.checkedRepoList = action.payload;
        }
    },
})

export const { setUser, setDescription, setCheckedList, removeCheckedList, resetCheckedList, setCheckedRepoList } = userSlice.actions;
export default userSlice.reducer;