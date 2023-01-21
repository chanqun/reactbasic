import './App.css';
import {useState} from "react";

function App() {
    let post = 'Development Blog';
    let [postNames, setPostNames] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
    let [likeCount, setLikeCount] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [titleIndex, setTitleIndex] = useState(0);
    let [inputValue, setInputValue] = useState('');

    function addLikeCount(index) {
        let copy = [...likeCount];
        copy[index]++

        setLikeCount(copy);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{post}</h4>
            </div>

            {
                postNames.map(function (postName, index) {
                    return <div className="list" key={index}>
                        <h4 onClick={() => {
                            setModal(!modal)
                            setTitleIndex(index)
                        }}>{postName} <span onClick={addLikeCount}>👍</span> {likeCount[index]} </h4>
                        <p>1월 19일 발행</p>
                        <button onClick={() => {
                            let copy = [...postNames];
                            copy.splice(index, 1);
                            setPostNames(copy);}
                        }>삭제</button>
                    </div>
                })
            }

            <input onChange={(e) => {
                setInputValue(e.target.value)
            }}/>
            <button onClick={() => {
                let copy = [...postNames];
                copy.unshift(inputValue);
                setPostNames(copy);
            }}>글추가</button>

            {
                modal ? <Modal titleIndex={titleIndex} postNames={postNames} setPostNames={setPostNames}
                               color={"skyblue"}/> : null
            }
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal" style={{background: props.color}}>
            <h4>{props.postNames[props.titleIndex]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글수정</button>
        </div>
    );
}

export default App;
