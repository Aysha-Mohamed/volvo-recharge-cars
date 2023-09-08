import Car from "./car-props";
interface SliderProps{
    filteredCars : Car[],
    setFilteredCars :  React.Dispatch<React.SetStateAction<Car[]>>
    }

export default SliderProps;