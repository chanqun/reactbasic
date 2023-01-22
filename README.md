## React

```javascript
let [a, b] = useState('남자 코트 추천');
```

a는 자료, b는 state 변경도와주는 함수

일반 변수는 변경감지가 안 된다. state 쓰면 html은 자동 재렌더링됨

### state 변경원리

기존 state == 신규 state의 경우 변경 하지 않음

array, object 특징 - 포인터 저장하게 됨

<> fragment

### 컴포넌트 쓰기 좋은 경우

1. 반복적인 html 축약
2. 큰 페이지들
3. 자주변경되는 것들

### 동적인 UI 만들기

1. html css 미리 디자인 완성
2. state로 저장
3. state에 따라 UI 보여주기

### 부모에서 자식으로 state 전송 가능

props 문법 이용

### state 변경함수는 비동기 처리 됨

옛날 문법

```javascript
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '남자 코트 추천',
            date: '2020-12-01',
            like: 0
        }
    }

    render() {
        return (
            <div>{this.state.title}</div>
        <button onClick={() => {
            this.setState({like: this.state.like + 1})
        }}>버튼</button>
    )
    }
}
```

### src안의 모든 파일은 압축

public 폴더에 있던건 압축안됨 (./logo192.png) 바로 사용할 수 있음 나중에 sub경로에 발행하고 싶으면 경로를 수정해야함

```javascript
<img src={process.env.PUBLIC_URL + '/logo192.png'}/>
```

### navigate, nested routes, outlet

navigate(-1) 전 페이지 돌아가기

```javascript
<Route path="/about" element="<About/>">
    <Route path="member" element="<Member/>">
    </Route>
```

About이랑 Member 둘 다 볼 수 있게 할 수 있음 About 내부에 보여줄지 작성해주면 됨 <Outlet></Outlet>

### styled components

장점

- 스타일이 다른 js파일로 오염되지 않음
- 페이지 로딩시간 단축
- javascript 코드도 적용 가능함
- 기존 스타일 복사해서 custom도 가능

> App.module.css -> App.js 에만 적용하게도 가능

단점

- 재사용 export import가 많아짐
- js파일 매우복잡해짐
- 협업시 css 담당의 숙련도 이슈

```javascript
import styled from "styled-components";

let ColoredBtn = styled.button`
  background: ${props => props.bg};
  color: ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding: 10px;
`

    < ColoredBtn
bg = {"yellow"} > 버튼 < /ColoredBtn>

let NewBtn = styled.button(ColoredBtn)
```

### 컴포넌트 lifecycle

mount, update unmount

lifecycle 중간에 hook 훅 걸 수 있음

옛날에는

```javascript
componentDidMount()
componentDidUpdate()
componentDidUnmount()
```

요즘은 useEffect html 렌더링 후에 동작

```javascript
useEffect(() => {
    return () => {
        // clean up function > useEffect 동작 전 실행
        // 2초 사이에 재렌더링 되어버리면 버그가 생길 수 있음 / 기존 데이터요청은 제거해주세요 / unmount일때만 실행됨
    }
}, [state])
```

state넣으면 state 변경시만 작동함, [] 넣으면 재 랜더링시에도 동작하지 않음 (1회만 동작하도록)

### axios 여러개 보내려면
둘다 성공했을때
Promise.all([axios.get('/url1'), axios.get('/url2')])

> props 중괄호로 받으면 바로 받을 수 있음

### 리액트의 automatic batching
비슷한 것은 한 번에 처리함
