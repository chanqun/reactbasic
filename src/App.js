import './App.css';
import {useState} from "react";

function App() {
    let post = 'Development Blog';
    let [postNames, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{post}</h4>
            </div>
            <div className="list">
                <h4>{postNames[0]}</h4>
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
