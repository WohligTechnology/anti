var schema = new Schema({
    email: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: "true"
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Subscriptions', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    //Function to store article in database
    createSubscription: function (reqBody, callback) {

        var subscribe = this(reqBody);

        //To create a subscription and store in database
        subscribe.save(function (error, record) {
            if (error) {
                callback(error, null);
            } else if (record) {
                callback(null, record);
            } else {
                callback({
                    message: "Unable to create subscription"
                }, null);
            }
        }); //End of save method

    }, //End of createSubscription function

    getSubscriptionList: function (reqBody, callback) {
        Subscriptions.find({
            status: true
        }).exec(function (error, record) {
            if (error) {
                callback(error, null);
            } else if (!_.isEmpty(record)) {
                callback(null, record);
            } else {
                callback(null, {
                    message: "Unable to get video!"
                });
            }
        });
    }
};
module.exports = _.assign(module.exports, exports, model);