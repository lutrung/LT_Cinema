
import React from 'react'
import { Route } from 'react-router-dom'
import Footer from '../Component/Footer';
import Header from '../Component/Header';

export const HomeTemplate = (props) => {
    let { Component, ...restParam } = props;
    return (
        <Route {...restParam} render={(propsRoute) => {
            return <>
                <Header />
                <Component {...propsRoute} />
                <Footer />
            </>
        }} />

    )
}