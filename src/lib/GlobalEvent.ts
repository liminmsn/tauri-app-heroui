/**全局事件 */
class GlobalEvent{
    static readonly event = new EventTarget();
    static on(key:string,fun:()=>void){
        this.event.addEventListener(key,fun)
    }
    static send(key:string,param:any){
        this.event.dispatchEvent(new CustomEvent(key,param))
    }
}