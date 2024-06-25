import React from 'react';
import '../static/css/FoydaComp.css'
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";  
import { GrServices } from "react-icons/gr";
import { FaSignal } from "react-icons/fa6";

function FoydaComp() {
    return (
        <>
            <div className="container foyda">
                <h1 className='title'>Олинадиган фойдалар</h1>
                <div className="row g-3 py-4">
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="f_card">
                            <HiOutlineBadgeCheck className='f_card_icons' />
                            <hr />
                            <h2 className='f_card_title'>Кафолат</h2>
                            <p className='text'>Шартнома асосида ишлаймиз.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="f_card">
                            <FaSignal className='f_card_icons' />
                            <hr />
                            <h2 className='f_card_title'>Жавобгарлик</h2>
                            <p className='text'>Хатоларимиз учун молиявий жавобгарликни ўз зиммамизга оламиз.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="f_card">
                            <RiCustomerService2Line className='f_card_icons' />
                            <hr />
                            <h2 className='f_card_title'>Доимий алоқа</h2>
                            <p className='text'>Ходимларимиз доимий алоқада.</p>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="f_card">
                            <GrServices className='f_card_icons' />
                            <hr />
                            <h2 className='f_card_title'>Тартибли хизмат</h2>
                            <p className='text'>Вазифа ва топшириқлар доим ўз вақтида бажарилади.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FoydaComp;