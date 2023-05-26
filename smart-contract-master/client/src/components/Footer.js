import React from 'react'
import logo1 from "../img/phone-shop.png"
import "../components/footer.css"

const Footer = () => {
  return (
    <div classname="footer">
      <div className='footerTop'>
        <div className='ftTop'>
          <div className='ftTopTxt'>
            <h3>INFO</h3>
            <h5>nvthang.19it@vku.udn</h5>
            <h5>0829123862</h5>
          </div>
          <div className='ftTopImg'>
            <img src={logo1} alt=""/>
          </div>
          <div className='ftToptxt1'>
            <h3>ADDRESS</h3>
            <h5>nvthang.19it@vku.udn</h5>
            <h5>0829123862</h5>
          </div>
        </div>
        <div className='mxh'>
          <i class='bx bxl-facebook'></i>
          <i class='bx bxl-facebook'></i>
          <i class='bx bxl-facebook'></i>
          <i class='bx bxl-facebook'></i>
          <i class='bx bxl-facebook'></i>
        </div>
      </div>
      <div className='footerBottom'>
        <h3>Copyright by © 2022 VKU</h3>
      </div>
    </div>
  )
}

export default Footer