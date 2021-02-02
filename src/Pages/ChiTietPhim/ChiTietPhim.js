import React, { useEffect } from 'react'
import ThongTinLichChieu from './ThongTinLichChieu'
import ThongTinPhim from './ThongTinPhim'

export default function ChiTietPhim(props) {
    let maPhim = props.match.params.maPhim;
    return (
        <div >
            <ThongTinPhim maPhim={maPhim} />
            <ThongTinLichChieu push={props.history} />
        </div>
    )
}
