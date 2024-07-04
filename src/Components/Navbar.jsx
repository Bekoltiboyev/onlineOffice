import React, { useState } from 'react';
import '../static/css/Nabvar.css'; 
import useLocalStorage from '../translate/use-localstorage'; 
import i18n from '../i18n';
import { useTranslation } from 'react-i18next'; 

function Navbar() {
    const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'ru');
    const [changeBtn, setChangeBtn] = useState("")
    const handleLanguageChange = () => {
        if (language === 'uz') {
            i18n.changeLanguage('ru');
            setLanguage('ru');
            setChangeBtn("rus_btn")
        } else if (language === 'ru') {
            i18n.changeLanguage('uz');
            setLanguage('uz');
            setChangeBtn("uzb_btn")
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
                    <li><a className="active" href="#kompaniya">{t('компания')}</a></li>
                    <li><a href="#foydaComp">{t('ФОЙДАЛАР')}</a></li>
                    <li><a href="#xizmatlar">{t('ХИЗМАТЛАР')}</a></li>
                    <li><a href="#tarif">{t('ТАРИФЛАР')}</a></li>
                    <li><a href="#footer">{t('КОНТАКТЛАР')}</a></li>
                    <li>
                        <button className={changeBtn === "uzb_btn" ? 'lang_btn uzb_btn' : 'lang_btn rus_btn'} onClick={handleLanguageChange}> {/* Corrected function name */}
                            {t('')}{' '}
                            {language === 'ru' ? t('Ўзб') : t('Рус')}
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
