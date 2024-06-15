import React from "react";
const blog: BlogContent[] = [
    {title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12'},
    {title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12'},
    {title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12'},
    {title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12'},
    {title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12'},
    {title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12'},
    {title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12'},
    {title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12'},
    {title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12'},
    {title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12'},
    {title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12'},
    {title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12'},
    {title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12'},
]
const talk: TalkContent[] = [
    {title: 'Talk Title', date: '2024-06-12', content: 'a talk i write'},
    {title: 'Talk Title', date: '2024-06-12', content: 'a talk i write'},
    {title: 'Talk Title', date: '2024-06-12', content: 'a talk i write'},
    {title: 'Talk Title', date: '2024-06-12', content: 'a talk i write'},
    {title: 'Talk Title', date: '2024-06-12', content: 'a talk i write'},
]
const BlogItems = blog.map((item, index) => <div className={'text-white'} key={index++}>
    <h2>{'['+item.tag+']'+item.title}</h2>
    <p>{item.date}</p>
    <line></line>
    <p>{item.content}</p>
</div>)
const TalkItems = talk.map((item, index) => <div className={'text-white'} key={index++}>
    <h2>{item.title}</h2>
    <p>{item.date}</p>
    <line></line>
    <p>{item.content}</p>
</div>)
const App:React.FC = () => {
    return (
        // 展示个人最近的说说与博客
        <div id="Information" className={'relative'}>
            
            {/*个人展示位置*/}
            <div className='absolute top-3 left-6 w-1/3 h-1/2 bg-black '>
                <p className='text-white'>asouwn粒子字符动画效果</p>
            </div>
            {/*博客展示位置*/}
            <div className="grid grid-flow-row overflow-auto absolute ml-80 bg-blue-300 w-1/2 h-3/4 ">{BlogItems}</div>
            {/*说说展示位置*/}
            <div className="grid grid-flow-row bg-red-300">{TalkItems}</div>
        </div>

    )
}

export default App;