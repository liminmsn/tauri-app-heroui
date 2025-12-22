import { createBrowserRouter, } from "react-router";
import Home from "../view/Home";
import Detail from "../view/Detail";
import { AppLayout } from "../App";

export default createBrowserRouter([
    {
        path: "/",
        Component: AppLayout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/detail',
                Component: Detail
            }
        ],
        // loader: function (a) {
        //     // console.log(a);
        // }
    }
]);