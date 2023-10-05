import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories] = useState([])

    useEffect(() =>{
           fetch('categories.json')
           .then(res => res.json())
           .then(data =>setCategories(data))
    },[])
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">All Category</h2>
            {
                categories?.map (category => <Link 
                className="block text-lg font-medium space-y-4 text-center hover:bg-[#F3F3F3] p-4 rounded-md"
                     key={category.id}
                     to={`/category/${category.id}`}
                     >{category.name}
                     </Link>)
            }
        </div>
    );
};

export default LeftSideNav;