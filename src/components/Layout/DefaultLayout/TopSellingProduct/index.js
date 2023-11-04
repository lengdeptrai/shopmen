import style from './TopSellingProduct.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons'

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
                        <a href="" className={cx('link link_item_top_selling')}>
                            <div className={cx('item_img')}>
                                <img src="https://giaynhapkhauvugia.com/wp-content/uploads/2020/12/z1970660592636_275cec5b267bbe9b35d9f9cf8abb8aaa.jpg" alt=""/>
                            </div>
                            <div className={cx('item_content')}>
                                <div className={cx('item_content_des')}>
                                    Giày CONVERSE Cổ Cao
                                </div>
                                <div className={cx('item_content_prices')}>
                                    <span className={cx('price-old')}>289.000đ</span>
                                    <span className={cx('price-sale')}>139.000đ</span>
                                </div>
                                <div className={cx('item_content_review')}>
                                    <div className={cx('review-vote')}>
                                       <FontAwesomeIcon icon={faStar} className={cx('like')}/>
                                       <FontAwesomeIcon icon={faStar} className={cx('like')}/>
                                       <FontAwesomeIcon icon={faStar} className={cx('like')}/>
                                       <FontAwesomeIcon icon={faStar} className={cx('like')}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                    </div>
                                    <div className={cx('review-buys')}>Đã bán 3,5k</div>
                                </div>
                                <div className={cx('favouriteOrMall-item' ,'onMall')}>
                                    <span className={cx('favouriteItem')} >Yêu thích</span>
                                    <span className={cx('mallItem')}>Mall</span>
                                </div>
                                <div className={cx('item-sale')}>
                                    <span>35%</span>
                                    <span>GIẢM</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopSellingProduct;