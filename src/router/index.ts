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
                id: '回馈',
                path: '/about',
                Component: About,
            },
            {
                id: '',
                path: '/info/:pid',
                Component: Info,
                loader: async ({ params }) => {
                    const { pid } = params;
                    const res = await (await fetch(`/book/${pid}.txt`)).text()
                    const yy = res.match(RegExp(/\[原文\]([\s\S]+?)\[原文END\]/g));
                    const jsfy = res.match(RegExp(/\[解释翻译\]([\s\S]+?)\[解释翻译END\]/g));
                    const zscc = res.match(RegExp(/\[注释出处\]([\s\S]+?)\[注释出处END\]/g));
                    const obj = {
                        yw: '', jsfy: '', zscc: ''
                    }
                    if (yy && jsfy && zscc) {
                        obj.yw = yy![0].replace('[原文]', '').replace('[原文END]', '').replaceAll('。', '。<br/>').replaceAll('。<br/>”','。”');
                        obj.jsfy = jsfy![0].replace('[解释翻译]', '').replace('[解释翻译END]', '').replaceAll('。', '。<br/>').replaceAll('。<br/>”','。”');
                        obj.zscc = zscc![0].replace('[注释出处]', '').replace('[注释出处END]', '').replaceAll('。', '。<br/>').replaceAll('。<br/>”','。”');
                    }

                    return obj;
                }
            }
        ],
    },
]);

const list = router.routes.map(item => item.children?.filter(ite => ite.id != '').map(children => {
    return {
        naem: children.id,
        path: children.path
    }
}))[0]

export { list };
export default router;
