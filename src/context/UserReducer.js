// import searchForMobile from "../Header/SearchButtonsForMobile";
// import { YourNewMessage } from "./UserActions";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLEFLOATINGBOX":
      return {
        ...state,
        floatingBox: action.payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
