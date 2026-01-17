import { createBrowserRouter, } from "react-router";
import Home from "../view/Home";
import Detail from "../view/Detail";
import { AppLayout } from "../App";
import Search from "../view/Search";

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
            },
            {
                path: '/search/:args',
                Component: Search,
                loader: async (args) => {
                    const search = args.params['args'];
                    return search;
                }
            }
        ],
    }
]);