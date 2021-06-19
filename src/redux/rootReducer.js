import { combineReducers as combiner } from "redux";

import shoppingReducer from "./Shopping/shopping-reducer";

const rootReducer = combiner({
  shop: shoppingReducer,
});

export default rootReducer;
