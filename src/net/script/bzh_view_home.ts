export const json_data = {
    bg: '',
    searchUrl: '',
    tags: [] as { href: string, label: string }[],
    imgs: [] as { src: string, href: string, label: string }[]
}
export default function (document: Document) {
    json_data.bg = document.getElementsByClassName('index-banner container')[0].children[0].getAttribute('src') || '';
    json_data.searchUrl = document.getElementsByClassName('index-banner container')[0].children[1].children[1].getAttribute('action') || '';
    json_data.tags = Array.from(document.getElementsByClassName('page-menu-list')[0].children).map(li => {
        const a = li.children[0];
        return {
            href: (a as HTMLAnchorElement).href,
            label: a.textContent ?? ''
        }
    })
    const imgs = document.getElementById('item-lists');
    if (imgs) {
        json_data.imgs = Array.from(imgs.children).map(item => {
            const item_ = Array.from(item.children[0].children);
            return {
                src: item_[1].children[0].getAttribute('src') || '',
                href: item_[1].getAttribute('href') || '',
                label: ''
            }
        })
    }
    return JSON.parse(JSON.stringify(json_data));
}