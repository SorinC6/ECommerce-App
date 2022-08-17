import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  console.log("products", products);
  return (
    <>
      <HeroBanner heroBanner={bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Tech of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((item) => (
          <Product key={item._id} product={item} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
