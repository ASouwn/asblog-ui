import React from "react";

interface Item {
    en: String,
    ch: String,
}

const Map: Item[] = [
    {en: "Link", ch: "链接"},
    {en: "SHARE", ch: "分享"},
    {en: "Log", ch: "登录"},
]
const App: React.FC = () => {
    const Items = Map.map((item) => (
        <a className={'text-blue-500'} key={""}>
            <div>{item.ch}</div>
        </a>))

    return (
        <div
            className={'relative grow-[1] shrink-[1] basis-0 h-[80%] scroll-auto flex items-center justify-center cursor-pointer transition text-gray-500'}>
            {Items}
        </div>
    )
}
export default App;