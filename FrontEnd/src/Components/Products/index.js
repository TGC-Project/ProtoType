import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import RelatedProducts from "../RelatedProducts"
import Image1 from "../../Images/imageone.jpg"
import Image2 from "../../Images/imagetwo.jpg"
import Image3 from "../../Images/image (3).jpg"
import Image4 from "../../Images/image (4).jpg"
import Image5 from "../../Images/image (5).jpg"
import Image6 from "../../Images/image (6).jpg"
import Image7 from "../../Images/image (7).jpg"
import Image8 from "../../Images/image (8).jpg"
import Image9 from "../../Images/image (9).jpg"


const Products =()=>{

    const navigate = useNavigate();

    const handleNavigate = (id) => {
        // Navigate to the ProductDetail component with the selected product ID
        navigate("/relatedproductsdemo");
      };


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [category, setCategory] = useState('');
    const [details, setDetails] = useState('');


    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedProduct5, setSelectedProduct5] = useState(null);
  
    const prevSlide = () => {
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    };
  
    const nextSlide = () => {
      setCurrentSlide((prev) => Math.min(prev + 1, additionalProducts.length - 1));
    };
  
    const addToCart = (product) => {
      // Handle adding to cart logic here
      console.log('Added to cart:', product);
    };
  
    const selectProduct5 = (product) => {
      setSelectedProduct5(product);
    };
  
    const closeDetails5 = () => {
      setSelectedProduct5(null);
    };
  
    const showMessage = (productId) => {
      console.log('Product ID:', productId);
    };
  
    const submitForm = () => {
      // Handle form submission logic here
      const formData = {
        name,
        email,
        contact,
        category,
        details,
      };
      console.log('Form submitted:', formData);
    };
  
    const autoAdjustHeight = (event) => {
      event.target.style.height = 'auto'; // Reset the height
      event.target.style.height = `${event.target.scrollHeight}px`; // Adjust to fit content
    };


    const categories = [
        { value: 'electronics', label: 'Electronics' },
        { value: 'furniture', label: 'Furniture' },
        { value: 'clothing', label: 'Clothing' },
        { value: 'toys', label: 'Toys' },
        { value: 'books', label: 'Books' },
        { value: 'beauty', label: 'Beauty' },
        { value: 'sports', label: 'Sports' },
        { value: 'automotive', label: 'Automotive' },
        { value: 'home_appliances', label: 'Home Appliances' }
      ];
    
  

    const [selectedProduct1, setSelectedProduct1] = useState(null);

  const showDetails = (product) => {
    setSelectedProduct1(product);
  };

  const hideDetails = () => {
    setSelectedProduct1(null);
  };

  const [selectedProduct2, setSelectedProduct2] = useState(null);

  const showDetails2 = (product) => {
    setSelectedProduct2(product);
  };

  const hideDetails2 = () => {
    setSelectedProduct2(null);
  };


  const [selectedProduct3, setSelectedProduct3] = useState(null);

  const showDetails3 = (product) => {
    setSelectedProduct3(product);
  };

  const hideDetails3 = () => {
    setSelectedProduct3(null);
  };

  const [selectedProduct4, setSelectedProduct4] = useState(null);

  const showDetails4 = (product) => {
    setSelectedProduct4(product);
  };

  const hideDetails4 = () => {
    setSelectedProduct4(null);
  };


  const [selectedProduct6, setSelectedProduct6] = useState(null);

  const showDetails6 = (product) => {
    setSelectedProduct6(product);
  };

  const hideDetails6 = () => {
    setSelectedProduct6(null);
  };


 const  premiumpro  = [
    { id: 1, name: 'Realme Buds Air6', company: 'oppo', color: "Orange", description: 'this is good page.', price: 199, AMP: 299, image: 'https://img.tatacliq.com/images/i18//437Wx649H/MP000000022909150_437Wx649H_202407141234071.jpeg' },
    { id: 2, name: 'Selling Lamps', company: 'oppo', color: "Orange", description: 'this is good page.', price: 999, AMP: 1299, image: 'https://www.starrynight.co.in/cdn/shop/products/pic-24_1ad2bc44-dfe7-4b47-ada8-2abd988c3d33_1200x.jpg?v=1617861782' },
    { id: 3, name: 'Realme Air Watch', company: 'oppo', color: "Orange", description: 'this is good page.', price: 899, AMP: 1299, image: 'https://navtarang.digihubmedia.in/wp-content/uploads/2021/04/Realme-Fashion-Watch-1-scaled.jpg' },
    { id: 5, name: 'LG Buds icon3', company: 'LG', color: "Black", description: 'this is good page.', price: 399, AMP: 599, image: 'https://5.imimg.com/data5/SELLER/Default/2022/5/GD/AA/UM/107323815/realme-buds-q2s-bluetooth-truly-wireless-in-ear-earbuds-with-mic-black-.jpg' },
    { id: 6, name: 'boat sounds', company: 'boad', color: "black", description: 'this is good page.', price: 899, AMP: 999, image: 'https://4.imimg.com/data4/YG/SS/MY-10550088/black-fox-home-threatre-system-with-bluetooth-500x500.jpg' },
    { id: 7, name: 'Apple 11 Pro', company: 'oppo', color: "Orange", description: 'this is good page.', price: 399, AMP: 999, image: 'https://i.ebayimg.com/00/s/NjAwWDkwMA==/z/bfIAAOSwDNdVveN0/$_12.JPG' },
    { id: 8, name: 'Duo Watch', company: 'Due', AMP: 299, color: "blue", description: 'this is good page.', price: 799, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT411Eo3IsSwjoP1YAyFzdk9FTcvEMw_sJ0ohNsQlWGqs99Ipb9qgJSDzIjJLZkEctemB4&usqp=CAU' },
    { id: 9, name: 'Related Product 9', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUTEBAVFRAQFRAVFRYYEBcWGBYVFxUXFhUWGBUYHSggGBomGxUXITEhJSkrMC4uFx8zODMtNygtLisBCgoKDg0OGg8QFS0jHx8tKystLSs3KysrLS0tLSstLS0rLSsrKy0tLSsxKysrLTctKystLTcuLSstKzcrLTctK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQMEBgcIAgH/xABGEAABAwIDBAcDCQYFAwUAAAABAAIDBBEFITEGEkFRBxMiYXGBkTKhsRQzQlJicpLB0SNTssLh8BVDgpOzotLxCFRzg4T/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQMC/8QAGREBAQEBAQEAAAAAAAAAAAAAAAECEQMh/9oADAMBAAIRAxEAPwDeKIiAiIgIiICIiAi19tr0qUlATFDaeoFwQD2GEahzhq4fVHI3IWsK3pSrZ3XdIQ36rey23Kw187oOkEWh8A2wfIbb5B5h5B9QVneH7YyQW+VXfAf8wN7bO9wHtt9/igz1F4hla9ocxwcxwDmuBuCCLggjUWXtAREQEWuto+kJxkdBhwDtwkPntvNBGREY0db6xy5A6jDsR2hqWm8kr3O73k+g0HgEG9kWjcM20qmHsyu8Cbj0OXuWc4F0hRPIZVARk5dYPZv9ofR8dPAIM5RfGOBAIIIIBBBuCDoQV9QEREBERAREQEREBERAREQERUamoawZ68BxKCstL9L3SPIHvw/D32c27amZpzadDExw0I+kRmNNbqe6TtsaujiaaYhjpC4X3Q61hlrxuQtM01II4955u9+biTcknMknmi2cQTKQjVXbAwLzVSFxyVEQlEVt6SPtx5buayiHaaqdEGusBbS1z5rHqJxJDTpcH0V6UGc7B9IUlCWwTgOo3OzOe9DvHNwzsWA5lveSOR3sCuSybjMWJGY5dy6c2MndJh9G9xu59LSuJ5kxNJ96CZWrelbbYs36CmJD3NAnlBsWh1j1bLfSLdTwDss827SXMW0spfW1TiczU1PoJXAD0ACD3g+NPprBjWlmlrcO4/qvVXirZt47vaH9hRDHE6i2Z+ORVCqk3cxxFkFZ1c4FSFNiJIzWKyzklVqWrIKDamxG3poHtiqHE0Mhtc5mAk+0Pscxw1HEHd7XAi4NwdCuVWkSNIPFbE6IdrKsn5HK7figjtHcC7WtNmt3hmcshf6qLJ1udFQpqpr9MjyVdCzgiIiCIiAiIgIiICIiD442F+SiZLvO8ePuHJSr23BHMFWICNfPjW/TLQOdQ9a0X6iSNzsvoEgOPll71q3FnfsxbQ7vwXRmK0jJo3xSNDmSNc1wPFrhYhc7YzRPpXSUkvtQnsOP049Y3emR7wUT0n3qFhZdXjYLhWUMwCkIK1g1KM3ylprdr7YaPQk/kvaqwTB1rabwPrc/mqbW/l8EFORdM7FM3cOom/VpKQekLFzNPkCTwBXUezrN2kpwNBBAPSNqCQXMO0jbVlWOVVV/8z108uZ9rgPl9YBwqaj3yE/mgiVRqY94EcQ1xHlZV7Km5+7c8t4ejh+iCEEZtdeL2V5LKwNAHDL0Vg+QIJvCX3J8FsHoipC6eqmt2G9VEDzdm53oHN9VrjC5TazGl0khDWNGpcTZo8yVv3Y7CBRU0cN7vF3SO+tI7N59T6AI7xPrIInlpuNQp2GTeaCOIWPuKnKFto235X9Tf80deiuiIjIREQEREBERAREQFZVbd3Pgfir1fHNBFiLgo6zrlQdRKsC6QNmhWsD47CphvuE5B7TrG48jwPA+a2RNg7To9w9CqLNno73e5zu6+6Pdn71Gl3LHLGJ4NO0m9PM0ttvDqnOAJ+00Ee9W9Js7Xzm0NHUPv9WCQjzNrBdhwQMjG6xoa0cALKoqxcoMwyoo5OoqozHM3cJYS0kBwu3NpI0IVjVOLZBYkXa3j3LPemBu7jH3oKZ3ve3+VYDXfON+634IGMn9l4rrTC2bsMQ5Rxj0aFyTjXzS65pnBrGi4ya0a9yCuuaNrIwMUxAEf55d6tafzXSokbzHqucNtBbF6/8A+SM+sTCgxhvzgHC6qVDXO7LRdz3Pa0cyXkAeqps+dHir3DG71ZSN+tV049akBBE4jspiNO4iehqGW49S9zfJ7QWnyKoUmDSvPzMxztlA/Xle1l2QvMkbXAhwBadQRcHyKDRGwGyHyd3yiobaXMRsOe4DkXO+0Rl3A8zlsWGVTdRs5CTdhczuBuPQ/qvEezbPpSuI7gB+qjWazIoYbF1z/sNzP6eayNUqanbG0NYLAf3cniVVVca12iIiORERAREQEREBERARFEbSbRU2HxdZUPte+6wW3nkaho5cychxKCXWN47tzh9HcSThz23uyPtkEcCfZafvELTe1HSJXYjvNhIhpcxkSGkd7sjL7m9ywmarpWe24zPHmB4DJo8kG3cT6bQSRSUu9bQuJf6tZYD8axuu6T8Zl9giIdzYm/xB7vetfzbRP0jja0d5v7hZWM2KTu/zD5AD4IMgrsTqamqElXIXy7jGgl17NDnEDQcSfVWld86PBvwVjg73F93Ek5am/HvUlUQufO1rRckDiBkBckk5AAAkk6WQU8W9geIX2Kid+8t/9bP0VxjtE5kTXXa5u+Gktvk617HeAOnHRfKCcSNBb/4PJB4dRO/en/bZ+i+4OzdfKL3tbOwHAcAriplDAXONgFS2ZBnkkLbAEAkk5AZNF7d9hYXNzkg8N+dHivNXM+OSN8Tt2SOVr2G9rObIXNN+4gK7qqB8UjHGzo5N7ce2+6d02cMwCCDwICi8bJ4a3NreJQZvQ9JeNxe1L1reRbEf5Wu96yTDumuVthV0g73N3o/PPfafULSUNfM3R7vMX+Kv4cfkHtMa7wu0/mg6XwLpIw2rtabqnHhJZo/3ASz337llzXAi4NwdCuQY6+lkNyHRP+sOz725HzCyrZrbGvw6xil66m4t9ptuN2A5feYR3goOlUWNbG7aUuJsvEd2YC7oy65t9Zp+m2/HUcQLrJUBERAREQEREBERAREQRW02ORUFO+eXRuTW3sXvPstB4aEk8ACeC5i2q2llrZXVFS4ua4/s4wbBwByy+jEOA46m5us+6ccWdPVx0bXERxAb/i5oe8/h6APF3NabrZOseTw0aOTRk0DyQfKuukl9p2XBoyaPAK2VUQG9uPFXLMPcQS1pdu62aTb0QWYK+l5XuRoabEG48vcvdHFvutdBc4MTv59yyXDpmMq29Y7da9rWlx0FpI359xDC0/e5KMOFfJyx28XdZvXytYjdI+J9F9rT+2HgEEztTV3ga13zjt0W32vOrHFxc1xuLssCbEh2mVziNDVmFxyuDqO/gVK4g07rb5m50FsuChJtfP8AMoK+JYi6YBtrAZnPXksj6PZxG6QEgEt3m3duguDZAGlxybff1PILECCDY6iyyHABm77jUGR49VtcWsvd7nRG281xaGGclzixzgHOM+l79gk2uAsTx3u1v+ZV5GCJG7xF+NhYI/D/AJRMIt7dB3iSBe1gTp42QY02Vw4+ufxX10vcp3FtnXRZh7XW4kEH9FBAZ2tn3IKZVWlqnxG7HEH3HxHFXLsPcG7xa4Nva5aQL6q2lh6TmcigyHBMYeyQTU5MdRGd8tabb1tXs+1zHEZG66U6P9rWYnTh+QmZuiRo0z9l4HBpscuBBHC55Jjc6N4Iyc0gg/DyWz+jPGDSYjCQbQ1e6COH7QhpHdZ5Y78SDo5ERAREQEREBERAREQc7dJ0RZi0299Mix7jEw/08lq4jddn9E2Pkf6LoXpv2adIxlZEO1FZsluV7xu8LktP3m8AtD4pFf8AatGTsnji13f3FBbxGzzf6VrLIcGrI2Mex7g1zjcE6HIC1+GnvWJl5ItfJfCb8UF5XstNnoSFTpZNxwJ4ZFW+8V93ggvq6of1pO8TyzyAOllfSmQlr3xPFwCSGEtI1DgRlooQOysT4KTixuQRiIu7DRbLW3DVBczVwku1uQaASbfaAt71FuPbH3h/EvkORuLht75nM208l9hG88aa3zNtEH3EHh0riNCR8ApKirhAA4i4cd0/haR8SoyvbZ18sxwN8wqRkJFuGVx4aEeSCeZVte/eYHO5ANJJPJWFPVSvnjLTZxe0DdPMj3K1gquqzjJFxbM/oF4pp+rIc09oXsbaXyQZZthWDd3QcyRoeGpWJxt7bba2bfzzXmecvN3Ek96p755+9BmNVXxCmdFcOkdu5DPdsQbk8NNFjFXnYDUq0BX0PIv3oPc77nwAHos22fgc6oo4x7d4h5ucxo96xTCqYOO8/KNmbjz5NHNbh6F9n31FS6tlbaOH2L8XkWa3/S07x7y1BvFERAREQEREBERAREQeJomvaWPaHMeC1zSLgtIsQRxBC5/6SOj2age6opWl9G7X6RjH1ZObeT/I2Obpnpe23dJK2koZqiKallcJyyQxBwLBZoc1wLrErEIa6fdIknqHb4s7fnlkuP8AU480GEzUDX5xHddxjcf4SrCWBzDZzSPEfmsmr6OLKwI3RYaj15+asadrY3XaM+8b3xQQl/BVGtH9lZFO1s1i8AEfVaG/AL6zCode15G35IMadujgfVV4rW9kX9fislpsMijN2l1zzz+IXuXDonal2fgP5UGMElxsMyVNYZSbgvugudqTp4Du77KsMEgGjpPxf0V3LTMcLbxAy9ljGn1DLoLHEKfrG2c0dxbnY+gNljzoyw2drz594PFZZHSMbo9x8Wtd/E0q2mwmFxuXPzJORAHkA3JBjziCMwCf75Ki3dvm0+RWXsia2MRhx3ASRk2+t9d26s5MPiOV3Zd/9EEGY2cB6lUiQOSm5aOPm71K+U05gvuBpv8AWYHfFBCNjLjZoueQF1fRYaG5zusODBm4/p/eikZMUfIN17Y7d0TQvlFTRg3tn33I9EGTbDbFVOKSNszqqOI9p9uy3mBf25Dy0F7nkej8Jw2KlhZDA3djjFgPeSTxJNyTxJXNMFdKyNsccsrGM9kMlezmfaaQTqdSsh6PNuJKKqd8vqKmSnmayONrpXTBshe2zrPf2Ra4uEHQCIiAiIgIiICIiAiIg5Zx+QvxWuceFXUt8mSFg9zVeH2VY4pniVcedZWf8z1fu0QQ1cozipOtUbxQXdOpCJWFMpCMIKoXpfAvSD4vhXpfCg8FeSvZXkoKTlSeqzlScgtJVYzKQlCsJ0FuzVSdIoxmqk6RBKRaKJx+4bcaggjxClotFF4/7BQddA3819VKlN2N+634KqgIiICIiAiIgIiIOV8VyxKuHKsrP+Z6vzorLaCIsxWuaeNXUO8nvLx/Er3gghq5RvFSdcowaoL2mUhGrCnV/GgrBel8C+oC+Fel8QeSvBXsryUFJypOVZypPQWsqj51ITKwnQWzNVJ0ijG6qSpEEtEorHz2CpWJRGPXIsMy4gAcycgg64phZje5rfgqq+AWX1AREQEREBERAREQcz9I0PVY3Vi1g90Lx370LCfff0Xxvsqc6eaExYlTz/RqINz/AFxPN/8ApkYoGnN2oIqvCixqpjEGqI4oL6nV/ErCnV/EgrBel8C9IPi+L0viDyV5K9leSgpOVF6ruVF6C0mUfOpCZR86C2bqpSjUWzVS1EEEnHorWmh62tpIv3lTTN9ZWhXY0Uh0ZURqcap8rtp+tmd3BrCGn8bmIOlUREBERAREQEREBERBrjp2wQ1GHdcwXkontlyGfVnsyDwsQ4/cWn8GqA9gXUVVTslY6ORodHI1zHtIuHNcLOBHIgkLljF8KkwqtlpJL7rHXicfpxOzjdpa9sjbQgjgguMQjyUCdVkEsgc1QNQLFBdQFX8ZUZTvUhE5BdNXtU2FVEBFNUlTAGxxuEe4+OfriYwXB/b6uz7XFrMtbLPNXTamluy5h6rfpTG0RdtgD29d1rt3tDdDr3Lr3FkGNFeSsjE9P1BBdE3sOyaxrnPdc2vvQ7zXG9riSwsLLzjtRTuY7qXR7pcN1rQwODb5ZdQ1wy5vPmgxpyoSKu5W8pQWkxUfOVezuUfO5BSZqpuhbkoSEXKnKV1gguqiQNaSti/+nrBjaprnjOVwgiNs91vakIPEFxYPFhWqpGS1UsdNTjelne1jR3k2ueQGpPAAldTbNYNHQUsNNF7EDA29rbztXvPe5xJ80EmiIgIiICIiAiIgIiICwjpT2GGKwB0Vm1tPvGF17BwPtROPI2yPA9xN83RByJFLJG50UrXMkjJa9jhZzXDIgg6FUap110Zt/wBHdPig6xp6msaAGzBtw8DRsrfpDkdR4ZHRu0Gz1VQP6uuhLATZsou6J+tt2S1r5X3TY9yCAhmspGCdW0uG3zYbq3MMjOCCdjmVYSrHW1ThqFVbiCCbZOSSC0gC1jcWdcZ28E6871t02tfeuLXvpbVRAxAJ8vQS0k5BADSQb3Nx2cuK8zTkWs0m5ANiMhzzUWa8c14Neglnyq0mlUe+vVs+qJ0QXU8yj5pV9LXu4KrFhjzqgpQyWVy+qNslIYLs/NVSdVSwumlyuGjJl9C957LB3uIW8ej7osioXNqKwtmqxYsAH7KE8239t/2yBbgBqQtehvo/dRN+W1jLVkzbRsOsMZ5jhI7jxAy4uC2kiICIiAiIgIiICIiAiIgIiICp1EDJGlkjGvY8Wc1zQ5rhyLTkQqiINe430R0ExLqV0lJIf3Z3o798TtB3NLVhmJdFuKw36rqKpg03X9VIf9D+z/1reqIOZa/Zusi+fw6pb3tgdK38UW8PeoSop4GndeTG/LsvaWOz0ydYrrVeZI2uFnAEciLoOSjh8P7weq+f4VHwkHqurP8ACqf/ANvF/tN/RUH7O0J1oqc+NPGf5UHLX+Es+uPVfBhkX7xvqupW7OUA0oqcf/mj/wC1XDcJpgLCniA5dUz9EHKUdHTlwaHhzybBre04nkGjMlTFDs1US/M0FS/v+TPa38bwG+9dOwwMYLMa1o5BoHwVRBoPDOjDFJbXhhpm8TLKHOtzDIt4HwLgsywboepGWdWTyVLh9AfsYvwtJefxW7lspEFth2Hw0zBHTxMijbo1jA1vebDj3q5REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z' },
    { id: 10, name: 'Related Product 10', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://acdn.mitiendanube.com/stores/001/397/378/products/d_857034-mlu69216120970_052023-f-335e061bc759414a5e17163324485352-1024-1024.jpg' },
    { id: 11, name: 'Related Product 11', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZ6HIgdD0C5hOUueh6_wcGEnghn1Czgnr4Q&s' },
    { id: 12, name: 'Related Product 12', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://cdnmedia.placewellretail.com/pub/media/catalog/product/cache/d2f155c8ae3423b25125c336aa39579e/r/e/realme-buds-air_yellow_1.webp' },
    { id: 13, name: 'Related Product 13', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://i.gadgets360cdn.com/large/noise_air_buds_2_launch_main_1669356449439.jpg' }
  ];


  const beautypro = [
    { id: 1, name: 'vkk Brush', company: 'VCC', color: "Orange", price: 399, AMP: 1299, description: 'Good product', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJQZV4yECcSk5TLGg0WFcJeSMxfl3ero9JQ&s" },
    { id: 2, name: 'Polish Brush', company: 'galaxy', color: "black", price: 4999, AMP: 1299, description: 'good product', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRy58TbBuofqYflIvMskn9Yi1ZDMTJji7DWg&s' },
    { id: 3, name: 'Beauty Brush', company: 'VCC', color: "Orange", price: 599, AMP: 1299, description: 'good product', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjFW6Q0FX9I5KOM7hM0jRmVYd2-00InhltQ&s' },
    { id: 4, name: 'VCC Brush', company: 'neo', color: "Orange", price: 199, AMP: 1299, description: 'good product', image: 'https://premispa.com/wp-content/uploads/2023/12/banner-fragrance_mobile.png' },
    { id: 5, name: 'skin bottle', company: 'Lux', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://www.amway.com/medias/art-01-spb-ArtistryMen-m.jpg?context=bWFzdGVyfHJvb3R8MjQ2NDkwfGltYWdlL2pwZWd8c3lzLW1hc3Rlci9yb290L2g1YS9oY2UvOTY4NzgyMzQ4MjkxMC9hcnQtMDEtc3BiLUFydGlzdHJ5TWVuLW0uanBnfGFlNWMwZTQ4ODljZTczZTZhY2M0OTU5MDFlOGJjMjkzMzk2ZGZiOGI5NGQwY2Y4MTgyZjIyZDE3MDM0OTViYmU' },
    { id: 6, name: 'skin care', company: 'NGG', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://shahnaz.in/cdn/shop/files/Shahnaz-Husain-Marrdd-Face-Wash-F1967-01_1.jpg?v=1714734788&width=533' },
    { id: 7, name: 'skin products', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://advikayurveda.com/image/cache/catalog/products/aloe-vera-gel/advik-ayurveda-aloe-vera-gel-500x500.webp' },
    { id: 8, name: 'Related Product 8', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://samishaorganic.com/cdn/shop/files/SAMISHA03.jpg?v=1716034581' },
    { id: 9, name: 'Related Product 9', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://i.ebayimg.com/images/g/ZOsAAOSwkiNiCP8r/s-l1200.png' },
    { id: 10, name: 'Related Product 10', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://www.jiomart.com/images/product/original/rvzxm4j0hr/edensoul-moistorizing-and-vitamin-e-herbal-touch-soap-herbal-beauty-soap-for-smooth-skin-cylindrical-pack-with-round-shape-soap-neem-and-aloevera-fragrant-for-men-women-pack-of-3x100g-soap-product-images-orvzxm4j0hr-p609424118-0-202406211604.jpg?im=Resize=(420,420)' },
    { id: 11, name: 'Related Product 11', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'data:image/jpeg;base64,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' },
    { id: 12, name: 'Related Product 12', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://www.kanvasbeauty.com.au/cdn/shop/products/8_434d49dd-77f3-4bf6-b836-a54e3422e2ec_1600x.jpg?v=1674814513' },
    { id: 13, name: 'Related Product 13', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://www.jiomart.com/images/product/original/491208767/nivea-cocoa-nourish-body-lotion-with-cocoa-butter-for-very-dry-skin-200-ml-product-images-o491208767-p590032379-0-202309151651.jpg?im=Resize=(1000,1000)' }
  ];


 const medicalpro= [
    { id: 1, name: ' VCC Tablets', company: 'Neo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/f88f5978671d49a2b5d14aad3f7158ce.jpg' },
    { id: 2, name: 'Avi Tabltes', company: 'oppo', color: "Orange", price: 199, AMP: 1299, description: 'good product', image: 'https://ayubazar.com/wp-content/uploads/2023/11/Avipattikar-Tablet-60-tabs.png' },
    { id: 3, name: 'AVD Pharma', company: 'oppo', color: "Orange", price: 479, AMP: 1299, description: 'good product', image: 'https://www.krishlarpharma.com/wp-content/uploads/2023/04/KRITFEN-200-tablet.jpg' },
    { id: 4, name: 'Himalaya Syrup', company: 'oppo', color: "Orange", price: 139, AMP: 1299, description: 'good product', image: 'https://m.media-amazon.com/images/I/61f7gbseQoL.jpg' },
    { id: 5, name: 'Honey Syrup', company: 'oppo', color: "Orange", price: 459, AMP: 1299, description: 'good product', image: 'https://meds.myupchar.com/128153/1.jpg' },
    { id: 6, name: 'Heartbio', company: 'oppo', color: "Orange", price: 299, AMP: 1299, description: 'good product', image: 'https://m.media-amazon.com/images/I/61ye5zAN3dL.jpg' },
    { id: 7, name: 'Himalaya Tablet', company: 'neo', color: "Orange", price: 599, AMP: 1299, description: 'good product', image: 'https://i0.wp.com/ayurvedaforall.co.uk/wp-content/uploads/2019/01/Abana-Himalaya-Ayurvedaforall.jpg' },
    { id: 8, name: 'Heartocare Tablet', company: 'vik', color: "Orange", price: 599, AMP: 1299, description: 'good product', image: 'https://5.imimg.com/data5/YM/ZD/GF/SELLER-86386737/hert-o-care-g1-500x500.jpg' },
    { id: 9, name: 'Heartokit', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://ik.imagekit.io/WPS/tr:pr-false,f-auto,w-200/file/5WwQbdBGa9O91W3ZKQ2_XV/*/a1N6F00000Qbkzn?_=1&authcred=d3BzYWRtaW46TXpDWHFmNFU=' },
    { id: 10, name: 'Related Product 10', company: 'oppo', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://www.alivepharmacy.com.au/cdn/shop/products/tt_int_9e95c20af2cea605d5f2ae47b4fb195e.tt.txt_1080x.jpg?v=1604992331' },
    { id: 11, name: 'Weight Gainer', company: 'Mons', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://5.imimg.com/data5/KN/OI/JO/SELLER-24263117/mustrong-lean-mass-gainer.jpg' },
    { id: 12, name: 'Body Gainer', company: 'Typ', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://images.jdmagicbox.com/quickquotes/images_main/blue-boost-100-pro-muscle-building-weight-boost-gainer-powder-2-5kg-for-healthy-body-gains-reduces-muscle-breakdown-increases-energy-and-endurance-2223584751-5f0d3js0.png' },
    { id: 13, name: 'HeartCare Pro', company: 'oppo', color: "Orange", price: 99, AMP: 199, description: 'good product', image: 'https://5.imimg.com/data5/YM/ZD/GF/SELLER-86386737/hert-o-care-g1-500x500.jpg' },
  ];


  const grocerypro = [
    { id: 1, name: 'TATA Salt', company: 'TATA', color: "Orange", price: 99, AMP: 299, description: 'good product', image: 'https://m.media-amazon.com/images/I/5136Y63Lq4L._SL500_.jpg' },
    { id: 2, name: 'Vikk Aata', company: 'kin', color: "Orange", price: 199, AMP: 299, description: 'good product', image: 'https://i5.walmartimages.com/asr/45ece694-be11-470f-8858-e679fb3550b4.d2be918855eaf3bb76d7c5206c2b1104.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF' },
    { id: 3, name: 'Maggi combo', company: 'maggi', color: "Orange", price: 239, AMP: 399, description: 'good product', image: 'https://www.indiaathome.com.au/cdn/shop/collections/131-Groceries_1200x1200.png?v=1643796541' },
    { id: 4, name: 'Bourn vita', company: 'parle', color: "Orange", price: 299, AMP: 499, description: 'good product', image: 'https://res.fkhealthplus.com/incom/images/product/Bourn-Vita-Jar--Free-Bourn-Vita-Biscuits-9-Tiffin-Pack-1527159241-10045045.jpg' },
    { id: 5, name: '50-50 Biscuit', company: 'parle', color: "Orange", price: 499, AMP: 599, description: 'good product', image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/NI_CATALOG/IMAGES/CIW/2024/7/16/240e0c27-6cf0-4448-be02-b687b518637f_biscuits_G68W0HD7SN_MN.png' },
    { id: 6, name: 'soya oil', company: 'soya', color: "Orange", price: 659, AMP: 679, description: 'good product', image: 'https://kanma.in/wp-content/uploads/2024/06/Fortune-Refined-Soyabean-Oil-2-ltr.png' },
    { id: 7, name: 'Maggi', company: 'maggi', color: "Orange", price: 599, AMP: 899, description: 'good product', image: 'https://m.media-amazon.com/images/I/51o1LFaBwdL._AC_UF1000,1000_QL80_.jpg' },
    { id: 8, name: 'Protin Oats', company: 'oats', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://www.jiomart.com/images/product/original/490309138/quaker-oats-1-kg-product-images-o490309138-p490309138-0-202306091251.jpg?im=Resize=(420,420)' },
    { id: 9, name: 'Almonds', company: 'Almond', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://m.media-amazon.com/images/I/71gSUy+youL.jpg' },
    { id: 10, name: 'berry Almonds', company: 'kin', color: "Orange", price: 329, AMP: 499, description: 'good product', image: 'https://m.media-amazon.com/images/I/614gkFQqHOL.jpg' },
    { id: 11, name: 'cashew', company: 'cashew', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://www.ipackdesign.com/wp-content/uploads/2020/11/best-cashew-packaging-design-1.jpg' },
    { id: 12, name: 'Salty Cashew', company: 'cashew', color: "Orange", price: 129, AMP: 199, description: 'good product', image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/310957370/WZ/UW/OG/37715017/roasted-and-salted-cashew-250g-frontside--500x500.jpg' },
    { id: 13, name: 'Rich cashew', company: 'cashew', color: "Orange", price: 789, AMP: 1299, description: 'good product', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/nut-dry-fruit/g/m/0/100-premium-raw-cashews-nut-100g-1-box-yum-yum-original-imahfgyhttjgud3z.jpeg?q=20&crop=false' }
  ];

 const  fashionpro = [
    { id: 1, name: 'TATA Salt', company: 'TATA', color: "Orange", price: 99, AMP: 299, description: 'good product', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsf9bDJpplGxywfoJeTHsgD2ntC_f1sCb1g&s' },
    { id: 2, name: 'Vikk Aata', company: 'kin', color: "Orange", price: 199, AMP: 299, description: 'good product', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/z/u/a/xl-6937-punit-original-imaghgsaxdsgegwp.jpeg?q=20&crop=false' },
    { id: 3, name: 'Maggi combo', company: 'maggi', color: "Orange", price: 239, AMP: 399, description: 'good product', image: 'https://m.media-amazon.com/images/I/61sTQ09V+QL._AC_UY1100_.jpg' },
    { id: 4, name: 'Bourn vita', company: 'parle', color: "Orange", price: 299, AMP: 499, description: 'good product', image: 'https://www.thestiffcollar.com/cdn/shop/files/rn-image_picker_lib_temp_81a077ff-f1cf-469c-90b2-89d40b24675a_1024x1024.jpg?v=1700118320' },
    { id: 5, name: '50-50 Biscuit', company: 'parle', color: "Orange", price: 499, AMP: 599, description: 'good product', image: 'https://assets.ajio.com/medias/sys_master/root/20240514/s5Nc/66437a4105ac7d77bb5a9d2a/-1117Wx1400H-467330012-peach-MODEL.jpg' },
    { id: 6, name: 'soya oil', company: 'soya', color: "Orange", price: 659, AMP: 679, description: 'good product', image: 'https://5.imimg.com/data5/WD/MA/MY-5511146/men-s-cotton-pant-500x500.jpg' },
    { id: 7, name: 'Maggi', company: 'maggi', color: "Orange", price: 599, AMP: 899, description: 'good product', image: 'https://s.alicdn.com/@sc04/kf/HTB1SxzuMMHqK1RjSZFEq6AGMXXav.jpg_200x200.jpg' },
    { id: 8, name: 'Protin Oats', company: 'oats', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://i5.walmartimages.com/seo/Herrnalise-Men-Casual-Slim-Fit-Solid-One-Button-Blazer-Turn-down-Collar-Suit-Long-Sleeves-Jacket-Khaki_9bccf9cd-4942-49b9-9517-0a507b9c8752.9ab33260a24b16f741c60ea38d6203b2.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' },
    { id: 9, name: 'Almonds', company: 'Almond', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://ttbazaar.com/cdn/shop/products/TS078REDBACK_daae8805-501f-4c66-9d0d-ed3bdc598ccd.jpg?v=1656507387' },
    { id: 10, name: 'berry Almonds', company: 'kin', color: "Orange", price: 329, AMP: 499, description: 'good product', image: 'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/657e4da24a65d680b22da674/mens-t-shirts-with-collar_maroon_s-640x640.jpg' },
    { id: 11, name: 'cashew', company: 'cashew', color: "Orange", price: 999, AMP: 1299, description: 'good product', image: 'https://img.tatacliq.com/images/i6/437Wx649H/MP000000006310216_437Wx649H_20200114202408.jpeg' },
    { id: 12, name: 'Salty Cashew', company: 'cashew', color: "Orange", price: 129, AMP: 199, description: 'good product', image: 'https://m.media-amazon.com/images/I/61H9FklRX8L._AC_UF894,1000_QL80_.jpg' },
    { id: 13, name: 'Rich cashew', company: 'cashew', color: "Orange", price: 789, AMP: 1299, description: 'good product', image: 'https://img.vitkac.com/uploads/product_thumb/SPODNIE%20720215%20TKO48-7640/lg/1.jpg' }
  ];


  const products = [
    {
      id: 1, // Added an ID for navigation
      name: 'Samsung Galaxy Z Flip4 ',
      description: 'Jam-packed with innovation, HomePod mini delivers unexpectedly.',
      image: 'https://fotografias.larazon.es/clipping/cmsimages02/2022/08/10/78CDA4B7-671F-417E-9D2C-37162F950747/98.jpg?crop=8268,4652,x0,y597&width=1900&height=1069&optimize=low&format=webply',
      price: null,
      isNew: false,
    },
    {
      id: 2, // Added an ID for navigation
      name: 'Samsung Galaxy Z Fold5',
      description: '*Data provided by internal laboratories. Industry measurement.',
      image: 'https://www.kimstore.com/cdn/shop/articles/081123_Galaxy_Flip_Fold_Banner.jpg?v=1691736692',
      price: 590,
      isNew: true,
    },
    {
      id: 2, // Added an ID for navigation
      name: 'Samsung Galaxy S10 12GB+256GB',
      description: '*Data provided by internal laboratories. Industry measurement.',
      image: 'https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-21-42/Samsung-phones-Galaxy-S10.jpg',
      price: 590,
      isNew: true,
    }
    
  ];

  const prodd5= [
    {
      title: 'Samsung Smart TVs',
      image: 'https://storage.googleapis.com/a1aa/image/rBEMvaQzPYoELR6utn2sytRgfAwnDuyenj3eDA7rM0fpVbecC.jpg',
      price: 12141,
      description: 'Experience stunning picture quality with Samsung Smart TVs.'
    },
    {
      title: 'Kitchen Essential',
      image: 'https://storage.googleapis.com/a1aa/image/47lGCaVNk2adDpefqpcmWh7xNxxhYI6WBR8bQ7f4WOC8qNPnA.jpg',
      price: 1999,
      description: 'Everything you need for a modern kitchen.'
    },
    {
      title: 'Crazy Deals',
      image: 'https://storage.googleapis.com/a1aa/image/POGCvTXUsn58ARAvFtMtB0XyeeCA9PkLMNBR4n12wl0l1mnTA.jpg',
      description: 'Unbelievable offers on top products!'
    }
  ];


 const sections = [
    {
      title: 'Electronics',
      prod: [
        {
          title: 'Polished Corrosion Resistant',
          description: 'Latest model with amazing features.',
          price: 699.99,
          imageUrl: 'https://tiimg.tistatic.com/fp/1/008/566/polished-corrosion-resistant-hexagonal-head-ms-bolt-nut-for-industrial-266.jpg',
          rating: 4.5,
          reviews: 150
        },
        {
          title: 'Hexagonal Stainless Steel Nut',
          description: 'High performance for work.',
          price: 999.99,
          imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438778911/XW/QL/XD/74751687/stainless-steel-nut-bolt-500x500.jpeg',
          rating: 4.7,
          reviews: 120
        },
        {
          title: 'Hexagonal Stainless Steel Nuts',
          description: 'Enjoy your music without wires.',
          price: 199.99,
          imageUrl: 'https://5.imimg.com/data5/KA/SL/JF/SELLER-5907487/stainless-steel-nuts-500x500.jpg',
          rating: 4.6,
          reviews: 200
        },
        {
          title: 'Rely®⇒VP INDUSTRIES',
          description: 'Latest model with amazing features.',
          price: 699.99,
          imageUrl: 'https://m.media-amazon.com/images/I/61d9N7nV66L.jpg',
          rating: 4.5,
          reviews: 150
        },
        {
          title: 'SS 316 / A193 B8M Machine Bolts',
          description: 'High performance laptop for work and play.',
          price: 999.99,
          imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/5/422503051/GJ/IA/OM/204451601/ss-316-a193-b8m-machine-bolts.jpg',
          rating: 4.7,
          reviews: 120
        },
        {
          title: '673 Cables Wiring Reel Warehouse',
          description: 'Latest model with amazing features.',
          price: 699.99,
          imageUrl: 'https://www.shutterstock.com/image-illustration/wooden-coil-cable-on-white-600nw-1787237861.jpg',
          rating: 4.5,
          reviews: 150
        },
        {
          title: '2,000+ Electrical Wire',
          description: 'High performance laptop for work and play.',
          price: 999.99,
          imageUrl: 'https://media.istockphoto.com/id/1320617292/photo/wire-electric-cable-of-different-colors-on-wooden-coil-or-spool-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=udvNf24haaQuTNBp-F-Mi8hF3IwwzWXvaMc7WQOoCRs=',
          rating: 4.7,
          reviews: 120
        },
        {
          title: 'Wires and Cables |',
          description: 'Enjoy your music without wires.',
          price: 199.99,
          imageUrl: 'https://www.vguard.in/uploads/product/superio-wires-bg.jpg',
          rating: 4.6,
          reviews: 200
        },
        {
          title: ' TWC Active 2.5 Sqmm Green',
          description: 'Latest model with amazing features.',
          price: 699.99,
          imageUrl: 'https://cdn.moglix.com/p/AGuKS0bPRFQd9-xxlarge.jpg',
          rating: 4.5,
          reviews: 150
        },
        {
          title: 'MultiStrand Copper',
          description: 'High performance laptop for work and play.',
          price: 999.99,
          imageUrl: 'https://5.imimg.com/data5/LK/WQ/MY-65963583/electrical-wire-500x500.jpg',
          rating: 4.7,
          reviews: 120
        },
        {
          title: 'Office Fax Machine',
          description: 'Latest model with amazing features.',
          price: 699.99,
          imageUrl: 'https://5.imimg.com/data5/KM/FH/MY-8742984/office-fax-machine-500x500.jpg',
          rating: 4.5,
          reviews: 150
        },
        {
          title: 'Plain Paper Fax Machine ',
          description: 'High performance laptop for work and play.',
          price: 999.99,
          imageUrl: 'https://5.imimg.com/data5/YX/LF/MY-2909150/plain-paper-fax-machine-500x500.jpg',
          rating: 4.7,
          reviews: 120
        },
        {
          title: 'Wireless Router',
          description: 'Enjoy your music without wires.',
          price: 199.99,
          imageUrl: 'https://www.shutterstock.com/image-illustration/wireless-router-isolated-on-white-260nw-278795078.jpg',
          rating: 4.6,
          reviews: 200
        },
        {
          title: 'Wi-fi And Usb Tethering ',
          description: 'Latest model with amazing features.',
          price: 699.99,
          imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/8/XX/FO/QS/118469644/m2s-jio-wifi-dongle-250x250.jpg',
          rating: 4.5,
          reviews: 150
        },
        {
          title: 'Trueview Smart Portable Camera',
          description: 'High performance laptop for work and play.',
          price: 999.99,
          imageUrl: 'https://trueview.co.in/wp-content/uploads/2024/02/T8184-AE-02.webp',
          rating: 4.7,
          reviews: 120
        }
      ]
    },
    {
      title: 'Mobiles',
      prod: [
        {
          title: 'Budget Smartphone',
          description: 'Affordable smartphone with great features.',
          price: 299.99,
          imageUrl: 'https://cdn.moglix.com/p/UuKuuUaF93sHU-xxlarge.jpg',
          rating: 4.2,
          reviews: 90
        },
        {
          title: 'Flagship Smartphone',
          description: 'Premium smartphone with top-notch performance.',
          price: 999.99,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bUPYt0qQyZtiGPhF5zfQJpx-xHzZWpQcZw&s',
          rating: 4.8,
          reviews: 110
        },
        {
          title: 'Budget Smartphone',
          description: 'Affordable smartphone with great features.',
          price: 299.99,
          imageUrl: 'data:image/jpeg;base64,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',
          rating: 4.2,
          reviews: 90
        },
        {
          title: 'Flagship Smartphone',
          description: 'Premium smartphone with top-notch performance.',
          price: 999.99,
          imageUrl: 'https://www.mobiledokan.co/wp-content/uploads/2020/08/Oppo-A53-Fancy-Blue-500x500.jpg',
          rating: 4.8,
          reviews: 110
        },
        {
          title: 'Flagship Smartphone',
          description: 'Premium smartphone with top-notch performance.',
          price: 999.99,
          imageUrl: 'data:image/jpeg;base64,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',
          rating: 4.8,
          reviews: 110
        }
      ]
    },
    {
      title: 'Toys',
      prod: [
        {
          title: 'Building Blocks',
          description: 'Creative building blocks for kids.',
          price: 29.99,
          imageUrl: 'https://snugnplay.com/cdn/shop/articles/Top-Rated_Baby_Toys.png?v=1685429856',
          rating: 4.7,
          reviews: 130
        },
        {
          title: 'Action Figure',
          description: 'Cool action figure for collectors.',
          price: 15.99,
          imageUrl: 'https://www.peekaboo.ke/cdn/shop/products/Pibi_Kids_Push_Friction_Powered_Monster_Truck_with_Color_Box_Assorted_Age-_3_Years_Above_2_800x.webp?v=1691593411',
          rating: 4.5,
          reviews: 200
        },
        {
          title: 'Building Blocks',
          description: 'Creative building blocks for kids.',
          price: 29.99,
          imageUrl: 'https://media.istockphoto.com/id/177558624/photo/toys-collection.jpg?s=170667a&w=0&k=20&c=TMDRXyvqLDCo4evliQzWTmbN_7yD2HFcXw-EvDH72e4=',
          rating: 4.7,
          reviews: 130
        },
        {
          title: 'Action Figure',
          description: 'Cool action figure for collectors.',
          price: 15.99,
          imageUrl: 'https://snugnplay.com/cdn/shop/articles/Top-Rated_Baby_Toys.png?v=1685429856',
          rating: 4.5,
          reviews: 200
        },
        {
          title: 'Building Blocks',
          description: 'Creative building blocks for kids.',
          price: 29.99,
          imageUrl: 'https://media.istockphoto.com/id/177558624/photo/toys-collection.jpg?s=170667a&w=0&k=20&c=TMDRXyvqLDCo4evliQzWTmbN_7yD2HFcXw-EvDH72e4=',
          rating: 4.7,
          reviews: 130
        },
      ]
    }
  ];


  const additionalProducts = [
    { id: 4, name: 'Realme Buds2', image: 'data:image/jpeg;base64,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', price: 29.99 },
    { id: 5, name: 'Realme Neo', image: 'https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/enco-buds2/navigation/Enco-Buds2-black-600_600.png', price: 39.99 },
    { id: 6, name: 'Airlite 5', image: 'https://m.media-amazon.com/images/I/51cV1jMpIKL.jpg', price: 49.99 },
    { id: 7, name: 'Poco Neo', image: 'https://www.triveniworld.com/cdn/shop/files/realme-techlife-buds-t100-bluetooth-truly-wireless-in-ear-earbuds-with-mic-ai-enc-for-calls-google-fast-pair-28-hours-total-playback-with-fast-charging-and-low-latency-gaming-mode-blue-triveni-world-1.jpg?v=1715891891', price: 29.99 },
    { id: 8, name: 'Samsung zo', image: 'https://m.media-amazon.com/images/I/71fYAthCwfL.jpg', price: 29.99 },
  ];

  const [selectedProductId, setSelectedProductId] = useState(null);


    return(
        <>
        <div className="product-navbar">
        <div>
        <img className="imgecontain" src={Image1} alt="" />
        <a href="#">Electronics</a>
          <div className="dropdown">
            <div className="dropdown-column">
              <h6>Office Automation Products</h6>
              <a href="#">Multifunction Printer</a>
              <a href="#">Xerox Machines</a>
              <a href="#">Fingerprint Scanners</a>
              <h6>Sensors & Transducers</h6>
              <a href="#">Level Sensors</a>
              <a href="#">Proximity Sensor</a>
              <a href="#">Sensor for Home & Office</a>
              <a href="#">Load Cell</a>
            </div>
            <div className="dropdown-column">
              <h6>Process Controllers</h6>
              <a href="#">Level Controllers</a>
              <a href="#">Motor Controllers</a>
              <a href="#">Temperature Controller</a>
              <h6>Control & Automation</h6>
              <a href="#">VFD</a>
              <a href="#">PLC</a>
              <a href="#">HMI</a>
            </div>
            <div className="dropdown-column">
              <h6>Diodes & Active Devices</h6>
              <a href="#">Integrated Circuits</a>
              <a href="#">Thyristors</a>
              <a href="#">Light Emitting Diode</a>
              <h6>Wires & Cables</h6>
              <a href="#">House Wire</a>
              <a href="#">Armoured Cable</a>
              <a href="#">Power Cable</a>
            </div>
          </div>
        </div>
        <div>
          <img className="imgecontain" src={Image2} alt="" />
          <a href="#" className="imgecontain">Pharmaceuticals</a>
          <div className="dropdown">
            <div className="dropdown-column">
              <h6>Pharmaceutical Drug</h6>
              <a href="#">Anticoagulant and Antiplatelet Drugs</a>
              <a href="#">Antiparasitic Drug</a>
              <a href="#">Antibiotic Tablets, Capsule & Syrup</a>
              <a href="#">Antifungal Injection, Tablet & Syrup</a>
              <h6>Nutraceuticals</h6>
              <a href="#">Vitamin Tablets & Capsules</a>
              <a href="#">Weight Loss Supplement</a>
              <a href="#">Dietary Supplements</a>
              <a href="#">Mineral Supplement</a>
            </div>
            <div className="dropdown-column">
              <h6>Fitness Supplements</h6>
              <a href="#">Weight Gain Nutrition</a>
              <a href="#">Weight Gain Capsule</a>
              <a href="#">Pre workout Supplements</a>
              <a href="#">Immune Booster</a>
              <h6>Medical Test Services</h6>
              <a href="#">CT Scan Services</a>
              <a href="#">Ultrasound Services</a>
              <a href="#">ECHO Cardiography</a>
              <a href="#">Blood Testing</a>
            </div>
            <div className="dropdown-column">
              <h6>Medical Treatment Services</h6>
              <a href="#">Dental Treatment Services</a>
              <a href="#">Medical Surgery Services</a>
              <a href="#">Eye Treatment</a>
              <a href="#">Plastic Surgery Services</a>
              <h6>Medical Test Services</h6>
              <a href="#">CT Scan Services</a>
              <a href="#">Ultrasound Services</a>
              <a href="#">ECHO Cardiography</a>
              <a href="#">Blood Testing</a>
            </div>
          </div>
        </div>
        <div>
          <img className="imgecontain" src={Image3} alt="" />
          <a href="#" className="imgecontain">Medical</a>
          <div className="dropdown">
            <div className="dropdown-column">
              <h6>Medical Laboratory Instruments</h6>
              <a href="#">Rapid Test Kit</a>
              <a href="#">Biochemistry Analyzer</a>
              <a href="#">Blood Bank Equipments</a>
              <a href="#">Hematology Analyzers</a>
              <h6>Patient Monitoring Systems</h6>
              <a href="#">Blood Pressure Machine</a>
              <a href="#">Capnometer</a>
              <a href="#">Medical Monitor</a>
              <a href="#">Surgical Monitor</a>
            </div>
            <div className="dropdown-column">
              <h6>Thermometer</h6>
              <a href="#">Infrared Thermometers</a>
              <a href="#">Forehead Thermometer</a>
              <a href="#">Non Contact Thermometer</a>
              <a href="#">Digital Thermometers</a>
              <h6>Medical Imaging Machine</h6>
              <a href="#">X Ray Machine</a>
              <a href="#">Ultrasound Machines</a>
              <a href="#">ECG Machine</a>
              <a href="#">Doppler Machine</a>
            </div>
            <div className="dropdown-column">
              <h6>Stethoscope</h6>
              <a href="#">Cardiology Stethoscope</a>
              <a href="#">Dual Head Stethoscope</a>
              <a href="#">Electronic Stethoscope</a>
              <a href="#">Pediatric Stethoscope</a>
              <h6>Suction Machine</h6>
              <a href="#">Electric Suction Unit</a>
              <a href="#">Foot Operated Suction Unit</a>
              <a href="#">Liposuction Machine</a>
              <a href="#">Central Suction System</a>
            </div>
          </div>
        </div>
        <div>
          <img className="imgecontain" src={Image4} alt="" />
          <a href="#" className="imgecontain">Industrial</a>
          <div className="dropdown">
            <div className="dropdown-column">
              <h6>Submersible Pump</h6>
              <a href="#">Borewell Submersible Pump</a>
              <a href="#">CRI Submersible Pumps</a>
              <a href="#">Open Well Submersible Pump</a>
              <h6>Automotive Oils</h6>
              <a href="#">Engine Oil</a>
              <a href="#">Gear Oil</a>
              <a href="#">Lubricating Oil</a>
            </div>
            <div className="dropdown-column">
              <h6>Water Tanks</h6>
              <a href="#">Triple Layered Water Tanks</a>
              <a href="#">Stainless Steel Water Tank</a>
              <a href="#">Supreme Water Tanks</a>
              <h6>PVC Sheets</h6>
              <a href="#">PVC Foam Sheets</a>
              <a href="#">PVC Marble Sheet</a>
              <a href="#">Transparent PVC Sheet</a>
            </div>
            <div className="dropdown-column">
              <h6>Conveyor Components</h6>
              <a href="#">Conveyor Belt</a>
              <a href="#">Conveyor Rollers</a>
              <a href="#">Conveyor Chains</a>
              <h6>Plastic Scrap</h6>
              <a href="#">PP Scrap</a>
              <a href="#">Pet Bottle Scrap</a>
              <a href="#">PET Chips Scrap</a>
            </div>
          </div>
        </div>
        <div>
          <img className="imgecontain" src={Image5} alt="" />
          <a href="#" className="imgecontain">Packaging</a>
          <div className="dropdown">
            <div className="dropdown-column">
              <h6>Corrugated Packaging Boxes</h6>
              <a href="#">Corrugated Box</a>
              <a href="#">3 Ply Corrugated Box</a>
              <a href="#">5 Ply Corrugated Box</a>
              <a href="#">Heavy Duty Industrial Corrugated Boxes</a>
              <a href="#">7 Ply Corrugated Box</a>
              <h6>Plastic Bottles</h6>
              <a href="#">PET Bottles</a>
              <a href="#">HDPE Bottle</a>
              <a href="#">Plastic Spray Bottle</a>
              <a href="#">Transparent Plastic Bottles</a>
              <a href="#">Packaging Bottles</a>
            </div>
            <div className="dropdown-column">
              <h6>Cap Closures</h6>
              <a href="#">Bottle Caps</a>
              <a href="#">Jar Cap</a>
              <a href="#">Flip Top Caps</a>
              <h6>Stretch Films</h6>
              <a href="#">Stretch Film Roll</a>
              <a href="#">Pallet Wrap Film</a>
              <a href="#">Cast Stretch Film</a>
            </div>
            <div className="dropdown-column">
              <h6>Paper Bags</h6>
              <a href="#">Brown Paper Bags</a>
              <a href="#">Kraft Paper Bags</a>
              <a href="#">Laminated Paper Bags</a>
              <a href="#">Recycled Paper Bags</a>
            </div>
          </div>
        </div>
        <div>
          <img className="imgecontain" src={Image6} alt="" />
          <a href="#" className="imgecontain">Automation</a>
          <div className="dropdown">
            <div className="dropdown-column">
              <h6>Smart Home Devices</h6>
              <a href="#">Smart Light</a>
              <a href="#">Smart Door Locks</a>
              <a href="#">Smart Security Cameras</a>
              <h6>Smart Kitchen Appliances</h6>
              <a href="#">Smart Refrigerator</a>
              <a href="#">Smart Coffee Maker</a>
              <a href="#">Smart Microwave Oven</a>
            </div>
            <div className="dropdown-column">
              <h6>Industrial Automation</h6>
              <a href="#">PLC Controllers</a>
              <a href="#">Robotic Arm</a>
              <a href="#">Sensors</a>
              <h6>Office Automation</h6>
              <a href="#">Automated Attendance System</a>
              <a href="#">Smart Projectors</a>
              <a href="#">Automatic Door System</a>
            </div>
            <div className="dropdown-column">
              <h6>Home Security Systems</h6>
              <a href="#">Intruder Alarm System</a>
              <a href="#">Smart Surveillance System</a>
              <a href="#">Video Doorbell</a>
              <h6>Automated Lighting</h6>
              <a href="#">Smart Light Bulbs</a>
              <a href="#">Smart Dimmer Switches</a>
              <a href="#">Motion Sensors</a>
            </div>
          </div>
        </div>
        <div>
          <img className="imgecontain" src={Image7} alt=""/>
          <a href="#" className="imgecontain">Electricals</a>
          <div className="dropdown">
            <div className="dropdown-column">
              <h6>Wires & Cables</h6>
              <a href="#">House Wire</a>
              <a href="#">Armoured Cable</a>
              <a href="#">Power Cable</a>
              <h6>Lighting</h6>
              <a href="#">LED Bulbs</a>
              <a href="#">CFL Bulbs</a>
              <a href="#">Smart LED Lights</a>
            </div>
            <div className="dropdown-column">
              <h6>Switches & Sockets</h6>
              <a href="#">Modular Switches</a>
              <a href="#">Two Pin Sockets</a>
              <a href="#">Three Pin Sockets</a>
              <h6>Voltage Stabilizers</h6>
              <a href="#">Automatic Voltage Stabilizer</a>
              <a href="#">Servo Voltage Stabilizer</a>
              <a href="#">Digital Voltage Stabilizer</a>
            </div>
            <div className="dropdown-column">
              <h6>Electrical Appliances</h6>
              <a href="#">Ceiling Fans</a>
              <a href="#">Table Fans</a>
              <a href="#">Exhaust Fans</a>
              <h6>Smart Gadgets</h6>
              <a href="#">Smart Plugs</a>
              <a href="#">Smart Switches</a>
              <a href="#">Smart Thermostats</a>
            </div>
          </div>
        </div>
      </div>

      <div className="related-products">
      <h3 className='testimonial-section-head'>Premium Products</h3>
      <div className="carousel">
        {premiumpro.map((premium1) => (
          <div
            key={premium1.id} // Assuming each product has a unique id
            className="products-related-products"
            onMouseEnter={() => showDetails(premium1)}
            onMouseLeave={hideDetails}
          >
            <img src={premium1.image} alt={premium1.name} />
            <h6 className="pro-name">{premium1.name}</h6>
            <div>
              <p className="pro-price">
                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(premium1.price)}
              </p>
              <p className="pro-amp">
                AMP: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(premium1.AMP)}
              </p>
            </div>
            {/* Tooltip or details section */}
            {selectedProduct1 && selectedProduct1.id === premium1.id && (
              <div className="predetails">
                <div><strong>Company:</strong> {selectedProduct1.company}</div>
                <div><strong>Color:</strong> {selectedProduct1.color}</div>
                <div><strong>Description:</strong> {selectedProduct1.description}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>


<div className="related-products">
      <h3 className='testimonial-section-head'>Beauty Products</h3>
      <div className="carousel">
        {beautypro.map((beauty1) => (
          <div
            key={beauty1.id} // Assuming each product has a unique id
            className="products-related-products"
            onMouseEnter={() => showDetails2(beauty1)}
            onMouseLeave={hideDetails2}
          >
            <img src={beauty1.image} alt={beauty1.name} />
            <h6 className="pro-name">{beauty1.name}</h6>
            <div>
              <p className="pro-price">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(beauty1.price)}</p>
              <p className="pro-amp">AMP : {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(beauty1.AMP)}</p>
            </div>
            {/* Tooltip or details section */}
            {selectedProduct2 && selectedProduct2.id === beauty1.id && (
              <div className="predetails">
                <div>Company : {selectedProduct2.company}</div>
                <div>Color : {selectedProduct2.color}</div>
                <div>Description: {selectedProduct2.description}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>


    <div className="related-products">
      <h3 className='testimonial-section-head'>Medical Products</h3>
      <div className="carousel">
        {medicalpro.map((medical) => (
          <div
            key={medical.id} // Assuming each product has a unique id
            className="products-related-products"
            onMouseEnter={() => showDetails3(medical)}
            onMouseLeave={hideDetails3}
          >
            <img src={medical.image} alt={medical.name} />
            <h6 className="pro-name">{medical.name}</h6>
            <div>
              <p className="pro-price">
                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(medical.price)}
              </p>
              <p className="pro-amp">
                AMP : {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(medical.AMP)}
              </p>
            </div>
            {/* Tooltip or details section */}
            {selectedProduct3 && selectedProduct3.id === medical.id && (
              <div className="predetails">
                <div>Company : {selectedProduct3.company}</div>
                <div>Color : {selectedProduct3.color}</div>
                <div>Description: {selectedProduct3.description}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>


    <div className="related-products">
      <h3 className='testimonial-section-head'>Grocery Products</h3>
      <div className="carousel">
        {grocerypro.map((grocery) => (
          <div
            key={grocery.id} // Assuming each product has a unique id
            className="products-related-products"
            onMouseEnter={() => showDetails4(grocery)}
            onMouseLeave={hideDetails4}
          >
            <img src={grocery.image} alt={grocery.name} />
            <h6 className="pro-name">{grocery.name}</h6>
            <div>
              <p className="pro-price">
                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(grocery.price)}
              </p>
              <p className="pro-amp">
                AMP : {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(grocery.AMP)}
              </p>
            </div>
            {/* Tooltip or details section */}
            {selectedProduct4 && selectedProduct4.id === grocery.id && (
              <div className="predetails">
                <div>Company : {selectedProduct4.company}</div>
                <div>Color : {selectedProduct4.color}</div>
                <div>Description: {selectedProduct4.description}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="related-products">
      <h3 className='testimonial-section-head'>Fashion Products</h3>
      <div className="carousel">
        {fashionpro.map((fashion) => (
          <div
            key={fashion.id} // Assuming each product has a unique id
            className="products-related-products"
            onMouseEnter={() => showDetails6(fashion)}
            onMouseLeave={hideDetails6}
          >
            <img src={fashion.image} alt={fashion.name} />
            <h6 className="pro-name">{fashion.name}</h6>
            <div>
              <p className="pro-price">
                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(fashion.price)}
              </p>
              <p className="pro-amp">
                AMP : {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(fashion.AMP)}
              </p>
            </div>
            {/* Tooltip or details section */}
            {selectedProduct6 && selectedProduct6.id === fashion.id && (
              <div className="predetails">
                <div>Company : {selectedProduct6.company}</div>
                <div>Color : {selectedProduct6.color}</div>
                <div>Description: {selectedProduct6.description}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="container6">
      <div className="left-section6">
        <h1>Get personalized offers from</h1>
        <p>eager sellers.</p>
        <div className="icons6">
          <div className="icon6">
            <i className="fas fa-hands-helping"></i>
            <p>Share Your Requirement</p>
          </div>
          <div className="icon6">
            <i className="fas fa-comments"></i>
            <p>Receive Complimentary</p>
          </div>
          <div className="icon6">
            <i className="fas fa-handshake"></i>
            <p>Finalize Your Choice!</p>
          </div>
        </div>
      </div>
      <div className="right-section6">
        <div className="form-group6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </div>
        <div className="form-group6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="form-group6">
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Contact No."
          />
        </div>
        <div className="form-group6">
          <select className='product-selection'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>Select Product Category</option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group6">
          <textarea
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
              autoAdjustHeight(e);
            }}
            placeholder="Product Details"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group6">
          <button onClick={submitForm}>Submit</button>
        </div>
      </div>
    </div>


    <div className="addi">
    <h3 className='testimonial-section-head'>More Products</h3>
      <div className="additional-products">
        <div className="product-slider">
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <div
            className="slider"
            style={{ transform: `translateX(-${currentSlide * 220}px)` }}
          >
            {additionalProducts.map((product) => (
              <div className="slide" key={product.id}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</p>
              </div>
            ))}
          </div>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>

      <div className="product-page">
        {sections.map((section) => (
          <div className="product-container" key={section.title}>
            <h2 className="section-title">{section.title}</h2>
            <div className="product-lis">
              {section.prod.map((produc) => (
                <div className="product" key={produc.id}>
                  <div className="product-image">
                    <img src={produc.imageUrl} alt={produc.title} />
                  </div>
                  <div className="product-details">
                    <h6 className="product-title">{produc.title}</h6>
                    <p className="product-price">
                      {produc.price.toFixed(2).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                    </p>
                    <p className="product-rating">
                      Rating: {produc.rating} ({produc.reviews} reviews)
                    </p>
                    <p className="product-description">{produc.description}</p>
                    <button className="add-to-cart" onClick={() => addToCart(produc)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="container5">
          <div className="section-title5">TVs & Appliances</div>
          <div className="product-grid5">
            {prodd5.map((prod55) => (
              <div
                key={prod55.id}
                className="product-item5"
                onClick={() => selectProduct5(prod55)}
              >
                <img src={prod55.image} alt={prod55.title} />
                <div className="product-title5">{prod55.title}</div>
                <div className="product-price5">
                  {prod55.price ? (
                    <span>
                      From <span>{prod55.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
                    </span>
                  ) : (
                    <span>Shop Now!</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {selectedProduct5 && (
            <div className="product-details5">
              <h2>{selectedProduct5.title}</h2>
              <img src={selectedProduct5.image} alt={selectedProduct5.title} />
              <p>{selectedProduct5.description}</p>
              <button onClick={closeDetails5}>Close</button>
            </div>
          )}
        </div>

        <div>
      <div className="container7">
        {products.map((product) => (
          <div className="card7" key={product.id}>
            <div className="content7">
              <div className={`badge7 ${product.isNew ? 'badge-new7' : ''}`}>
                INTRODUCING{product.isNew ? ' NEW' : ''}
              </div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <a className="shop-now7" onClick={() => handleNavigate(product.id)}>
                SHOP NOW
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <img src={product.image} alt={product.name} />
            {product.price && (
              <div className="price-tag7">
                {product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedProductId && (
        <div className="related-products">
          <h3>Related Products</h3>
          <div className="container7">
            {RelatedProducts
              .filter((relatedProduct) => relatedProduct.productId === selectedProductId)
              .map((relatedProduct) => (
                <div className="card7" key={relatedProduct.id}>
                  <div className="content7">
                    <h2>{relatedProduct.name}</h2>
                    <p>{relatedProduct.description}</p>
                    <div className="price-tag7">
                      {relatedProduct.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                    </div>
                  </div>
                  <img src={relatedProduct.image} alt={relatedProduct.name} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>

      </div>
    </div>


</>
    )
}
export default Products