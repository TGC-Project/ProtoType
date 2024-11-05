import React, { useState, useEffect } from 'react';
import './RelatedProduct.css';


const ProductService = () => {
    const newArrivals = [
        {
            name: 'The Mini Sling Bag',
            price: '₹599.00',
            AMP : '₹399.00',
            image: 'https://storage.googleapis.com/a1aa/image/17WG4HGYOHJWIRHiptsuHt0Ktqqm22eYc3P5xQY3dKMEPx0JA.jpg'
          },
          {
              name: 'Auqa Filter',
              price: '₹599.00',
              AMP : '₹399.00',
              image: 'https://aquafreshrosystem.com/wp-content/uploads/2024/01/Aqua-Natural-RO.png'
            },
            {
              name: 'Ecobubble washing machine',
              price: '₹599.00',
              AMP : '₹399.00',
              image: 'https://i.pinimg.com/736x/b9/3a/78/b93a781a6e4cc915d60f5bdf92c460e6.jpg'
            },
            {
              name: 'SAMSUNG 8 kg with Steam',
              price: '₹599.00',
              AMP : '₹399.00',
              image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/washing-machine-new/t/u/0/-original-imah4mej36j7z7a7.jpeg?q=90&crop=false'
            },
            {
              name: 'Samsung Bespoke Burners',
              price: '₹599.00',
              AMP : '₹399.00',
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDn8BfHmIBGQGwaLCwYUWH-JDR2quAyv8ibQ&s'
            },
            {
                name: 'LG Refrigerator',
                price: '₹599.00',
                AMP : '₹399.00',
                image: 'https://hips.hearstapps.com/hmg-prod/images/gh-113021-ghi-best-fridges-1638385441.png?crop=0.486xw:0.746xh;0.0385xw,0.160xh&resize=640:*'
              },
              {
                name: 'LG Palash 600 Watt Mixer',
                price: '₹599.00',
               AMP : '₹399.00',
                image: 'https://www.wonderchef.com/cdn/shop/files/Image2_59cf4e01-8ee5-4343-8435-35b589744b7b_1024x1024@2x.jpg?v=1718097302'
              },
              {
                name: 'Mr.Cook Palash 600 Watt Mixer',
                price: '₹599.00',
                 AMP : '₹399.00',
                image: 'https://unitedgrouponline.com/cdn/shop/files/mrcookpalash3_1024x1024.jpg?v=1703265476'
              },
    
      // Add more products as needed...
    ];
  
    const tradeIndiaTrusted = [
        {
            name: 'Office Chair',
            price: '₹599.00',
           AMP : '₹399.00',
            image: 'https://belfurniture.com/cdn/shop/files/7109d991-2db3-4fd1-a7c5-8b1b21aa5447_930x.jpg?v=1727716566'
          },
          {
              name: 'Books Shelfs',
              price: '₹599.00',
              AMP : '₹399.00',
              image: 'https://www.nilkamalfurniture.com/cdn/shop/products/ITRONEWBCASEWNT_05_large.jpg?v=1635158354'
            },
            {
              name: 'Relexo Sofa',
              price: '₹599.00',
              AMP : '₹399.00',
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYn5TKaQDQcgVJnxM7FyuOO6VFf3uaX2PDZS3pWilIXkfFp45_VMkqGH6HsXl574nJTA&usqp=CAU'
            },
            {
              name: 'nico Sofa',
              price: '₹599.00',
              AMP : '₹399.00',
              image: 'https://www.godrejinterio.com/imagestore/B2C/56101502SD01898/56101502SD01898_A2_803x602.jpg'
            },
            {
              name: 'Corporate Sofa',
              price: '₹599.00',
              AMP : '₹399.00',
              image: 'https://thesleepcompany.in/cdn/shop/files/Artboard_1_ff12fb07-a7ef-4cc7-9cea-67f4815ca8eb.webp?v=1720604274'
            },
            {
              name: 'Boss Chair',
              price: '₹599.00',
              AMP : '₹399.00',
              image: 'https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/571b6719-7395-4a26-ba1e-1ad83800374c/438e28fb-aaaa-4cb0-8874-df6c0caa4276/media._SL480_.jpeg'
            },
            {
              name: 'Book Table',
              price: '₹599.00',
              AMP : '₹399.00',
              image: 'https://ebansal.com/cdn/shop/products/model39-w-02_1500x1500_8a656787-70a6-4862-bcf5-7cd2d9d9460f.jpg?v=1680520696'
            },
            {
              name: ' Material Table',
              price: '₹599.00',
              AMP : '₹399.00',
              image: 'https://m.media-amazon.com/images/I/81+MrAGPIrL._AC_UF1000,1000_QL80_.jpg'
            },
      // Add more products as needed...
    ];
  
    const getNewArrivals = () => newArrivals;

  const getTradeIndiaTrusted = () => tradeIndiaTrusted;

  return { getNewArrivals, getTradeIndiaTrusted };
  };

const RelatedProducts = () => {

    const productService = ProductService();
  const [currentImage, setCurrentImage] = useState(
    'https://storage.googleapis.com/a1aa/image/HC9BC18ROa5PCRvCKFSEZxvJRG3Jfr9mFqxHIccQ5jV5pH0JA.jpg'
  );


  const [currentTab, setCurrentTab] = useState('description');

  const switchTab = (tab) => {
    setCurrentTab(tab);
  };


  const thumbnailImages = [
    'https://storage.googleapis.com/a1aa/image/BfV2vUsovM0UVySTeUVT3tzQbyjP4RNvxxNnObYfpeUBP9gOB.jpg',
    'https://storage.googleapis.com/a1aa/image/TaL1hBvKucapJlXiRMqE099mK8vbRokfNftWXHKyLGDtTPoTA.jpg',
    'https://storage.googleapis.com/a1aa/image/ZgKuJT4gZZqwFtfTsCmnXbxyh62ydhwouyc9wZcPH6B6pH0JA.jpg',
    'https://storage.googleapis.com/a1aa/image/rb22fdoz33U1DSV3PdtTAW5F204bZLkXIeHbIKAZNMHzTPoTA.jpg',
  ];

//   const [currentTab, setCurrentTab] = useState('description');
  const [newArrivals, setNewArrivals] = useState([]);
  const [tradeIndiaTrusted, setTradeIndiaTrusted] = useState([]);
  const [displayedNewArrivals, setDisplayedNewArrivals] = useState([]);
  const [displayedTradeIndiaTrusted, setDisplayedTradeIndiaTrusted] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(4);

  const details = [
    { label: 'AUTOMATION GRADE', value: 'AUTOMATIC' },
    { label: 'VIBRATION FREQUENCY', value: '564 X 550 X 19 MM' },
    { label: 'BRICK PER STROKE', value: '564' },
    { label: 'CYCLE TIME', value: '550PR/HR' },
    { label: 'HYDRAULIC TANK OIL CAPACITY', value: '19 MM' },
    { label: 'CONVEYOR', value: '564 X 550' },
    { label: 'WARRANTY', value: '550 DAYS' },
    { label: 'I DEAL IN', value: 'MM' },
    { label: 'PROVIDE AFTER SALES SERVICE', value: '' },
  ];

  const sections = [
    {
      title: 'Industrial Plants & Machinery',
      description: 'Buy from an exciting collection of our newly added products',
      id: 'new-arrivals12',
      products: [
        {
          image: 'https://5.imimg.com/data5/UK/ML/PN/SELLER-79991697/industrial-wire-rope-hoist-500x500.jpg',
          name: 'Material Handling Rope',
          price: '₹599.00',
          AMP : '₹399.00',
        },
        {
          image: 'https://5.imimg.com/data5/JX/OW/DM/SELLER-74566800/electric-wire-rope-hoist-500x500.jpg',
          name: 'Wire Rope Hoist',
          price: '₹599.00',
          AMP : '₹399.00',
        },
        {
          image: 'https://na.bhs1.com/media/catalog/product/cache/7cbf7ab80ec21f65659eb82d7049f5a8/s/c/sc-400_web.jpg',
          name: 'Wire and Cable Handling',
          price: '₹599.00',
          AMP : '₹399.00',
        },
        {
          image: 'https://www.materialhandling247.com/images/article/MHPN1206_prod_jaescoWEB.jpg',
          name: 'Side pivot hopper',
          price: '₹599.00',
          AMP : '₹399.00',
        },
        {
          image: 'https://5.imimg.com/data5/WG/UJ/DU/SELLER-4335664/wire-springs-500x500.jpg',
          name: 'Stainless Steel Spring Wire',
          price: '₹599.00',
          AMP : '₹399.00',
        },
      ],
    },
    {
      title: 'TradeIndia Trusted',
      description: 'Buy products from over 4.5 million verified and trusted TradeIndia sellers',
      id: 'trusted-products12',
      products: [
        {
          image: 'https://5.imimg.com/data5/TU/EQ/PK/SELLER-39922342/komori-a37p-lithrone-convertible-perfecting-offset-printing-press-500x500.png',
          name: 'Offset Printing Press',
          price: '₹599.00',
          AMP : '₹399.00',
        },
        {
          image: 'https://image.made-in-china.com/202f0j00PqJuFrNdrfct/Single-Clamp-Print-on-Demand-Digital-Book-Perfect-Binder.webp',
          name: 'Book Perfect Binder',
          price: '₹599.00',
          AMP : '₹399.00',
        },
        {
          image: 'https://static3.webx.pk/files/4059/Images/l6290-4059-0-270622075740371.jpg',
          name: 'Epson Ink Tank Printer',
          price: '₹599.00',
           AMP : '₹399.00',
        },
        {
          image: 'https://i5.walmartimages.com/asr/75f66eeb-5669-4cdf-b536-2c9c16b2b25c.6a7333d9bd6c365f72c18d2054425717.jpeg',
          name: 'HP LaserJet Laser Copy Machine',
          price: '₹599.00',
          AMP : '₹399.00',
        },
        {
          image: 'https://www.secureye.com/wp-content/uploads/2019/02/big-s-fb4k.jpg',
          name: 'Biometric Device',
          price: '₹599.00',
          AMP : '₹399.00',
        },
      ],
    },
  ];

const [itemsToShowNew, setItemsToShowNew] = useState(4);
const [itemsToShowTrusted, setItemsToShowTrusted] = useState(4);

  useEffect(() => {
    setNewArrivals(productService.getNewArrivals());
    setTradeIndiaTrusted(productService.getTradeIndiaTrusted());
    setDisplayedNewArrivals(newArrivals.slice(0, itemsToShowNew));
    setDisplayedTradeIndiaTrusted(tradeIndiaTrusted.slice(0, itemsToShowTrusted));
  }, [productService,itemsToShowNew, itemsToShowTrusted]);

  const loadMore = (type) => {
    if (type === 'new') {
      setItemsToShowNew((prev) => prev + 4);
      setDisplayedNewArrivals(newArrivals.slice(0, itemsToShowNew + 4));
    } 
    
    else if (type === 'trusted') {
      setItemsToShowTrusted((prev) => prev + 4);
      setDisplayedTradeIndiaTrusted(tradeIndiaTrusted.slice(0, itemsToShowTrusted + 4));
  }
  };

  const changeMainImage = (image) => {
    setCurrentImage(image);
  };


  const scrollLeft = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="container-sofa">
        <div className="left-column-sofa">
          <div className="thumbnail-section-sofa">
            <img  src={currentImage} alt="Main product image"  height="200" width="700"/>
            <div className="thumbnail-images-sofa">
              {thumbnailImages.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index}`}
                  height="60"
                  width="60"
                  onClick={() => changeMainImage(thumbnail)}
                />
              ))}
            </div>
          </div>
          <div className="sofa-color-options">
            <div className="sofa-color-red"></div>
            <div className="sofa-color-brown"></div>
            <div className="sofa-color-blue"></div>
          </div>
        </div>

        <div className="card-sofa">
          <h1>Asgaard Sofa</h1>
          <div className="sofa-price">Price: ₹ 250,000.00</div>
          <div className="sofa-amp">AMP: ₹ 290,000.00</div>
          <div className="sofa-review">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span>5 Customer Reviews</span>
          </div>
          <div className="sofa-description">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </div>
          <div className="sofa-by">BY COSMO FASHION</div>
          <div className="sofa-details">
            {details.map((detail, index) => (
              <div key={index} className="sofa-detail-item">
                <span className="sofa-detail-label">{detail.label}:</span>
                <span className="sofa-detail-value">{detail.value}</span>
              </div>
            ))}
          </div>
          <div className="sofa-share">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>


      <div className="sofa-tab-container">
      <div className="sofa-tabs">
        <div 
          className={`sofa-tab ${currentTab === 'description' ? 'active' : ''}`} 
          onClick={() => switchTab('description')}
        >
          Description
        </div>
        <div 
          className={`sofa-tab ${currentTab === 'additional-info' ? 'active' : ''}`} 
          onClick={() => switchTab('additional-info')}
        >
          Additional Information
        </div>
        <div 
          className={`sofa-tab ${currentTab === 'reviews' ? 'active' : ''}`} 
          onClick={() => switchTab('reviews')}
        >
          Reviews [5]
        </div>
      </div>
      
      {currentTab === 'description' && (
        <div className="content">
          <p>
            Introducing the Asgaard sofa, a perfect fusion of modern elegance and unrivaled comfort...
          </p>
          <div className="image-container">
            <img 
              src="https://thefurnitures24.com/wp-content/uploads/2020/01/FNSF51VRLA3_-_main_1.jpg" 
              alt="Asgaard Sofa" 
            />
            <img 
              src="https://www.ulcdn.net/opt/www.ulcdn.net/images/products/182345/original/Lewis_Sofa_FNSF51LSDU30R00SAAAA_slide_00.jpg?1524295384" 
              alt="Detail of Asgaard Sofa" 
            />
          </div>
        </div>
      )}

      {currentTab === 'additional-info' && (
        <div className="info-section">
          <h2 className="info-title">Additional Information</h2>
          <div className="details-wrapper">
            <div className="detail-item">
              <span className="label-text">Material:</span>
              <span className="value-text">High-quality fabric</span>
            </div>
            <div className="detail-item">
              <span className="label-text">Dimensions:</span>
              <span className="value-text">L 200 cm x W 100 cm x H 85 cm</span>
            </div>
            <div className="detail-item">
              <span className="label-text">Weight:</span>
              <span className="value-text">50 kg</span>
            </div>
            <div className="detail-item">
              <span className="label-text">Care Instructions:</span>
              <span className="value-text">Wipe clean with a damp cloth</span>
            </div>
            <div className="detail-item">
              <span className="label-text">Assembly Required:</span>
              <span className="value-text">Yes</span>
            </div>
          </div>
        </div>
      )}

      {currentTab === 'reviews' && (
        <div className="reviews-container">
          <h2 className="reviews-heading">Customer Reviews</h2>
          <div className="single-review">
            <div className="review-info">
              <span className="review-author">John Doe</span>
              <span className="review-date">October 12, 2024</span>
            </div>
            <div className="review-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="review-content">The Asgaard sofa is incredibly comfortable! It fits perfectly in my living room.</p>
          </div>
          <div className="single-review">
            <div className="review-info">
              <span className="review-author">Jane Smith</span>
              <span className="review-date">October 15, 2024</span>
            </div>
            <div className="review-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="review-content">Amazing quality and stylish design! Highly recommend.</p>
          </div>
        </div>
      )}
    </div>

    <div className="arrival-container">
      <div className="arrival-section">
        <h2>New Arrivals</h2>
        <p>Explore our exciting collection of newly added products</p>
        <div className="product-list" id="arrival1">
          {displayedNewArrivals.map((product, index) => (
            <div key={index} className="product-item">
              <img className='ProductImage' src={product.image} alt={product.name}/>
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>AMP: {product.AMP}</p>
              {/* <p>{product.moq}</p> */}
            </div>
          ))}
        </div>
        <button className='arrival-section-button' onClick={() => loadMore('new')}>Show More</button>
      </div>

      <div className="arrival-section">
        <h2>TradeIndia Trusted</h2>
        <p>Purchase products from over 4.5 million verified TradeIndia sellers</p>
        <div className="product-list" id="trusted1">
          {displayedTradeIndiaTrusted.map((product, index) => (
            <div key={index} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p> 
              {/* <p>{product.moq}</p> */}
               <p>AMP: {product.AMP}</p>
            </div>
          ))}
        </div>
         <button className='arrival-section-button' onClick={() => loadMore('trusted')}>Show More</button>
      </div>
    </div>

    <div className="product-container12">
      {sections.map((section, index) => (
        <div key={index} className="product-section12">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          <div className="product-carousel12" id={section.id}>
            {section.products.map((product, productIndex) => (
              <div key={productIndex} className="product-item12">
                <img src={product.image} alt={product.name}  />
                <h3 className='product-name-industrial-plants'>{product.name}</h3>
                <p className='section12-p'>Price: {product.price}</p>
                <p className='section12-p'>AMP: {product.AMP}</p>
              </div>
            ))}
          </div>
          <div className="carousel-nav12">
            <i className="fas fa-chevron-left" onClick={() => scrollLeft(section.id)}></i>
            <i className="fas fa-chevron-right" onClick={() => scrollRight(section.id)}></i>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default RelatedProducts;
