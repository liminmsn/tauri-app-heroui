import { CloseButton } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Window } from '@tauri-apps/api/window';
import BZH_Title from './BZH_Title';
import { useBZHContext } from '../context';
import BZH_TitleBarBtn from './BZH_TitleBarBtn';


const current = Window.getCurrent()
export default function TitleBar() {
    const [data, dispatch] = useBZHContext()

    async function ToggleMaxmize() {
        await current.toggleMaximize()
        await current.isMaximized().then(bol => dispatch({ type: 'incremented_full', data: { full: bol } }))
    }

    return <div className="top_bar p-1 flex justify-between sticky top-0 z-10" style={{ maxHeight: '34px' }}>
        <div className='flex'>
            <BZH_Title />
            <BZH_TitleBarBtn />
        </div>
        <div className="top_bar_btn">
            <CloseButton onClick={() => current.minimize()} className="cursor-pointer">
                <Icon icon="material-symbols:check-indeterminate-small-rounded" />
            </CloseButton>
            <CloseButton onClick={ToggleMaxmize} className="cursor-pointer">
                <Icon icon={`material-symbols:${data.full ? 'fullscreen-exit' : 'fullscreen'}`} />
            </CloseButton>
            <CloseButton onClick={() => current.close()} className="text-red-700 cursor-pointer">
                <Icon icon="material-symbols:close-rounded" />
            </CloseButton>
        </div>
    </div >
} 