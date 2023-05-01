import Button from "../Button";

const ResultSection = ({tipAmount, totalAmount,
                            tipPerPerson, setTipPerPerson,
                           setTotalAmount, setTipAmount,
                           calculateTip, reset}) => {

    const handleTipChange = (e) => {
        setTipAmount(e.target.value)
        calculateTip()
    }

    const handlePersonTipChange = (e) => {
        setTipPerPerson(e.target.value)
        calculateTip()
    }

    const handleTotalChange = (e) => {
        setTotalAmount(e.target.value)
        calculateTip()
    }

    return (
        <div className="resultSection d-flex flex-column justify-content-between">
            <div>
                <div className="row">
                    <div className="col-6">Total Tip</div>
                    <div className="col-6"
                         value={tipAmount}
                         onChange={handleTipChange}>${tipAmount}</div>
                </div>
                <div className="row">
                    <div className="col-6">Tip/person</div>
                    <div className="col-6"
                         value={tipPerPerson}
                         onChange={handlePersonTipChange}>${tipPerPerson}</div>
                </div>
                <div className="row">
                    <div className="col-6">Total/person</div>
                    <div className="col-6"
                         value={totalAmount}
                         onChange={handleTotalChange}>${totalAmount}
                    </div>
                </div>
            </div>
            <div className="align-bottom">
                <Button reset={reset}/>
            </div>
        </div>

    )
}

export default ResultSection