## React

```javascript
let [a, b] = useState('남자 코트 추천');
```
a는 자료, b는 state 변경도와주는 함수

일반 변수는 변경감지가 안 된다.
state 쓰면 html은 자동 재렌더링됨


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