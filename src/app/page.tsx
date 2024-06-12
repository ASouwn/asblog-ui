'use client';
import React from "react";
import Information from "@/app/component/Information";
import Blog from "@/app/component/Blog";
import Space from "@/app/component/Space";
import Project from "@/app/component/Project";
import Message from "@/app/component/Message";
import Home from "@/app/component/Home";

interface Item {
    en: String,
    ch: String,
}

const Map: Item[] = [
    {en: "INDEX", ch: "首页"},
    {en: "INFORMATION", ch: "情报"},
    {en: "BLOG", ch: "博客"},
    {en: "SPACE", ch: "空间"},
    {en: "PROJECT", ch: "项目"},
    {en: "MESSAGE", ch: "留言"},
]

const HeadMenu: React.FC = () => {
    const Items = Map.map((item, index) => (
        <button key={index++}
           onClick={()=> alert(item.ch)}
           className={'transition ease-in-out delay-[30ms] hover:translate-y-1.5 hover:scale-110 hover:bg-blue-500 duration-300'}>
            <div className={'text-xl text-white text-left'}>{item.en}</div>
            <div className={'text-white text-left'}>{item.ch}</div>
        </button>))

    return (
        <div className={'bg-gradient-to-b from-black grid grid-flow-col grid-cols-3 h-[10vh] box-border items-center '}>
            <div>
                <a href={''}
                   className={' pl-[3rem] text-xl text-left text-white'}>ASouwn's Blog</a>
            </div>
            <div className={" grid grid-flow-col"}>{Items}</div>
            <a className={" px-[3rem] text-xl text-white text-right"}>logo</a>
        </div>
    )
}

const App: React.FC = () => {
    return (
        // 整个页面
        <main className={'bg-mkmImage absolute bg-130% bg-center bg-no-repeat w-full h-full flex'}>
            {/*增加一个黑色mask*/}
            <div className={"grid grid-flow-row grid-rows-3 bg-black bg-opacity-50 w-full h-full absolute bg-cover"}>
                {/*鼠标样式*/}
                <div className={""}></div>
                {/*内容*/}
                <HeadMenu/>
                <div className={'absolute inset-x-0 bottom-4 mx-auto w-3/4 h-3/4 grid grid-flow-col overflow-auto overscroll-contain'} style={{
                    gridAutoColumns: '100%',
                }}>
                    <Home/>
                    <Information key={'information'}/>
                    <Blog key={'Blog'}/>
                    <Space/>
                    {/*<Project/>*/}
                    {/*<Message/>*/}

                </div>
            </div>
        </main>


    );
}

export default App;