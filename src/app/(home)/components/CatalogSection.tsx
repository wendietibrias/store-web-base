"use client"
import SectionTitle from "../../../components/global/Public/SectionTitle";
import { fetchInCatalogProduct } from "@/libs/apis/sanity/product";
import useSWR from "swr";
import SkeletonCard from "../../../components/global/Skeleton/SkeletonCard";
import { Product } from "../../../../sanity.types";
import ProductCard from "../../../components/global/Card/ProductCard";
import { productKeys } from "@/libs/keys/product";

const CatalogSection = () => {
    const { data,isLoading } = useSWR(productKeys.catalogProduct, fetchInCatalogProduct);

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