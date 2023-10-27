import classNames from "classnames/bind";
import style from './DefaultLayout.module.scss'
import Header from "./Header";
import Footer from "./Footer";

const cx = classNames.bind(style);

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <div className={cx('container')}>{children}</div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;