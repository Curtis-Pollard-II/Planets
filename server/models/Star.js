import mongoose from "mongoose";
const Schema = mongoose.Schema
    export const StarSchema = new Schema({
        name: {type: String, required: true},
        img: {type: String, default:'https://images.unsplash.com/photo-1542665174-31db64d7e0e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhciUyMHNoYXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'}
    })