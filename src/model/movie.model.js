const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    MovieName : {type:String},
    Rating : {type:Number},
    Cast : {type:Array},
    Genre : {type:String},
    ReleaseDate : {type:Date},
},{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("movie", movieSchema)