import { legacy_createStore as createStore } from "redux";
import rootreducer from "./reducer/rootreducer";

const store = createStore(rootreducer);

export default store;