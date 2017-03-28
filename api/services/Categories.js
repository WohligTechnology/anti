var schema = new Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,

    },
    order: {
        type: Number,
    },
    homeImage: {
        type: String,
    },
    background: {
        type: String,
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Categories', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);