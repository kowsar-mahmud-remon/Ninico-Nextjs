// import Layout from "@/components/layout/Layout";
import ShopPage from "@/components/shopPage";
import products from "@/data/products";
// import { addCart, addQty } from "@/features/shopSlice";
// import Link from "next/link";
import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";


export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}



const ShopSingleDynamicV1 = ({ params }) => {
    // const abc = useParams();
    // const [product, setProduct] = useState({});
    // const id = abc.id;
    // useEffect(() => {
    //     if (!id) <h1>Loading...</h1>;
    //     else setProduct(products.find((item) => item.id == id));
    //     return () => { };
    // }, [id]);


    const { id } = params;
    const product = products.find((post) => post.id.toString() === id);

    if (!product) {
        notFound(); // This will trigger a 404 page
    }



    return (
        <>
            <ShopPage product={product} />
        </>
    );
};

export default ShopSingleDynamicV1;
