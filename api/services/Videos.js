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
        type: Boolean,
        enum: ["True", "False"]

    },
    isReleased: {
        type: Boolean,
        enum: ["True", "False"]

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

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    saveGallery: function (data, callback) {

        console.log(data);
        Videos.findOneAndUpdate({
            _id: data._id,               
        }, {
            $push : {
               videoGallery: {
                   $each:  data.videoGallery                                
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
            'videoGallery._id':data.id                
        }, {
            '$set': {
                'videoGallery.$.image':data.image,
                'videoGallery.$.caption':data.caption
            }
        },function (err, found) {

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
            'videoGallery._id':data.id                
        }, {
            '$pull': {
                videoGallery: {
                    _id: data.id
                }
            }
        },function (err, found) {
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
            $push : {
               videoBehindTheScene: {
                   $each:  data.videoBehindTheScene                              
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
            'videoBehindTheScene._id':data.id                
        }, {
            '$set': {
                'videoBehindTheScene.$.image':data.image,
                'videoBehindTheScene.$.caption':data.caption
            }
        },function (err, found) {
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
            'videoBehindTheScene._id':data.id                
        }, {
            '$pull': {
                videoBehindTheScene: {
                    _id: data.id
                }
            }
        },function (err, found) {
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

    //pipeline
     getAggregatePipeLine: function (data) {

        var pipeline = [
            
        ];
        
        return pipeline;
    },

    getProjectReport: function (data, callback) {
        var pipeLine = Project.getAggregatePipeLine(data);
        console.log(pipeLine);
        async.parallel({
            complete: function (callback) {
                var newPipeLine = _.cloneDeep(pipeLine);
                //If we directly use pipeline instead of newPipeLine then $group will change the pipeline data & we will not able to use it for next $group. So, we have to make a copy of pipeline everytime for new $group operation
                newPipeLine.push({
                    
                });
                Project.aggregate(newPipeLine, callback);

            },
            state: function (callback) {
                var newPipeLine = _.cloneDeep(pipeLine);
                newPipeLine.push({
                    
                });
                Project.aggregate(newPipeLine, function (err, data) {
                    if (err) {
                        callback(err);
                    } else {
                        
                        };
                        
                        callback(err, obj);
                    })

            },
            totalComponents: function (callback) {
                var newPipeLine = _.cloneDeep(pipeLine);
                newPipeLine.push({
                    
                });
                Project.aggregate(newPipeLine, callback);

            },           
        }, callback);

    }
};
module.exports = _.assign(module.exports, exports, model);