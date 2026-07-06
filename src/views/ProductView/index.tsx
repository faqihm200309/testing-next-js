import styles from '../../styles/product.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ProductType } from '@/components/fragments/Product.type';


const ProductViews = ({product}: {product:ProductType[]} ) => {

    return (
        <div className={styles.product}>
            <h1 className={styles.product__title}>Product</h1>
            <div className={styles.product__content}>
                {product?.length == 0 ? (
                    <div className={styles.product__content__skeleton}>
                        <div className={styles.product__content__skeleton__image} />
                        <div className={styles.product__content__skeleton__name} />
                        <div className={styles.product__content__skeleton__category} />
                        <div className={styles.product__content__skeleton__price} />
                    </div>


                ) : (
                    product?.map((data: ProductType) => (
                        <Link href={`/product/${data.id}`} className={styles.product__content__item}>
                            <div className={styles.product__content__item__image}>
                                <Image src={data.image} alt={data.name} height={500} width={500}/>
                            </div>
                            <h4 className={styles.product__content__item__name}>
                                {data.name}
                            </h4>
                            <h4 className={styles.product__content__item__category}>
                                {data.category}
                            </h4>
                            <p className={styles.product__content__item__price}>
                                {data.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                            </p>
                        </Link>
                    ))



                )}
            </div>
        </div>
    )
}
export default ProductViews;