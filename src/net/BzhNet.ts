import { ClientOptions, fetch } from "@tauri-apps/plugin-http";
import DebugLog from "../lib/DebugLog";

export class BZHNet extends DebugLog {
    private init: (RequestInit & ClientOptions) = {};
    private url = import.meta.env['VITE_URL'];
    constructor(url: string = '') {
        super();
        this.url += url;
    }
    get(param: any = undefined) {
        this.init.method = "GET"
        if (param) {
            this.init.body = param
        }
        return this
    }
    post(param: any) {
        if (param) {
            this.init.body = param
        }
        this.init.method = "POST"
    }
    async send() {
        const res = await fetch(this.url, this.init)
        this.Log(this.url)
        if (res.status == 200) {
            this.Log(res)
            return res;
        }
        throw Error(`${this.url} 网络请求错误!`)
    }
}