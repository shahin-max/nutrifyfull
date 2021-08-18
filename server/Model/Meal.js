const mongooose = require('mongoose');


const mealSchema = new mongooose.Schema({
    user_Id: {
        type: String,
      },

    mealname: {
        type: String,
        required:true
    },

    mealtype: {
         type: String,
        required:true
    },
    calorie: {
        type: Number,

    },
    Date:{
        type:Date,
        default:Date.now()

    }

})


const Meal = mongooose.model('meal', mealSchema);

module.exports = Meal;




