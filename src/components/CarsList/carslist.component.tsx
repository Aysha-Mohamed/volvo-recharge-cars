import React, { useEffect, useState } from 'react';
import Car from '../../interfaces/Car';
import CarFilter from '../CarFilter/carfilter.component';
import { Splide,SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import Card from '../Card/card.component';
import './styles.scss';

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
            820: {
              perPage: 2,
              pagination: true,
              arrows: false
            },
            415: {
              perPage: 1,
              arrows: false,
              pagination: true,
              gap: 0, // Remove the gap
              fixedWidth: 'auto'
              
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