import { useRouter } from "next/router"

const ShopPage = () => {
    const { query } = useRouter();
    console.log(query)
    return (
        <>
            {query.slug ? (
                <div>
                    <h1>Pilihan user</h1>
                    <h2>
                        category : {query.slug[0]} - {query.slug[1]}
                    </h2>
                </div>
            ) : (
                <div>User belum memilih apapun</div>
            )}
        </>
    )
}
export default ShopPage;