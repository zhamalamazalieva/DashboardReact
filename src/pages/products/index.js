import React from "react";
import "./style.scss";
import ProductsTop from "./products_top";
import SearchForm from "./search_form";
import ProductsItem from "./products_item";
import Modal from './modal'
import { BtnNewProduct } from "../../components/btns";
import axios from "axios";

const Products = () => {
  const [products1, setProducts] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [activeModal, setActiveModal] = React.useState(false);


  React.useEffect(() => {
    axios
      .get("http://localhost:3000/database.json")
      .then((response) => {
        console.log(response);
        return response.data.products;
      })
      .then((item) => setProducts(item));
  }, []);

  return (
    <section className="products">
       {activeModal && <Modal setProduct={setProducts} product={products1} setActiveModal={setActiveModal} />}
        <div className='section-container'>
        <ProductsTop />
      <div className="space-between">
        <SearchForm setSearchValue={setSearchValue} />
        <div  onClick={()=> setActiveModal(true) }>
        <BtnNewProduct/>
        </div>
       
      </div>
      <div>
      <div className="row products__row">
        {products1
          .filter((item) => {
            if (searchValue === "") {
              return item;
            } else if (
              item.productName.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => (
            <ProductsItem item={item} />
          ))}
          </div>
      </div>
        </div>
    </section>
  );
};
export default Products;
