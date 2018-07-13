import React, { Component } from "react";
import "./OccasionCard.css";

// const images = [
//     {
//       url: 'https://i68.tinypic.com/2jb1nvs.jpg',
//       title: 'Casual Apparel',
//       width: '30%',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1490707967831-1fd9b48e40e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=749def5b21084e6ee01beca8e6bc73a9&auto=format&fit=crop&w=1350&q=80',
//       title: 'Formal',
//       width: '40%',
//     },
//     {
//       url: 'https://i65.tinypic.com/oq8zm1.jpg',
//       title: 'Everyday',
//       width: '30%',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1457972851104-4fd469440bf9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2996962c8db1ab54f6998cf640db8ec&auto=format&fit=crop&w=1350&q=80',
//       title: 'Colorful',
//       width: '40%',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1523268755815-fe7c372a0349?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=78f4a9da162471fff0acce3b5be33393&auto=format&fit=crop&w=1350&q=80',
//       title: 'Mens',
//       width: '30%',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1490243248048-8a68b3b77805?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=26f48d29b5a4bec845fbcaa9e9848a5b&auto=format&fit=crop&w=1778&q=80',
//       title: 'Shoes',
//       width: '30%',
//     },
//   ];

class OccasionCard extends Component {

  render() {
    return (
        <div className="col-12 col-sm-12 col-md-4">
            <div className="card">
                {/* <a href="assets/img/homepage.jpg" class="fancybox">
                    <img className="card-img-top" src="assets/img/homepage.jpg" alt="Card image cap" />
                </a> */}
                <img className="card-img-top responsive" id="occasion-card-img" src="https://images.unsplash.com/photo-1490707967831-1fd9b48e40e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=749def5b21084e6ee01beca8e6bc73a9&auto=format&fit=crop&w=1350&q=80" alt="fashion-img" />
                <div className="card-body">
                    <h3 className="card-title">{this.props.dresscode}</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.props.season}</li>
                    <li className="list-group-item">$ {this.props.budget}</li>
                    <li className="list-group-item">{this.props.items}</li>
                    <li className="list-group-item"><a href={this.props.id}>More details</a></li>
                </ul>
            </div>
        </div>
    )
  }
}

export default OccasionCard;
