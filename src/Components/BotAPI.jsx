import React, { useState } from 'react';
import './Contacts.css';
import { IoCall } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Map, RouteButton, YMaps } from '@pbe/react-yandex-maps';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
    const {t} = useTranslation()
    const [loading, setLoading] = useState(false);

    const SendMessage = (event) => {
        setLoading(true);
        event.preventDefault();
        
        const token = "7045954792:AAFQAI9R6q9CQ5veso12Ijc5dWToIVCMOj4";
        const URL = `https://api.telegram.org/bot${token}/sendMessage`;
        const chat_id = '5011507273';
        const name = document.getElementById('name').value;
        const telRaqam = document.getElementById('telRaqam').value;
        const kishi = document.getElementById('kishi').value;
        const date = document.getElementById('date').value;
        const adress = document.getElementById('adress').value;
        const viza = document.getElementById('viza').value;

        const MessageContent = `ismi : ${name} \n Tel: ${telRaqam} \n Kishi soni: ${kishi} \n Uchish sanasi: ${date} \n Borish manzili: ${adress} \n tolov turi: ${viza}`;

        axios({
        url: URL,
        method: 'POST',
        data: {
            "chat_id": chat_id,
            "text": MessageContent,
        }
        }).then((res) => {
            document.getElementById('MyForm').reset();
            document.getElementById('kishi').selectedIndex = 0;
            document.getElementById('adress').selectedIndex = 0;
            document.getElementById('viza').selectedIndex = 0;
            toast.success('Habaringiz yuborildi');
        }).catch((error) => {
            toast.error('Xatolik yuz berdi');
            // console.log('Xatolik yuz berdi', error);
            }).finally(() => {
            setLoading(false);
        });
    };

    return (
    <>
    
               
                <div className='container p-0'>
                    <form id="MyForm" onSubmit={SendMessage}>
                        <div className='row p-0 m-0'>
                            <div className="col-12 col-lg-6">
                                <label htmlFor="name" className="form-label pt-4">{t("Contacts.Ism")}</label>
                                <input type="text" placeholder="Ismingiz" className="form-control rounded-pill" id="name" required/>
                            </div>
                            <div className="col-12 col-lg-6">
                                <label htmlFor="telRaqam" className="form-label pt-4">{t("Contacts.tel")}</label>
                                <input type="tel" placeholder="+998991234567" className="form-control rounded-pill" id="telRaqam" required/>
                            </div>
                            <div className="col-12 col-lg-6">
                                <label htmlFor="kishi" className="form-label pt-4">{t("Contacts.Necha")}</label>
                                <select className="form-select rounded-pill" id="kishi" required>
                                    <option value="" disabled selected>ex.3 or 4 or 5</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-6">
                                <label htmlFor="date" className="form-label pt-4">{t("Contacts.uchish")}</label>
                                <input type="date" className="form-control rounded-pill" id="date" required/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="adress" className="form-label pt-4">{t("Contacts.Manzil")}</label>
                                <select className="form-select rounded-pill" id="adress" required>
                                    <option value="Antalya">Antalya</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="Istanbul">Istanbul</option>
                                    <option value="Xitoy">Xitoy</option>
                                    <option value="Kanada">Kanada</option>
                                    <option value="AQSH">AQSH</option>
                                    <option value="Polsha">Polsha</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <label htmlFor="viza" className="form-label pt-4">{t("Contacts.viza")}</label>
                                <select className="form-select rounded-pill" id="viza" required>
                                    <option value="" disabled selected>Country</option>
                                    <option value="Europe">Europe</option>
                                    <option value="England">England</option>
                                    <option value="Japan">Japan</option>
                                    <option value="China">China</option>
                                    <option value="USA">USA</option>
                                    <option value="Oman">Oman</option>
                                </select>
                            </div>
                            <div className="col-12 p-2">
                                <br />
                                <div className="d-grid gap-2">
                                    <button className="btn btn-info rounded-pill btn-hover text-white" type="submit" disabled={loading}>
                                        {loading ? t("Contacts.BTN1") : t("Contacts.BTN2")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
           
        <ToastContainer />
        </>
    );
};

export default Contacts;