import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimApiAction } from '../../Redux/Actions/QuanLyPhimActions';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
export default function Showtime(props) {
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(await layDanhSachPhimApiAction())
    }, [])
    const dsPhim = useSelector(state => state.QuanLyPhimReducer.dsPhim)
    const owlCarousel = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 3,
                }
            }
        ]
    };
    return (
        <div className='showTime' id='showTime'>
            <div className='myContainer'>
                <nav className='showtime__title'>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#showTime_now" role="tab" aria-controls="nav-home" aria-selected="true">Đang chiếu</a>
                        <a className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#showTime_will" role="tab" aria-controls="nav-profile" aria-selected="false">Sắp chiếu</a>
                    </div>
                </nav>
                <div className="tab-content showtime__content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="showTime_now" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className='container showtime__movieList' id='lichChieu'>
                            <Slider {...owlCarousel}>
                                {dsPhim.slice(0, 16).map((phim, index) => {
                                    return <div key={index} className="showtime__movieList-card item">
                                        <div className="card__item">
                                            <div className="card__item-overlay">
                                                <a href={phim.trailer} target="blank" className="card__item-playIcon">
                                                    <i className="fa fa-play"></i>
                                                </a>
                                            </div>
                                            <img className='card__item-image' src={phim.hinhAnh} alt="..." />
                                        </div>
                                        <div className="card__info">
                                            <span className='card__info-age'>C13</span>
                                            <h5 className="card__info-name">{phim.tenPhim}</h5>
                                        </div>
                                        <a className='btn card__button' href={'/chitietphim/' + phim.maPhim}>Mua Vé</a>
                                    </div>
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="showTime_will" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className='container showtime__movieList' id='lichChieu'>
                            <Slider {...owlCarousel}>
                                {dsPhim.slice(16, 32).map((phim, index) => {
                                    return <Fragment key={index}>
                                        <div className="showtime__movieList-card item">
                                            <div className="card__item">
                                                <div className="card__item-overlay">
                                                    <a href={phim.trailer} target="blank" className="card__item-playIcon">
                                                        <i className="fa fa-play"></i>
                                                    </a>
                                                </div>
                                                <img className='card__item-image' src={phim.hinhAnh} alt="..." />
                                            </div>
                                            <div className="card__info-will">
                                                <span className='card__info-age'>C13</span>
                                                <h5 className="card__info-name">{phim.tenPhim}</h5>
                                            </div>
                                        </div>
                                    </Fragment>
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
