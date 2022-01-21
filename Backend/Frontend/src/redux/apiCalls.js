import { loginFailure, loginStart, loginSuccess} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user)=>{ //Siin alustatakse sisselogimise kontrollimist
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data)); 
    } catch(err) {
        dispatch(loginFailure());
    }

};