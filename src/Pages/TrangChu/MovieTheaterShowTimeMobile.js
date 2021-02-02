import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layLichChieuHTRApiAction } from '../../Redux/Actions/QuanLyPhimActions';
import MovieTheaterShowTime from './MovieTheaterShowTime';

export default function MovieTheaterShowTimeMobile(props) {
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(await layLichChieuHTRApiAction(props.maHeThongRap))
    }, [])
    const lichChieuHTR = useSelector(state => state.QuanLyPhimReducer.lichChieuHTR)
    const [hidden, setHidden] = useState(false)
    let chiNhanh = props.chiNhanh
    return <Fragment >
        <a onClick={() => {
            props.layMaCumRap(props.maCR);
            setHidden(!hidden);
        }} className={'nav-link cinema__item ' + props.active} id="v-pills-home-tab" data-bs-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true">
            <div className='cinema__item-content'>
                <div className='d-flex' style={{ width: '95%' }}>
                    <div className='cinema__item-img'>
                        <img src='https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-quang-trung-15379536724871.jpg' alt='...' />
                    </div>
                    <div className='cinema__item-info'>
                        <div className='info__branch'>
                            <p title={chiNhanh.tenCumRap}>{chiNhanh.tenCumRap}</p>
                        </div>
                        <div className='info__address'>
                            <p title={chiNhanh.diaChi}>{chiNhanh.diaChi}</p>
                        </div>
                        <div className='info__detail'>
                            [Chi tiết]
                        </div>
                    </div>
                </div>
                <i className={hidden ? 'fa fa-angle-down' : 'fa fa-angle-up'} style={{ color: 'black', fontSize: '20px', width: '5%' }}></i>
            </div>
        </a>
        <div className='hidden'>
            <div className={hidden ? 'off' : 'on'}>
                {lichChieuHTR.map((lichChieu, index) => {
                    return <Fragment key={index}>
                        {lichChieu.lstCumRap?.map((lichTheoRap, index) => {
                            if (lichTheoRap.maCumRap === chiNhanh.maCumRap) {
                                return <Fragment key={index}>
                                    {lichTheoRap.danhSachPhim?.slice(0, 2).map((danhSachPhim, index) => {
                                        return <Fragment key={index}>
                                            <MovieTheaterShowTime danhSachPhim={danhSachPhim} push={props.push} />
                                        </Fragment>
                                    })}
                                </Fragment>
                            }
                        })}
                    </Fragment>
                })}
            </div>
        </div>
    </Fragment>
}
