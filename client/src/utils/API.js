import axios from "axios";

export default {
    //user related functions
    //login
    getUser: function(){
        return axios.get("/auth/user");
    },
    //update email and password for a user
    updateUser: function (id) {
        return axios.put("/api/user/" + id);
    },
    // Saves a new user to the database- Sign up
    logout: function () {
        return axios("api/auth/logout")
    },

    //occasion related functions
    //create new occasion
    createOccasion: function (occasionData) {
        return axios.post("/api/occasion/newoccasion", occasionData);
    },
    getOccasions: function (email) {
        return axios.get("/api/user/occasions/" + email);
    },
    //get occasion by id
    getOccasion: function (id) {
        return axios.get("/api/occasion/" + id);
    },
    // update occasion - edit the occasion listed
    updateOccasion: function (id) {
        return axios.put("/api/occasion/" + id);
    },
    // Deletes the book with the given id
    deleteOccasion: function (id) {
        return axios.delete("/api/occasion/" + id);
    },
    // Makes Ajax call to ASOS.com API and gets results for a searched item
    getSuggestions: function(data){
        console.log(data)
        return axios.get("/api/occasion/" + data);
    }
};
