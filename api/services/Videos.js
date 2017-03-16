var schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: Object,
        required: true,
    },
    thumbImage: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    isUpcoming: {
        type: Boolean,
        required: true,
    },
    isReleased: {
        type: Boolean,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    urlSlug: {
        type: String,
        required: true,
    },
    movieHashtag: {
        type: String,
        required: true,
    },
    castBlock1: {
        type: String,
        required: true,
    },
    castBlock2: {
        type: String,
        required: true,
    },
    castBlock3: {
        type: String,
        required: true,
    },
    castBlock4: {
        type: String,
        required: true,
    },
    movieGallery: [{
            image: String,
            caption: String
    }],
    movieBehindTheScene:[ {
        
            image: String,
            caption: String
        }]
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Videos', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);