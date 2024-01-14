import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);

    if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 ">
 
        <ul>
            <Link to="/"> <li>Home</li></Link>
            <li>Shorts</li>
            <li>Subscrpiton</li>  
           
        </ul>
    <h1 className="font-bold">Explore</h1>
        <ul>
            <li>Movies</li>
            <li>sports</li>
            <li>games</li>   
            <li>Music</li> 
        </ul>
    </div>
  )
}

export default Sidebar      