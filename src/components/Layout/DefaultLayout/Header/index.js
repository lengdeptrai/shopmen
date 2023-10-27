import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell, faQuestionCircle, faCircleXmark} from '@fortawesome/free-regular-svg-icons'
import {faMagnifyingGlass, faCartShopping} from '@fortawesome/free-solid-svg-icons'
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
                        <a>
                            <FontAwesomeIcon icon={faBell} />
                            <span>Thông báo</span>
                        </a>
                    </li>
                    <li className={cx('item')}>
                        <a>
                            <FontAwesomeIcon icon={faQuestionCircle} />
                            <span>Trợ giúp</span>
                        </a>
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
                <div className={cx('seach')}>
                    <input placeholder='Tìm kiếm sản phẩm' spellCheck={false}/>
                    <button className={cx('clean-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <button className={cx('seach-btn')} >
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
                <div className={cx('cart')}>
                    <a>
                        <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                        <span>0</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;