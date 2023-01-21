import {useParams} from "react-router-dom";
import {Button} from "react-bootstrap";

function Detail(props) {
    let {id} = useParams();
    let product = props.shoes.find(function (product) {
        return product.id = id
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
                </div>
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
