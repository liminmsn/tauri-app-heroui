export const detil = {
    bg: '',
    info_tag: '',
    infos: [''],
    tags: [{ href: '', label: '' }],
    imgs: [{
        item_icon: '4K',
        item_img: '',
        item_href: '',
        item_info: {
            disc: '',
            fa_photo: '',
        }
    }],
    down_info: [{ href: '', label: '' }]
}
export default function (document: Document) {
    const bg_pc = document.getElementsByClassName('article-pc')
    const bg_m = document.getElementsByClassName('article-m')
    detil.bg = (bg_pc[0] || bg_m[0]).children[0].getAttribute('src') || '';
    detil.info_tag = Array.from(document.getElementsByClassName('mod-main mod-info ')[0].getElementsByTagName('h1'))[0].textContent,
        detil.infos = Array.from(document.getElementsByClassName('mod-main mod-info ')[0].getElementsByTagName('p')).map(item => item.textContent).splice(3).filter(item => item);
    detil.tags = Array.from(document.getElementsByClassName("mod-tags clear")[0].children).map(item => {
        return {
            href: item.getAttribute('href') || '',
            label: item.textContent || ''
        }
    })
    detil.imgs = Array.from(document.getElementsByClassName("related-main clear")[0].children).map(item => {
        const obj = item.children[0].children
        return {
            item_icon: obj.item(0)?.textContent || '',
            item_href: obj.item(1)?.getAttribute('href') || '',
            item_img: obj.item(1)?.children[0].getAttribute('src') || '',
            item_info: {
                disc: obj.item(2)?.children[0].childNodes[0].textContent || '',
                fa_photo: obj.item(2)?.children[0].children[0].textContent || '',
            }
        }
    })
    detil.down_info = Array.from(document.getElementsByClassName("shadow-list")).slice(0, -1).map(item => {
        return {
            href: item.children[0].children[0].getAttribute('href') || '',
            label: item.children[0].children[0].textContent || ''
        }
    })
    return detil
}