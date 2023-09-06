import Car from "./Car"

interface CarFilterProps {
    cars: Car[],
    setFilteredCars: React.Dispatch<React.SetStateAction<Car[]>>
  }

export default CarFilterProps;