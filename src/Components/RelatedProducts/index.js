import React from 'react';
import "./index.css";

const RelatedProducts = () => {
  const relatedProducts = [
    {
      id: 3,
      name: 'Samsung Galaxy A71 12GB+256GB',
      description: 'Description for related product 1',
      image: 'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2020/05/2.jpg?ssl=1',
      price: 12999,
    },
    {
      id: 5,
      name: 'Samsung Galaxy A32 12GB+256GB',
      description: 'Description for related product 1',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/nz/sm-a736blgdxnz/gallery/nz-galaxy-a73-5g-a736-sm-a736blgdxnz-531966905',
      price: 31999,
    },
    {
      id: 6,
      name: 'Samsung Galaxy A33 12GB+256GB',
      description: 'Description for related product 1',
      image: 'https://vivirmejor.mx/wp-content/uploads/2022/08/galaxy-m53-verde.webp',
      price: 24999,
    },
    {
      id: 7,
      name: 'Samsung Galaxy S23 12GB+256GB',
      description: 'Description for related product 2',
      image: 'https://vivirmejor.mx/wp-content/uploads/2022/08/galaxy-m53-verde.webp',
      price: 41999,
    },
    {
      id: 8,
      name: 'Samsung Galaxy A9 Ultra 8GB+256GB',
      description: 'Description for related product 1',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a235fzouafa/gallery/africa-en-galaxy-a23-sm-a235-sm-a235fzouafa-531580023?$650_519_PNG$',
      price: 29299,
    },
    {
      id: 9,
      name: 'Samsung Galaxy S9 8GB+256GB',
      description: 'Description for related product 2',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/ie/sm-a236bzkueub/gallery/ie-galaxy-a23-5g-sm-a236-sm-a236bzkueub-533588581?$720_576_JPG$',
      price: 31999,
    },
  ];

  return ( // Return the JSX here
    <div className="container7">
      {relatedProducts.map((product) => (
        <div className="card7" key={product.id}>
          <div className="content7">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="price-tag7">
              {product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
            </div>
          </div>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default RelatedProducts;
