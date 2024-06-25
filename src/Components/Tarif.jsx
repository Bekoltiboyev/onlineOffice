import React from 'react';
import '../static/css/Tarif.css'
import { GiReceiveMoney } from "react-icons/gi";
import { RiDiscountPercentLine } from "react-icons/ri";

function Tarif() {


    




    return (
        <>
            <div className="container tarif py-5 my-5">
                <h1 className='title text-center mb-3'>Тарифларимиз</h1>
                <p className='text-center text mb-5'>Якуний нарх иш ҳажмига қараб сиз билан учрашгандан сўнг аниқланади.</p>
                <div className="row g-3 my-3">
                    <div className="col-12 col-md-6">
                        <div className="tarif_left">
                            <div className="tarif_icon_left_one">
                                <RiDiscountPercentLine className='tarif_icon_left_circle'/>
                            </div>
                            <h3 className='aylanma_title mt-4'>«Айланма»</h3>
                            <p className='aylanma_text'>Айланмадан солиқ тўловчилар учун</p>
                            <button type="button" class="tarif_btn" data-bs-toggle="modal" data-bs-target="#exampleModal">1 ойга 1 000 000 сўмдан бошланади</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="tarif_right">
                            <div className="tarif_icon_right_two">
                                <GiReceiveMoney className='tarif_icon_right_circle' />
                            </div>
                            <h3 className='foyda_title mt-4'>«Фойда»</h3>
                            <p className='aylanma_text'>Фойда солиғи тўловчилар учун</p>
                            <button type="button" class="tarif_btn" data-bs-toggle="modal" data-bs-target="#exampleModal">1 ойга 2 000 000 сўмдан бошланади</button>
                            <div class="modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div className="banner-form-box h-auto pt-3">
                                            <p className='text text-center'>Биринчи ой учун хизмат - Бепул</p>
                                            <div className='hr' > </div>
                                            <form className='px-2 mt-5 '>
                                                <div class="mb-4">
                                                    <input type="text" class="form-control form-control-lg" id="exampleInputEmail1" placeholder='Ism kiriting...' />
                                                </div>
                                                <div class="mb-4">
                                                    <input type="tel" autoComplete='tel' name='phone' class="form-control form-control-lg" id="exampleInputPassword1" placeholder='tel nomer kiriting...' />
                                                </div>
                                                <div class="d-grid gap-2">
                                                    <button class="form-btn" type="submit">Yuborish</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Tarif;