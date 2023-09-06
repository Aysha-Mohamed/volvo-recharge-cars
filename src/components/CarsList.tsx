import React, { useEffect, useState } from 'react';
import Car from '../interfaces/Car';
import CarFilter from '../components/CarFilter';
import { Splide,SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import Card from './Card';

const CarList:React.FC = () =>{

    const [cars,setCars] = useState<Car[]>([]);

   const [filteredCars,setFilteredCars] = useState<Car[]>([]);
    

    useEffect(()=>{
        fetch('/cars.json')
        .then((response)=>response.json())
        .then((data:Car[])=>{
          setCars(data);
          setFilteredCars(data);
        })
        .catch((error)=>console.log("Error fetching data",error));
    },[]);


   



    return(
      <>
        <CarFilter cars={cars} setFilteredCars={setFilteredCars}/>
        <div className='car-list-wrapper'>
        <Splide options={{
          perPage:4,
          breakpoints: {
            720: {
              perPage: 3
            },
            415: {
              perPage: 2
            }
          }
        }}>
            {/* <ul> */}
                {
                    filteredCars.map((car)=>(
                     <SplideSlide key={car.id}>
                            <Card car={car}/>
                     </SplideSlide>
                          
                     
                        
                    ))
                }
            {/* </ul> */}
            </Splide>
            
        </div>
      </>
        
    )
};

export default CarList;