var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories',
        index: true
    },
    thumbImage: {
        type: String,
    },
    title: {
        type: String,

    },
    author: {
        type: String,

    },
    tagline: {
        type: String,

    },
    video: {
        type: String,
    },
    isUpcoming: {
        type: String,
        default: "true",
        enum: ["true", "false"],
        required: true

    },
    isReleased: {
        type: String,
        default: "false",
        enum: ["true", "false"],
        required: true

    },
    description: {
        type: String,

    },
    urlSlug: {
        type: String,

    },
    movieHashtag: {
        type: String,

    },
    castBlock1: {
        type: String,

    },
    castBlock2: {
        type: String,

    },
    castBlock3: {
        type: String,

    },
    castBlock4: {
        type: String,

    },
    videoGallery: [{
        image: String,
        caption: String
    }],
    videoBehindTheScene: [{
        image: String,
        caption: String
    }]
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Videos', schema);
var ObjectId = mongoose.Schema.Types.ObjectId;

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    saveGallery: function (data, callback) {

        console.log(data);
        Videos.findOneAndUpdate({
            _id: data._id,
        }, {
            $push: {
                videoGallery: {
                    $each: data.videoGallery
                }
            }
        }).exec(function (err, found) {

            if (err) {
                // console.log(err);
                callback(err, null);
            } else {

                if (found) {

                    callback(null, found);
                } else {
                    callback(null, {
                        message: "No Data Found"
                    });
                }
            }

        })
    },


    editGalleryPhotos: function (data, callback) {

        console.log(data);
        Videos.update({
            '_id': data._id,
            'videoGallery._id': data.id
        }, {
            '$set': {
                'videoGallery.$.image': data.image,
                'videoGallery.$.caption': data.caption
            }
        }, function (err, found) {

            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                if (_.isEmpty(found)) {
                    console.log("inside is empty");
                    callback(null, "No Data Found");
                } else {
                    console.log("success", found);
                    callback(null, found);
                }
            }

        })
    },

    removeGalleryPhotos: function (data, callback) {

        console.log("DATA", data);
        Videos.update({
            '_id': data._id,
            'videoGallery._id': data.id
        }, {
            '$pull': {
                videoGallery: {
                    _id: data.id
                }
            }
        }, function (err, found) {
            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                if (_.isEmpty(found)) {
                    console.log("inside is empty");
                    callback(null, "No Data Found");
                } else {
                    console.log("success", found);
                    callback(null, found);
                }
            }

        })
    },


    findOneVideo: function (data, callback) {
        Videos.findOne({
            _id: data._id
        }).deepPopulate("videoGallery").exec(function (err, found) {

            if (err) {

                callback(err, null);
            } else {

                if (found) {
                    console.log("Found", found);
                    callback(null, found);
                } else {
                    callback(null, {
                        message: "No Data Found"
                    });
                }
            }
        })
    },

    //BehindTheScene-----


    saveBehind: function (data, callback) {

        console.log(data);
        Videos.findOneAndUpdate({
            _id: data._id,
        }, {
            $push: {
                videoBehindTheScene: {
                    $each: data.videoBehindTheScene
                }
            }
        }).exec(function (err, found) {

            if (err) {
                // console.log(err);
                callback(err, null);
            } else {

                if (found) {

                    callback(null, found);
                } else {
                    callback(null, {
                        message: "No Data Found"
                    });
                }
            }

        })
    },

    editBehindTheScene: function (data, callback) {

        console.log(data);
        Videos.update({
            '_id': data._id,
            'videoBehindTheScene._id': data.id
        }, {
            '$set': {
                'videoBehindTheScene.$.image': data.image,
                'videoBehindTheScene.$.caption': data.caption
            }
        }, function (err, found) {
            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                if (_.isEmpty(found)) {
                    console.log("inside is empty");
                    callback(null, "No Data Found");
                } else {
                    console.log("success", found);
                    callback(null, found);
                }
            }

        })
    },

    removeBehindTheScene: function (data, callback) {

        console.log("DATA", data);
        Videos.update({
            '_id': data._id,
            'videoBehindTheScene._id': data.id
        }, {
            '$pull': {
                videoBehindTheScene: {
                    _id: data.id
                }
            }
        }, function (err, found) {
            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                if (_.isEmpty(found)) {
                    console.log("inside is empty");
                    callback(null, "No Data Found");
                } else {
                    console.log("success", found);
                    callback(null, found);
                }
            }

        })
    },

    //pipeLine
    getAggregatePipeLine: function (data) {

        var pipeline = [ // Stage 1
            {
                $lookup: {
                    "from": "categories",
                    "localField": "category",
                    "foreignField": "_id",
                    "as": "categories_data"
                }
            },

            // Stage 2
            {
                $unwind: {
                    path: "$categories_data",

                }
            },

        ];

        return pipeline;
    },

    //Released Video api for fiction 

    getFictionVideoRelease: function (data, callback) {
        var pipeLine = Videos.getAggregatePipeLine(data);
        console.log(pipeLine);

        var newPipeLine = _.cloneDeep(pipeLine);

        newPipeLine.push({
            $match: {
                "categories_data.name": "Fiction",
                "isReleased": "true"
            }

        });

        Videos.aggregate(newPipeLine, function (err, fiction) {

            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                console.log(fiction);
                callback(null, fiction);
            }
        });
    },

    //Upcoming Video api for fiction

    getFictionVideoUpcoming: function (data, callback) {
        console.log("data", data);
        var pipeLine = Videos.getAggregatePipeLine(data);
        console.log(pipeLine);
        var newPipeLine = _.cloneDeep(pipeLine);

        newPipeLine.push({
            $match: {
                "categories_data.name": "Fiction",
                "isUpcoming": "true"
            }
        });

        Videos.aggregate(newPipeLine, function (err, fiction) {
            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                console.log(fiction);
                callback(null, fiction);
            }
        });
    },
    //Released Video api for Inspire 

    getInspireVideoRelease: function (data, callback) {
        var pipeLine = Videos.getAggregatePipeLine(data);
        console.log(pipeLine);

        var newPipeLine = _.cloneDeep(pipeLine);

        newPipeLine.push({
            $match: {
                "categories_data.name": "Inspire",
                "isReleased": "true"
            }

        });

        Videos.aggregate(newPipeLine, function (err, fiction) {

            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                console.log(fiction);
                callback(null, fiction);
            }
        });
    },

    //Upcoming Video api for inspire

    getInspireVideoUpcoming: function (data, callback) {
        console.log("data", data);
        var pipeLine = Videos.getAggregatePipeLine(data);
        console.log(pipeLine);
        var newPipeLine = _.cloneDeep(pipeLine);

        newPipeLine.push({
            $match: {
                "categories_data.name": "Inspire",
                "isUpcoming": "true"
            }
        });

        Videos.aggregate(newPipeLine, function (err, fiction) {
            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                console.log(fiction);
                callback(null, fiction);
            }
        });
    },
    //  

    //One video on the basis of id

    getOneVideo: function (reqBody, callback) {
        Videos.findOne({
            _id: reqBody._id
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
    },

};
module.exports = _.assign(module.exports, exports, model);