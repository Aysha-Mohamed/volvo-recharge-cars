import CarFilterProps from "../../interfaces/car-filter-props";
import { Select } from "@volvo-cars/react-forms";
import { View } from "vcc-ui";

const CarFilter: React.FC<CarFilterProps> = ({ cars, setFilteredCars }) => {
  let suvCount = 0;
  let sedanCount = 0;
  let estateCount = 0;
  let allCount = cars.length;

  cars.forEach((car) => {
    switch (car.bodyType) {
      case "suv":
        suvCount++;
        break;
      case "sedan":
        sedanCount++;
        break;
      case "estate":
        estateCount++;
        break;
    }
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    const filteredList = selectedValue
      ? cars.filter((car) => car.bodyType === selectedValue)
      : cars;

    setFilteredCars(filteredList);
  };

  return (
    <View
      extend={{
        margin: "0 auto",
        onlyS: {
          width: 300,
        },
        fromM: {
          width: 500,
        },
      }}
    >
      <Select
        onChange={handleFilterChange}
        name="bodyType"
        label="Select a car model"
        autoComplete="on"
      >
        <option value="">{`ALL CARS(${allCount})`}</option>
        <option value="suv">{`SUV(${suvCount})`}</option>
        <option value="estate">{`ESTATE(${estateCount})`}</option>
        <option value="sedan">{`SEDAN(${sedanCount})`}</option>
      </Select>
    </View>
  );
};

export default CarFilter;
