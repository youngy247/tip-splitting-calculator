import { useEffect, useState } from "react";

const TipSelect = () => {
    const [tip, setTip] = useState(0);

    useEffect(() => {
        setTip(0);
    }, []);

    const handleTipClick = (percentage) => {
        setTip(percentage);
    };

    return (
        <div>
            <div>Select Tip</div>
            <div className="row">
                <button
                    className="btn btn-secondary col-4"
                    onClick={() => handleTipClick(5)}
                >
                    5%
                </button>
                <button
                    className="btn btn-secondary col-4"
                    onClick={() => handleTipClick(10)}
                >
                    10%
                </button>
                <button
                    className="btn btn-secondary col-4"
                    onClick={() => handleTipClick(15)}
                >
                    15%
                </button>
            </div>
            <div className="row">
                <button
                    className="btn btn-secondary col-4"
                    onClick={() => handleTipClick(25)}
                >
                    25%
                </button>
                <button
                    className="btn btn-secondary col-4"
                    onClick={() => handleTipClick(50)}
                >
                    50%
                </button>
                <input
                    type="number"
                    className="col-4"
                    onChange={(e) => setTip(e.target.value)}
                    value = {tip}
                    placeholder="Custom"
                />
            </div>
        </div>
    );
};

export default TipSelect;
