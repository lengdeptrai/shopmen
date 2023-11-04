import style from './SaleProduct.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


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
                    <Link to='/viewproduct' className={cx('link sale_off')}>
                        <div className={cx('item_sale_off_img')}>
                            <img  src="https://giaynhapkhauvugia.com/wp-content/uploads/2020/12/z1970660592636_275cec5b267bbe9b35d9f9cf8abb8aaa.jpg" alt="" />
                        </div>
                        <div className={cx('item_sale_off_content')}>
                            <div className={cx('item_sale_off_content-des')}>
                                Giày CONVERSE Cổ Cao
                            </div>
                            <div className={cx('item_sale_off_prices')}>
                                <span className={cx('price-old')}>289.000đ</span>
                                <span className={cx('price-sale')}>188.000đ</span>
                            </div>
                        </div>
                        <div className={cx('item-sale')}>
                            <span>35%</span>
                            <span>GIẢM</span>
                        </div>
                    </Link>
                </li>
                <li className={cx('item_sale_off')}>
                    <Link to='/viewproduct' className={cx('link sale_off')}>
                        <div className={cx('item_sale_off_img')}>
                            <img  src="https://giaynhapkhauvugia.com/wp-content/uploads/2020/12/z1970660592636_275cec5b267bbe9b35d9f9cf8abb8aaa.jpg" alt="" />
                        </div>
                        <div className={cx('item_sale_off_content')}>
                            <div className={cx('item_sale_off_content-des')}>
                                Giày CONVERSE Cổ Cao
                            </div>
                            <div className={cx('item_sale_off_prices')}>
                                <span className={cx('price-old')}>289.000đ</span>
                                <span className={cx('price-sale')}>188.000đ</span>
                            </div>
                        </div>
                        <div className={cx('item-sale')}>
                            <span>35%</span>
                            <span>GIẢM</span>
                        </div>
                    </Link>
                </li>
                <li className={cx('item_sale_off')}>
                    <Link to='/viewproduct' className={cx('link sale_off')}>
                        <div className={cx('item_sale_off_img')}>
                            <img  src="https://giaynhapkhauvugia.com/wp-content/uploads/2020/12/z1970660592636_275cec5b267bbe9b35d9f9cf8abb8aaa.jpg" alt="" />
                        </div>
                        <div className={cx('item_sale_off_content')}>
                            <div className={cx('item_sale_off_content-des')}>
                                Giày CONVERSE Cổ Cao
                            </div>
                            <div className={cx('item_sale_off_prices')}>
                                <span className={cx('price-old')}>289.000đ</span>
                                <span className={cx('price-sale')}>188.000đ</span>
                            </div>
                        </div>
                        <div className={cx('item-sale')}>
                            <span>35%</span>
                            <span>GIẢM</span>
                        </div>
                    </Link>
                </li>
                <li className={cx('item_sale_off')}>
                    <Link to='/viewproduct' className={cx('link sale_off')}>
                        <div className={cx('item_sale_off_img')}>
                            <img  src="https://giaynhapkhauvugia.com/wp-content/uploads/2020/12/z1970660592636_275cec5b267bbe9b35d9f9cf8abb8aaa.jpg" alt="" />
                        </div>
                        <div className={cx('item_sale_off_content')}>
                            <div className={cx('item_sale_off_content-des')}>
                                Giày CONVERSE Cổ Cao
                            </div>
                            <div className={cx('item_sale_off_prices')}>
                                <span className={cx('price-old')}>289.000đ</span>
                                <span className={cx('price-sale')}>188.000đ</span>
                            </div>
                        </div>
                        <div className={cx('item-sale')}>
                            <span>35%</span>
                            <span>GIẢM</span>
                        </div>
                    </Link>
                </li>
                <li className={cx('item_sale_off')}>
                    <Link to='/viewproduct' className={cx('link sale_off')}>
                        <div className={cx('item_sale_off_img')}>
                            <img  src="https://giaynhapkhauvugia.com/wp-content/uploads/2020/12/z1970660592636_275cec5b267bbe9b35d9f9cf8abb8aaa.jpg" alt="" />
                        </div>
                        <div className={cx('item_sale_off_content')}>
                            <div className={cx('item_sale_off_content-des')}>
                                Giày CONVERSE Cổ Cao
                            </div>
                            <div className={cx('item_sale_off_prices')}>
                                <span className={cx('price-old')}>289.000đ</span>
                                <span className={cx('price-sale')}>188.000đ</span>
                            </div>
                        </div>
                        <div className={cx('item-sale')}>
                            <span>35%</span>
                            <span>GIẢM</span>
                        </div>
                    </Link>
                </li>
                <li className={cx('item_sale_off')}>
                    <Link to='/viewproduct' className={cx('link sale_off')}>
                        <div className={cx('item_sale_off_img')}>
                            <img  src="https://giaynhapkhauvugia.com/wp-content/uploads/2020/12/z1970660592636_275cec5b267bbe9b35d9f9cf8abb8aaa.jpg" alt="" />
                        </div>
                        <div className={cx('item_sale_off_content')}>
                            <div className={cx('item_sale_off_content-des')}>
                                Giày CONVERSE Cổ Cao
                            </div>
                            <div className={cx('item_sale_off_prices')}>
                                <span className={cx('price-old')}>289.000đ</span>
                                <span className={cx('price-sale')}>188.000đ</span>
                            </div>
                        </div>
                        <div className={cx('item-sale')}>
                            <span>35%</span>
                            <span>GIẢM</span>
                        </div>
                    </Link>
                </li>
                
            </ul>
        </div>
    );
}

export default SaleProduct;