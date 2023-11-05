import style from './TopSellingProduct.module.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import ProductItem from '~/components/ProductItem';
import ReviewProduct from '~/components/ReviewProduct';

const cx = classNames.bind(style);

function TopSellingProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('suggestions')}>
                <span>TOP BÁN CHẠY</span>
            </div>
            <div className={cx('top_selling')}>
                <ul className={cx('list_top_selling')}>
                    <li className={cx('item_top_selling')}>
                        <div className={cx('add_item')} >
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-plus"></i>
                        </div>
                        <Link to='/viewproduct'>
                            <ProductItem/>
                            <ReviewProduct/>
                        </Link >
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopSellingProduct;