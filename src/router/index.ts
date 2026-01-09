import { createBrowserRouter } from "react-router";
import Home from "../view/Home";
import App from "@/App";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                id: '简介',
                path: '/',
                Component: Home
            },
            {
                id: '目录',
                path: '/contents',
                Component: Home
            },
            {
                id: '关于',
                path: '/about',
                Component: Home
            }
        ]
    }
]);

const list = router.routes.map(item => item.children?.map(children => {
    return {
        naem: children.id,
        path: children.path
    }
}))[0]

export { list };
export default router;
