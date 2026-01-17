import { useRef } from "react";
import { useLoaderData } from "react-router";
import BZH_Images from "../components/BZH_Images";
import bzh_view_search from "../net/script/bzh_view_search";

const base_url = import.meta.env['VITE_URL'];
export default function () {
    const param = useLoaderData();
    const page = useRef(1);
    return <div className="seach">
        <BZH_Images analy={bzh_view_search} page={page} url={`${base_url}/search.php?q=${param}&`} />
    </div>
}