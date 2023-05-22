import { createSlice } from "@reduxjs/toolkit";
export const counterSlice= createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
            increment:(state,action)=>{
               if( state.count<15){
                state.count+=1
                
               }
            },
            decrement:(state,action)=>{
              if(  state.count>0){
                state.count-=1
              }
            }
    }

})
export const{increment,decrement}=counterSlice.actions
export default counterSlice.reducer 