import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(1);

    function increment(){
        setCount(count + 1);
    }

    return (<div>
        <p>{count}</p>
        <button onClick = {increment}>Add one</button>
    </div>)

}

export default Counter;