import { NavLink, useLocation } from 'react-router'
import '../css/bzh_title_btn.css'
import { list } from '@/router'
export default function () {
    const local = useLocation();
    return <div className="bzh_title_btn">
        {list && list.map(item => {
            return <NavLink key={item.path} className={`nva_link ${item.path == local.pathname && 'nva_link_select'}`} to={item.path || '/'}>{item.naem}</NavLink>
        })}
    </div>
}