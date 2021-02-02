import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layHeThongCumRapApiAction, layHeThongRapApiAction } from '../../../Redux/Actions/QuanLyPhimActions';

export default function TaoLichChieu(props) {
    // API He Thong Rap
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(await layHeThongRapApiAction())
    }, [])
    const heThongRap = useSelector(state => state.QuanLyPhimReducer.heThongRap);
    // API Cum Rap
    const [maHTR, setMaHTR] = useState('BHDStar')
    const handleChangeHTR = (e) => {
        const ma = e.target.value
        setMaHTR(ma)
    }
    useEffect(async () => {
        dispatch(await layHeThongCumRapApiAction(maHTR))
    }, [maHTR])
    const cumRap = useSelector(state => state.QuanLyPhimReducer.cumRap)

    return (
        <div className='taoLichChieu_content'>
            {/* Button */}
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target={`#taoLichChieuModal${props.maPhim}`}>
                Tạo lịch chiếu
            </button>
            {/* Modal */}
            <div className="modal fade taoLichChieuModal" id={`taoLichChieuModal${props.maPhim}`} tabIndex={-1} aria-labelledby="taoLichChieuModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="taoLichChieuModalLabel">
                                Tạo lịch chiếu cho phim {props.tenPhim}
                            </h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className='form_LR'>
                                    <div className='form_Left'>
                                        <div className="form-group">
                                            <label>Chọn hệ thống rạp</label>
                                            <br />
                                            <select className="form-control" value={maHTR} onChange={handleChangeHTR}>
                                                {heThongRap.map((HTR, index) => {
                                                    return <Fragment key={index}>
                                                        <option value={HTR.maHeThongRap}>{HTR.tenHeThongRap}</option>
                                                    </Fragment>
                                                })}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Chọn cụm rạp</label>
                                            <br />
                                            <select className="form-control" >
                                                {cumRap.map((tenCR, index) => {
                                                    return <Fragment key={index}>
                                                        <option value={tenCR.maCumRap}>{tenCR.tenCumRap}</option>
                                                    </Fragment>
                                                })}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Mã nhóm mặc định</label>
                                            <br />
                                            <input name='maNhom' value='GP01' disabled className="form-control" />
                                        </div>
                                    </div>
                                    <div className='form_Right'>
                                        <div className="form-group">
                                            <label>Chọn ngày giờ chiếu</label>
                                            <br />
                                            <input type="date" name='ngayKhoiChieu' className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Chọn thời lượng phim</label>
                                            <input types='thoiLuong' name='thoiLuong' className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Giá vé</label>
                                            <br />
                                            <input types='giaVe' name='giaVe' className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group' style={{ textAlign: 'right' }}>
                                    <button className='btn btn-success' type='submit' >Tạo</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
