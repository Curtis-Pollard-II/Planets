import mongoose from "mongoose";
const Schema = mongoose.Schema
    export const GalaxySchema = new Schema({
        name: {type: String, required: true},
        img: {type: String, default:'https://images.newscientist.com/wp-content/uploads/2020/05/22112120/sagdig_opo0431b_web.jpg'}
    })