import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const  fetchRandomUser=createAsyncThunk("fetchRandom",async()=>{
    const response =await axios.get("https://randomuser.me/api");
    console.log(response.data.results[0]);
    return response.data.results[0];
})
const randomSlice = createSlice({
    name:"RandomUser",
    initialState:{
      isLoading:false,
      isError:false,
      Data:[]
    },
    reducers:{
       
    },
    extraReducers:{
        
    }
    

})
export const {randomUser}=randomSlice.actions
export default randomSlice.reducer;