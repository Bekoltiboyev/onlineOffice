import React from 'react';
import '../static/css/xizmatlar.css'
import { PiHandshakeLight } from "react-icons/pi";  
import { SiInternetcomputer } from "react-icons/si";
import { MdOutlineAssuredWorkload } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdImportExport } from "react-icons/md";
import { IoStar, IoStarHalf  } from "react-icons/io5";
import { FaSignal } from "react-icons/fa6";
import { useTranslation } from 'react-i18next'; 


function Xizmatlar() {
    const { t } = useTranslation();
    return (
        
        <>
            <div className="container xizmatlar py-3">
                <h1 className="title">{t('Сизни доимий такрорланадиган ишлардан ҳалос этамиз.')}</h1>
                <p className="text">{t('Биз нафақат солиқларни ҳисоблаймиз ва ҳисоботларни топширамиз, балки корхона учун ундан ҳам муҳим бўлган вазифаларни бажарамиз.')}</p>
                <div className="row g-3 mt-5">
                    <div className="col-12 col-xl-6">
                        <div className="x_card">
                            <div className="x_card_header">
                                <PiHandshakeLight className='x_card_icon' />
                                <h2 className='x_card_title'>{t('Шартномалар тайёрлаймиз.')}</h2>
                            </div>
                            <p className='x_card_text'>{t('Бизнесингиз фаолият турига мос шартномаларни тайёрлаймиз. Янги мижоз келганда бизга топшириқ берсангиз бас, шартномани зудлик билан тайёрлаб электрон хужжатлар айланиш тизими орқали мижозингизга юборамиз.')}</p>
                            <div className="Star_box">
                                <div className="star_left">
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStarHalf className='star_icon_color' />
                                    <span className='ms-1 fs-5'>4.8</span>
                                </div>
                                <div className="star_left">
                                    <FaSignal className='fs-5' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <div className="x_card">
                            <div className="x_card_header">
                                <SiInternetcomputer className='x_card_icon' />
                                <h2 className='x_card_title'>{t('Интернет – банкинг юритамиз.')}</h2>
                            </div>
                            <p className='x_card_text'>{t('Сизни топшириғингизга асосан банк ҳисоб рақамингиздан барча тўловларни кўрсатилган жойга ўтқазиб берамиз. Тўлов календари тузамиз ва унга асосан ҳар ой тўланадиган тўловларингизни ўз вақтида амалга оширамиз.')}</p>
                            <div className="Star_box">
                                <div className="star_left">
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStarHalf className='star_icon_color' />
                                    <span className='ms-1 fs-5'>4.8</span>
                                </div>
                                <div className="star_left">
                                    <FaSignal className='fs-5' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <div className="x_card">
                            <div className="x_card_header">
                                <MdOutlineAssuredWorkload className='x_card_icon' />
                                <h2 className='x_card_title'>{t('Ходимларни ишга ёллаймиз ва ишдан бўшатамиз.')}</h2>
                            </div>
                            <p className='x_card_text'>{t('Янги ходим ишга ёлланганда ва ишдан бўшатилганда барча керакли  тайёрлаймиз.Электрон миллий меҳнат тизимида ўз вақтида рўйхатга оламиз. Иш ҳақи буйича маълумотнома тайёрлаб берамиз.')}</p>
                            <div className="Star_box">
                                <div className="star_left">
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStarHalf className='star_icon_color' />
                                    <span className='ms-1 fs-5'>4.8</span>
                                </div>
                                <div className="star_left">
                                    <FaSignal className='fs-5' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <div className="x_card">
                            <div className="x_card_header">
                                <CiMoneyCheck1 className='x_card_icon' />
                                <h2 className='x_card_title'>{t('Ходимларга иш ҳақи ҳисоблаймиз.')}</h2>
                            </div>
                            <p className='x_card_text'>{t('Ходимларга ўз вақтида иш ҳақи хисоблаш учун табелларни тўлдирамиз. Солиқларни тўлаб, ходимларни пластик карталарига иш ҳақини ўтқазиб берамиз.')}</p>
                            <div className="Star_box">
                                <div className="star_left">
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStarHalf className='star_icon_color' />
                                    <span className='ms-1 fs-5'>4.8</span>
                                </div>
                                <div className="star_left">
                                    <FaSignal className='fs-5' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <div className="x_card">
                            <div className="x_card_header">
                                <IoDocumentAttachOutline  className='x_card_icon' />
                                <h2 className='x_card_title'>{t('Электрон хужжатлар айланиш тизимини юритамиз.')}</h2>
                            </div>
                            <p className='x_card_text'>{t('Электрон ҳисоб – фактураларни сизни розилигингиз билан қабул қиламиз ёки рад этамиз. Электрон ишончномалар юборамиз. Электрон ҳисоб – фактуралар юборамиз.')}</p>
                            <div className="Star_box">
                                <div className="star_left">
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStarHalf className='star_icon_color' />
                                    <span className='ms-1 fs-5'>4.8</span>
                                </div>
                                <div className="star_left">
                                    <FaSignal className='fs-5' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <div className="x_card">
                            <div className="x_card_header">
                                <MdImportExport  className='x_card_icon' />
                                <h2 className='x_card_title'>{t('Экспорт ва импорт амалга оширишда ёрдам берамиз')}</h2>
                            </div>
                            <p className='x_card_text'>{t('“Ташқи савдо операцияларининг ягона электрон ахборот тизими” га экспорт ва импорт шартномалари бўйича маълумотларни киритамиз.')}</p>
                            <div className="Star_box">
                                <div className="star_left">
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStar className='star_icon_color' />
                                    <IoStarHalf className='star_icon_color' />
                                    <span className='ms-1 fs-5'>4.8</span>
                                </div>
                                <div className="star_left">
                                    <FaSignal className='fs-5' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Xizmatlar;