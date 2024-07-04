import React from 'react';
import '../static/css/Footer.css'
import { useTranslation } from 'react-i18next'; 



function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <div className="container-fluid py-5 footer" id='footer'>
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
                                <p><a  href="tel:+998930067799">+998930067799</a></p>
                                <p><a rel="noopener noreferrer" target='_blank' href="mailto:mahbubazopirqulovna@gmail.com">mahbubazopirqulovna@gmail.com</a></p>
                                <p><a rel="noopener noreferrer" target='_blank' href="https://www.google.com/maps/place/Uchtepa+Sabes/@41.2811647,69.1799159,16.58z/data=!4m6!3m5!1s0x38ae894d53306d79:0x9458bbcb7e1179eb!8m2!3d41.2809885!4d69.1805471!16s%2Fg%2F11t0lwnrx0?entry=ttu">{t('Чилонзор тумани, Чилонзор кўчаси, 4 уй')}</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="hr"></div>
                        <div className="col-12">
                            <div className="footer-footer">
                                <p className='text-center footer-footer-text mb-0 mt-3'>
                                    Copyright <span style={{fontSize: "22px"}}>&copy;</span> 2024 hisobchilar.com.uz <br />
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