'use client';
import React, {useState} from "react";
import Information from "@/app/component/Information";
import Blog from "@/app/component/Blog";
import Space from "@/app/component/Space";
import Project from "@/app/component/Project";
import Message from "@/app/component/Message";
import Home from "@/app/component/Home";
import css from "styled-jsx/css";

interface Item {
    key: string,
    en: string,
    ch: string,
}

const Map: Item[] = [
    {key: '1', en: "INDEX", ch: "首页"},
    {key: '2', en: "INFORMATION", ch: "情报"},
    {key: '3', en: "BLOG", ch: "博客"},
    {key: '4', en: "SPACE", ch: "空间"},
    {key: '5', en: "PROJECT", ch: "项目"},
    {key: '6', en: "MESSAGE", ch: "留言"},
]

const App: React.FC = () => {
    const [content, setContent] = useState('1')
    function contentShow() {
        switch (content){
            case '1': return <Home/>
            case '2': return <Information/>
            case '3': return <Blog/>
            case '4': return <Space/>
            case '5': return <Project/>
            case '6': return <Message/>
        }
    }
    const HeadMenu: React.FC = () => {
        const Items = Map.map((item) => (
            <button key={item.key}
                    onClick={()=> setContent(item.key)}
                    className={'transition ease-in-out delay-[30ms] hover:translate-y-1.5 hover:scale-110 hover:bg-blue-500 duration-300'}>
                <div className={'text-xl text-white text-left'}>{item.en}</div>
                <div className={'text-white text-left'}>{item.ch}</div>
            </button>))

        return (
            <div className={'top-0 bg-gradient-to-b from-black grid grid-flow-col grid-cols-3 h-[10vh] items-center '}>
                <div>
                    <a href={''}
                       className={' pl-[3rem] text-xl text-left text-white'}>ASouwn's Blog</a>
                </div>
                <div className={" grid grid-flow-col"}>{Items}</div>
                <a className={" px-[3rem] text-xl text-white text-right"}>logo</a>
            </div>
        )
    }
    return (
        // 整个页面
        <main className={'bg-mkmImage absolute bg-130% bg-center bg-no-repeat w-full h-full flex'}>
            {/*增加一个黑色mask*/}
            <div className={" bg-black bg-opacity-50 w-full h-full absolute bg-cover"}>
                {/*鼠标样式*/}
                <div className={""}></div>
                <div className={'grid grid-flow-row'}>
                    {/*内容*/}
                    <HeadMenu/>
                    <div
                        className={'absolute inset-x-0 bottom-4 mx-auto w-3/4 h-3/4 grid grid-flow-col overflow-auto overscroll-contain'}
                        style={{
                            gridAutoColumns: '100%',
                        }}>
                        {contentShow()}
                        {/*<Home/>*/}
                        {/*<Information/>*/}
                        {/*<Blog/>*/}
                        {/*<Space/>*/}
                        {/*<Project/>*/}
                        {/*<Message/>*/}

                    </div>
                </div>
            </div>
        </main>


    );
}

export default App;