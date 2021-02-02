import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import DanhSachPhim from './DanhSachPhim';
import PhanTrang from '../NguoiDung/PhanTrang';
import ThemPhim from './ThemPhim';

export default function QuanLyPhim(props) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            const res = await Axios.get('https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
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
        <div className='container quanLyPhim_content'>
            {/* <div className='TimKiem_content'>
                <i className="fa fa-search iconTimKiem"></i>
                <input className='intTimKiem' type="text" placeholder='...' />
            </div> */}
            <ThemPhim />
            <div className='bangPhim mt-5'>
                <table className="table table-striped table-bordered table-active">
                    <thead className='head'>
                        <tr>
                            <th style={{ width: '5%' }}>Mã phim</th>
                            <th style={{ width: '10%' }}>Tên Phim</th>
                            <th style={{ width: '10%' }}>Hình ảnh</th>
                            <th style={{ width: '25%' }}>Mô tả</th>
                            <th style={{ width: '5%' }}>Mã nhóm</th>
                            <th style={{ width: '5%' }}>Ngày khởi chiếu</th>
                            <th style={{ width: '20%' }}>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody className='body'>
                        <DanhSachPhim posts={currentPosts} />
                    </tbody>
                </table>
                <PhanTrang pages={howManyPages} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}
