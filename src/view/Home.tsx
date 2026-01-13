import { Description, Label } from "@heroui/react"
import mozi from '@/assets/mz.jpg';

export default function () {
    return <div className="home labelContext">
        <div className="w-4/6 xl:max-w-2/4 mx-auto mt-20 py-10 flex gap-4">
            <img className="rounded-md w-40 xl:w-80" src={mozi} />
            <div>
                <Label className="text-xl xl:text-4xl">《墨子》</Label>
                <Description className="text-foreground xl:text-2xl">
                    是中国战国著名思想家、政治家墨子的著作，共五十三篇传世于今。《汉书·艺文志》云“墨子七十一篇”，现存《墨子》五十三篇，由墨子和各代门徒逐渐增补而成，是研究墨子和墨家学说的基本材料。其中的《经上》、《经下》、《经说上》、《经说下》、《大取》、《小取》等6篇，一般称作《墨经》或《墨辩》，着重阐述认识论和逻辑学。[1]胡适在《先秦名学史》中提出《墨经》六篇非墨子自著，造成强烈反向，目前学术界依然存在截然不同的看法。
                </Description>
            </div>
        </div>
    </div>
}