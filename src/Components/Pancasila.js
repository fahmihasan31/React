import React, { Component } from "react";
import Media from "./Media"; // Ubah .Media menjadi ./Media

class Pancasila extends Component {
  render() {
    return (
      <header>
        <div className='title'>PANCASILA</div>
        <br></br>
        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila Pertama</strong>
            <br></br>
            Ketuhanan Yang Maha Esa
          </div>
          <Media image='sila-1.jpeg'></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila Kedua</strong>
            <br></br>
            Kemanusiaan Yang Adil dan Beradap
          </div>
          <Media image='sila-2.jpeg'></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila Ketiga</strong>
            <br></br>
            Persatuan indonesia
          </div>
          <Media image='sila-3.jpeg'></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila Keempat</strong>
            <br></br>
            Kerakyatan Yang Dipimpin Oleh Hikmad Kebijaksanaan Dalam Permusyawaratan Perwakilan
          </div>
          <Media image='sila-4.png'></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila Kelima</strong>
            <br></br>
            Keadilan Sosial Bagi Seluruh Rakyat Indonesia
          </div>
          <Media image='sila-5.jpeg'></Media>
        </div>
      </header>
    )
  }
}

export default Pancasila;
