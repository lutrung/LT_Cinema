import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layThongLichChieuPhimApiAction } from '../../Redux/Actions/QuanLyPhimActions';
import moment from 'moment'
import RapChieu from './RapChieu';
import { NavLink } from 'react-router-dom';
export default function ThongTinLichChieu(props) {
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(await layThongLichChieuPhimApiAction(props.maPhim))
    }, [])
    const thongTinLichChieu = useSelector(state => state.QuanLyPhimReducer.thongTinLichChieu)
    const [maHeThongRap, setMaHeThongRap] = useState();
    const layMaHeThongRap = (ma) => {
        setMaHeThongRap(ma);
    };
    return (
        <div className='showtimesInformation' id='showTime'>
            <div className='myContainer'>
                <nav className='showtimesInformation__title'>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#lichChieu" role="tab" aria-controls="nav-home" aria-selected="true">Lịch chiếu</a>
                        <a className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#thongTin" role="tab" aria-controls="nav-profile" aria-selected="false">Thông tin</a>
                    </div>
                </nav>
                <div className="tab-content showtimesInformation__content" id="nav-tabContent">
                    <div className="tab-pane fade show active showTime" id="lichChieu" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className='row'>
                            <div className="col-3 nav flex-column nav-pills  showtimesInformation__logo" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                {thongTinLichChieu.heThongRapChieu?.map((heThongRap, index) => {
                                    let active = index === 0 ? ' active' : '';
                                    return (
                                        <a key={index} className={"nav-link logo__item" + active} id={heThongRap.maHeThongRap + "-tab"} data-bs-toggle="pill" href={`#${heThongRap.maHeThongRap}`}
                                            role="tab" aria-controls={heThongRap.maHeThongRap} aria-selected="true">
                                            <img src={heThongRap.logo} alt={heThongRap.logo} />
                                        </a>
                                    )
                                })}
                            </div>
                            <div className="col-9 showtimesInformation__showTimes">
                                <div className="tab-content lichChieu__content" id="v-pills-tabContent">
                                    {thongTinLichChieu.heThongRapChieu?.map((heThongRap, indexHTR) => {
                                        let active = indexHTR === 0 ? ' active' : '';
                                        return (
                                            <div key={indexHTR} className={"showTimes__allCinema tab-pane fade show" + active}
                                                id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby={heThongRap.maHeThongRap + "-tab"}>
                                                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                                    return <Fragment key={index} >
                                                        <RapChieu cinema={cumRap} push={props} />
                                                    </Fragment>
                                                })}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade infomation" id="thongTin" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className='row infomation__content'>
                            <div className='col-6 infomation__content-left'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <span className='title'>Ngày công chiếu</span>
                                    </div>
                                    <div className='col-6'>
                                        <span className='content'>{moment(thongTinLichChieu.ngayKhoiChieu).format('MM-DD-YYYY')}</span>
                                    </div>
                                </div>
                                {/* ------------- */}
                                <div className='row'>
                                    <div className='col-6'>
                                        <span className='title'>Đạo diễn</span>
                                    </div>
                                    <div className='col-6'>
                                        <span className='content'>CyberSoft</span>
                                    </div>
                                </div>
                                {/* ------------- */}
                                <div className='row'>
                                    <div className='col-6'>
                                        <span className='title'>Diễn viên</span>
                                    </div>
                                    <div className='col-6'>
                                        <span className='content'>Lư Nguyễn Thành Trung</span>
                                    </div>
                                </div>
                                {/* ------------- */}
                                <div className='row'>
                                    <div className='col-6'>
                                        <span className='title'>Thể loại</span>
                                    </div>
                                    <div className='col-6'>
                                        <span className='content'>Đồ án</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 infomation__content-right'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <span className='title'>Nội dung</span>
                                    </div>
                                    <div className='col-12'>
                                        <span className='content'>{thongTinLichChieu.moTa}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
