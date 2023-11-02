import style from './ViewProducts.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);


function ViewProducts() {
    return ( 
        <div className={cx('wrapper')}>
            List View
        </div>
     );
}

export default ViewProducts;