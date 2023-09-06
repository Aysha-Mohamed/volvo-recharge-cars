import CarFilterProps from '../interfaces/CarFilterProps';
import { Select } from '@volvo-cars/react-forms';



const CarFilter: React.FC<CarFilterProps> = ({ cars, setFilteredCars }) => {


  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

    const selectedValue = event.target.value;


    const filteredList = selectedValue ?
      cars.filter((car) => car.bodyType === selectedValue) :
      cars;


    setFilteredCars(filteredList);
  }




  return (
    <div className="filter-car-wrapper">
      <Select onChange={handleFilterChange}
        name="bodyType"
        label="Select a car model"
        autoComplete="on">
        <option value="">
          All CARS
        </option>
        <option value="suv">SUV</option>
        <option value="estate">ESTATE</option>
        <option value="sedan">SEDAN</option>
      </Select>
    </div>

  )
}

export default CarFilter;