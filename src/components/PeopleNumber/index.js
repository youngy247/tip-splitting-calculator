import {useState} from "react";

const PeopleNumber = () => {

    const [numPeople, setNumPeople] = useState('')

    return (
        <div className="form-group">
            <label htmlFor="numPeople">Number of People</label>
            <input
                type="number"
                className="form-control"
                id="numPeople"
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
            />
        </div>
    )
}


export default PeopleNumber