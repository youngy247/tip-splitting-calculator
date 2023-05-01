const PeopleNumber = ({numPeople, setNumPeople, calculateTip}) => {

    const handleNumPeopleChange = (e) => {
        const value = parseInt(e.target.value)
        if (value < 1){
            setNumPeople(1)
        } else {
            setNumPeople(value)
        }
        calculateTip();
    }


    return (
        <div className="form-group py-3">
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