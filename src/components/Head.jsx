import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg h-72px">
      <div className="col-span-1 flex ">
      <img 
            onClick={() => toggleMenuHandler()}
            className="h-8 cursor-pointer"
            alt="menu"
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
       <img  className="h-8 mx-2" 
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" 
       alt="youtube-logo" />
      </div>
      
       <div className="col-span-10 px-10">
        <input className= "w-1/2 border border-gray-400 px-5 py-2 rounded-l-full " type="text" placeholder="Search" />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full">search</button>
       </div>
       <div className="col-span-1">
        <img  className="h-8" src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" alt="user-logo" />
       </div>
    </div>
  )
}

export default Head;