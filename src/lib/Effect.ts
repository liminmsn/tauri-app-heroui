export class ImageMouseMove {
    private domrect: DOMRect | null = null;
    constructor(private img: HTMLImageElement) {
        this.init();
        this.domrect = img.getClientRects()[0];
        // console.log(img.getClientRects()[0]);

    }
    init() {
        this.img.addEventListener('mousemove', this.mousemove.bind(this))
        this.img.addEventListener('mouseleave', this.mouseleave.bind(this))
    }
    destory() {
        this.img.removeEventListener('mousemove', this.mousemove);
        this.img.removeEventListener('mouseleave', this.mouseleave);

    }
    mouseleave() {
        this.img.style.transform = '';
    }
    mousemove(e: MouseEvent) {
        const { offsetX, offsetY } = e;
        if (this.domrect) {
            const x = offsetX - (this.img.width / 2);
            const y = (offsetY - (this.img.height / 2));
            this.img.style.transition = '45ms';
            this.img.style.transform = `rotate3d(${x}, ${y}, ${4}, 20deg)`;
        }
    }
}