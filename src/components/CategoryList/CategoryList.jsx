
const CategoryList = ({category}) => {
    const {logo, category_name, availability} = category;
    console.log(category)
    return (
        <div className="p-4">
            <div className="bg-slate-50 px-6 py-4 rounded-xl space-y-3">
                <img className="bg-blue-50 p-4 rounded-xl" src={logo} alt="" />
                <h2>{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default CategoryList;