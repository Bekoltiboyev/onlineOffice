import React from 'react';
import '../static/css/Tarif.css'
import { GiReceiveMoney } from "react-icons/gi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next'; 
import {motion} from 'framer-motion'
import { fadeIn } from '../Variant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


function Tarif() {
    const { t } = useTranslation();
    const SendMessage = (event) => {
        event.preventDefault();
        const token = "7219229535:AAF30zRgKAjWSuvCK_caq9Jti0CSr3xH_jw";
        const URL = `https://api.telegram.org/bot${token}/sendMessage`;
        const chat_id = 1027657719;
        const name = document.getElementById('fist_name').value;
        const telNumber = document.getElementById('user_number').value;

        const MessageContent = `Ismi: ${name} \nTel: ${telNumber} \nAylanma tarif xaqida malumot olmoqchiman...`;
        axios({
            url: URL,
            method: 'POST',
            data: {
                "chat_id": chat_id,
                "text": MessageContent,
            }
        }).then((res)=>{
            document.getElementById('myform').reset();
            toast.success('Habaringiz yuborildi');
        }).catch((error)=>{
            toast.error('Xatolik yuz berdi');
        })
    };
    const SendMessageTwo = (event) => {
        event.preventDefault();
        const token = "7219229535:AAF30zRgKAjWSuvCK_caq9Jti0CSr3xH_jw";
        const URL = `https://api.telegram.org/bot${token}/sendMessage`;
        const chat_id = 1027657719;
        const name = document.getElementById('fist_name_foyda').value;
        const telNumber = document.getElementById('user_number_foyda').value;

        const MessageContent = `Ismi: ${name} \nTel: ${telNumber} \nFoyda tarif xaqida malumot olmoqchiman...`;
        axios({
            url: URL,
            method: 'POST',
            data: {
                "chat_id": chat_id,
                "text": MessageContent,
            }
        }).then((res)=>{
            document.getElementById('myform_foyda').reset();
            toast.success('Habaringiz yuborildi');
        }).catch((error)=>{
            toast.error('Xatolik yuz berdi');
        })
    };
    return (
        <>
            <div className="container tarif py-5 my-5" id='tarif'>
                <motion.h1 
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}className='title text-center mb-3'>{t('Тарифларимиз')}</motion.h1>
                <motion.p 
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }} className='text-center text mb-5'>{t('Якуний нарх иш ҳажмига қараб сиз билан учрашгандан сўнг аниқланади.')}</motion.p>
                <div className="row g-3 my-3">
                    <div className="col-12 col-md-6">
                        <motion.div 
                            variants={fadeIn('up', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} className="tarif_left">
                            <div className="tarif_icon_left_one">
                                <RiDiscountPercentLine className='tarif_icon_left_circle'/>
                            </div>
                            <h3 className='aylanma_title mt-4'>{t('«Айланма»')}</h3>
                            <p className='aylanma_text'>{t('Айланмадан солиқ тўловчилар учун')}</p>
                            <button type="button" className="tarif_btn" data-bs-toggle="modal" data-bs-target="#alyanma_tarif_modal">{t('1 ойга 1 000 000 сўмдан бошланади')}</button>
                            <div className="modal  fade" id="alyanma_tarif_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="banner-form-box h-auto pt-3">
                                            <p className='text text-center'>{t('Биринчи ой учун хизмат - Бепул')}</p>
                                            <div className='hr' > </div>
                                            <form id='myform' className='px-2 mt-5 ' onSubmit={SendMessage}>
                                                <div className="mb-4">
                                                    <input type="text" className="form-control form-control-lg" required id="fist_name" placeholder={t('Ism kiriting...')} />
                                                </div>
                                                <div className="mb-4">
                                                    <input type="tel" autoComplete='tel' name='phone' required className="form-control form-control-lg" id="user_number"  placeholder={t('tel nomer kiriting...')}/>
                                                </div>
                                                <div className="d-grid gap-2">
                                                    <button className="form-btn" type="submit">{t('Yuborish')}</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('Yopish')}</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-12 col-md-6">
                        <motion.div 
                            variants={fadeIn('up', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                            className="tarif_right">
                            <div className="tarif_icon_right_two">
                                <GiReceiveMoney className='tarif_icon_right_circle' />
                            </div>
                            <h3 className='foyda_title mt-4'>{t('«Фойда»')}</h3>
                            <p className='aylanma_text'>{t('Фойда солиғи тўловчилар учун')}</p>
                            <button type="button" className="tarif_btn" data-bs-toggle="modal" data-bs-target="#foyda_tarif_modal">{t('1 ойга 2 000 000 сўмдан бошланади')}</button>
                            <div className="modal  fade" id="foyda_tarif_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="banner-form-box h-auto pt-3">
                                            <p className='text text-center'>{t('Биринчи ой учун хизмат - Бепул')}</p>
                                            <div className='hr' > </div>
                                            <form id='myform_foyda' className='px-2 mt-5 ' onSubmit={SendMessageTwo}>
                                                <div className="mb-4">
                                                    <input type="text" className="form-control form-control-lg" required id="fist_name_foyda" placeholder={t('Ism kiriting...')} />
                                                </div>
                                                <div className="mb-4">
                                                    <input type="tel" autoComplete='tel' name='phone' required className="form-control form-control-lg" id="user_number_foyda"  placeholder={t('tel nomer kiriting...')}/>
                                                </div>
                                                <div className="d-grid gap-2">
                                                    <button className="form-btn" type="submit">{t('Yuborish')}</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('Yopish')}</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    );
}

export default Tarif;