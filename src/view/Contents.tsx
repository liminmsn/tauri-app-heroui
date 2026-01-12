import { useState } from "react"

export default function () {
    const [list] = useState([
        "01 亲士",
        "02 修身",
        "03 所染",
        "04 法仪",
        "05 七患",
        "06 辞过",
        "07 三辩",
        "08 尚贤(上)",
        "09 尚贤(中)",
        "10 尚贤(下)",
        "11 尚同(上)",
        "12 尚同(中)",
        "13 尚同(下)",
        "14 兼爱(上)",
        "15 兼爱(中)",
        "16 兼爱(下)",
        "17 非攻(上)",
        "18 非攻(中)",
        "19 非攻(下)",
        "20 节用(上)",
        "21 节用(中)",
        "22 节用(下)",
        "25 节葬(下)",
        "26 天志(上)",
        "27 天志(中)",
        "28 天志(下)",
        "31 明鬼(下)",
        "32 非乐(上)",
        "35 非命(上)",
        "36 非命(中)",
        "37 非命(下)",
        "39 非儒(下)",
        "40 经(上)",
        "41 经(下)",
        "42 经说(上)",
        "43 经说(下)",
        "44 大取",
        "45 小取",
        "46 耕柱",
        "47 贵义",
        "48 公孟",
        "49 鲁问",
        "50 公输",
        "52 备城门",
        "53 备高临",
        "56 备梯",
        "58 备水",
        "61 备突",
        "62 备穴",
        "63 备蛾傅",
        "68 迎敌祠",
        "69 旗帜",
        "70 号令",
        "71 杂守"
    ]);
    return <div>
        <div className="h-full overflow-y-auto grid grid-flow-col gap-4 px-10 pt-10"
            style={{ height: 'calc(100vh - 32.6px)', gridTemplateRows: 'repeat(12,0fr)', scrollbarWidth: 'none' }}>
            {list.map(item => {
                return <li className="xl:text-2xl hover:text-shadow-md hover:scale-110 select-none cursor-pointer justify-self-center" key={item}>{item}</li>
            })}
        </div>
    </div>
}