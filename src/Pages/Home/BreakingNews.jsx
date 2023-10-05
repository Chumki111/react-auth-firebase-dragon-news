import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-3 mt-4 rounded-md">
            <button className="btn btn-secondary">Latest</button>
            <Marquee speed={100}>
               <Link to='/' className="mr-10"> I can be a React component, multiple React components, or just some text..........
               </Link>
               <Link to='/' className="mr-10"> I can be a React component, multiple React components, or just some text..........
               </Link>
               <Link to='/' className="mr-10"> I can be a React component, multiple React components, or just some text..........
               </Link>
               <Link to='/' className="mr-10"> I can be a React component, multiple React components, or just some text..........
               </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;