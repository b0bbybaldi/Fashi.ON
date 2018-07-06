import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Dashboard.css";

class Dashboard extends Component {

render(){
    return(
    <div>
        <Navbar />
        <h2>Welcome!</h2>
<div className = "row">
<div className = "col-md-6">

<div className="card">
  <div className="card-body">
<img className="card-img-top" src="http://i66.tinypic.com/vy842c.jpg" alt="Fashion">
</img>
  </div>
</div>

<div className="card">
  <div className="card-body">
  <img className="card-img-top" src="http://i64.tinypic.com/30seghy.jpg" alt="Card image cap">
  </img>

   <a href="#" class="btn btn-primary">Go somewhere</a>

  </div>
</div>

<div className="card">
  <div className="card-body">
  <img className="card-img-top" src=".../100px180/" alt="Card image cap">
  </img>

  </div>
</div>

<div className="card">
  <div className="card-body">
  <img className="card-img-top" src=".../100px180/" alt="Card image cap">
  </img>

  </div>
</div>


</div>
</div>
// row1


      <Footer />
    </div>

)}};


export default Dashboard;
