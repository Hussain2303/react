import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/counter/cartSlice';
import data from './data'; // 
const Homecards = () => {
  const [quantity] = useState(1);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addItemToCart({ ...product, quantity }));
  };
  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    // <div className="container">
      <div className="d-flex justify-content-center gap-3 flex-wrap" >
        {products.map((product) => (
          <div className="card" key={product.id} style={{ flex: '1 0 18%', maxWidth: '18%' }}>
            <img
              className="card-img-top"
              src={product.image}
              alt={product.name}
              style={{ width: '200px', height: 'auto' }}
            />
            <div className="card-body">
              <h4 className="card-title font-bold">{product.name}</h4>
              <p className="card-text">{product.description}</p>
              <hr />
              <div className="d-flex m-2 gap-2">
                {/* Color options */}
                <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <p className="text-base">Color: {product.color}</p>
              <div className="price font-bold">Rs. {product.price}</div>
              <div className="d-flex gap-1">
                <span className="line-through text-gray-500 mt-6">
                  ${product.originalPrice} |
                </span>
                <span className="ml-1 text-red-500 mt-6">{product.discount}% off</span>
              </div>
              <button
                className="bg-black text-white px-2 py-2 mt-2 rounded-full text-sm hover:bg-gray-800 transition-all transform hover:scale-110 duration-300 ease-in font-bold"
                onClick={() => handleAddToCart(product)}
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

export default Homecards;
