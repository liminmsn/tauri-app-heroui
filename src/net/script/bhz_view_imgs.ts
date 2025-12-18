export const imgs = [{
    item_icon: '4K',
    item_img: '',
    item_href: '',
    item_info: {
        disc: '',
        fa_photo: '',
        fa_heart: ''
    }
}]
export default function (document: Document): typeof imgs {
    const arr = document.getElementsByClassName('item-list masonry-brick')
    return Array.from(arr).map(item => {
        const obj = item.children[0].children;
        return {
            item_icon: obj.item(0)?.textContent || '',
            item_href: obj.item(1)?.getAttribute('href') || '',
            item_img: obj.item(1)?.children[0].getAttribute('src') || '',
            item_info: {
                disc: obj.item(2)?.children[0].childNodes[0].textContent || '',
                fa_photo: obj.item(2)?.children[0].children[0].children[0].children[0].textContent || '',
                fa_heart: obj.item(2)?.children[0].children[0].children[0].children[1].textContent || ''
            }
        }
    })
}