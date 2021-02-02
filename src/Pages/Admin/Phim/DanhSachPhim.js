import React, { Fragment } from 'react'
import moment from 'moment'
import TaoLichChieu from './TaoLichChieu'
import SuaPhim from './SuaPhim'
export default function DanhSachPhim(props) {
    return props.posts.map((post, index) => {
        return <Fragment key={index}>
            <tr>
                <td>{post.maPhim}</td>
                <td><p className='tenPhim'>{post.tenPhim}</p></td>
                <td style={{ textAlign: 'center' }}><img src={post.hinhAnh} alt='' style={{ width: 50, height: 50 }} /></td>
                <td><p className='moTa'>{post.moTa}</p></td>
                <td>{post.maNhom}</td>
                <td>{moment(post.ngayKhoiChieu).format("DD/MM/YYYY")}</td>
                <td >
                    <div className='d-flex'>
                        <TaoLichChieu tenPhim={post.tenPhim} maPhim={post.maPhim} />
                        <SuaPhim tenPhim={post.tenPhim} maPhim={post.maPhim} formSua={post} />
                        <button className='btn btn-danger'>X</button>
                    </div>
                </td>
            </tr>
        </Fragment>
    })

}