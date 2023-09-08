
import './mobile-footer.styles.scss';
import FooterProps from '../../interfaces/footer-props';



const Footer:React.FC<FooterProps>= ({carName,carId}) => {
    return (
        <div className="bg-secondary p-16 mobile-footer border border-ornament flex-row justify-around items-center">
            <h3 className="text-always-black">{carName}</h3>
            <a  className="button-filled" data-color="accent" href={`/shop/${carId}`}>Shop</a>
        </div>
    )
}

export default Footer;