import React from "react";
const blog: BlogContent[] = [
    { title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12' },
    { title: 'Blog Title', tag: 'Java', content: 'java is the best code should we all do study it', date: '2024-06-12' },
]
const talk: TalkContent[] = [
    { date: '2024-06-12', content: 'a talk i write' },
    { date: '2024-06-12', content: 'a talk i write' },
    { date: '2024-06-12', content: 'a talk i write' },
    { date: '2024-06-12', content: 'a talk i write' },
    { date: '2024-06-12', content: 'a talk i write' },
]
const BlogItems = blog.map((item, index) => <div className={'text-white'} key={index++}>
    <h2>{'[' + item.tag + ']' + item.title}</h2>
    <p>{item.date}</p>
    <line></line>
    <p>{item.content}</p>
</div>)
const TalkItems = talk.map((item, index) => <div className={'text-white'} key={index++}>
    <p>{item.date}</p>
    <line></line>
    <p>{item.content}</p>
</div>)
const App: React.FC = () => {
    return (
        // 展示个人最近的说说与博客
        <div id="Information" className={'relative box-border p-12'}>
            <div className="flex justify-between w-full h-full gap-x-2">
                <div className="bg-white top-[9.5rem] left-0 w-[34rem] h-[46rem] ">
                    item_left
                    <div className="grid grid-flow-col text-center gap-2 px-2">
                        <a className="bg-blue-400" href="">说说</a>
                        <a className="bg-blue-400" href="">博客</a>
                    </div>
                </div>
                <div className="bg-blue-400 w-[83.125rem] h-[46rem] ">
                    item_right
                </div>
            </div>


        </div>

    )
}

export default App;