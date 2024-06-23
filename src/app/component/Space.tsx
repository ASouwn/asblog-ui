import React from "react";
const content = "I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way."
const talk: TalkContent[] = [
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
    { date: '2024-06-12', content: content },
]
const TalkItems = talk.map((item, index) => <div className={'text-white bg-gray-600 bg-opacity-35'} key={index++}>
    <p>{item.date}</p>
    <line></line>
    <p>{item.content}</p>
</div>)
const App: React.FC = () => {
    return (
        <div id="Space" className={"relative box-border p-12"}>
            <div className=" flex gap-x-4 bg-white bg-opacity-30">
                <div className="grid grid-flow-row overflow-auto h-[46rem] w-[36rem] gap-4">
                    {TalkItems}
                </div>
                <div className="overflow-auto h-[46rem] w-[72rem] flex-grow">
                {content}
                </div>
            </div>
        </div>

    )
}

export default App;