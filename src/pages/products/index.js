import React from 'react';
import './style.scss';
import ProductsTop from './products_top.jsx';
import SearchForm from '../../components/search_form/search_form';
import ProductsItem from './products_item';
import {BtnNewProduct} from '../../components/btns/index';
import {Link} from 'react-router-dom';
const Products = () => {
    return (
        <section className='products'>
            <ProductsTop />
            <div className='space-between'>
            <SearchForm />
            <BtnNewProduct />
            </div>
           
                <ProductsItem />
      
               
        
            
        </section>
    )
};
export default Products;