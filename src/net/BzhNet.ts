import { ClientOptions, fetch } from "@tauri-apps/plugin-http";

export default class {
    private init: (RequestInit & ClientOptions) | null = null;
    private url = import.meta.env['VITE_URL'];
    constructor(url: string = '') {
        this.url += url;
    }
    get() {

    }
    send() {
        fetch(this.url, {})
    }
}