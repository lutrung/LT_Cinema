import React from 'react'
import Application from './Application'
import Carousel from './Carousel'
import Infomation from './Infomation'
import MovieTheater from './MovieTheater'
import Search from './Search'
import Showtime from './Showtime'

export default function TrangChu(props) {
    return (
        <div>
            <Carousel />
            <Search push={props.history} />
            <Showtime />
            <MovieTheater push={props.history} />
            <Infomation />
            <Application />
        </div>
    )
}
