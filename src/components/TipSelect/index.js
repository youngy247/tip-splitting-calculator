const TipSelect = () => {
    return (
        <div>
            <div>Select Tip</div>
            <div className="row">

            <button className="btn btn-secondary col-4">5%</button>
            <button className="btn btn-secondary col-4">10%</button>
            <button className="btn btn-secondary col-4">15%</button>
            </div>
            <div className="row">
            <button className="btn btn-secondary col-4">25%</button>
            <button className="btn btn-secondary col-4">50%</button>
            <input type="number" className="col-4"/>
            </div>
        </div>
    )
}

export default TipSelect