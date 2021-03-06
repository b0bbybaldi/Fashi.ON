import React, { Component } from "react";
import API from '../../utils/API';
import Navbar from '../../components/Navbar/Navbar.js';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import PropTypes from 'prop-types';
import Background from './user-profile-bg.jpg';
import Button from '../../components/Button';
// import { BrowserRouter as Router, Route } from "react-router-dom"
// import Dashboard from "../Dashboard"
import SweetAlert from 'react-bootstrap-sweetalert';
import Footer from '../../components/Footer/Footer.js'
import "./UserProfile.css";

const gender = [
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value: 'Female',
        label: 'Female',
    },
    {
        value: 'Other',
        label: 'Other',
    }
];

class UserProfile extends Component {

    state = {
        isLoggedIn: false,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        alert: false,
        done: null

    }

    getAlert() {
        this.setState({
            alert: true
        });
    };

    hideAlert() {
        console.log('Hiding alert...');
        this.setState({
            alert: false
        });
    }


    componentDidMount() {
        API.getUser()
            .then(user => {
                console.log("62", user)

                this.setState({
                    isLoggedIn: user.data.loggedIn,
                    firstName: user.data.firstName,
                    lastName: user.data.lastName,
                    email: user.data.email,
                    gender: user.data.gender
                });

                console.log("72", this.state);

                if (this.state.isLoggedIn === false) {

                    window.location.href = "/";

                }
            })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    handleFormSubmit = event => {
        var errorElement = document.getElementsByClassName("alert-danger")[0];
        errorElement.id="error-msg";
        event.preventDefault();
        console.log(this.state);
        if (this.state.email && this.state.firstName && this.state.lastName && this.state.gender) {
        

            if(this.state.password) {
                
                var updateData = {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    gender: this.state.gender,
                    email: this.state.email,
                    password: this.state.password
                }

            } else {

                var updateData = {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    gender: this.state.gender
                }
            }

            API.updateUser(updateData)
                .then(res => {

                    console.log("success", res);
                    
                    window.location.href = "/dashboard";

                })

                .catch(err => console.log(err));
                
        }
        else {

            document.getElementById("error-msg").removeAttribute("id");
            console.log("errro");
        }


    }

    renderModal() {
        if (this.state.alert) {
            return (
                <SweetAlert danger title="Error!" onConfirm={this.hideAlert.bind(this)}>
                    All fields are required!
      </SweetAlert>
            )
        } else {
            return (
                <div className="d-flex justify-content-center w3-animate-top signup-box">
                    <div className="form-signup">
                    <div className="alert alert-danger text-center" id="error-msg">
                        <span>There are some missing fields!</span>
                    </div>
                        <Typography variant="headline" component="h3">
                            Welcome to your profile
                        </Typography>
                        <Typography component="p">
                            If you don't want to change your password, leave it blank.
            </Typography>
                        <br />
                        <TextField
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            required
                        />
                        <br />
                        <TextField
                            fullWidth
                            required
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                        <br />
                        <TextField
                            fullWidth
                            required
                            disabled
                            id="email"
                            label="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <br />
                        <TextField
                            fullWidth
                            required
                            id="gender"
                            name="gender"
                            select
                            label="Gender"
                            value={this.state.gender}
                            margin="normal"
                            onChange={this.handleChange}
                        >
                            {gender.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <br />
                        <TextField
                            fullWidth
                            required
                            id="password-input"
                            name="password"
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                        />
                        <br />
                        <br />
                        {/* onclick of this button will create a new users account */}
                        <Button onClick={this.handleFormSubmit} children='Save' />
                    </div>
                    <Footer />
                </div>

            )
        }
    }

    render() {
        // const { classes } = this.props;
        document.body.style.backgroundImage = `url(${Background})`
        return (
            <div className="signup-page">
                <Navbar />
                {this.renderModal()}
            </div>
        );
    }
}


export default UserProfile;


