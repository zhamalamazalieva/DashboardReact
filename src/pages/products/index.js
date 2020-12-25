import React from 'react';
import './style.scss';
import ProductsTop from './products_top.jsx';
import SearchForm from '../../components/search_form/search_form';
import ProductsItem from './products_item';
import {BtnNewProduct} from '../../components/btns/index';
import {Link} from 'react-router-dom';
import { usePagination } from '@material-ui/lab/Pagination';
import { MemoryRouter, Route } from 'react-router';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

function PaginationLink() {
    return (
      <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
        <Route>
          {({ location }) => {
            const query = new URLSearchParams(location.search);
            const page = parseInt(query.get('page') || '1', 10);
            return (
              <Pagination
                page={page}
                count={5}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                    {...item}
                  />
                )}
              />
            );
          }}
        </Route>
      </MemoryRouter>
    );
  }
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