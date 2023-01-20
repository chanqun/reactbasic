import './App.css';
import {useState} from "react";

function App() {
    let post = 'Development Blog';
    let [postNames, postNameChanger] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
    let [likeCount, likeCountModify] = useState(0);

    function changePostName() {
        let copy = [...postNames];
        copy[0] = '여자 코트 추천';

        postNameChanger(copy);
    }

    function addLikeCount() {
        likeCountModify(likeCount++);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{post}</h4>
            </div>

            <button onClick={changePostName}>글 수정</button>

            <div className="list">
                <h4>{postNames[0]} <span onClick={addLikeCount}>👍</span> {likeCount} </h4>
                <p>1월 19일 발행</p>
            </div>
            <div className="list">
                <h4>{postNames[1]}</h4>
                <p>1월 19일 발행</p>
            </div>
            <div className="list">
                <h4>{postNames[2]}</h4>
                <p>1월 19일 발행</p>
            </div>
        </div>
    );
}

export default App;
