import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layHeThongCumRapApiAction, layHeThongRapApiAction, layLichChieuHTRApiAction } from '../../Redux/Actions/QuanLyPhimActions';
import MovieTheaterShowTime from './MovieTheaterShowTime';
import MovieTheaterShowTimeMobile from './MovieTheaterShowTimeMobile';
export default function MovieTheater(props) {
    const dispatch = useDispatch();
    // API HE THONG RAP (Binding logo)
    useEffect(async () => {
        dispatch(await layHeThongRapApiAction())
    }, [])
    const heThongRap = useSelector(state => state.QuanLyPhimReducer.heThongRap)
    // API HE THONG CUM RAP (Binding hệ thống cụm rạp)
    const [maHeThongRap, setMaHeThongRap] = useState("BHDStar");
    const layMaHeThongRap = (ma) => {
        setMaHeThongRap(ma);
    };
    // console.log('maHeThongRap', maHeThongRap);
    useEffect(async () => {
        dispatch(await layHeThongCumRapApiAction(maHeThongRap))
    }, [maHeThongRap])
    const cumRap = useSelector(state => state.QuanLyPhimReducer.cumRap)
    // API THONG TIN LICH CHIEU (Binding phim & suat chieu)
    const [maCumRap, setMaCumRap] = useState('bhd-star-cineplex-3-2');
    useEffect(async () => {
        dispatch(await layLichChieuHTRApiAction(maHeThongRap))
    }, [maHeThongRap])
    const lichChieuHTR = useSelector(state => state.QuanLyPhimReducer.lichChieuHTR)


    return (
        <div className='movieTheater' id='movieTheater'>
            <div className="movieTheater__backGround" style={{ background: 'url("/img/bg.png") center center / cover', paddingTop: '10%' }}> </div>
            <div className='row movieTheater__container'>
                {/* DANH SÁCH RẠP */}
                <div className="col-xs-12 col-sm-12 col-md-1 nav flex-column nav-pills  movieTheater__logo" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {heThongRap?.map((rap, index) => {
                        let active = index === 0 ? 'active' : '';
                        let maHTR = rap.maHeThongRap
                        return <a key={index} onClick={() => {
                            layMaHeThongRap(maHTR);
                        }} className={'nav-link  logo__item ' + active} id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                            <img src={rap.logo} alt={rap.logo} />
                        </a>
                    })}
                </div>
                {/* DANH SÁCH CỤM RẠP */}
                <div className="col-xs-12 col-sm-12 col-md-4 nav flex-column nav-pills movieTheater__cinema" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {cumRap?.map((chiNhanh, index) => {
                        let active = index === 0 ? 'active' : '';
                        let maCR = chiNhanh.maCumRap
                        return <Fragment key={index}>
                            <MovieTheaterShowTimeMobile chiNhanh={chiNhanh} maCR={maCR} maHeThongRap={maHeThongRap} active={active} layMaCumRap={maCR => setMaCumRap(maCR)} push={props} key={index} />
                        </Fragment>
                    })}
                </div>
                {/* DANH SÁCH PHIM */}
                <div className='col-xs-12 col-sm-12 col-md-7 movieTheater__showTimes'>
                    {lichChieuHTR.map((lichChieu, index) => {
                        return <Fragment key={index}>
                            {lichChieu.lstCumRap?.map((lichTheoRap, index) => {
                                if (lichTheoRap.maCumRap === maCumRap) {
                                    return <Fragment key={index}>
                                        {lichTheoRap.danhSachPhim?.slice(0, 10).map((danhSachPhim, index) => {
                                            return <Fragment key={index}>
                                                <MovieTheaterShowTime danhSachPhim={danhSachPhim} push={props} />
                                            </Fragment>
                                        })}
                                    </Fragment>
                                }
                            })}
                        </Fragment>
                    })}
                </div>
            </div>
        </div >
    )
}
