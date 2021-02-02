import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch } from 'react-redux';
import { themPhimApiAction } from '../../../Redux/Actions/QuanLyPhimActions';
import moment from 'moment'
export default function FormPhim(props) {
    const dispatch = useDispatch()
    const [themPhim, setThemPhim] = useState({
        maPhim: '',
        tenPhim: '',
        traiLer: '',
        danhGia: '',
        hinhAnh: {},
        moTa: '',
        maNhom: 'GP01',
    })
    console.log(themPhim);
    const handleChange = (e) => {
        let target = e.target;
        if (target.name === 'hinhAnh') {
            let newThemPhimm = { ...themPhim, hinhAnh: e.target.files[0] }
            setThemPhim(newThemPhimm)
        } else {
            let newThemPhim = { ...themPhim, [e.target.name]: e.target.value }
            setThemPhim(newThemPhim)

        }
    }
    const handleSubmit = async (e) => {
        console.log(themPhim);
        e.preventDefault()
        let form_data = new FormData();
        for (let key in themPhim) {
            form_data.append(key, themPhim[key]);
        }
        dispatch(await themPhimApiAction(form_data))

    }
    return (
        <form className='form_content' onSubmit={handleSubmit}>
            <div className='d-flex'>
                <div className='form_Left'>
                    <div className="form-group">
                        <label>Mã phim</label>
                        <input types='maPhim' name='maPhim' className='form-control' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Tên phim</label>
                        <input types='tenPhim' name='tenPhim' className='form-control' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Trailer</label>
                        <input types='traiLer' name='traiLer' className="form-control" onChange={handleChange} />
                        {/* <p className="text-danger error">{error.traiLer}</p> */}
                    </div>
                </div>
                <div className='form_Right'>
                    <div className="form-group">
                        <label>Đánh giá</label>
                        <input types='danhGia' name='danhGia' className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Hình ảnh</label>
                        <br />
                        <input types='hinhAnh' type="file" name='hinhAnh' className="form-control" onChange={handleChange} />
                        {/* <p className="text-danger error">{error.hinhAnh}</p> */}
                    </div>
                    <div className="form-group">
                        <label>Mã nhóm</label>
                        <input name="maNhom" value="GP01" className="form-control" disabled />
                        {/* <p className="text-danger error">{error.traiLer}</p> */}
                    </div>
                </div>
            </div>
            <div className="form-group">
                <h5>Mô tả</h5>
                <textarea types='moTa' name='moTa' className="form-control" rows="3" onChange={handleChange}></textarea>
                {/* <p className="text-danger error">{error.moTa}</p> */}
            </div>
            <div className='form-group' style={{ textAlign: 'right' }}>
                <button className='btn btn-primary mx-2' type='submit' >Thêm</button>
            </div>
        </form>
    );
};
