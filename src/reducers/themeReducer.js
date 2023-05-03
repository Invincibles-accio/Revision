// import {changeTheme} from "./themeActions";
import {CHANGE_THEME} from "../actions/actionTypes";


let intialTheme = {
    theme: {color:"white",backgroundColor:"black", fontSize:"20px", border: "2px solid black"},
    
}

const themeReducer = (state = intialTheme, action) => {
    switch(action.type){
        case CHANGE_THEME:
            return action.payload;
        default:
            return state;
    }
}

export default themeReducer;