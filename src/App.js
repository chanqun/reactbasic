import './App.css';
import {useState} from "react";

function App() {
    let post = 'Development Blog';
    let [postNames, setPostNames] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
    let [likeCount, setLikeCount] = useState(0);
    let [modal, setModal] = useState(false);

    function changePostName() {
        let copy = [...postNames];
        copy[0] = '여자 코트 추천';

        setPostNames(copy);
    }

    function addLikeCount() {
        setLikeCount(likeCount++);
    }

    function sortPostName() {
        let copy = [...postNames];
        copy.sort();

        setPostNames(copy);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{post}</h4>
            </div>

            <button onClick={changePostName}>글 수정</button>
            <button onClick={sortPostName}>가나다 정렬</button>

            <div className="list">
                <h4>{postNames[0]} <span onClick={addLikeCount}>👍</span> {likeCount} </h4>
                <p>1월 19일 발행</p>
            </div>
            <div className="list">
                <h4>{postNames[1]}</h4>
                <p>1월 19일 발행</p>
            </div>
            <div className="list">
                <h4 onClick={() => {
                    setModal(!modal)
                }}>{postNames[2]}</h4>
                <p>1월 19일 발행</p>
            </div>

            {
                modal ? <Modal></Modal> : null
            }
        </div>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}

export default App;
