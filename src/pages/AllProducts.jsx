import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { useLocation, useNavigate } from "react-router";
import { Pagination } from "antd";
import CommonProductCard from "../components/common/CommonProductCard";
import axios from "axios";

const AllProducts = () => {
  const [skipAndLimit, setSkipAndLimit] = useState({
    limit: 12,
    skip: 0,
  });
  const [product, setProduct] = useState([]);
  const pageLocation = useLocation();
  const currentPage = pageLocation.pathname.split("/")[1].split("-").join(" ");

  const navigate = useNavigate();

  // Ant Design Pagination integration
  const onChangeItem = (current, pageSize) => {
    console.log(current, pageSize);

    const skipNo = (current - 1) * pageSize;
    console.log(skipNo);

    setSkipAndLimit((rest) => ({ ...rest, limit: pageSize, skip: skipNo }));
  };

  useEffect(() => {
    axios
      .get(
        `https://dummyjson.com/products?limit=${skipAndLimit.limit}&skip=${skipAndLimit.skip}`
      )
      .then((res) => {
        setProduct(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [skipAndLimit]);

  console.log(product.id);

  return (
    <div className="container">
      <BreadCrumbs pageName={currentPage} />

      <div className="flex flex-wrap justify-center lg:gap-x-15 gap-y-20 my-10">
        {product.products?.map((item, i) => (
          <CommonProductCard
            key={i}
            productImg={item.thumbnail}
            productCategory={item.category}
            productTitle={item.title}
            productPrice={item.price}
            productRating={item.rating}
            inStock={item.stock}
            priceBeforeDiscount={item.discountPercentage}
            // clickDetails={() => navigate(`/product-details/${product.id}`)}
          />
        ))}
      </div>

      {/* Ant Design Pagination integration */}
      <Pagination
        showSizeChanger
        onChange={onChangeItem}
        defaultCurrent={1}
        total={product.total}
        align="end"
        defaultPageSize={12}
        pageSizeOptions={[12, 24, 36, 48]}
      />
    </div>
  );
};

export default AllProducts;
