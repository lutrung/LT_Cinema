import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimApiAction, layThongLichChieuPhimApiAction } from '../../Redux/Actions/QuanLyPhimActions'
import moment from 'moment'
import { USER_LOGIN } from '../../Util/Config';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
export default function Search(props) {
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(await layDanhSachPhimApiAction())
    }, [])
    const dsPhim = useSelector(state => state.QuanLyPhimReducer.dsPhim)


    const [maPhim, setMaPhim] = useState(null);
    const layMaPhim = (e) => {
        const ma = e.target.value
        setMaPhim(ma);
    };

    useEffect(async () => {
        dispatch(await layThongLichChieuPhimApiAction(maPhim))
    }, [maPhim])
    const thongTinLichChieu = useSelector(state => state.QuanLyPhimReducer.thongTinLichChieu)

    const [maCumRap, setMaCumRap] = useState(null);
    const layMaCumRap = (e) => {
        const maCumRap = e.target.value
        setMaCumRap(maCumRap)
    };
    const [ngayChieuu, setNgayChieuu] = useState(0);
    const layNgayChieu = (e) => {
        const ngaychieu = e.target.value
        setNgayChieuu(ngaychieu)
    };
    let ngayChieu = (array, index) => {
        // console.log('array', array);

        // let ngayChuaFilter = array.map(lichChieu => moment(lichChieu.ngayChieuGioChieu).format("MM-DD-YYYY"));
        let ngayChuaFilter = array.map((lichChieu, index) => {
            return (
                moment(lichChieu.ngayChieuGioChieu).format("MM-DD-YYYY")
            )
        });
        console.log(ngayChuaFilter);
        ngayChuaFilter = [...new Set(ngayChuaFilter)]; //lọc các ngày trùng nhau trong mảng ngayChuaFilter
        console.log(ngayChuaFilter);
        // console.log('Ngay CHua', ngayChuaFilter);

        let ngayFilter = ngayChuaFilter.map(ngayChua => {

            let ngayChieu = array.filter(arr => moment(arr.ngayChieuGioChieu).format("MM-DD-YYYY") === ngayChua)
            let obj = {
                ngay: ngayChua,
                lichChieuTheoNgay: ngayChieu
            }
            return obj
        })

        console.log('ngayFilter', ngayFilter);

        return <Fragment key={index}>
            {ngayFilter?.map((lichChieu, index) => {
                return <option key={index} value={lichChieu.ngay}>
                    {lichChieu.ngay}
                </option>
            })}
        </Fragment>
    }

    const [maLichChieu, setMaLichChieu] = useState(0);
    const laytest = (e) => {
        const maLC = e.target.value
        setMaLichChieu(maLC)
    };
    let gioChieu = (array, index) => {
        let ngayChuaFilter = array.map((lichChieu, index) => {
            return (
                moment(lichChieu.ngayChieuGioChieu).format("MM-DD-YYYY")
            )
        });
        console.log(ngayChuaFilter);
        ngayChuaFilter = [...new Set(ngayChuaFilter)]; //lọc các ngày trùng nhau trong mảng ngayChuaFilter
        console.log(ngayChuaFilter);
        let ngayFilter = ngayChuaFilter.map(ngayChua => {

            let ngayChieu = array.filter(arr => moment(arr.ngayChieuGioChieu).format("MM-DD-YYYY") === ngayChua)
            let obj = {
                ngay: ngayChua,
                lichChieuTheoNgay: ngayChieu
            }
            return obj
        })

        console.log('ngayFilter', ngayFilter);

        return <Fragment key={index}>
            {ngayFilter?.map((lichChieu, index) => {
                if (lichChieu.ngay === ngayChieuu) {
                    return <>
                        {lichChieu.lichChieuTheoNgay?.map((lichchieutheongay, index) => {
                            return <option key={index} value={lichchieutheongay.maLichChieu}>
                                {moment(lichchieutheongay.ngayChieuGioChieu).format("hh:mm:ss")}
                            </option>
                        })}
                    </>
                }
            })}
        </Fragment>
    }
    return (
        <div className='search' id='search'>
            <form className='form__search'>
                <div className='search__group-moive search__group'>
                    {/* CHỌN PHIM */}
                    <select className='search__group-seclect movieSelect' onChange={layMaPhim}>
                        <option hidden>Phim</option>
                        {dsPhim.map((phim, index) => {
                            return <option key={index} value={phim.maPhim}>
                                {phim.tenPhim}
                            </option>
                        })}
                    </select>
                </div>
                <div className='search__group-cinema search__group'>
                    {/* CHỌN RẠP */}
                    <select className='search__group-seclect cinemaSelect' onChange={layMaCumRap}>
                        <option hidden>Rạp</option>
                        {thongTinLichChieu.heThongRapChieu?.map((rap, index) => {
                            return <Fragment key={index}>
                                {rap.cumRapChieu?.map((tenRap, index) => {
                                    return <option key={index} value={tenRap.maCumRap}>
                                        {tenRap.tenCumRap}
                                    </option>
                                })}
                            </Fragment>
                        })}
                    </select>
                </div>
                <div className='search__group-day search__group'>
                    {/* CHỌN NGÀY */}
                    <select className='search__group-seclect daySelect' onChange={layNgayChieu}>
                        <option hidden>Ngày chiếu</option>
                        {thongTinLichChieu.heThongRapChieu?.map((rap, index) => {
                            return <Fragment key={index}>
                                {rap.cumRapChieu?.map((cumRapChieu, index) => {
                                    if (cumRapChieu.maCumRap === maCumRap) {
                                        // return <Fragment key={index}>
                                        //     {cumRapChieu.lichChieuPhim?.map((lichChieu, index) => {
                                        //         console.log(lichChieu);
                                        //         return <option key={index} value={lichChieu.maLichChieu}>
                                        //             {moment(lichChieu.ngayChieuGioChieu).format("MM-DD-YYYY")}
                                        //         </option>
                                        //     })}
                                        // </Fragment>
                                        return <Fragment key={index}>
                                            {
                                                ngayChieu(cumRapChieu.lichChieuPhim)
                                            }
                                        </Fragment>
                                    }
                                })}
                            </Fragment>
                        })}
                    </select>
                </div>
                <div className='search__group-time search__group'>
                    {/* CHỌN GIỜ */}
                    <select className='search__group-seclect timeSelect' onChange={laytest}>
                        <option hidden>Giờ chiếu</option>
                        {thongTinLichChieu.heThongRapChieu?.map((rap, index) => {
                            return <Fragment key={index}>
                                {rap.cumRapChieu?.map((cumRapChieu, index) => {
                                    if (cumRapChieu.maCumRap === maCumRap) {
                                        // return <Fragment key={index}>
                                        //     {cumRapChieu.lichChieuPhim?.map((lichChieu, index) => {
                                        //         if (lichChieu.maLichChieu === maLichChieu) {
                                        //             return <option key={index} value={lichChieu.maLichChieu}>
                                        //                 {moment(lichChieu.ngayChieuGioChieu).format("hh:mm:ss")}
                                        //             </option>
                                        //         }
                                        //     })}
                                        // </Fragment>
                                        return <Fragment key={index}>
                                            {
                                                gioChieu(cumRapChieu.lichChieuPhim)
                                            }
                                        </Fragment>
                                    }
                                })}
                            </Fragment>
                        })}
                    </select>
                </div>
                <div className='search__group-buy search__group'>
                    <a className='btn btn-success' onClick={async () => {
                        if (maLichChieu === 0) {
                            Swal.fire('Thông báo', 'Vui lòng chọn phim và suất chiếu', 'error')
                        } else if (localStorage.getItem(USER_LOGIN)) {
                            props.push.push('/chitietphongve/' + maLichChieu)
                        } else {
                            props.push.push('/dangnhap')
                        }
                    }}>Mua vé</a>
                </div>
            </form>
        </div>
    )
}
