## React

```javascript
let [a, b] = useState('남자 코트 추천');
```
a는 자료, b는 state 변경도와주는 함수

일반 변수는 변경감지가 안 된다.
state 쓰면 html은 자동 재렌더링됨


state 변경원리
기존 state == 신규 state의 경우 변경 하지 않음

array, object 특징 - 포인터 저장하게 됨

