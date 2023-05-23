import React from 'react'
import "./Tpss1.css"
import { bEmpty, bFull, bNormal, b_10, b_10_20, b_20_40, b_40_60, b_60_80, b_80} from '../../assets'
import { useEffect, useState } from 'react';
import { InfluxDB } from 'influx';

const Tpss1 = () => {

  return (
      <>
      <h5 className="my-paragraph">TPSS 1</h5>
      <div class="my-element">

      <div clas="content-wrapper">

        <h5 className="my-paragraph">Tanaman{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}Sisa Makanan{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}Organik{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}Residu</h5>

        <div className="image-container">

          <img src={bEmpty} alt="" />
          <img className="battery-tanaman" src={b_10_20} alt="" />
          <img src={bFull} alt="" />
          <img className="battery-makanan" src={b_80} alt="" />
          <img src={bEmpty} alt="" />
          <img className="battery-organik" src={b_60_80} alt="" />
          <img src={bNormal} alt="" />
          <img className="battery-residu" src={b_20_40} alt="" />

        </div>



      </div>

    </div></>
  )
}

export default Tpss1
