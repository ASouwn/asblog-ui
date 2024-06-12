import React from "react";
const blog: BlogContent[] = [
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
        <div className={'bg-white bg-opacity-15'}>
            {/*展示个人介绍*/}
            <div>
                <p className={'text-white'}>个人说明，可以是markdown语句，也可以是图片加文字，个人倾向于支持图片的markdown，方便修改</p>
            </div>
            {/*博客展示位置*/}
            <div>{BlogItems}</div>
            {/*说说展示位置*/}
            <div>{TalkItems}</div>
        </div>

    )
}

export default App;