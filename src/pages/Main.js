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
