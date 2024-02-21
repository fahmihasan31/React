import React, { Component } from "react";
import "./App.css";
// import element Alert yang telah dibuat
import Alert from "./Components/Alert";
// Impor elemen Media
import Media from "./Components/Media";
//import file component osis
import FormOsis from "./Components/Osis";
//import file component pancasila
import Pancasila from "./Components/Pancasila";
// import file component button
import Button from "./Components/Button";




class App extends Component {
  render() {
    return (
      <div>
        {/* Mencoba dengan HTML CSS */}
        <div className="App">
          <h3 className="judul">Ini Project Pertama React JS</h3>
          <p className="subjudul">Belajar React JS itu menyenagkan</p>
        </div>

        <br />

        {/* Membuat style dengan Bootstrap */}
        <div className="App container">
          <div className="alert alert-info">
            <h3>This is My First Project Based On React JS</h3>
            <p>Belajar React JS itu mudah</p>
            <button className="mr-1 btn btn-success">setuju</button>
            <button className="btn btn-info">yes ofc</button>
          </div>
        </div>

        <br />
        <br />

        {/* Membuat Custom Elemen menggunakan Props */}
        <div className="App container col-sm-6">
          <Alert type='dark' header='hitam'>
            Ini adalah type dark
          </Alert>
          <Alert type='light' header='putih'>
            Ini adalah type light
          </Alert>
          <Alert type='info' header='Info'>
            Ini adalah type info
          </Alert>
          <Alert type='danger' header='Danger'>
            Ini adalah type Danger
          </Alert>
          <Alert type='warning' header='Warning'>
            Ini adalah type warning
          </Alert>
        </div>
        <br />

        {/* Membuat Custom Element dengan Prop #2 */}
        <div className="App container col-sm-6">
          <Media image="favicon.ico" title="React JS" type="info" >
            ReactJS dapat meningkatkan optimasi mesin pencari SEO pada aplikasi web dengan meningkatkan performa.
          </Media>
          <Media image="node.jpeg" title="Node JS" type="success">
            Node.js merupakan platform yang diciptakan secara khusus untuk membantu pengembangan aplikasi berbasis web
          </Media>
        </div>

        <br />
        <hr />

        {/* Studi Kasus */}
        {/* Pancasila */}
        <Pancasila />
        <hr />
        <br />

        {/* button warna warni */}
        <Button />
        <hr />
        <br />

        {/* Form Osis */}
        <FormOsis />

      </div>

    );
  }
}




export default App;
