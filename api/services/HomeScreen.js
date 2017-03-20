var schema = new Schema({
    video: {
        type: String,
        required: true
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: "Categories",
        index: true
    }],
    status: {
        type: String,

    }
});

schema.plugin(deepPopulate, {
   populate: {
        Categories: {
            select: ""
        }}
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('HomeScreen', schema );

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "Categories", "Categories"));
var model = {

    //pipeLine
    getAggregatePipeLine: function (data) {

        var pipeline = [ // Stage 1
            // Stage 1
		{
			$lookup: {
			    "from" : "categories",
			    "localField" : "category",
			    "foreignField" : "_id",
			    "as" : "categories_data"
			}
		},

		// Stage 2
		{
			$unwind: {
			    path : "$categories_data"
			
			}
		}

        ];

        return pipeline;
    },

    //Released Video api for fiction 

    getHomeVideo: function (data, callback) {
        var pipeLine = HomeScreen.getAggregatePipeLine(data);
        console.log(pipeLine);

        var newPipeLine = _.cloneDeep(pipeLine);

        newPipeLine.push({
            $match: {
                "status": "true"
            }

        });

        HomeScreen.aggregate(newPipeLine, function (err, home) {

            if (err) {
                console.log(err);
                callback(err, null);
            } else {
                console.log(home);
                callback(null, home);
            }
        });
    },



};
module.exports = _.assign(module.exports, exports, model);