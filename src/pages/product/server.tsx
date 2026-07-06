import { ProductType } from "../../components/fragments/Product.type";


type Props = {
    product:ProductType[]
}

const ProductPage = ({product}:Props) => {
    return (
        <div>
            <ProductPage product={product} />
        </div>
    )
}
export default ProductPage;

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/product")
    const response = await res.json()
    console.log(response);
    return {
        props: {
            product: response.data
        }
    }
}