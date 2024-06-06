import React from "react";
import { CategoryPreviews, PromoSectionHome } from "../components";
import { ProductListHome } from "../components/ProductListHome";

export const Home = () => {
  return (
    <>
      <PromoSectionHome />;
      <ProductListHome />;
      <CategoryPreviews />
    </>
  );
};
