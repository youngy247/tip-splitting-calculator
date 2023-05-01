import { useEffect, useState } from "react";

const TipSelect = ({ tipPercentage, setPercentage, calculateTip }) => {
    useEffect(() => {
        setPercentage(0);
    }, []);

    const handleTipChange = (e) => {
        setPercentage(e.target.value);
        calculateTip();
    };

    const handleTipClick = (percentage) => {
        setPercentage(percentage);
    };

    return (
        <div className="container-fluid tip-select py-3">
            <label htmlFor="TipSelectBox" className="py-2">Select Tip %</label>

            <div className="row row-cols-2 row-cols-md-3 g-3">
                <div className="col">
                    <button
                        type="button"
                        className="btn btn-secondary w-100"
                        onClick={() => handleTipClick(5)}
                    >
                        5%
                    </button>
                </div>
                <div className="col">
                    <button
                        type="button"
                        className="btn btn-secondary w-100"
                        onClick={() => handleTipClick(10)}
                    >
                        10%
                    </button>
                </div>
                <div className="col">
                    <button
                        type="button"
                        className="btn btn-secondary w-100"
                        onClick={() => handleTipClick(15)}
                    >
                        15%
                    </button>
                </div>
                <div className="col">
                    <button
                        type="button"
                        className="btn btn-secondary w-100"
                        onClick={() => handleTipClick(25)}
                    >
                        25%
                    </button>
                </div>
                <div className="col">
                    <button
                        type="button"
                        className="btn btn-secondary w-100"
                        onClick={() => handleTipClick(50)}
                    >
                        50%
                    </button>
                </div>
                <div className="col">
                    <div className="input-group">
                        <input
                            id = "TipSelectBox"
                            type="number"
                            className="form-control"
                            placeholder="%"
                            value={tipPercentage}
                            onChange={handleTipChange}
                        />
                        <div className="input-group-append">
                            <span className="input-group-text">%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipSelect;
