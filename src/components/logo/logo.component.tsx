import { Wordmark } from "@volvo-cars/react-icons";
import { Outlet,Link } from 'react-router-dom';


const Logo = () =>{
    return(
        <div className="volvo_v0">
            <Link to="/">
            <Wordmark className="m-24"/>
            </Link>
            <Outlet />
        </div>
        

    )
}

export default Logo;