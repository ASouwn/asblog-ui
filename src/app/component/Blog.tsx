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
const BlogItems = blog.map((item, index) => <div className={'text-white'} key={index++}>
    <h2>{'['+item.tag+']'+item.title}</h2>
    <p>{item.date}</p>
    <line></line>
    <p>{item.content}</p>
</div>)
const App:React.FC = () => {
    return (
        // 展示博客
        <div id="Blog" className={'bg-white bg-opacity-30 overflow-auto'}>
            {BlogItems}
        </div>

    )
}

export default App;