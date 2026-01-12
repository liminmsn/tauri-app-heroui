import { createBrowserRouter } from "react-router";
import Home from "../view/Home";
import App from "@/App";
import Contents from "@/view/Contents";
import About from "@/view/About";
import Info from "@/view/Info";

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
                Component: Contents
            },
            {
                id: '关于',
                path: '/about/:idx',
                Component: About,
                action: async ({ request }) => {
                    console.log(request.body);
                    return "123123";
                },
            }
        ]
    },
    {
        path: '/info/:pid',
        Component: Info
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
