import React from 'react';
import '../static/css/Footer.css'
import { useTranslation } from 'react-i18next'; 



function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <div className="container-fluid py-5 footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <img className='Logo' src={require('../static/images/images.png')} alt="" />
                            <p className='footer-text'>{t('Бизнесингизни ривожлантиринг, бухгалтерияни бизга топширинг!')}</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <ul className='logos'>
                                <li><a href="https://www.instagram.com/hisobchilar?igsh=MTE4MDVwam5jOW5iOA=="><i class="fa-brands footerIcon fa-square-instagram "></i></a></li>
                                <li><a href="https://t.me/hisobchilaruz"><i class="fa-brands footerIcon fa-telegram "></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCAyuZ0-TjExb0u0a2wzdALw"><i class="fa-brands footerIcon fa-youtube "></i></a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=61561042475459"><i class="fa-brands footerIcon fa-facebook "></i></a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="footer-contact">
                                <p><a href="#">+998930067799</a></p>
                                <p><a href="#">mahbubazopirqulovna@gmail.com</a></p>
                                <p><a href="#">{t('Чилонзор тумани, Чилонзор кўчаси, 4 уй')}</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="hr"></div>
                        <div className="col-12">
                            <div className="footer-footer">
                                <p className='text-center footer-footer-text mb-0 mt-3'>
                                    Copyright <span style={{fontSize: "22px"}}>&copy;</span> 2024 OnlineOffice.uz <br />
                               {t('Ўзбекистон бўйлаб қулай бухгалтерия хизматлари.')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;