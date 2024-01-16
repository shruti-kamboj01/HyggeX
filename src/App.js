import "./App.css";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

function App() {
  return (
   <div className="w-11/12 mx-auto">
       <div > 
       <Navbar/> </div>

       <div className="mt-32 flex gap-x-2">
       <GoHome className="w-[20px] h-[21px] text-[#696671]"/>
       <IoIosArrowForward className="text-[#06286E] h-[14px] w-[10px] mt-1"/>
       <h1 className="text-[18px] font-medium text-[#696671]">Flashcard</h1>
       <IoIosArrowForward className="text-[#06286E]  h-[14px] w-[10px] mt-1"/>
       <h1  className="text-[18px] font-medium text-[#696671]">Mathemactics</h1>
       <IoIosArrowForward className="text-[#06286E]  h-[14px] w-[10px] mt-1"/>
       <h1 className="text-[#06286E] text-[18px] font-semibold">Relation and Function</h1>
       </div>

       <div> <MainSection/> </div>

       <div><Footer/> </div>
   </div>
  );
}

export default App;
