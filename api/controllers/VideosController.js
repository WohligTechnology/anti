module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {

    saveGallery: function (req, res) {
        if (req.body) {
            Videos.saveGallery(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    removeGalleryPhotos: function (req, res) {
        if (req.body) {
            Videos.removeGalleryPhotos(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    findOneVideo: function (req, res) {
        if (req.body) {
            Videos.findOneVideo(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    saveBehind: function (req, res) {
        if (req.body) {
            Videos.saveBehind(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    editBehindTheScene: function (req, res) {
        if (req.body) {
            Videos.editBehindTheScene(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    removeBehindTheScene: function (req, res) {
        if (req.body) {
            Videos.removeBehindTheScene(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getFictionVideoRelease: function (req, res) {
        if (req.body) {
            Videos.getFictionVideoRelease(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getFictionVideoUpcoming: function (req, res) {
        if (req.body) {
            Videos.getFictionVideoUpcoming(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getInspireVideoRelease: function (req, res) {
        if (req.body) {
            Videos.getInspireVideoRelease(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getInspireVideoUpcoming: function (req, res) {
        if (req.body) {
            Videos.getInspireVideoUpcoming(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getOneVideo: function (req, res) {
        if (req.body) {
            Videos.getOneVideo(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    editGalleryPhotos: function (req, res) {
        if (req.body) {
            Videos.editGalleryPhotos(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }

    },

};

module.exports = _.assign(module.exports, controller);