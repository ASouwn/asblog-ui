import React, { useEffect, useState } from "react";
import Markdown from 'react-markdown'
import "github-markdown-css"
const content = "I've written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you're never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way."

const blog: BlogContent[] = [
    { title: 'Blog Title', tag: 'Java', content: content, date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: content, date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: content, date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: content, date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: content, date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: content, date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: content, date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: content, date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: content, date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: content, date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: content, date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: content, date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: content, date: '2024-06-12' },
]

const App: React.FC = () => {
    const [blogs, setBlog] = useState<BlogContent[]>(blog)
    useEffect(() => {
        fetch('${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/list', {
            method: 'get'
        }).then(
            res => res.json()
        ).then(
            data => setBlog(data.list)
        ).catch(e => {
            throw e
        })
    }, [])

    const BlogItems = blogs.map((item, index) => <div className={'text-white'} key={index++}>
        <h2>{'[' + item.tag + ']' + item.title}</h2>
        <p>{item.date}</p>
        <line></line>
        <Markdown className="markdown-body">{item.content}</Markdown>
        
    </div>)

    return (
        // 展示博客
        <div id="Blog" className={"relative box-border p-12"}>
            <div className="flex">
                <div className="flex flex-auto flex-col w-[35rem] bg-white bg-opacity-20 gap-3">
                    <p>分类目录</p>
                    <p>关键词搜索，可以根据标题或者内容当中的关键词搜索结果</p>
                    <p>会有标签选择，选择特定标签就会过滤相应的博客</p>

                </div>
                <div className="flex-auto bg-gray-500 h-[46rem] w-[95rem] overflow-auto">
                    {BlogItems}
                </div>
            </div>


        </div>

    )
}

export default App;