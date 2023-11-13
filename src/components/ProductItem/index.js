import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { faStar } from '@fortawesome/free-solid-svg-icons';




const cx = classNames.bind(style);

function ProductItem({data, isSale}) {
    const clases = cx('product',{
        isSale
    })

    if(data === undefined) return <h2>Loagding......</h2>
    return (
        <div className={clases}>
            <div className={cx('product_img')}>
                <img src="https://giaynhapkhauvugia.com/wp-content/uploads/2020/12/z1970660592636_275cec5b267bbe9b35d9f9cf8abb8aaa.jpg" alt="" />
            </div>
            <div className={cx('product_content')}>
                <div className={cx('product_content-name')}>
                    {data.name}
                </div>
                <div className={cx('product_prices')}>
                    <span className={cx('price-old')}>{data.price}đ</span>
                    <span className={cx('price-sale')}>{data.price - data.price*data.discount/100}0đ</span>
                </div>
            </div>
            <div className={cx('product-sale')}>
                <span>{data.discount}%</span>
                <span>GIẢM</span>
            </div>
            <div className={cx('item_content_review')}>
                <div className={cx('review-vote')}>
                    <span>4.5</span>
                    <FontAwesomeIcon icon={faStar} className={cx('like')} />
                </div>
                <div className={cx('review-buys')}>Đã bán 3,5k</div>
            </div>
            <div className={cx('favouriteOrMall-item', 'onMall')}>
                <span className={cx('favouriteItem')} >Yêu thích</span>
                <span className={cx('mallItem')}>Mall</span>
            </div>
        </div>
    );
}

export default ProductItem;