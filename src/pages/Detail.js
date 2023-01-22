import {useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";

function Detail(props) {
    let {id} = useParams();
    let product = props.shoes.find(function (product) {
        return product.id = id
    });

    let [num, setNum] = useState('')

    useEffect(()=>{
        if (isNaN(num) == true){
            alert('숫자만 입력해주세요')
        }
    }, [num])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
                </div>
                <input onChange={(e)=>{ setNum(e.target.value) }} />
                <div className="col-md-6">
                    <h4 className="pt-5">{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price}원</p>
                    <Button className="btn btn-danger">주문하기</Button>
                </div>
            </div>
        </div>
    )
}

export default Detail;
