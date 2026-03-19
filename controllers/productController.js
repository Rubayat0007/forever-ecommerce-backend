import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

// function for add product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory } = req.body;
    const bestsellerRaw = req.body.bestseller;
    const bestseller = bestsellerRaw === true || bestsellerRaw === 'true' || bestsellerRaw === '1';


    const sizesRaw = req.body.sizes;
    let sizes = [];
    if (typeof sizesRaw === 'string' && sizesRaw.startsWith('[')) {
      try {
        sizes = JSON.parse(sizesRaw);
      } catch (err) {
        sizes = [sizesRaw];
      }
    } else if (Array.isArray(sizesRaw)) {
      sizes = sizesRaw;
    } else if (sizesRaw) {
      sizes = [sizesRaw];
    }

    // files (safely handle missing)
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(Boolean);

    // upload to cloudinary if any image exists
    let imagesUrl = [];
    if (images.length > 0) {
      imagesUrl = await Promise.all(
        images.map(async (item) => {
          const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
          return result.secure_url;
        })
      );
    }

    const productData = {
      name,
      description,
      category,
      price: Number(price) || 0,
      subCategory,
      bestseller: bestseller,
      sizes,
      image: imagesUrl, 
      date: Date.now(),
    };

    console.log('productData =>', productData);

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: 'Product Added' });
  } catch (error) {
    console.error('addProduct error:', error);
    res.json({ success: false, message: error.message });
  }
};

// function for list product
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error('listProducts error:', error);
    res.json({ success: false, message: error.message });
  }
};

// function for removing product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: 'Product Removed' });
  } catch (error) {
    console.error('removeProduct error:', error);
    res.json({ success: false, message: error.message });
  }
};

// function for single product info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.error('singleProduct error:', error);
    res.json({ success: false, message: error.message });
  }
};

export { listProducts, addProduct, removeProduct, singleProduct };
