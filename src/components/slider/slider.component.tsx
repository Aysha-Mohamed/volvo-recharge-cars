import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from '../card/card.component';
import SliderProps from '../../interfaces/slider-props';
import "./styles.scss"




const Slider:React.FC<SliderProps> = ({ filteredCars, setFilteredCars}) =>{

    return(
        <div className='car-list-wrapper'>
        <Splide options={{
          perPage: 4,
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
              gap: 0,
              fixedWidth: 'auto'

            },
            920: {
              perPage: 3,
              arrows: false,
              pagination: true
            },
            1024: {
              perPage: 3,
              arrows: true,
              pagination: false
            }
          }
        }}>

          {
            filteredCars.map((car) => (
              <SplideSlide key={car.id}>
                <Card car={car} />
              </SplideSlide>
            ))
          }

        </Splide>

      </div>

    )
}

export default Slider;