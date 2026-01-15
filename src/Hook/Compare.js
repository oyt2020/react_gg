import {useRef, useState} from "react";

function useWhyDidYouUpdate(props){
    // TODO: 구현하세요
    // 어떤 prop이 변경되었는지 콘솔에 출력
    const previousProps =useRef();
    if(!previousProps){
        return;
    }
    console.log("before : " + previousProps.current + " after : " + props);

    // const previousPropskeys = Object.keys(previousProps.current)
    // const propsKeys = Object.keys(props)
    //
    // const keys = new Set([...previousPropskeys,...propsKeys]);

    //console.log(keys)
      previousProps.current = props


}

// 사용
function M(props) {

    const[rand,setRand]=useState();
    useWhyDidYouUpdate(rand);
    function y(){
        setRand(Math.random())
    }
    return(
        <div style = {{padding:20}}>
            <p>{rand}</p>
            <button onClick={y}>랜덤 숫자 변환</button>
        </div>
    )
    // 콘솔: [MyComponent] 변경된 props: { count: { from: 1, to: 2 } }
}

export default M