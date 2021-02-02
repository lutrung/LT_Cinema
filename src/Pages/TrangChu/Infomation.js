import React, { useState } from 'react'

export default function Infomation() {
    const [hide, setHide] = useState(false)
    let readMore = () => {
        setHide(!hide)
    }
    return (
        <div className='infomation' id='infomation'>
            <div className="infomation__backGround" style={{ background: 'url("/img/bg.png") center center / cover', paddingTop: '10%' }}> </div>
            <div className='myContainer'>
                <nav className='infomation__title'>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-1" role="tab" aria-controls="nav-home" aria-selected="true">Điện ảnh 24H</a>
                        <a className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-2" role="tab" aria-controls="nav-profile" aria-selected="false">Review</a>
                        <a className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-3" role="tab" aria-controls="nav-profile" aria-selected="false">Khuyến mãi</a>
                    </div>
                </nav>
                <div className="tab-content infomation__content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className='info__content'>
                            <div className='row'>
                                <div className='col-md-6  info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh'>
                                            <img src='./img/Infomation/info1-1.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh'>
                                            <p>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng!</p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>10</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-6  info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu'>
                                            <img src='./img/Infomation/info1-2.png' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu'>
                                            <p>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Nửa cuối năm là thời gian thị trường phim Việt sẽ dậy sóng với sự trở lại của những tên tuổi gạo cội trong làng điện ảnh. Cùng điểm sơ qua những gưởng mặt sáng giá này nhé!!</p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>15</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman'>
                                            <img src='./img/Infomation/info1-3.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman'>
                                            <p>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>2</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang'>
                                            <img src='./img/Infomation/info1-4.png' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang'>
                                            <p>[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>1</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>1</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan'>
                                                <img src='./img/Infomation/info1-5.png' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan'>
                                            <p>
                                                Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch
                                            </p>
                                        </a>
                                    </div>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han'>
                                                <img src='./img/Infomation/info1-6.png' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han'>
                                            <p>
                                                Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn
                                            </p>
                                        </a>
                                    </div>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7949-6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood'>
                                                <img src='./img/Infomation/info1-7.png' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7949-6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood'>
                                            <p>
                                                6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={hide ? 'info__content' : 'none'} >
                            <div className='row'>
                                <div className='col-md-6  info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7937-loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7'>
                                            <img src='./img/Infomation/info1-8.png' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7937-loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7'>
                                            <p>Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Trong tháng 7 này, dòng phim kinh dị với các tác phẩm hấp dẫn hứa hẹn sẽ tung hoành khắp phòng vé và thỏa mãn sự đam mê tất cả khán giả yêu điện ảnh với những giây phút hồi hộp thót tim.</p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>10</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-6  info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7936-rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de'>
                                            <img src='./img/Infomation/info1-9.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7936-rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de'>
                                            <p>RÒM tung trailer hé lộ cuộc sống của dân chơi số đề</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Với đề tài và góc nhìn mới lạ, RÒM hiện đang khiến giới mộ điệu và khán giả yêu điện ảnh nóng lòng chờ đợi ngày phim ra rạp. Nhà sản xuất mới đây đã tung poster và trailer chính thức, hé lộ những khung hình gay cấn và đậm chất nhân </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>15</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7935-antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them'>
                                            <img src='./img/Infomation/info1-10.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7935-antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them'>
                                            <p>Antebellum - Trailer cuối cùng không hé lộ bất cứ thông tin gì thêm</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>“Antebellum” - siêu phẩm kinh dị mới nhất đến từ nhà sản xuất của “Get Out” và “Us” nhá hàng trailer cuối, giữ nguyên chiến thuật “giấu giếm đến phút </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>2</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7934-ban-dao-peninsula-la-bom-tan-xac-song-khong-the-bo-lo'>
                                            <img src='./img/Infomation/info1-11.png' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7934-ban-dao-peninsula-la-bom-tan-xac-song-khong-the-bo-lo'>
                                            <p>Bán Đảo Peninsula là bom tấn xác sống không thể bỏ lỡ!</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Là phần phim khép lại bộ ba xác sống (Seoul Station, Train to Busan - 2016) của đạo diễn Yeon Sang Ho, mới đây, bom tấn Bán Đảo (Train to Busan </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>1</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>1</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan'>
                                                <img src='./img/Infomation/info1-12.png' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7933-toi-se-lam-tat-ca-ngo-ngang-boi-phien-ban-ta-ac-cua-minh-song-ji-hyo'>
                                            <p>
                                                ‘Tôi sẽ làm tất cả ngỡ ngàng bởi phiên bản tà ác của mình’ - Song Ji Hyo
                                            </p>
                                        </a>
                                    </div>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han'>
                                                <img src='./img/Infomation/info1-13.jpg' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7932-hanh-trinh-cua-rom-va-cau-chuyen-dang-sau-de-tai-so-de'>
                                            <p>
                                                Hành trình của Ròm và câu chuyện đằng sau đề tài số đề
                                            </p>
                                        </a>
                                    </div>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7931-cung-on-lai-tinh-dau-voi-phim-dien-anh-kinh-dien-cua-chi-dep-son-ye-jin-duoc-thai-lan-lam-lai'>
                                                <img src='./img/Infomation/info1-14.jpg' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7949-6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood'>
                                            <p>
                                                Cùng ôn lại 'Tình đầu' với phim điện ảnh kinh điển của chị đẹp Son Ye-jin được Thái Lan làm lại
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='readMore'>
                            <a style={{ cursor: 'pointer' }} onClick={() => readMore()} >{hide ? 'Thu gọn' : 'Xem Thêm'}</a>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className='info__content'>
                            <div className='row'>
                                <div className='col-md-6  info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/review/7947-review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket'>
                                            <img src='./img/Infomation/review1.png' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/review/7947-review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket'>
                                            <p>Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám</p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>10</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-6  info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war'>
                                            <img src='./img/Infomation/review2.png' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war'>
                                            <p>Review: Dinh Thự Oan Khuất (Ghost Of War)</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!</p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>15</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/review/7924-blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh'>
                                            <img src='./img/Infomation/review3.png' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/review/7924-blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh'>
                                            <p>‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>2</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/review/7918-american-sniper-chinh-nghia-hay-phi-nghia'>
                                            <img src='./img/Infomation/review4.png' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/review/7918-american-sniper-chinh-nghia-hay-phi-nghia'>
                                            <p>American Sniper - Chính nghĩa hay phi nghĩa?</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>1</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>1</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/review/7894-review-spider-man-into-the-spider-vesre'>
                                                <img src='./img/Infomation/review5.png' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/review/7894-review-spider-man-into-the-spider-vesre'>
                                            <p>
                                                Review: Spider-Man: Into The Spider-Vesre
                                            </p>
                                        </a>
                                    </div>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/review/7886-covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011'>
                                                <img src='./img/Infomation/review6.jpg' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/review/7886-covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011'>
                                            <p>
                                                COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                                            </p>
                                        </a>
                                    </div>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/review/7882-review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the'>
                                                <img src='./img/Infomation/review7.jpg' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/review/7882-review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the'>
                                            <p>
                                                [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ lầy lội và hài hước đến thế
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={hide ? 'info__content' : 'none'} >
                            <div className='row'>
                                <div className='col-md-6  info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7937-loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7'>
                                            <img src='./img/Infomation/review8.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7937-loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7'>
                                            <p>Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Trong tháng 7 này, dòng phim kinh dị với các tác phẩm hấp dẫn hứa hẹn sẽ tung hoành khắp phòng vé và thỏa mãn sự đam mê tất cả khán giả yêu điện ảnh với những giây phút hồi hộp thót tim.</p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>10</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-6  info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7936-rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de'>
                                            <img src='./img/Infomation/review9.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7936-rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de'>
                                            <p>RÒM tung trailer hé lộ cuộc sống của dân chơi số đề</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Với đề tài và góc nhìn mới lạ, RÒM hiện đang khiến giới mộ điệu và khán giả yêu điện ảnh nóng lòng chờ đợi ngày phim ra rạp. Nhà sản xuất mới đây đã tung poster và trailer chính thức, hé lộ những khung hình gay cấn và đậm chất nhân </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>15</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7935-antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them'>
                                            <img src='./img/Infomation/review10.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7935-antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them'>
                                            <p>Antebellum - Trailer cuối cùng không hé lộ bất cứ thông tin gì thêm</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>“Antebellum” - siêu phẩm kinh dị mới nhất đến từ nhà sản xuất của “Get Out” và “Us” nhá hàng trailer cuối, giữ nguyên chiến thuật “giấu giếm đến phút </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>2</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7934-ban-dao-peninsula-la-bom-tan-xac-song-khong-the-bo-lo'>
                                            <img src='./img/Infomation/review11.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7934-ban-dao-peninsula-la-bom-tan-xac-song-khong-the-bo-lo'>
                                            <p>Bán Đảo Peninsula là bom tấn xác sống không thể bỏ lỡ!</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Là phần phim khép lại bộ ba xác sống (Seoul Station, Train to Busan - 2016) của đạo diễn Yeon Sang Ho, mới đây, bom tấn Bán Đảo (Train to Busan </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>1</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>1</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan'>
                                                <img src='./img/Infomation/review12.jpg' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7933-toi-se-lam-tat-ca-ngo-ngang-boi-phien-ban-ta-ac-cua-minh-song-ji-hyo'>
                                            <p>
                                                ‘Tôi sẽ làm tất cả ngỡ ngàng bởi phiên bản tà ác của mình’ - Song Ji Hyo
                                            </p>
                                        </a>
                                    </div>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han'>
                                                <img src='./img/Infomation/review13.jpg' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7932-hanh-trinh-cua-rom-va-cau-chuyen-dang-sau-de-tai-so-de'>
                                            <p>
                                                Hành trình của Ròm và câu chuyện đằng sau đề tài số đề
                                            </p>
                                        </a>
                                    </div>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7931-cung-on-lai-tinh-dau-voi-phim-dien-anh-kinh-dien-cua-chi-dep-son-ye-jin-duoc-thai-lan-lam-lai'>
                                                <img src='./img/Infomation/review14.jpg' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7949-6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood'>
                                            <p>
                                                Cùng ôn lại 'Tình đầu' với phim điện ảnh kinh điển của chị đẹp Son Ye-jin được Thái Lan làm lại
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='readMore'>
                            <a style={{ cursor: 'pointer' }} onClick={() => readMore()} >{hide ? 'Thu gọn' : 'Xem Thêm'}</a>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className='info__content'>
                            <div className='row'>
                                <div className='col-md-6  info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh'>
                                            <img src='./img/Infomation/voucher1.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh'>
                                            <p>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng!</p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>10</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-6  info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu'>
                                            <img src='./img/Infomation/voucher2.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu'>
                                            <p>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Nửa cuối năm là thời gian thị trường phim Việt sẽ dậy sóng với sự trở lại của những tên tuổi gạo cội trong làng điện ảnh. Cùng điểm sơ qua những gưởng mặt sáng giá này nhé!!</p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>15</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman'>
                                            <img src='./img/Infomation/voucher3.png' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman'>
                                            <p>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>2</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang'>
                                            <img src='./img/Infomation/voucher4.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang'>
                                            <p>[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>1</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>1</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan'>
                                                <img src='./img/Infomation/voucher5.png' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan'>
                                            <p>
                                                Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch
                                            </p>
                                        </a>
                                    </div>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han'>
                                                <img src='./img/Infomation/voucher6.jpg' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han'>
                                            <p>
                                                Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn
                                            </p>
                                        </a>
                                    </div>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7949-6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood'>
                                                <img src='./img/Infomation/voucher7.jpg' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7949-6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood'>
                                            <p>
                                                6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={hide ? 'info__content' : 'none'}>
                            <div className='row'>
                                <div className='col-md-6  info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7937-loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7'>
                                            <img src='./img/Infomation/voucher8.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7937-loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7'>
                                            <p>Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Trong tháng 7 này, dòng phim kinh dị với các tác phẩm hấp dẫn hứa hẹn sẽ tung hoành khắp phòng vé và thỏa mãn sự đam mê tất cả khán giả yêu điện ảnh với những giây phút hồi hộp thót tim.</p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>10</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-6  info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7936-rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de'>
                                            <img src='./img/Infomation/voucher9.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7936-rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de'>
                                            <p>RÒM tung trailer hé lộ cuộc sống của dân chơi số đề</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Với đề tài và góc nhìn mới lạ, RÒM hiện đang khiến giới mộ điệu và khán giả yêu điện ảnh nóng lòng chờ đợi ngày phim ra rạp. Nhà sản xuất mới đây đã tung poster và trailer chính thức, hé lộ những khung hình gay cấn và đậm chất nhân </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>15</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7935-antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them'>
                                            <img src='./img/Infomation/voucher11.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7935-antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them'>
                                            <p>Antebellum - Trailer cuối cùng không hé lộ bất cứ thông tin gì thêm</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>“Antebellum” - siêu phẩm kinh dị mới nhất đến từ nhà sản xuất của “Get Out” và “Us” nhá hàng trailer cuối, giữ nguyên chiến thuật “giấu giếm đến phút </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>2</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__img'>
                                        <a className='item__img-link' href='https://tix.vn/goc-dien-anh/7934-ban-dao-peninsula-la-bom-tan-xac-song-khong-the-bo-lo'>
                                            <img src='./img/Infomation/voucher10.jpg' />
                                        </a>
                                    </div>
                                    <div className='item__title'>
                                        <a className='item__title-link' href='https://tix.vn/goc-dien-anh/7934-ban-dao-peninsula-la-bom-tan-xac-song-khong-the-bo-lo'>
                                            <p>Bán Đảo Peninsula là bom tấn xác sống không thể bỏ lỡ!</p>
                                        </a>
                                    </div>
                                    <div className='item__description'>
                                        <p>Là phần phim khép lại bộ ba xác sống (Seoul Station, Train to Busan - 2016) của đạo diễn Yeon Sang Ho, mới đây, bom tấn Bán Đảo (Train to Busan </p>
                                    </div>
                                    <div className='item__icon'>
                                        <div className='item__icon-like'>
                                            <img src='./img/Infomation/like.png' />
                                            <p>1</p>
                                        </div>
                                        <div className='item__icon-comment'>
                                            <img src='./img/Infomation/comment.png' />
                                            <p>1</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ------------------------------------------------ */}
                                <div className='col-md-4 info__content-item'>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan'>
                                                <img src='./img/Infomation/voucher12.jpg' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7933-toi-se-lam-tat-ca-ngo-ngang-boi-phien-ban-ta-ac-cua-minh-song-ji-hyo'>
                                            <p>
                                                ‘Tôi sẽ làm tất cả ngỡ ngàng bởi phiên bản tà ác của mình’ - Song Ji Hyo
                                            </p>
                                        </a>
                                    </div>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han'>
                                                <img src='./img/Infomation/voucher13.jpg' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7932-hanh-trinh-cua-rom-va-cau-chuyen-dang-sau-de-tai-so-de'>
                                            <p>
                                                Hành trình của Ròm và câu chuyện đằng sau đề tài số đề
                                            </p>
                                        </a>
                                    </div>
                                    <div className='item__right' style={{ marginBottom: '10px' }}>
                                        <div className='item__right-item'>
                                            <a className='item__link-img' href='https://tix.vn/goc-dien-anh/7931-cung-on-lai-tinh-dau-voi-phim-dien-anh-kinh-dien-cua-chi-dep-son-ye-jin-duoc-thai-lan-lam-lai'>
                                                <img src='./img/Infomation/voucher14.jpg' />
                                            </a>
                                        </div>
                                        <a className='item__link-content' href='https://tix.vn/goc-dien-anh/7949-6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood'>
                                            <p>
                                                Cùng ôn lại 'Tình đầu' với phim điện ảnh kinh điển của chị đẹp Son Ye-jin được Thái Lan làm lại
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='readMore'>
                            <a style={{ cursor: 'pointer' }} onClick={() => readMore()} >{hide ? 'Thu gọn' : 'Xem Thêm'}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
