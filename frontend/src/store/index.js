import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import sessionReducer from "./session";
import thunk from "redux-thunk";
import landMarkReducer from "./landmark";
import reviewReducer from "./review";
import userReducer from "./user";
import collectionReducer from "./usercollection";

const rootReducer = combineReducers({
  session: sessionReducer,
  landmarks: landMarkReducer,
  reviews: reviewReducer,
  users: userReducer,
  collection: collectionReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
