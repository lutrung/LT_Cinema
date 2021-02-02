import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layThongLichChieuPhimApiAction } from '../../Redux/Actions/QuanLyPhimActions';
import moment from 'moment'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function ThongTinPhim(props) {
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(await layThongLichChieuPhimApiAction(props.maPhim))
    }, [])
    const thongTinLichChieu = useSelector(state => state.QuanLyPhimReducer.thongTinLichChieu)

    return (
        <div className='movieDetails' style={{ background: `url(${thongTinLichChieu.hinhAnh})` }}>
            <div className='overlay'></div>
            <div className='movieDetails__content'>
                <div className='row'>
                    <div className='movieDetails__content-left col-7'>
                        <div className='row left__content'>
                            <div className='col-6 left__content-photo'>
                                <img src={thongTinLichChieu.hinhAnh} alt='' />
                            </div>
                            <div className='col-6 left__content-infomation'>
                                <span className='infomation__day'>
                                    {moment(thongTinLichChieu.ngayKhoiChieu).format('MM.DD.YYYY')}
                                </span>
                                <span className='infomation__name'>
                                    <span className='infomation__name-age'>C13</span>
                                    {thongTinLichChieu.tenPhim}
                                </span>
                                <span className='infomation__time'>
                                    {thongTinLichChieu.heThongRapChieu?.slice(0, 1).map((cr, index) => {
                                        return <Fragment key={index}>
                                            {cr.cumRapChieu?.slice(0, 1).map((crc, index) => {
                                                return <Fragment key={index}>
                                                    {crc.lichChieuPhim?.slice(0, 1).map((lichChieu, index) => {
                                                        return <Fragment key={index}>
                                                            {lichChieu.thoiLuong} phút - 0 IMDb - 2D/Digital
                                                        </Fragment>
                                                    })}
                                                </Fragment>
                                            })}
                                        </Fragment>
                                    })}
                                </span>
                                <a className='infomation__btn' href='#showTime'>Mua vé</a>
                            </div>
                        </div>
                    </div>
                    <div className='movieDetails__content-right col-5' style={{ textAlign: 'right' }}>
                        <CircularProgressbar strokeWidth={5} className='right__circular' value={thongTinLichChieu.danhGia} maxValue={10} text={`${thongTinLichChieu.danhGia}`} />
                        <div className='right__icons'>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half"></i>
                        </div>
                        <span className='right__reviews'>
                            102 người đánh giá
                        </span>
                    </div>
                </div>
            </div>
            <div className='movieDetails__content-mobile' style={{
                backgroundImage: `url(${thongTinLichChieu.hinhAnh})`
            }}>
                <div className='mobile__overlay'></div>
                <img src="/img/Carousel/playicon.png" className='mobile__play' data-bs-toggle="modal" data-bs-target="#playTrailer" />
                <div className="modal fade" id="playTrailer">
                    <div className="modal-dialog modal-dialog-centered" role='document'>
                        <div className="modal-content">
                            <div className='modal-body'>
                                <iframe width="100%" height="100%" src={thongTinLichChieu.trailer} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
