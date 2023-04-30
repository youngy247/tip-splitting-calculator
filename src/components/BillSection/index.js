const BillSection = ({billAmount, setBillAmount, calculateTip}) => {

    const handleBillChange = (e) => {
        setBillAmount(e.target.value)
        calculateTip()
    }

    return (
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

    )
}

export default BillSection