import Image from 'next/image';
import styles from '../styles/404.module.scss';

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <Image src="/notfound.png" alt="" width={600} height={600} className={styles.error__image}/>
            <div>Halaman tidak ditemukan</div>
        </div>
    )
}
export default Custom404;