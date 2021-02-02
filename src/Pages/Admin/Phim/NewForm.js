import React from 'react';
// import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { HANDLE_CHANGE_INPUT } from '../../../Redux/Const/QuanLyPhimConst';

export default function NewForm(props) {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        let { name, value } = e.target;
        let types = e.target.getAttribute("types");
        let newValue = { ...formSuaPhim.value };
        newValue[name] = value;
        let newErrors = { ...formSuaPhim.errors };
        newErrors[name] = value.trim() === "" ? "* Không được bỏ trống" : "";

        if (types === "maPhim") {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "* Dữ liệu phải là số !";
            }
        }
        let action = {
            type: HANDLE_CHANGE_INPUT,
            newFormSua: {
                value: newValue,
                errors: newErrors,
            },
        };
        dispatch(action);
    }
    const formSuaPhim = useSelector(state => state.QuanLyPhimReducer.formSuaPhim)
    let {
        maPhim,
        tenPhim,
        hinhAnh,
        moTa,
        maNhom,
        ngayKhoiChieu,
    } = formSuaPhim.value;
    return (
        <form className='form_content'>
            <div className='d-flex'>
                <div className='form_Left'>
                    <div className="form-group">
                        <label>Mã phim</label>
                        <input value={maPhim} types='maPhim' name='maPhim' className='form-control' onChange={handleChange} />
                        <p className="text-danger">{formSuaPhim.errors.maPhim}</p>
                    </div>
                    <div className="form-group">
                        <label>Tên phim</label>
                        <input value={tenPhim} name='tenPhim' className='form-control' onChange={handleChange} />
                        <p className="text-danger">{formSuaPhim.errors.tenPhim}</p>
                    </div>
                    <div className="form-group">
                        <label>Mã nhóm</label>
                        <input value={maNhom} name='maNhom' className='form-control' disabled />
                    </div>
                </div>
                <div className='form_Right'>
                    <div className="form-group">
                        <label>Ngày chiếu</label>
                        <br />
                        <input value={moment(ngayKhoiChieu).format("YYYY-MM-DD")} type='date' name='ngayKhoiChieu' className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Hình ảnh</label>
                        <br />
                        <input type="file" name='hinhAnh' onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <h5>Mô tả</h5>
                <textarea value={moTa} types='moTa' name='moTa' className="form-control" rows="5" onChange={handleChange}></textarea>
            </div>
            <div className='form-group' style={{ textAlign: 'right' }}>
                <button className='btn btn-primary mx-2' type='submit' >Cập nhật</button>
            </div>
        </form>
    );
};
