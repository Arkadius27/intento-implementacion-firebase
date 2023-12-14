import React, { useState } from "react";
import { storage, db } from '../../config/config.js';

export const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState('');

  // tipos de imagenes permitidas
  const types = ["image/png", "image/jpeg", "image/jpg"];

  // manejo de imagenes
  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError('');
    }
    else {
      setProductImg(null);
      setError('Please select a valid file type (png/jpg/jpeg)');
    }
  };

  // agregar producto a la base de datos
  const addProduct = (e) => {
    e.preventDefault();
    // almacenar la imagen en firestore
    const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
    uploadTask.on('state_changed', snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress);
    }, err => {
      setError(err.message);
    }, () => {
      // obtener la url de la imagen y almacenarla en la base de datos
      storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
        db.collection('products').add({
          productName: productName,
          productPrice: Number(productPrice),
          productImg: url,
        }).then(() => {
          setProductName('');
          setProductPrice(0);
          setProductImg('');
          setError('');
          document.getElementById('file').value = '';
        }).catch(err => setError(err.message));
      })
    });
  };

  return (
    <div className="container">
      <br />
      <h2>ADD A PRODUCT TO THE CATALOG</h2>
      <hr />
      <form autoComplete="off" className="form-group" onSubmit={addProduct}>
        <label htmlFor="product-name">Product Name</label>
        <br />
        <input type="text" className="form-control" required onChange={(e) => setProductName(e.target.value)} value={productName} />
        <label htmlFor="product-price">Product Price</label>
        <br />
        <input type="number" className="form-control" required onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
        <br />
        <label htmlFor="product-img">Product Image</label>
        <input type="file" className="form-control" onChange={productImgHandler} id="file" />
        <br />
        <button className="btn btn-success btn-md mybtn">ADD PRODUCT</button>
      </form>
      {error && <span>{error}</span>}
    </div>
  );
};
