import DebugLog from "../lib/DebugLog";
import { BZHNet } from "../net/BZHNet";

export default class AnalysisJson<T> extends DebugLog {
    constructor(net: BZHNet, analy: (dom: Document) => T, setContext: (data: T) => void) {
        super();
        net.send().then(async res => {
            const dom = new DOMParser().parseFromString(await res.text(), 'text/html')
            // this.Log(dom)
            setContext(analy(dom))
        })
    }
}