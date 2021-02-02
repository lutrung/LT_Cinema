import Axios from 'axios'
import Swal from 'sweetalert2'
import { ACCESSTOKEN } from '../../Util/Config'
import { LAY_DANH_SACH_PHIM_ACTION, LAY_HE_THONG_CUM_RAP_ACTION, LAY_HE_THONG_RAP_ACTION, LAY_LICH_CHIEU_HE_THONG_RAP_ACTION, THONG_TIN_LICH_CHIEU_ACTION, THONG_TIN_PHONG_VE_ACTION, DAT_VE_THANH_CONG, SUA_PHIM_ACTION } from '../Const/QuanLyPhimConst'
export const layDanhSachPhimApiAction = async () => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET'
            })
            dispatch({
                type: LAY_DANH_SACH_PHIM_ACTION,
                dsPhim: result.data
            })
        } catch (err) {
            console.log('Thất bại', err.response.data)
        }
    }
}
export const layThongLichChieuPhimApiAction = async (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            })
            dispatch({
                type: THONG_TIN_LICH_CHIEU_ACTION,
                thongTinLichChieu: result.data
            })
        } catch (err) {

        }
    }
}
export const layHeThongRapApiAction = async () => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
                method: 'GET'
            })
            dispatch({
                type: LAY_HE_THONG_RAP_ACTION,
                heThongRap: result.data
            })
        } catch (err) {
            console.log('Thất bại', err.response.data)
        }
    }
}
export const layHeThongCumRapApiAction = async (codeCinema) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${codeCinema}`,
                method: 'GET'
            })
            dispatch({
                type: LAY_HE_THONG_CUM_RAP_ACTION,
                cumRap: result.data
            })
        } catch (err) {
            console.log('Thất bại', err.response.data)
        }
    }
}
export const layLichChieuHTRApiAction = async (codeCinema) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${codeCinema}&maNhom=GP01`,
                method: 'GET'
            })
            dispatch({
                type: LAY_LICH_CHIEU_HE_THONG_RAP_ACTION,
                lichChieuHTR: result.data
            })
        } catch (err) {
            console.log('Thất bại', err.response.data)
        }
    }
}
export const layThongTinPhongVeApiAction = async (maLichChieu) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            })
            dispatch({
                type: THONG_TIN_PHONG_VE_ACTION,
                thongTinPhongVe: result.data
            })
            console.log(result.data);
        } catch (err) {
            console.log(err)
        }
    }
}
export const datVeApiAction = (thongTinVe) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                method: 'POST',
                data: thongTinVe,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            })
            dispatch(await layThongTinPhongVeApiAction(thongTinVe.maLichChieu))
            Swal.fire('Thông báo', 'Đặt vé thành công', 'success')
            dispatch({
                type: DAT_VE_THANH_CONG
            })
        } catch (err) {
            console.log(err)
            Swal.fire('Thông báo', 'Đặt vé thất bại', 'error')
        }
    }
}
export const themPhimApiAction = async (form_data) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',
                method: 'POST',
                data: form_data,
            })
            Swal.fire('Thông báo', 'Thêm phim thành công', 'success')
        } catch (err) {
            console.log(err)
            Swal.fire('Thông báo', 'Thêm phim thất bại', 'error')
        }
    }
}
export const suaPhimAction = (phim) => {
    return {
        type: SUA_PHIM_ACTION,
        phimNguoiDungChinhSua: phim,
    };
};