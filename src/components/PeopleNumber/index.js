const PeopleNumber = ({numPeople, setNumPeople, calculateTip}) => {

    const handleNumPeopleChange = (e) => {
        setNumPeople(e.target.value);
        calculateTip();
    }


    return (
        <div className="form-group">
            <label htmlFor="numPeople">Number of People</label>
            <input
                type="number"
                className="form-control"
                id="numPeople"
                value={numPeople}
                onChange={handleNumPeopleChange}
            />
        </div>
    )
}


export default PeopleNumber