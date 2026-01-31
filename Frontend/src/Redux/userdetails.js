import { createSlice } from "@reduxjs/toolkit";

const userdetailsSlice= createSlice({
    name:"userdetails",
    initialState:{},
    reducers:{
      saveorderdata:(state,action)=>{
        return action.payload;
      },
      resetUserDetails:(state)=>{
         return {};
      }
      }
  
})


export const { saveorderdata,resetUserDetails}=userdetailsSlice.actions;
export default userdetailsSlice.reducer;