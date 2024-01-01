import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../store'


const CarList = () => {
    const cars = useSelector(state => state.cars.data);
    const dispatch = useDispatch();

    const handleDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map(car => {
        return (
            <div key={car.id} className="panel">
                <p >{car.name} - ${car.cost}</p>
                <button className='button is-danger' onClick={() => handleDelete(car)}>Delete</button>
            </div>
        );
    });
    return (
        <div className='car-list'>
            CarList
            {renderedCars}
        </div>
    )
}

export default CarList