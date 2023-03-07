const mongoose = require('mongoose')
const {Schema} = mongoose

const SuggestionSchema = new Schema({
    email:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true
    },    
});

const Suggestion = mongoose.model('Suggestion',SuggestionSchema);

module.exports = Suggestion