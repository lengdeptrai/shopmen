import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faHouse,faMagnifyingGlass, faCartShopping, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);

function Header() {

    const [seachResult, setSeachResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSeachResult([])
        }, 0)
    }, [])

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
                <Tippy
                    interactive
                    visible={seachResult.length > 0}
                    render={attrs => (
                        <div className={cx('seach-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                RESULT SEACH
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('seach')}>
                        <input placeholder='Tìm kiếm sản phẩm' spellCheck={false} />
                        <button className={cx('clean-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('seach-btn')} >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
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