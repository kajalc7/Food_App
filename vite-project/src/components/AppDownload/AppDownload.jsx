import React from 'react'
import'./AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className="Appdownload" id="Appdownload">
        <p>For better experience download  <br/>Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt=""/>
            <img src={assets.app_store} alt=""/>
        </div>
    </div>
  )
}

export default AppDownload
