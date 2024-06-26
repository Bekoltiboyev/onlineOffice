import React from 'react';
import '../static/css/Nabvar.css'; 
import useLocalStorage from '../translate/use-localstorage'; 
import i18n from '../i18n';
import { useTranslation } from 'react-i18next'; 

function Navbar() {
    const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'ru');

    const handleLanguageChange = () => {
        if (language === 'uz') {
            i18n.changeLanguage('ru');
            setLanguage('ru');
        } else if (language === 'ru') {
            i18n.changeLanguage('uz');
            setLanguage('uz');
        }
    };

    return (
        <>
            <nav className='position-fixed top-0'>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">
                   <img src={require('../static/images/images.png')} alt="" />
                </label>
                <ul className='mb-0'>
                    <li><a className="active" href="#">{t('компания')}</a></li>
                    <li><a href="#">{t('ФОЙДАЛАР')}</a></li>
                    <li><a href="#">{t('ХИЗМАТЛАР')}</a></li>
                    <li><a href="#">{t('ТАРИФЛАР')}</a></li>
                    <li><a href="#">{t('КОНТАКТЛАР')}</a></li>
                    <li>
                        {/* <div className='lang'>
                             <div className="uz">
                                 <img src={require('../static/images/uzb-flag.png')} alt="" />
                                 <p>uz</p>
                            </div>
                             <div className="ru">
                                 <img src={require('../static/images/rus-flag.png')} alt="" />
                                <p>ru</p> 
                             </div>
                        </div> */}
                        <button onClick={handleLanguageChange}> {/* Corrected function name */}
                            {t('change to')}{' '}
                            {language === 'ru' ? t('uz') : t('ru')}
                        </button>

                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
