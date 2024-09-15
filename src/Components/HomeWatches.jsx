import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/counter/cartSlice';
import watchesData from './watches'; 

const HomeWatches = () => {
  const [watches, setWatches] = useState([]);
  const dispatch = useDispatch();
  const [quantity] = useState(1);

  const handleAddToCart = (watch) => {
    dispatch(addItemToCart({ ...watch, quantity }));
  };

  useEffect(() => {
    setWatches(watchesData); 
  }, []);

  return (
    <div className="d-flex flex-wrap gap-4 justify-content-center m-3">
      {
      watches.map((watch, index) => (
        <div className="card" key={watches.id} style={{ flex: '1 0 18%', maxWidth: '18%' }}>
          <img
            className="card-img-top"
            src={watch.image}
            alt={`${watch.image} image`}
            style={{ width: '200px', margin: 'auto' }}
          />
          <div className="card-body">
            <h4 className="card-title font-bold">{watch.name}</h4>
            <p className="card-text">{watch.description}</p>
            <hr />
            <div className="d-flex m-2 gap-2">
              {watch.colors.map((color) => (
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: color }}></div>
              ))}
            </div>
            <p className="text-base">Color: {watch.colorLabel}</p>
            <div className="price font-bold">Rs. {watch.price}</div>
            <div className="d-flex gap-1 align-items-center">
              <span className="line-through text-gray-500">${watch.originalPrice} |</span>
              <span className="ml-1 text-red-500">{watch.discount}% off</span>
            </div>
            <button
              className="bg-black text-white px-2 py-1 rounded-full text-sm hover:bg-gray-800 transition-all font-bold mt-2 transform hover:scale-110 duration-300"
              onClick={() => handleAddToCart(watch)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
    // </div>
  );
};

export default HomeWatches;
