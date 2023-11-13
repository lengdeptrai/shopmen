
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCartShopping, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import Search from '../Search';
const cx = classNames.bind(style);

function Header() {


    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-firt')}>
                <div className={cx('logo')}>
                    <img
                        src={images.logo}
                        alt='logo'
                    />
                </div>
                <ul className={cx('list-item')}>
                    <li className={cx('item')}>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Trang chủ</span>
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link to='/viewproducts'>
                            <span>Sản phẩm</span>
                            <FontAwesomeIcon icon={faChevronCircleDown} />
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <a>
                            <img
                                src={images.user}
                                alt='user'
                            />
                            <span>Tài khoản</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={cx('header-second')}>

                <Search />

                <div className={cx('cart')}>
                    <Link to='/cart'>
                        <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                        <span>0</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;