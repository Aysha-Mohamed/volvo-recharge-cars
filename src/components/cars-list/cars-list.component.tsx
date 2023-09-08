import React, { useEffect, useState, useContext } from "react";
import Car from "../../interfaces/car-props";
import CarFilter from "../car-filter/car-filter.component";

import { CarContext } from "../../context/car-context";
import Slider from "../slider/slider.component";

const CarList: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);

  const cars = useContext(CarContext);

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  return (
    <div className="volvo_v0">
      <CarFilter cars={cars} setFilteredCars={setFilteredCars} />
      <Slider filteredCars={filteredCars} setFilteredCars={setFilteredCars} />
    </div>
  );
};

export default CarList;
