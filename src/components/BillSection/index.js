import {useState} from "react";

const BillSection = () => {

    const [billAmount, setBillAmount] = useState('')

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
                    onChange={(e) => setBillAmount(e.target.value)}
                />
            </div>
        </div>

    )
}

export default BillSection