
import CardProps from "../../interfaces/CardProps";
import './card.styles.scss';
import { View } from 'vcc-ui';

const Card: React.FC<CardProps> = ({ car }) => {


    const carIdType = car.id.split("-")[0];

    return (
        <View
            className="flex-col p-16 tap-area card-hover m-48"
            style={{
                width: '18rem'
            }}
            extend={{
                onlyS:{
                    margin: 16
                }
            }}
        >
            <a
                aria-labelledby={`card-heading-${car.id}`}
                className="mb-16 stack-4"
                data-tap-area-target
                href={`/learn/${car.id}`}
                
            >
                <p className="text-secondary micro font-medium uppercase ">
                    {car.bodyType}
                </p>
                <h3
                    className="body-16 text-secondary flex-col"
                    id={`card-heading-${car.id}`}
                >
                    <span className="font-medium text-primary">
                        {car.modelName}
                    </span>
                    <span>
                        {car.modelType}
                    </span>
                </h3>
                <div className="car-image-wrapper">
                <img

alt={car.modelName}
src={car.imageUrl}
/>
                </div>
                
            </a>
            <div className="flex flex-wrap gap-x-24 justify-center">
                <a
                    aria-labelledby={`card-heading-${car.id} card-action-${carIdType}-learn`}
                    className="button-text text-accent-blue"
                    href={`/learn/${car.id}`}
                    id={`card-action-${carIdType}-learn`}
                >
                    Learn
                </a>
                <a
                    aria-labelledby={`card-heading-${car.id} card-action-${carIdType}-shop`}
                    className="button-text text-accent-blue"
                    href={`/shop/${car.id}`}
                    id={`card-action-${carIdType}-shop`}
                >
                    Shop
                </a>
            </div>
        </View>


    )
}

export default Card;