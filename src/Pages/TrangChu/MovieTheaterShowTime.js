import React, { useState } from 'react'
import { USER_LOGIN } from '../../Util/Config'
import moment from 'moment'
export default function MovieTheaterShowTime(props) {
    const [hidden, setHidden] = useState(true)
    const hide = () => {
        setHidden(!hidden)
    }
    let danhSachPhim = props.danhSachPhim
    return <>
        <div className='movieTheater__showTimes-item'>
            <div className='phim d-flex item__top' onClick={() => hide()}>
                <div className='d-flex' style={{ width: '95%' }}>
                    <img src={danhSachPhim.hinhAnh} alt='...' style={{ width: '50px' }} />
                    <div className='item__top-info'>
                        <p className='info__name'><span>C13</span> - {danhSachPhim.tenPhim}</p>
                        <span>116 phút - TIX 8.6 - IMDb 0</span>
                    </div>
                </div>
                <i className={hidden ? 'fa fa-angle-up' : 'fa fa-angle-down'} style={{ color: 'black', fontSize: '20px', width: '5%' }}></i>
            </div>
            <div className={hidden ? 'item__bottom' : 'hidden__showTimes'}>
                <p className='digital'>2D Digital</p>
                {danhSachPhim.lstLichChieuTheoPhim?.slice(0, 7).map((suatChieu, index) => {
                    return <button className='item__bottom-time' key={index} onClick={async () => {
                        if (localStorage.getItem(USER_LOGIN)) {
                            props.push.push.push('/chitietphongve/' + suatChieu.maLichChieu)
                        } else {
                            props.push.push.push('/dangnhap')
                        }
                    }}>
                        <span className='time__start'>{moment(suatChieu.ngayChieuGioChieu).format('hh:mm')}</span> ~
                        <span className='time__end'> {moment(suatChieu.ngayChieuGioChieu).format('hh:mm')}</span>
                    </button>
                })}
            </div>
        </div>
    </>
}
