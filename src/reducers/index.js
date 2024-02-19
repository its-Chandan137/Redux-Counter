import changeNum from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNum: changeNum,
});

export default rootReducer;