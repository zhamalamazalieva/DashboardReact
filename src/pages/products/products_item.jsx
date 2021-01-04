import React from "react";
import Clock from "../../assets/image/svg/clock.svg";
import Download from "../../assets/image/svg/download.svg";
import { Pro } from "./const";
import { Link } from "react-router-dom";

const ProductsItem = ({ item }) => {
  const [count, setCount] = React.useState(0);
  return (
      <div className="col-4 products__margin">
        <div className="products__item">
          <div className="products__icon">
            <img src={item.productLogo} alt="dropbox" />
          </div>
          <div>
            <h3 className="products__title">{item.productName}</h3>
            <p className="products__description">{item.productDescription}</p>
          </div>
          <div className="row products__info space-between">
            <div className="products__update align-center">
              <img src={Clock} alt="clock" />
              <span className="products__info-text">Updated 2 hr ago</span>
            </div>
            <div className="products__download align-center">
              <img src={Download} alt="download" />
              <span className="products__info-text">
                <Link
                  onClick={() => setCount(count + 1)}
                  className="products__link"
                  to={item.link}
                  target="_blank"
                  download
                >
                  {count} Downloads
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};
export default ProductsItem;
