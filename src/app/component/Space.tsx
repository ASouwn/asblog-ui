import React from "react";
const talk: TalkContent[] = [
    {title: 'Talk Title', date: '2024-06-12', content: 'a talk i write'},
    {title: 'Talk Title', date: '2024-06-12', content: 'a talk i write'},
    {title: 'Talk Title', date: '2024-06-12', content: 'a talk i write'},
    {title: 'Talk Title', date: '2024-06-12', content: 'a talk i write'},
    {title: 'Talk Title', date: '2024-06-12', content: 'a talk i write'},
]
const TalkItems = talk.map((item, index) => <div className={'text-white'} key={index++}>
    <h2>{item.title}</h2>
    <p>{item.date}</p>
    <line></line>
    <p>{item.content}</p>
</div>)
const App:React.FC = () => {
    return (
        <div>
            {TalkItems}
        </div>

    )
}

export default App;