import { invoke } from "@tauri-apps/api/core"
import { toast, Bounce } from "react-toastify"

function save(selectd?: string | null) {
    if (selectd != null) {
        invoke<any>('down_img', { url: selectd }).then(val => {
            toast.info(`下载成功！${val}`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
        })
    }
}
function set_desktop(selectd: string | null) {
    if (selectd != null) {
        invoke<any>('set_desktop', { url: selectd }).then(_val => {
            toast.success(`成功设置壁纸！`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
        })
    }
}

export { save, set_desktop }