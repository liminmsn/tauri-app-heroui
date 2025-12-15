import { CloseButton, Label } from '@heroui/react';
import { Icon } from '@iconify/react';
import { app } from '@tauri-apps/api'
import { Window } from '@tauri-apps/api/window';
import './index.css';


const current = Window.getCurrent()

function onBtnDown() {
    alert(app.getVersion())
}

const APP_Name = import.meta.env['VITE_NAME']
export default function TitleBar() {
    return <div className="head shadow-md">
        <Label className="float-left text-surface">{APP_Name}</Label>
        <div className="title_bar">
            <CloseButton onClick={() => current.minimize()}>
                <Icon icon="material-symbols:check-indeterminate-small-rounded" />
            </CloseButton>
            <CloseButton onClick={() => current.toggleMaximize()}>
                <Icon icon="material-symbols:fullscreen" />
            </CloseButton>
            <CloseButton onClick={() => current.close()} className="text-red-700">
                <Icon icon="material-symbols:close-rounded" />
            </CloseButton>
        </div>
    </div >
} 