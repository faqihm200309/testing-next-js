import { fetcher } from "@/utils/db/fetcher"
import ProductViews from "@/views/ProductView"
import { useRouter } from "next/router";
import useSWR from "swr"

const ProductPage = () => {
    const { error, data, isLoading } = useSWR('/api/product', fetcher);
    const {push} = useRouter();
    if (error) return <h1>Error...</h1>
    return (
        <div>
            <ProductViews product={isLoading ? [] : data.data} />
        </div>
    )
}
export default ProductPage;