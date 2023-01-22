import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addCount} from "../store/cartSlice";

function Cart() {
    let state = useSelector((state) => state)
    let dispatch = useDispatch()

    return (
        <div>
            <h6>{state.user.name}의 장바구니</h6>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
                </thead>
                <tbody>
                {
                    state.cart.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{data.name}</td>
                                <td>{data.count}</td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(addCount(data.id))
                                    }}>+
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;
