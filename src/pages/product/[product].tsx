import stylesD from "../../styles/productDetail.module.scss";
import { ProductType } from "@/components/fragments/Product.type";

type Props = {
  product: ProductType;
};

const DetailProductPage = ({ product }: Props) => {

  // Client Side Rendering (SWR)
  // const { error, data, isLoading } = useSWR(
  //   isReady ? `/api/product/${query.product}` : null,
  //   fetcher
  // );
  // console.log(data?.data);

  return (
    <div>
      <h1 className={stylesD.productDetail__title}>Detail Product</h1>


      <div className={stylesD.productDetail} key={product.id}>
        <div className={stylesD.productDetail__image}>
          <img src={product.image} alt={product.name} />
        </div>

        <h4 className={stylesD.productDetail__name}>
          {product.name}
        </h4>

        <h4 className={stylesD.productDetail__category}>
          {product.category}
        </h4>

        <p className={stylesD.productDetail__price}>
          {product.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
      </div>


      {/* Skeleton untuk SWR */}
      {/*
      {isLoading ? (
        <div className={styles.product__content__skeleton}>
          <div className={styles.product__content__skeleton__image} />
          <div className={styles.product__content__skeleton__name} />
          <div className={styles.product__content__skeleton__category} />
          <div className={styles.product__content__skeleton__price} />
        </div>
      ) : (
        <div className={stylesD.productDetail}>
          <div className={stylesD.productDetail__image}>
            <img src={data?.data?.image} alt={data?.data?.name} />
          </div>

          <h4 className={stylesD.productDetail__name}>
            {data?.data?.name}
          </h4>

          <h4 className={stylesD.productDetail__category}>
            {data?.data?.category}
          </h4>

          <p className={stylesD.productDetail__price}>
            {data?.data?.price?.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
        </div>
      )}
      */}
    </div>
  );
};

export default DetailProductPage;

// Server Side Rendering (SSR)
export async function getServerSideProps(context:any) {
  const {product} = context.params
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${product}`);
  const response = await res.json();
  console.log(response.data)
  return {
    props: {
      product: response.data,
    },
  };
}

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/product/`);
//   const response = await res.json();
//   const paths = response.data.map((item: ProductType) => ({
//     params: {
//       product: item.id
//     }
//   }))

//   return { paths, fallback: false }
// }

// export async function getStaticProps(context: any) {
//   const { product } = context.params;
//   const res = await fetch(`http://localhost:3000/api/product/${product}`);
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data
//     }
//   }
// }