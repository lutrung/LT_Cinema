import React from 'react'

export default function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='footer__content'>
                <div className='footer__top'>
                    <div className='row footer__top-content'>
                        <div className='col-lg-4 col-md-6 TIX'>
                            <p>TIX</p>
                            <a href='#'>FAQ</a>
                            <br />
                            <a href='#'>Brand Guidelines</a>
                            <br />
                            <a href='#'>Thỏa thuận sử dụng</a>
                            <br />
                            <a href='#'>Chính sách bảo mật</a>
                        </div>
                        <div className='col-lg-4 partner'>
                            <p>Đối tác</p>
                            <div className='row mb-3 partner-logo'>
                                <a href='#'><img src='/img/Footer/cgv.png' alt='' style={{ backgroundColor: 'white', borderRadius: '50%' }} /></a>
                                <a href='#'><img src='/img/Footer/bhd.png' alt='' /></a>
                                <a href='#'><img src='/img/Footer/galaxycine.png' alt='' /></a>
                                <a href='#'><img src='/img/Footer/cinestar.png' alt='' /></a>
                                <a href='#'><img src='/img/Footer/lottecinema.png' alt='' /></a>
                            </div>
                            <div className='row mb-3 partner-logo'>
                                <a href='#'><img src='/img/Footer/megags.png' alt='' /></a>
                                <a href='#'><img src='/img/Footer/beta.jpg' alt='' style={{ backgroundColor: 'white', borderRadius: '50%' }} /></a>
                                <a href='#'><img src='/img/Footer/dongdacinema.png' alt='' style={{ backgroundColor: 'white', borderRadius: '50%' }} /></a>
                                <a href='#'><img src='/img/Footer/touch.png' alt='' /></a>
                                <a href='#'><img src='/img/Footer/cnx.jpg' alt='' style={{ backgroundColor: 'white', borderRadius: '50%' }} /></a>
                            </div>
                            <div className='row mb-3 partner-logo'>
                                <a href='#'><img src='/img/Footer/starlight.png' alt='' style={{ backgroundColor: 'white', borderRadius: '50%' }} /></a>
                                <a href='#'><img src='/img/Footer/dcine.png' alt='' style={{ backgroundColor: 'white', borderRadius: '50%' }} /></a>
                                <a href='#'><img src='/img/Footer/zalopay_icon.png' alt='' /></a>
                                <a href='#'><img src='/img/Footer/payoo.jpg' alt='' style={{ backgroundColor: 'white', borderRadius: '50%' }} /></a>
                                <a href='#'><img src='/img/Footer/VCB.png' alt='' /></a>
                            </div>
                            <div className='row mb-3 partner-logo'>
                                <a href='#'><img src='/img/Footer/AGRIBANK.png' alt='' style={{ backgroundColor: 'white', borderRadius: '50%' }} /></a>
                                <a href='#'><img src='/img/Footer/VIETTINBANK.png' alt='' /></a>
                                <a href='#'><img src='/img/Footer/IVB.png' alt='' /></a>
                                <a href='#'><img src='/img/Footer/123go.png' alt='' style={{ borderRadius: '50%' }} /></a>
                                <a href='#'><img src='/img/Footer/laban.png' alt='' /></a>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 social'>
                            <div className='row'>
                                <div className='col-6'>
                                    <p>MOBILE APP</p>
                                    <a href='#'><img src='/img/Footer/apple-logo.png' alt='' style={{ marginRight: ' 10px' }} /></a>
                                    <a href='#'><img src='/img/Footer/android-logo.png' alt='' /></a>
                                </div>
                                <div className='col-6'>
                                    <p>SOCIAL</p>
                                    <a href='#'><img src='/img/Footer/facebook-logo.png' alt='' style={{ marginRight: ' 10px' }} /></a>
                                    <a href='#'><img src='/img/Footer/zalo-logo.png' alt='' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ margin: '20px 0' }} />
                <div className='footer__bottom'>
                    <div className='row footer__bottom-content'>
                        <div className="col-md-3 col-lg-2 "><img src="/img/Footer/zion.jpg" alt='' className='imgZion' /> </div>
                        <div className="col-md-6 col-lg-8 footer__bottom-info">
                            <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                            <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
                            <br />
                            <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                           <br />
                           đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                       </span>
                            <span>Số Điện Thoại (Hotline): 1900 545 436
                           <br />
                           Email: <a href="" style={{ color: "#FB4226" }}> support@tix.vn</a>
                            </span>
                        </div>
                        <div className=" col-md-3 col-lg-2 "><img src="/img/Footer/bct.png" alt='' className='imgBCT' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
