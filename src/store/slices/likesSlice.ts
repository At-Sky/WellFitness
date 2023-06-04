import {createSlice} from "@reduxjs/toolkit";


const likesSlice = createSlice({
    name: 'likes',
    initialState: {
        likes: []
    },
    reducers: {
        addLike(state, action) {


            state.likes.push({

            })
        },
        removeLike(state, action){},
        clearLikes(state, action){},
    },
})

export const {
    addLike,
    removeLike,
    clearLikes
} = likesSlice.actions
export default likesSlice.reducer;
