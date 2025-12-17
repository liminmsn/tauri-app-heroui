export default class {
    Log(...args: any) {
        console.log(`%c调试输出:`, "padding:4px;color: white;font-weight: bolder;background: green; border-radius: 4px;", ...args)
    }
}