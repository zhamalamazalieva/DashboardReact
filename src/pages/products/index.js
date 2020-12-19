import React from 'react';
import './style.scss';
import ProductsTop from './products_top.jsx';
import SearchForm from '../../components/search_form/search_form';
import {BtnNewProduct} from '../../components/btns/index';
const Products = () => {
    return (
        <section className='products'>
            <ProductsTop />
            <div className='space-between'>
            <SearchForm />
            <BtnNewProduct />
            </div>
        </section>
    )
};
export default Products;