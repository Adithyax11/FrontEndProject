import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../Context/StoreContext';
import FoodCard from '../FoodCard/FoodCard'; // You can later rename this to ProductCard for better clarity

const ProductDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext); // Still called food_list for now, you can rename later

    return (
        <div className="food-display" id="product-display">
            <h2>Top Football Gear for You</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category)
                        return (
                            <FoodCard
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        );
                })}
            </div>
        </div>
    );
};

export default ProductDisplay;
