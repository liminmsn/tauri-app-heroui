import { createBrowserRouter, } from "react-router";
import Home from "../view/Home";
import Detail from "../view/Detail";

export default createBrowserRouter([
    {
        path: "/",
        Component: Home,
        loader: function (a) {
            console.log(a);
        }
    },
    {
        path: '/detail',
        Component: Detail
    }
]);