import { createStore } from "redux";
import reducer from "../reducer";

const initialState = {
    username: "Janny",
    totalAmount: 2500701
};

const store = createStore(reducer, initialState);

export default store;