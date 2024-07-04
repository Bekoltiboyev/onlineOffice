import React from 'react';
import '../static/css/Banner.css'
import { useTranslation } from 'react-i18next'; 
import axios from 'axios';
import {motion} from 'framer-motion'
import { fadeIn } from '../Variant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Banner() {
    const { t } = useTranslation();
    const SendMessage = (event) => {
        event.preventDefault();
        const token = "7219229535:AAF30zRgKAjWSuvCK_caq9Jti0CSr3xH_jw";
        const URL = `https://api.telegram.org/bot${token}/sendMessage`;
        const chat_id = 1027657719;
        const name = document.getElementById('name').value;
        const telNumber = document.getElementById('telNumber').value;

        const MessageContent = `Ismi: ${name} \nTel: ${telNumber}`;
        axios({
            url: URL,
            method: 'POST',
            data: {
                "chat_id": chat_id,
                "text": MessageContent,
            }
        }).then((res)=>{
            document.getElementById('MyForm').reset();
            toast.success('Habaringiz yuborildi');
        }).catch((error)=>{
            toast.error('Xatolik yuz berdi');
        })
    };
    return (
        <>
            <div className="container banner  mt-3 pb-3" id='kompaniya'>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6" >
                        <motion.div 
                            variants={fadeIn('up', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }}
                            className="banner-image-box" >
                        </motion.div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="banner-form-box pt-5">
                            <motion.h1 
                                variants={fadeIn('up', 0.1)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                className='title text-center'>
                                {t('Биринчи ой учун хизмат - Бепул')}
                            </motion.h1>
                            <motion.p 
                                variants={fadeIn('up', 0.1)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                className='text text-center'>
                                {t('СЎРОВНОМАНИ ТЎЛДИРИНГ Яқин вақт ичида сиз билан боғланиб, барча саволларингизга жавоб берамиз.')}
                            </motion.p>
                            <motion.div 
                                variants={fadeIn('up', 0.1)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }} className='hr' > 
                            </motion.div>
                            <motion.form
                                variants={fadeIn('up', 0.1)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                id='MyForm' onSubmit={SendMessage} className='px-2 mt-5'>
                                <div className="mb-4">
                                    <input type="text" className="form-control form-control-lg" required id="name" placeholder={t('Исм киритинг...')}/>
                                </div>
                                <div className="mb-4">
                                    <input type="tel" autoComplete='tel' name='phone' className="form-control form-control-lg" required id="telNumber" placeholder={t('тел номер киритинг...')}/>
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="form-btn" type="submit" >{t('Юбориш')}</button>
                                </div>
                            </motion.form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Banner;