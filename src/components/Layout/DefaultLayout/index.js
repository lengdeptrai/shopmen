import classNames from "classnames/bind";
import style from './DefaultLayout.module.scss'
import Header from "../../Header";

const cx = classNames.bind(style);

function DefaultLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>{children}</div>
        </div>
     );
}

export default DefaultLayout;