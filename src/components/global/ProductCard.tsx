import dummyProductImage from "@/assets/images/global/dummy-product-image.jpg";
import Image from "next/image";

const ProductCard = () => {
    return (
        <div className="w-full">
            <Image src={dummyProductImage} alt="Produk Image" loading="lazy" />
        </div>
    )
}

export default ProductCard;