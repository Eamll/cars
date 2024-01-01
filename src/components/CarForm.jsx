import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName, updateCost, addCar } from '../store';
const CarForm = () => {

    const dispatch = useDispatch();
    const name = useSelector(state => state.form.name);
    const cost = useSelector(state => state.form.cost);

    const handleChangeName = (event) => {
        dispatch(updateName(event.target.value));
    }
    const handleChangeCost = (event) => {
        dispatch(updateCost(parseInt(event.target.value) || 0));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost }));
    }

    return (
        <div className="car-form panel">
            <h4 className='subtittle is-3'>Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input type="text" className="input is-expanded"
                            value={name}
                            onChange={handleChangeName} />
                    </div>

                    <div className="field">
                        <label className="label">Cost</label>
                        <input type="text" className="input is-expanded"
                            value={cost || ''}
                            onChange={handleChangeCost}
                        />
                    </div>

                    <div className="field">
                        <div className="control">
                            <button className="button is-link" type='submit'>Add</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default CarForm