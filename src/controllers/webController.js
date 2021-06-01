const path = require('path');

const cssindex = ['footer', 'header', 'index'];
const webController = {
    index: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/index.ejs'), {styles: cssindex});
    },
    menu: function (req, res){
        return res.render (path.resolve(__dirname, '../views/menuResto/menuResto.ejs'));
    }
}

module.exports = webController;