import {useEffect, useMemo, useState} from "react";

function useHistoryState(initialState){
    const [value,setValue] = useState(initialState);
    const[canUndo, setCanUndo] = useState(false);
    const[canRedo, setCanRedo] = useState(false);
    const [history, setHistory] = useState([initialState]);
    const [index,setIndex] = useState(0); // 위치 기억할 인덱스
    // 이전

    const undo = () => {
        setIndex((prevIndex)=> prevIndex-1);
        setValue(history[index])
    };
    const redo = () => {
        setIndex((prevIndex)=> prevIndex+1);
        setValue(history[index])
    };
    const setUpdateWithHistory = (count) => {
        //히스토리 업데이트
        // 히스토리 업데이트 하고 setValue 할 것\
        setIndex((prevIndex) => Math.min(prevIndex+1,9))
        setHistory((prevHistory) => {
            if([...prevHistory,count].length > 10 ){
                return [...prevHistory.slice(1),count];
            }
            return [...prevHistory, count]}
        );
        setValue(count);
        console.log(history);
        console.log(index);
    }
    useEffect(()=>{
        setCanUndo(index > 0);
        setCanRedo(index < history.length-1);
    },[index,history]);
    const value2 = useMemo(()=>{
        return history[index];
    },[index,history])

    return {value,setValue:setUpdateWithHistory,canUndo,undo,redo,canRedo,history,index};
}

function Counter() {
    const { value, setValue,history,index, undo, redo, canUndo, canRedo } = useHistoryState(0);
    return (
        <div style = {{padding: 20}}>
            <p>값: {value}</p>
            <p>인덱스 : {index}</p>
            <p>배열 : {JSON.stringify(history)}</p>
            <button onClick={() => setValue(value+1)}>+1</button>
            <button onClick={undo} disabled={!canUndo}>Undo</button>
            <button onClick={redo} disabled={!canRedo}>Redo</button>
        </div>
    );
}

export default Counter;