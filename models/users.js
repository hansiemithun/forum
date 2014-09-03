function make(Schema, mongoose) {
    // Define Car model
    UserSchema = new Schema({
      userName  : String,
      firstName : String,
      lastName  : String,
      dob		:  Date,
      email 	: String,
      password  : String
    });

    return mongoose.model('User', UserSchema);
}

module.exports.make = make;