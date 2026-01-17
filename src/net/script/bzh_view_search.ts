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
export default function (document: Document) {
    console.log(document);
    const list = Array.from(document.getElementsByClassName('item-list')).map(item => {
        return {
            // label: item.getElementsByClassName('item-icon')[0].textContent || '',
            // href: item.getElementsByClassName('item-img')[0].getAttribute('href') || '',
            // src: item.getElementsByClassName('item-img')[0].children[0].getAttribute('src') || ''
            item_icon: item.getElementsByClassName('item-icon')[0].textContent,
            item_img: item.getElementsByClassName('item-img')[0].children[0].getAttribute('src') || '',
            item_href: item.getElementsByClassName('item-img')[0].getAttribute('href') || '',
            item_info: {
                disc: '',
                fa_photo: '',
                fa_heart: ''
            }
        }
    })
    return list;
}