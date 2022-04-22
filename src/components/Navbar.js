import "./Navbar.css"
import sneaker from '../assets/sneaker.png'

export default function Navbar() {
    return(

        <div className="Navbar">
            <img src={sneaker} alt="Logo" />
            <h1>Zaps</h1>
            
                <h3>Brands</h3>
                <h3>Sales</h3>
                <h3>New Arrivals</h3>
            
            
        </div>

    );
}