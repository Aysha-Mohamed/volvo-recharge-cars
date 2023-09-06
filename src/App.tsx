import React from 'react';
import CarList from './components/CarsList/carslist.component';
import { Wordmark } from '@volvo-cars/react-icons';



function App() {
  return (
    <div className="volvo_v0">
      <Wordmark className='m-24'/>

      <CarList/>
    </div>
    
  );
}

export default App;
