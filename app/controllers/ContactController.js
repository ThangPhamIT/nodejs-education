var contactController = {
    index: function (req, res) {
        res.render('contact/contact', {
            message: ''
        });
    },

    sendEmailToEducation: function(req, res) {
        var full_name = req.body.full_name;
        var message = "";
        if(isEmpty(full_name)){
            message = "Bạn chưa điền thông tin!"
        } else {
            message: "ok!"
        }
        res.render('contact/contact', {
            detailMessage: message
        })
    }
}

var isEmpty = function(param){
    return "";
}

module.exports = contactController;