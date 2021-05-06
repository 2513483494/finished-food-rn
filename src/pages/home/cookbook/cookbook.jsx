import React, { Component } from 'react'
import Header from './header'
import Swiper from './swiper'
import Search from '../../../components/search/Search.jsx'
import HotCat from './HotCat'
import Hotlist from './Hotlist'

export default class Cookbook extends Component {
   render() {
      return (
         <div>
            <Header />
            <Swiper />
            <Search />
            <HotCat />
            <Hotlist />
         </div>
      )
   }
}