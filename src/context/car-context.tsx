import {createContext,useState,ReactNode,useEffect} from 'react';



import Car from '../interfaces/car-props';



interface Props {
    children?: ReactNode
}




export const CarContext = createContext<Car[]>([]);

export const CarProvider= ({ children}:Props) =>{

   

    const [cars,setCars] = useState<Car[]>([]);

    useEffect(()=>{
        fetch('/cars.json')
        .then((response)=>response.json())
        .then((data:Car[])=>{
          setCars(data);

        })
        .catch((error)=>console.log("Error fetching data",error));
    },[]);

    
    return(
        <CarContext.Provider value={cars}>
            {children}
        </CarContext.Provider>
    )
}



