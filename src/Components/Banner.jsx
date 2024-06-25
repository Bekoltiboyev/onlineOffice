import React from 'react';
import '../static/css/Banner.css'



function Banner() {

    return (
        <>
            <div className="container banner  mt-3 pb-3">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="banner-image-box"></div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="banner-form-box pt-5">
                            <h1 className='title text-center'>Биринчи ой учун хизмат - Бепул</h1>
                            <p className='text text-center'>СЎРОВНОМАНИ ТЎЛДИРИНГ Яқин вақт ичида сиз билан боғланиб, барча саволларингизга жавоб берамиз.</p>
                            <div className='hr' > </div>
                            <form className='px-2 mt-5'>
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
                </div>
            </div>
        </>
    );
}

export default Banner;