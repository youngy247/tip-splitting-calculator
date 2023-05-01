const BillSection = ({billAmount, setBillAmount, calculateTip}) => {

    const handleBillChange = (e) => {
        setBillAmount(e.target.value)
        calculateTip()
    }

    return (
            <div className="form-group py-3">
                <label htmlFor="billAmount" className="py-2">Bill Amount</label>
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