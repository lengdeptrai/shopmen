import style from './SaleProduct.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ProductItem from '~/components/ProductItem';


const cx = classNames.bind(style);


function SaleProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('countdown_sale_off')}>
                <div className={cx('countdown')}>
                    <span>SALE OFF</span>
                    <span className={cx('hour_sale')}>00</span>
                    <span className={cx('minute_sale')}>00</span>
                    <span className={cx('second_sale')}>00</span>
                </div>
                <div className={cx('view_all')}>
                    <Link to='/viewproducts' className={cx('link view_all_sale_off')}>
                        <span>Xem tất cả</span>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </Link>
                </div>
            </div>
            <ul className={cx('list_sale_off')}> 
                <li className={cx('item_sale_off')}>
                    <Link to='/viewproduct'>
                        <ProductItem isSale data/>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SaleProduct;