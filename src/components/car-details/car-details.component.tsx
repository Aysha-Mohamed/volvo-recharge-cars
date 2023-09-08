import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { CarContext } from "../../context/car-context";
import Footer from "../mobile-footer/mobile-footer.component";

const CarDetails = () => {
  const { carId } = useParams();

  const carsListContext = useContext(CarContext);

  const carInfo = carsListContext.filter((car) => car.id === carId);

  return (
    <div className="volvo_v0">
      {carInfo.length && (
        <>
          <div className="w-md  container-md  pt-32 pb-32">
            <div className="flex-row justify-between text-left sm:text-center">
              <div>
                <h1>{carInfo[0].modelName}</h1>
                <p>{carInfo[0].bodyType}</p>
                <p className="pb-16">{carInfo[0].modelType}</p>
              </div>

              <div>
                <a
                  className="button-filled shop-btn"
                  data-color="accent"
                  href={`/shop/${carInfo[0].id}`}
                >
                  Shop
                </a>
              </div>
            </div>

            <img
              className="w-md"
              src={carInfo[0].imageUrl}
              alt={carInfo[0].modelName}
            />
          </div>

          <Footer carName={carInfo[0].modelName} carId={carInfo[0].id} />
        </>
      )}
    </div>
  );
};

export default CarDetails;
