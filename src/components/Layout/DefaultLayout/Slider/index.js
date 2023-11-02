import style from './Slider.module.scss';
import classNames from 'classnames/bind';

import images from '~/assets/images';

const cx = classNames.bind(style);


function Slider() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('radio_img')}>
                <span className={cx('activated')}></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={cx('slider')}>
                <img src={cx(images.slider1)} />
                <img src={cx(images.slider2)} />
                <img src={cx(images.slider3)} />
                <img src={cx(images.slider4)} />
                <img src={cx(images.slider5)} />
            </div>
        </div>
    );
}

export default Slider;