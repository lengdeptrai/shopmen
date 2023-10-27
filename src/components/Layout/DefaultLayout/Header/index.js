import classNames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-firt')}>
                <div className={cx('logo')}>
                    <img 
                        src='https://graphicsfamily.com/wp-content/uploads/2020/11/Professional-Luxury-Logo-Design-on-realistic-leather-scaled.jpg'
                        alt='logo'
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;