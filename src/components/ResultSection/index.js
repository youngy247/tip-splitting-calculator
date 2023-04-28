import Button from "../Button";

const ResultSection = ({tipAmount, totalAmount}) => {



    return (
        <div className="d-flex flex-column justify-content-between">
            <div>
                <div className="row">
                    <div className="col-6">Tip Amount</div>
                    <div className="col-6">${tipAmount}</div>
                </div>
                <div className="row">
                    <div className="col-6">Total</div>
                    <div className="col-6">${totalAmount}</div>
                </div>
            </div>
            <div className="align-bottom">
                <Button />
            </div>
        </div>

    )
}

export default ResultSection