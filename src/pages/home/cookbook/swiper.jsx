import React, { Component } from 'react'
import { Carousel } from "antd-mobile"
import { SwiperWrap } from "./styledCookBook"
import { connect } from 'react-redux'

import { GETLIST } from '../action-types'


const mapState = (state) => ({
    list: state.home.list
})

const mapDispatch = dispatch => ({
    loadData() {
        dispatch({
            type: GETLIST,
            url: '/api/list'
        })
    }
})

@connect(mapState, mapDispatch)

class Swiper extends Component {
    componentDidMount() {
        this.props.loadData()
    }
    render() {
        return (
            <SwiperWrap>
                <Carousel
                    autoplay={false}
                    infinite
                >
                    {
                        this.props.list.slice(0, 5).map((value) => <img key={value.id} src={value.img} alt='a'/>)
                    }
                </Carousel>
            </SwiperWrap>
        )
    }
}

export default Swiper
