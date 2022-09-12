import axios from "axios"
import { 
    GET_USERS_REQUEST, 
    GET_USERS_SUCCESS,
     GET_USERS_FAIL
    } from "../constants/Constants"
 
export const userAction = async (dispatch) => { //function to frtch data,to use await must use async
    try {
        dispatch({ type: GET_USERS_REQUEST});
        const {data} = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
            );

        //to send fetched data as a payload using dispatch
        // dipatch like setstate

        dispatch({type: GET_USERS_SUCCESS,payload:data}) //send it throufh payload
    }catch(err){
        dispatch({
            type:GET_USERS_FAIL,
            payload:
            err.data && err.respond.data.message 
             ?err.response.data.message
             : err.message,
        });
    }
    
};

// to perform asynchronus activites we go for middle 