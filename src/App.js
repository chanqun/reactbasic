import './App.css';
import {useState} from "react";

function App() {
    let post = 'Development Blog';
    let [postName, _] = useState('남자 코트 추천');

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{post}</h4>
            </div>
            <div className="list">
                <h4>{postName}</h4>
                <p>1월 19일 발행</p>
            </div>
        </div>
    );
}

export default App;
