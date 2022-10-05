const {model, Schema} = require('mongoose');

const ModelUser = new Schema({
    username:{
        type: String,
        min:8
    },
    password:{
        type:String,
        min:8,
        require:true
    },
    email:{
        type:String,
        min:8,
        require:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
},
    {
        timestamps:true,
        versionKey:false
    }
)

module.exports = model('Users',ModelUser);