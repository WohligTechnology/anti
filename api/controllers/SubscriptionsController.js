module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {

    createSubscription: function (req, res) {
        if (req.body) {
            Subscriptions.createSubscription(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getSubscriptionList: function (req, res) {
        if (req.body) {
            Subscriptions.getSubscriptionList(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    }


};
module.exports = _.assign(module.exports, controller);