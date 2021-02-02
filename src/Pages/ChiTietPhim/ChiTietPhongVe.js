import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import HeaderMini from '../../Component/HeaderMini';
import { datVeApiAction, layThongTinPhongVeApiAction } from '../../Redux/Actions/QuanLyPhimActions';
import { DAT_GHE } from '../../Redux/Const/QuanLyPhimConst';
import { USER_LOGIN } from '../../Util/Config';
export default function ChiTietPhongVe(props) {
    const thongTinPhongVe = useSelector(state => state.QuanLyPhimReducer.thongTinPhongVe)
    const danhSachGheDangDat = useSelector(state => state.QuanLyPhimReducer.danhSachGheDangDat)
    console.log(thongTinPhongVe)
    const dispatch = useDispatch();
    useEffect(async () => {
        // lasy tham so lich chieu tu url
        let maLichChieu = props.match.params.maLichChieu;
        // goi action ket noi api lay du lieu lich chieu ve
        dispatch(await layThongTinPhongVeApiAction(maLichChieu))
    }, [])

    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        window.onresize = function () {
            setHeight(window.innerHeight);
        }
    }, []);
    // Style nut dat ve
    let tongTien = danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
        return tongTien += gheDangDat.giaVe
    }, 0)
    let disable = (tongTien === 0) ? 'disable' : '';
    let cursor = (tongTien === 0) ? 'no-drop' : '';
    let opacity = (tongTien === 0) ? '0.5' : '';


    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(5)

    function updateTime() {
        if (minutes == 0 && seconds == 0) {
            Swal.fire({
                title: 'Đã hết thời gian giữ ghế.',
                text: "Vui chọn ghế trong thời hạn 5 phút",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Đặt vé lại',
                cancelButtonText: 'Hủy'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                } else {
                    props.history.push('/')
                }
            })
        }
        else {
            if (seconds === 0) {
                setMinutes(minutes => minutes - 1);
                setSeconds(59);
            } else {
                setSeconds(seconds => seconds - 1);
            }
        }
    }
    useEffect(() => {
        const token = setTimeout(updateTime, 1000)
        return function cleanUp() {
            clearTimeout(token);
        }
    })
    return (
        <div className='container-fluid chiTietPhongVe'>
            <div className='chiTietPhongVe__content d-flex' style={{ height }}>
                <div className='chiTietPhongVe_choNgoi'>
                    <HeaderMini />
                    <div className=' text-center chiTietPhongVe_manHinh'>
                        {/* hien thi thong tin phong ve */}
                        <div className='thongTin__Rap'>
                            <div className='thongTin__Rap-content '>
                                <img src={thongTinPhongVe.thongTinPhim?.hinhAnh} alt='...' />
                                <div className='thongTin__Rap-diaChi'>
                                    <span className='ten__Rap'>{thongTinPhongVe.thongTinPhim?.tenCumRap}</span>
                                    <br />
                                    <span className='dia__Chi'>{thongTinPhongVe.thongTinPhim?.diaChi}</span>
                                </div>
                            </div>
                            <div className='thongTin__Rap-countDown'>
                                Thời gian giữ ghế
                            <span>{String(Math.floor(minutes)).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</span>
                            </div>
                        </div>
                        <div className='manHinh'>
                            <img src='https://tix.vn/app/assets/img/icons/screen.png' alt='...' />
                        </div>
                        <div className='danhSachGhe'>
                            {thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
                                let classGheVip = ghe.loaiGhe === 'Thuong' ? '' : 'gheVip';
                                let classGheDaDat = ghe.daDat ? 'gheDaDat' : '';
                                let disable = ghe.daDat ? 'disable' : '';
                                let noiDungBtn = ghe.daDat ? 'X' : ghe.stt;
                                let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => ghe.maGhe === gheDangDat.maGhe)
                                let classGheDangDat = indexGheDangDat !== -1 ? 'gheDangDat' : '';
                                return <Fragment key={index}>
                                    <button onClick={() => {
                                        dispatch({
                                            type: DAT_GHE,
                                            gheDangDat: {
                                                maGhe: ghe.maGhe,
                                                giaVe: ghe.giaVe,
                                                stt: ghe.stt
                                            }
                                        })
                                    }} disabled={`${disable}`} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>{noiDungBtn}</button>
                                    {(index + 1) % 16 === 0 ? <br /> : ''}
                                </Fragment>
                            })}
                        </div>
                        <div className='loaiGhe'>
                            <div className='loaiGhe__item'>
                                <span className='ghe'></span>
                                <span>Ghế thường</span>
                            </div>
                            <div className='loaiGhe__item'>
                                <span className='ghe gheVip'></span>
                                <span>Ghế VIP</span>
                            </div>
                            <div className='loaiGhe__item'>
                                <span className='ghe gheDaDat'>X</span>
                                <span>Ghế đã được đặt</span>
                            </div>
                            <div className='loaiGhe__item'>
                                <span className='ghe gheDangDat'></span>
                                <span>Ghế đang chọn</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' chiTietPhongVe_thongTin' style={{ height }}>
                    <div>
                        <div className='thongTin_tongTien'>{danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                            return tongTien += gheDangDat.giaVe
                        }, 0).toLocaleString()} VND
                    </div>
                        <hr style={{ borderTop: '2px dashed black', backgroundColor: 'white' }} />
                        <div className='d-flex' style={{ margin: 0 }}>
                            <div style={{ width: '30%', marginRight: '10px' }}>
                                <img src={thongTinPhongVe.thongTinPhim?.hinhAnh} style={{ width: "100%" }} alt='' />
                            </div>
                            <div style={{ width: '70%' }}>
                                <h1>{thongTinPhongVe.thongTinPhim?.tenPhim}</h1>
                                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    Tên rạp:
                                <h5 style={{ fontSize: 'bold' }}> {thongTinPhongVe.thongTinPhim?.tenCumRap}</h5>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    Rạp:
                            <h5> {thongTinPhongVe.thongTinPhim?.tenCumRap}</h5>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                                    Ngày giờ chiếu:
                                <h5> {thongTinPhongVe.thongTinPhim?.ngayChieu} - {thongTinPhongVe.thongTinPhim?.gioChieu}</h5>
                                </div>
                            </div>
                        </div>
                        <hr style={{ borderTop: '2px dashed black', backgroundColor: 'white' }} />
                        <div className='thongTin_ghe'>
                            <div className='viTriGhe'>{tongTien === 0 ? 'Vui lòng chọn ghế' : 'Ghế: '} {danhSachGheDangDat?.map((gheDangDat, index) => {
                                if (index === 0) {
                                    return <span key={index}>{gheDangDat.stt}</span>
                                } else {
                                    return <span key={index}>, {gheDangDat.stt}</span>
                                }
                            })}
                            </div>
                            <div className='tienGhe'>
                                {danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                    return tongTien += gheDangDat.giaVe
                                }, 0).toLocaleString()} đ
                        </div>
                        </div>
                        <hr style={{ borderTop: '2px dashed black', backgroundColor: 'white' }} />
                        <div className='thongTin_thanhToan'>
                            <p className='title'>Hình thức thanh toán</p>
                            <div className='allItem'>
                                <div className='item'>
                                    <input type='radio' name='thanhtoan' id='atm'></input>
                                    <label for='atm'>
                                        <img src='/img/ATM.png' alt='atm' />
                                        <p>Thẻ ATM nội địa</p>
                                    </label>
                                </div>
                                <div className='item'>
                                    <input type='radio' name='thanhtoan' id='visa'></input>
                                    <label for='visa'>
                                        <img src='/img/visa.png' alt='visa' />
                                        <p>Visa, Master, JCB</p>
                                    </label>
                                </div>
                                <div className='item'>
                                    <input type='radio' name='thanhtoan' id='cash'></input>
                                    <label for='cash'>
                                        <img src='/img/cash.png' alt='cash' />
                                        <p>Thanh toán tiền mặt</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button style={{ cursor: `${cursor}`, opacity: `${opacity}` }} disabled={`${disable}`} className='btn_datVe' onClick={async () => {
                        if (localStorage.getItem(USER_LOGIN)) {
                            let user = JSON.parse(localStorage.getItem(USER_LOGIN))
                            let objectDatVe = {
                                'maLichChieu': props.match.params.maLichChieu,
                                'danhSachVe': danhSachGheDangDat,
                                'taiKhoanNguoiDung': user.taiKhoan
                            }
                            Swal.fire({
                                title: 'Thông tin đặt vé sẽ được gửi qua email',
                                text: "Hãy kiểm tra thông tin trước khi xác nhận!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Xác nhận',
                                cancelButtonText: 'Hủy'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    dispatch(datVeApiAction(objectDatVe))
                                }
                            })

                        } else {
                            props.history.push('/dangnhap')
                        }
                    }}>Đặt vé</button>
                </div>
            </div>
        </div>
    )
}
