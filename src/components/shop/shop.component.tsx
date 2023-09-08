import {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CarContext } from '../../context/car-context';
 
const Shop = () =>{

    const cars = useContext(CarContext);
    const { carId } = useParams();

  

    const carShop = cars.filter((car)=> car.id === carId) 
 
    
    

    


    return(
        <div className='volvo_v0'>

        {carShop.length&&
          
          <div className='w-md container-md text-center pt-32 pb-32'>
              <h2>{`Design your ${carShop[0].modelName}`}</h2>
              <p>{carShop[0].bodyType}</p>
              <p className='pb-16'>{carShop[0].modelType}</p>
              <img src={carShop[0].imageUrl} alt={carShop[0].modelName}/>
                </div>
          
        
          
 }

        
         </div>
            
           
        
        
       
    )

}

export default Shop;