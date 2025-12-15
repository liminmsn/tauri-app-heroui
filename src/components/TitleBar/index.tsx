import { CloseButton, Label } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Window } from '@tauri-apps/api/window';
import './index.css';
import { useState } from 'react';


const current = Window.getCurrent()
const APP_Name = import.meta.env['VITE_NAME']
export default function TitleBar() {
    const [full, setFull] = useState(false)

    async function ToggleMaxmize() {
        await current.toggleMaximize()
        await current.isMaximized().then(setFull)
    }

    return <div className="head shadow-md">
        <Label className="float-left text-surface">{APP_Name}{String(full)}</Label>
        <div className="title_bar">
            <CloseButton onClick={() => current.minimize()} className="cursor-pointer">
                <Icon icon="material-symbols:check-indeterminate-small-rounded" />
            </CloseButton>
            <CloseButton onClick={ToggleMaxmize} className="cursor-pointer">
                {/* <Icon icon="solar:full-screen-bold" width="24" height="24" /> */}
                <Icon icon={`material-symbols:${full ? 'fullscreen-exit' : 'fullscreen'}`} width="24" height="24" />
            </CloseButton>
            <CloseButton onClick={() => current.close()} className="text-red-700 cursor-pointer">
                <Icon icon="material-symbols:close-rounded" />
            </CloseButton>
        </div>
    </div >
} 