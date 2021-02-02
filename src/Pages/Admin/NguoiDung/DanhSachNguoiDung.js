import React, { Fragment } from 'react'
export default function DanhSachNguoiDung(props) {
    return props.posts.map((post, index) => {

        return (
            <tr key={index}>
                <td>{index}</td>
                <td>{post.taiKhoan}</td>
                <td>{post.matKhau}</td>
                <td>{post.hoTen}</td>
                <td>{post.email}</td>
                <td>{post.soDt}</td>
                <td >
                    <div className='d-flex'>
                        <button className='btn btn-success'>Ghi Danh</button>
                        <button className='btn btn-primary mx-2'>Sửa</button>
                        <button className='btn btn-danger'>X</button>
                    </div>
                </td>
            </tr>
        )
    })

}
