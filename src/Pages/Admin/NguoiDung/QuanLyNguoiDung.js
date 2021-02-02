import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import PhanTrang from './PhanTrang';
import DanhSachNguoiDung from './DanhSachNguoiDung';

export default function QuanLyNguoiDung(props) {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            const res = await Axios.get('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
            setPosts(res.data)
            setLoading(false)
        }
        fetchPost()
    }, [])

    if (loading && posts.length === 0) {
        return <h2>Loading...</h2>
    }
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const howManyPages = Math.ceil(posts.length / postsPerPage)



    return (
        <div className='container quanLyNguoiDung_content'>
            <div className='bangTaiKhoan mt-5'>
                <table className="table table-striped table-bordered table-active">
                    <thead className='head'>
                        <tr>
                            <th>STT</th>
                            <th>Tài khoản</th>
                            <th>Mật khẩu</th>
                            <th>Họ tên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className='body'>
                        <DanhSachNguoiDung posts={currentPosts} loading={loading} />
                    </tbody>
                </table>
                <PhanTrang pages={howManyPages} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}
