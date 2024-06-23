'use client';
import React, {useState} from "react";
import Information from "@/app/component/Information";
import Blog from "@/app/component/Blog";
import Space from "@/app/component/Space";
import Project from "@/app/component/Project";
import Message from "@/app/component/Message";
import css from "styled-jsx/css";
import HeadMenu from "./component/HeadMenu";
import Index from "./component/Index";



const App: React.FC = () => {
    
    return (
        // 整个页面
        <main className={'bg-mkmImage absolute bg-130% bg-center bg-no-repeat w-full h-full'}>
            {/*增加一个黑色mask*/}
            <div className={"bg-black bg-opacity-50 w-full h-full bg-cover"}>
                {/*鼠标样式*/}
                <div className={""}></div>
                {/*内容*/}
                <div className={' flex flex-col justify-between '}>
                    <HeadMenu/>
                    <div className={'grid grid-flow-col auto-cols-[100%] overflow-hidden '}>
                        <Index/>
                        <Information/>
                        <Blog/>
                        <Space/>
                        <Project/>
                        {/* <Message/> */}
                    </div>
                </div>
            </div>
        </main>


    );
}

export default App;