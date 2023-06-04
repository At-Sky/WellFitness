import {createSlice} from "@reduxjs/toolkit";


const comparesSlice = createSlice({
    name: 'compares',
    initialState: {
        compares: []
    },
    reducers: {
        addCompare(state, action) {


            state.compares.push({

            })
        },
        removeCompare(state, action){},
        clearCompares(state, action){},
    },
})

export const {
    addCompare,
    removeCompare,
    clearCompares
} = comparesSlice.actions
export default comparesSlice.reducer;
