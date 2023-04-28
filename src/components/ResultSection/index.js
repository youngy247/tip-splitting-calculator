import Button from "../Button";

const ResultSection = ({tipAmount, totalAmount, setTotalAmount, setTipAmount, calculateTip}) => {

    const handleTipChange = (e) => {
        setTipAmount(e.target.value)
        calculateTip()
    }

    const handleTotalChange = (e) => {
        setTotalAmount(e.target.value)
        calculateTip()
    }

    return (
        <div className="d-flex flex-column justify-content-between">
            <div>
                <div className="row">
                    <div className="col-6">Tip Amount</div>
                    <div className="col-6"
                         value={tipAmount}
                         onChange={handleTipChange}>${tipAmount}</div>
                </div>
                <div className="row">
                    <div className="col-6">Total</div>
                    <div className="col-6"
                         value={totalAmount}
                         onChange={handleTotalChange}>${totalAmount}
                    </div>
                </div>
            </div>
            <div className="align-bottom">
                <Button />
            </div>
        </div>

    )
}

export default ResultSection