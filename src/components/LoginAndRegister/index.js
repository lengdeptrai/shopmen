import images from '~/assets/images';
import style from './Login.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);


function LoginAndRegister() {
    return (
        <div className={cx('wrapper')} >
            <img src={images.backgroundLogin}/>
            <div className={cx('cover')}>
                <img src={images.backgroundLogin}/>
                <div className={cx('login')}>
                    <h1>Đăng nhập</h1>
                    <div className={cx('group')} >
                        <input type="text" placeholder=" " required />
                        <label >Tên đăng nhập</label>
                    </div>
                    <div className={cx('group')} >
                        <input type="password" placeholder=" " required />
                        <label >Mật khẩu</label>
                    </div>
                    <div className={cx('group', 'check-save')} >
                        <input type="checkbox" />
                        <label >Lưu mật khẩu</label>
                    </div>
                    <div class="forgot-pass">
                        <a href="https://shopee.vn/buyer/reset" class="forgot-pass-link">Quên mật khẩu ?</a>
                    </div>
                    <div class="button ">
                        <button class="button_login button-login">Đăng nhập</button>
                    </div>
                    <div class="button">
                        <button class="button_face">
                            <a href="https://www.facebook.com/login.php" class="button-link">
                                <i class="fa-brands fa-facebook face-login"></i>
                                Đăng nhập với Facebook
                            </a>
                        </button>
                    </div>
                    <div class="button">
                        <button class="button_google">
                            <a href="https://accounts.google.com/v3/signin/identifier?dsh=S201365064%3A1665680400722394&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=vi&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession" class="button-link">
                                <img src="assets/img/gg.png" class="google-login" />
                                Google
                            </a>
                        </button>
                    </div>
                </div>
                {/* <div className={cx('register')}>
                <h1>Đăng ký</h1>
                <div class="modal__body-iner__group">
                    <input type="text" class="inputText" placeholder=" " required />
                    <label >Tên đăng nhập</label>
                </div>
                <div class="modal__body-iner__group">
                    <input type="password" class="inputText" placeholder=" " required />
                    <label >Mật khẩu</label>
                </div>
                <div class="modal__body-iner__group">
                    <input type="password" class="inputText" placeholder=" " required />
                    <label >Nhập lại mật khẩu</label>
                </div>
                <div class="modal__body-iner__group check-save">
                    <input type="checkbox" />
                    <label >Tôi đồng ý với
                        <a href="https://shopee.vn/legaldoc/termsOfService/?__classic__=1">điều khoản dịch vụ</a>
                        và
                        <a href="https://shopee.vn/legaldoc/privacy/?__classic__=1">chính sách bảo mật</a>
                    </label>
                    <div class="button">
                        <button class="button_login button-edit">Đăng ký</button>
                    </div>
                    <div class="button">
                        <button class="button_face">
                            <a href="https://www.facebook.com/login.php" class="button-link">
                                <i class="fa-brands fa-facebook face-login"></i>
                                Tiếp tục với Facebook
                            </a>
                        </button>
                    </div>
                    <div class="button">
                        <button class="button_google">
                            <a href="https://accounts.google.com/v3/signin/identifier?dsh=S201365064%3A1665680400722394&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=vi&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession" class="button-link">
                                <img src="assets/img/gg.png" class="google-login" />
                                Google
                            </a>
                        </button>
                    </div>
                </div>
            </div> */}
            </div>
        </div>
    );
}

export default LoginAndRegister;