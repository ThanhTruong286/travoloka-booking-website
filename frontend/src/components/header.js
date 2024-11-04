import "../styles/global.scss";
import logo from "../assets/images/logo.svg"
import vietnam from "../assets/images/vietnam-language.svg"
import discount from "../assets/images/discount-icon.webp"

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="navigation">
                    <div className="logo col-3">
                        <a href="#">
                            <img src={logo} />
                        </a>
                    </div>
                    <div className="nav col-9">
                        <div className="language-currency-dropdown">
                            <div className="content">
                                <div className="language">
                                    <img src={vietnam} />
                                    <span>VI | VND</span>
                                </div>

                            </div>
                        </div>
                        <div className="nav-link">
                            <div className="discount">
                                <a href="#">
                                    <div className="discount-icon">
                                        <img src={discount} />
                                        <span>Khuyến mãi</span>
                                    </div>
                                </a>
                            </div>
                            <div className="support">
                                <a href="#">
                                    <div className="support-icon">
                                        <span>Hỗ trợ</span>
                                    </div>
                                </a>
                            </div>
                            <div className="cooperation">
                                <a href="#">
                                    <div className="cooperation-icon">
                                        <span>Hợp tác với chúng tôi</span>
                                    </div>
                                </a>
                            </div>
                            <div className="my-reservation">
                                <a href="#">
                                    <div className="my-reservation-icon">
                                        <span>Đặt chỗ của tôi</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="login-btn">
                            <a href="#">
                                <svg width="14" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemUserAccountFill"><path d="M3.44954 20.6443C3.3058 21.3665 3.88623 22 4.62267 22H19.3773C20.1138 22 20.6942 21.3665 20.5505 20.6443C19.9516 17.635 17.9884 13 12 13C6.01165 13 4.04844 17.635 3.44954 20.6443Z" fill="#FFFFFF"></path><path d="M7 7.5C7 10.2614 9.23858 12.5 12 12.5C14.7614 12.5 17 10.2614 17 7.5V6.5C17 3.73858 14.7614 1.5 12 1.5C9.23858 1.5 7 3.73858 7 6.5V7.5Z" fill="#FFFFFF"></path></svg>
                                <span>Đăng nhập</span>
                            </a>
                        </div>
                        <div className="signup-btn">
                            <a href="">
                                <span>Đăng ký</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="content">
                    <div className="nav-link">
                        <a className="nav-item" href="#">
                            <span>Khách sạn</span>
                        </a>
                        <a className="nav-item" href="#">
                            <span>Vé máy bay</span>
                        </a>
                        <a className="nav-item" href="#">
                            <span>Vé xe khách</span>
                        </a>
                        <a className="nav-item" href="#">
                            <span>Đưa đón sân bay</span>
                        </a>
                        <a className="nav-item" href="#">
                            <span>Cho thuê xe</span>
                        </a>
                        <a className="nav-item" href="#">
                            <span>Hoạt động và vui chơi</span>
                        </a>
                        <a className="nav-item" href="#">
                            <span>More</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header