"use client"
import SectionTitle from "../global/SectionTitle";
import { fetchInCatalogProduct } from "@/libs/apis/sanity/product";
import useSWR from "swr";
import SkeletonCard from "../global/SkeletonCard";
import { Product } from "../../../sanity.types";
import ProductCard from "../global/ProductCard";

const CatalogSection = () => {
    const { data,isLoading } = useSWR('products', fetchInCatalogProduct);

    return (
        <section className="w-full @container py-20">
            <div className="w-[85%] mx-auto">
                <SectionTitle badgeTitle="Catalog" title="Our Products" alignment="center" />
                <div className="mt-10">
                    {isLoading ? (
                        <SkeletonCard itemCount={3} responsive={true} columnCount={3}/>
                    ) : (
                        <div className="w-full flex justify-center items-start gap-5">
                            {data && data.map((item: Product,idx: number) => (
                                <div className="w-[30%]" key={idx}>
                                  <ProductCard product={item} key={idx}/>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CatalogSection;