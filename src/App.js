import { Switch, Route } from 'react-router-dom';
import './App.css';
import style from './css/main.css'
import ChiTietPhim from './Pages/ChiTietPhim/ChiTietPhim';
import TrangChu from './Pages/TrangChu/TrangChu';
import { HomeTemplate } from './Templates/HomeTemplate';
import { AdminTemplate } from './Templates/AdminTemplate';
import QuanLyPhim from './Pages/Admin/Phim/QuanLyPhim';
import QuanLyNguoiDung from './Pages/Admin/NguoiDung/QuanLyNguoiDung';
import ChiTietPhongVe from './Pages/ChiTietPhim/ChiTietPhongVe';
import DangKy from './Pages/User/DangKy';
import DangNhap from './Pages/User/DangNhap';
import ThongTinCaNhan from './Pages/User/ThongTinCaNhan';
function App() {
  return (
    <>
      <Switch>
        <HomeTemplate exact path='/' Component={TrangChu} />
        <HomeTemplate exact path='/trangchu' Component={TrangChu} />
        <Route exact path='/dangky' component={DangKy} />
        <Route exact path='/dangnhap' component={DangNhap} />
        <Route exact path='/thongtincanhan' component={ThongTinCaNhan} />
        <HomeTemplate exact path='/chitietphim/:maPhim' Component={ChiTietPhim} />
        <Route exact path='/chitietphongve/:maLichChieu' component={ChiTietPhongVe} />
        <AdminTemplate exact path='/admin' Component={QuanLyPhim} />
        <AdminTemplate exact path='/admin/quanlyphim' Component={QuanLyPhim} />
        <AdminTemplate exact path='/admin/quanlynguoidung' Component={QuanLyNguoiDung} />
      </Switch>
    </>
  );
}

export default App;
