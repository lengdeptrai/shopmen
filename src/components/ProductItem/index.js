import style from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";


const cx = classNames.bind(style);

function ProductItem({product}) {
    return (
        <div className={cx('product')}>
            <div className={cx('product_img')}>
                <img src="https://giaynhapkhauvugia.com/wp-content/uploads/2020/12/z1970660592636_275cec5b267bbe9b35d9f9cf8abb8aaa.jpg" alt="" />
            </div>
            <div className={cx('product_content')}>
                <div className={cx('product_content-name')}>
                    {product.name}
                </div>
                <div className={cx('product_prices')}>
                    <span className={cx('price-old')}>{product.priceOld}</span>
                    <span className={cx('price-sale')}>{product.priceSale}</span>
                </div>
            </div>
            <div className={cx('product-sale')}>
                <span>{product.countSale}</span>
                <span>GIẢM</span>
            </div>
        </div>
    );
}

export default ProductItem;