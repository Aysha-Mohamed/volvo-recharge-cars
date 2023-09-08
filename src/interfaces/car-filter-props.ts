import Car from "./car-props"

interface CarFilterProps {
    cars: Car[],
    setFilteredCars: React.Dispatch<React.SetStateAction<Car[]>>
  }

export default CarFilterProps;