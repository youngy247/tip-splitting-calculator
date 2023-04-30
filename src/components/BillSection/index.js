const BillSection = ({billAmount, setBillAmount, calculateTip}) => {

    const handleBillChange = (e) => {
        setBillAmount(e.target.value)
        calculateTip()
    }

    return (
        <div>
            <h1>Tip Calculator</h1>
            <div className="form-group">
                <label htmlFor="billAmount">Bill Amount</label>
                <input
                    type="number"
                    className="form-control"
                    id="billAmount"
                    value={billAmount}
                    onChange={handleBillChange}
                />
            </div>
        </div>

    )
}

export default BillSection