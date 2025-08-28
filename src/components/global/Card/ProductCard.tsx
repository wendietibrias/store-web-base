"use client"

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../../sanity.types";
import currencyFormatter from "@/libs/helpers/currency";
import Link from "next/link";
import ButtonCn from "../Form/ButtonCn";
import { RiShoppingCartFill } from "@remixicon/react";

export interface IProductProps {
  product: Product;
}

const ProductCard = ({ product }: IProductProps) => {
  const { name, subName,slug, price, thumbnailImage } = product;

  return (
    <Link href={`/store/${slug?.current}`}>
       <div className="w-full p-2 rounded-md shadow-md shadow-gray-200">
      {thumbnailImage && (
        <div className="relative h-[280px]">
          <Image
            src={urlFor(thumbnailImage).width().height().url()}
            alt="Produk Image"
            loading="lazy"
            objectFit="cover"
            className="rounded-md"
            fill
          />
        </div>
      )}
      <div className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-extrabold text-[0.9rem] text-dark-primary">{name}</h4>
            <p className="text-[0.8rem] text-alternative-secondary">{subName}</p>
          </div>
          <h5 className="text-primary-clr text-[0.85rem] font-extrabold">Rp. {currencyFormatter(price!)}</h5>
        </div>
        <div className="mt-3">
          <ButtonCn icon={<RiShoppingCartFill/>} variant="outline" isPrimary={true} loading={false} title="Add To Cart" mode="dark" size="sm" type="button" />
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
