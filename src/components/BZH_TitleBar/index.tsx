import { CloseButton } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Window } from '@tauri-apps/api/window';
import './index.css';
import { useState } from 'react';
import BZH_Title from '../BZH_Title';


const current = Window.getCurrent()
export default function TitleBar() {
    const [full, setFull] = useState(false)

    async function ToggleMaxmize() {
        await current.toggleMaximize()
        await current.isMaximized().then(setFull)
    }

    return <div className="head shadow-md p-1">
        <BZH_Title />
        <div className="title_bar">
            <CloseButton onClick={() => current.minimize()} className="cursor-pointer">
                <Icon icon="material-symbols:check-indeterminate-small-rounded" />
            </CloseButton>
            <CloseButton onClick={ToggleMaxmize} className="cursor-pointer">
                <Icon icon={`material-symbols:${full ? 'fullscreen-exit' : 'fullscreen'}`} />
            </CloseButton>
            <CloseButton onClick={() => current.close()} className="text-red-700 cursor-pointer">
                <Icon icon="material-symbols:close-rounded" />
            </CloseButton>
        </div>
    </div >
} 