import React from 'react'

export default function Carousel(props) {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" />
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} />
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/img/Carousel/carousel2.png" className="d-block w-100" alt="..." />
                    <img src="/img/Carousel/playicon.png" className='play__button' data-bs-toggle="modal" data-bs-target="#exampleModal1" alt='Play' />
                    <div className="modal fade" id="exampleModal1">
                        <div className="modal-dialog modal-dialog-centered" role='document'>
                            <div className="modal-content">
                                <div className='modal-body'>
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ncwkodt5dA4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='trailer'></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="/img/Carousel/carousel3.jpg" className="d-block w-100" alt="..." />
                    <img src="/img/Carousel/playicon.png" className='play__button' data-bs-toggle="modal" data-bs-target="#exampleModal2" alt='/img/Carousel/playicon.png' />
                    <div className="modal fade" id="exampleModal2">
                        <div className="modal-dialog modal-dialog-centered" role='document'>
                            <div className="modal-content">
                                <div className='modal-body'>
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ATJYac_dORw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='trailer'></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="/img/Carousel/carousel4.jpg" className="d-block w-100" alt="..." />
                    <img src="/img/Carousel/playicon.png" className='play__button' data-bs-toggle="modal" data-bs-target="#exampleModal3" alt='/img/Carousel/playicon.png' />
                    <div className="modal fade" id="exampleModal3">
                        <div className="modal-dialog modal-dialog-centered" role='document'>
                            <div className="modal-content">
                                <div className='modal-body'>
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/wEunhJFDPuw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='trailer'></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </a>
        </div >

    )
}
