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

둘다 성공했을때 Promise.all([axios.get('/url1'), axios.get('/url2')])

> props 중괄호로 받으면 바로 받을 수 있음

### 리액트의 automatic batching

비슷한 것은 한 번에 처리함

### Single Page Application 단점: 컴포넌트간 state 공유 어려움

Context API (성능이슈, 컴포넌트 재활용 어려움), redux props 전송없이 state 공유가능

```javascript
export let Context1 = createContext()

useContext()

< Context1.Provider
value = {
{
    재고
}
}>
```

재랜더리딩하면 안 쓰는 애들도 재렌더링 되기 때문에 성능 이슈, 재사용성이 떨어짐

### redux

redux store.js에서 state를 전부 빼서 사용할 수 있다.

### localStorage

state 초기화 되는 것 싫으면 서버로 보내서 DB에 저장하면 됨 차선책은 localStorage에 저장 (반영구적 저장 가능)

최대 5MB 까지 문서만 저장할 수 있음

```javascript
localStorage.setItem('age', '20')

localStorage.getItem('age')

localStorage.removeItem('age')
```

JSON.stringify JSON.parse()

redux-persist, localStorage Jotai, Zustand

### session storage

브라우저 끄면 날라감

### react query

- ajax 성공 실패 html 다르게
- 자동으로 ajax 요청
- 실패시 몇초 후 재시도
- prefetch
- caching 기능도 있음

자동 retry

``` javascript
let result = useQuery('name', () =>
            axios.get('https://codingapple1.github.io/userdata.json')
                .then((a) => {
                    return a.data
                }),
        {staleTime: 2000}
    )
```

### build 하면 하나의 js로 만들어져서 처음에 오래걸림

메인페이지에선 먼저 로드 할 필요 없는 것을 lazyloading 할 수 있음

```javascript
const Detail = lazy(() => import('./routes/Detail.js'));

<Suspense fallback={<div>로딩중</div>} component
```

### memo 꼭 필요할 때만 재렌더링해라
props가 변할 때만 재렌더링해줌
기존 props와 비교 작업을 계속하게 됨

```javascript
let Child = memo(function () {
    return (
        <div>자식임</div>
    )
})
```

### useMemo 컴포넌트 렌더링시 1회만 실행해줌

```javascript
useMemo(()=>{return 함수()}, [state])
```

### batch 기능
ajax, setTimeout 내부라면
어디있던 한번만 동작함

### useTransition 느린 컴포넌트 성능향상가능
useDeferredValue

### PWA 
```
npx create-react-app 프로젝트명 --template cra-template-pwa
```

manifest.json
manifest.json 파일은 웹앱의 아이콘, 이름, 테마색 이런걸 결정하는 부분

이걸 흉내내도록 도와주는 파일이 바로 service-worker
이 파일에 설정을 잘 해주면 이제 여러분의 웹앱을 설치했을 때 어떤 CSS, JS, HTML, 이미지 파일이 하드에 설치될지 결정할 수 있다.


### sync, async
async 이기 때문에 더 올라갈 수 있으니 state 변경 되면 실행해주게 할 수 있음
useEffect(()=>{

}, [count]) 


HTML5 이후에 추가된 웹개발 기본 기술

- FileReader API
- 로컬스토리지
- IndexedDB
- Web worker
- Geolocation
- Canvas
- drag & drop & touch 이벤트
- fetch API
- CSS grid, flex 레이아웃
- Web audio/video


참고
(수강생 작) 완벽한 하루 : 목표 달성 앱 https://jioo-developer.github.io/
(수강생 작) Firebase 더한 Velog https://hopeful-brown-a1e560.netlify.app/
리액트로 만든 테트리스 https://chvin.github.io/react-tetris/ (spacebar, 방향키 이용)
간단한 영화정보 검색기 https://skempin.github.io/reactjs-tmdb-app/
파일 버전관리 툴인 git 문법 배우기 앱 https://learngitbranching.js.org/
iOS 스타일 계산기 https://codepen.io/mjijackson/full/xOzyGX
가짜 주식 트레이딩 앱 http://web-demo.adaptivecluster.com/
캘린더 UI http://clauderic.github.io/react-infinite-calendar/
스케치패드 http://svrcekmichal.github.io/react-sketchpad/
솔리테르 Solitaire 게임 http://pl12133.github.io/react-solitaire/