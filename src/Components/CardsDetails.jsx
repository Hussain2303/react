import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/counter/cartSlice';  
import { useParams } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader';

const CardsDetails = () => {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  const dataFetch = async () => {
    setLoader(true);
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const data = await response.json();
    setProduct(data);
    setLoader(false);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  return (
    <>   
      {loader ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <FadeLoader color="#000000" />
        </div>
      ) : (
        <div className="row container">
          <div className="col-lg-6">
            <img src={product.image} alt="Product" height="300px" width="300px" />
          </div>
          <div className="col-lg-6">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart (${product.price})
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardsDetails;
