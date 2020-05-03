import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as worker from "./serviceWorker";
import { App } from "./components/app";
import "./styles/index.scss";
import { store } from './redux/store/dev';
import { rootSagas } from "./modules"
const theStore = store()
console.log("theStore", theStore)
theStore.runSaga(rootSagas)
console.log("theStore", theStore)

ReactDOM.render(
    <Provider store={ theStore }>
        <App />
    </Provider>
    , document.getElementById("root"));



worker.unregister();
