import { useEffect, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";

const CategoriesLists = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    // console.log(categories)
    return (
        <div className='max-w-6xl m-auto my-6'>
            <div className="text-center mb-4 space-y-3">
                <h2 className="text-4xl font-bold">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
                {
                    categories.map(category => <CategoryList key={category.id} category={category}></CategoryList>)
                }
            </div>
        </div>
    );
};

export default CategoriesLists;