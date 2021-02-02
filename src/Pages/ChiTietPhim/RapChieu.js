import React, { useState } from 'react'
import { USER_LOGIN } from '../../Util/Config';
import moment from 'moment'
export default function RapChieu(props) {
    const [hidden, setHidden] = useState(true)
    const hide = () => {
        setHidden(!hidden)
    }
    let cumRap = props.cinema
    return <>
        <div className='showTimes__cinema'>
            <div className='showTimes__cinema-top' onClick={() => hide()}>
                <div className='d-flex'>
                    <img src='https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-quang-trung-15379536724871.jpg' />
                    <div>
                        <span className='nameCinema'>{cumRap.tenCumRap}</span>
                        <br />
                        <span className='point'>116 phút - TIX 8.6 - IMDb 0</span>
                    </div>
                </div>
                <i className={hidden ? 'fa fa-angle-up' : 'fa fa-angle-down'} style={{ color: 'black', fontSize: '20px' }}></i>
            </div>
            <div className={hidden ? 'showTimes__cinema-bottom' : 'hidden__showTimes'}>
                <p className='digital'>2D Digital</p>
                {cumRap.lichChieuPhim?.slice(0, 5).map((lichChieu, index) => {
                    return <button className='times' key={index} onClick={async () => {
                        if (localStorage.getItem(USER_LOGIN)) {
                            props.push.push.push('/chitietphongve/' + lichChieu.maLichChieu)
                        } else {
                            props.push.push.push('/dangnhap')
                        }
                    }}>
                        <span className='time__start'>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</span>
                    </button>
                })}
            </div>
        </div>
    </>

}
