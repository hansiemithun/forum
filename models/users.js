function make(Schema, mongoose) {
    // Define Users model
    UserSchema = new Schema({
      userName  : String,
      firstName : String,
      lastName  : String,
      dob		    :  Date,
      email 	  : {type: String, index: {unique: true, dropDups: true}},
      password  : String
    });

    return mongoose.model('User', UserSchema);
}

module.exports.make = make;