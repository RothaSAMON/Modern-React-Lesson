import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
    const dispatch = useDispatch();

    // This is for the value of the form input
    const {name, cost} = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    };

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0
        dispatch(changeCost(carCost));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //This object name, cost is from the useSelector
        dispatch(addCar({ name: name, cost: cost }));

        //Code below is about to reset the submit form after we input to default :
        //Anyway it not good practice :
        // dispatch(changeCost(0));
        // dispatch(changeName(''));
    };

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input 
                            className="input is-expended"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div className="field">
                        <label className="label">Cost</label>
                        <input 
                            className="input is-expended"
                            value={cost || ''}
                            onChange={handleCostChange}
                            type="number"
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CarForm;