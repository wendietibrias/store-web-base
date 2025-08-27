import sanityClient from "@/libs/services/sanity";
import groq from "groq";

export async function fetchProduct(productId: number){
    const fetchProduct = groq`*[_type=="product" && _id=${productId}]{
      name,
      subName,
      thumbnailImage,
      productImages,
      price,
      subDescription,
      description
    }`;

    return sanityClient.fetch(fetchProduct);
}

export async function fetchInCatalogProduct(){
  const fetchInCatalogProduct = groq`*[_type == "product"]{
      name,
      subName,
      thumbnailImage,
      slug,
      price,
      subDescription,
      description
  }`;

  return sanityClient.fetch(fetchInCatalogProduct);
}

export async function fetchPaginatedProducts(){

}