import { recipes } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalVisible, setModalData } from "../store/modalSlice";
import SingleProduct from "./SingleProduct/SingleProduct";

const Recipe = () => {
    const dispatch = useDispatch();
    const { isModalVisible } = useSelector((state) => state.modal);

    const viewModalHandler = (data) => {
        dispatch(setModalData(data));
        dispatch(setIsModalVisible(true));
    };
    return (
        <div className="section" id="recipe">
            {isModalVisible && <SingleProduct />}
            <div className="flex flex-col items-center">
                <div className="text-3xl text-center font-bold mb-16">Hot selling Recipe</div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
                    {recipes.map((recipe) => {
                        return (
                            <div
                                className=" p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"
                                key={recipe.id}
                            >
                                <img src={recipe.image} alt="" className="rounded-lg mb-4" />
                                <div className="flex justify-between mb-4">
                                    <div className="md:text-xl text-[1rem] font-semibold">
                                        {recipe.name}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button>-</button>
                                        <span className="text-[0.85rem]">2</span>
                                        <button>+</button>
                                    </div>
                                </div>
                                <p className="text-[0.85rem] opacity-70 mb-4">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Expedita hic excepturi laudantium. Doloremque eveniet provident
                                    quo nihil ipsum?
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-semibold">{recipe.price}</span>
                                    <span
                                        className="cursor-pointer p-3 btn"
                                        onClick={() => viewModalHandler(recipe)}
                                    >
                                        Add to Cart
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="btn cursor-pointer">View All Recipes</div>
            </div>
        </div>
    );
};

export default Recipe;
