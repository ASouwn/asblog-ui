interface Item {
    key: string,
    href: string,
    en: string,
    ch: string,
}

const Map: Item[] = [
    {key: '1',href: '#Index', en: "INDEX", ch: "首页"},
    {key: '2',href: '#Information', en: "INFORMATION", ch: "情报"},
    {key: '3',href: '#Blog', en: "BLOG", ch: "博客"},
    {key: '4',href: '#Space', en: "SPACE", ch: "空间"},
    {key: '5',href: '#Project', en: "PROJECT", ch: "项目"},
    // {key: '6',href: '#Message', en: "MESSAGE", ch: "留言"},
]
const HeadMenu: React.FC = () => {
    const Items = Map.map((item) => (
        <a key={item.key}
                href={item.href}
                className={'transition ease-in-out delay-[30ms] hover:translate-y-1.5 hover:bg-blue-500 duration-300'}>
            <div className={'text-xl text-white text-left'}>{item.en}</div>
            <div className={'text-white text-left'}>{item.ch}</div>
        </a>))

    return (
        <div className={'bg-gradient-to-b from-black grid grid-flow-col  items-center'}>
            <div>
                <a href={''}
                   className={' pl-[3em] text-xl text-left text-white'}>ASouwn's Blog</a>
            </div>
            <div className={" grid grid-flow-col"}>{Items}</div>
            {/* <a className={" px-[3em] text-xl text-white text-right "}>logo</a> */}
        </div>
    )
}
export default HeadMenu