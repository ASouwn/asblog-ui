import React from "react";
import Image from "next/image";
const App:React.FC = () => {
    return (
        <div className="relative box-border p-12">
            <Image src={'/mkm.png'} alt={''}/>
        </div>

    )
}

export default App;