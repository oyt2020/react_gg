import {useRef, useState} from "react";

function useRenderCount() {
    // TODO: 구현하세요

    const count = useRef(0);
    count.current ++;
    return count.current;
}

// 사용
function MyComponent() {
    const renderCount = useRenderCount();
    console.log(`렌더링 횟수: ${renderCount}`);
    function x () {
        setNum((prevNum)=>prevNum+1);
    }
    const [num,setNum] = useState(0)
    return (
        <div>
            테스트
            <p>{num}</p>
            <button onClick={x}>렌더링 발생</button>
        </div>
    )
}

export default MyComponent;