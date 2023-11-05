import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import style from './ReviewProduct.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function ReviewProduct() {
    return (
        <Fragment>
            <div className={cx('item_content_review')}>
                <div className={cx('review-vote')}>
                    <FontAwesomeIcon icon={faStar} className={cx('like')} />
                    <FontAwesomeIcon icon={faStar} className={cx('like')} />
                    <FontAwesomeIcon icon={faStar} className={cx('like')} />
                    <FontAwesomeIcon icon={faStar} className={cx('like')} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className={cx('review-buys')}>Đã bán 3,5k</div>
            </div>
            <div className={cx('favouriteOrMall-item', 'onMall')}>
                <span className={cx('favouriteItem')} >Yêu thích</span>
                <span className={cx('mallItem')}>Mall</span>
            </div>
        </Fragment>
    );
}

export default ReviewProduct;