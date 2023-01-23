import axios from "axios";

function Main(props) {
    return (
        <>
            <div className="main-bg"/>
            <div className="container">
                <div className="row">
                    {
                        props.shoes.map((shoe) => {
                            return (
                                <Product shoe={shoe}/>
                            )
                        })
                    }
                </div>
                <button onClick={() => {
                    axios.get('https://codingapple1.github.io/shop/data' + props.pageNumber + '.json')
                        .then((res) => {
                            let copy = [...props.shoes, ...res.data]

                            props.setShoes(copy)

                            props.setPageNumber(props.pageNumber++)
                        })
                        .catch(
                            () => {
                                alert('잠시 후 다시 시도해주세요.')
                            }
                        )
                }}>버튼
                </button>
            </div>
        </>
    )
}

function Product(props) {
    return (
        <div className="col-md-4" id={props.shoe.id}>
            <img src={props.shoe.img} width="80%"/>
            <h4>{props.shoe.title}</h4>
            <p>{props.shoe.content}</p>
            <p>{props.shoe.price}</p>
        </div>
    )
}

export default Main;
