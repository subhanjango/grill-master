const WEB_GRILL_CONTROLLER = require('../src/controllers/GrillController');

module.exports = function(app){

    app.get('/', WEB_GRILL_CONTROLLER.show);
    app.post('/handle' , WEB_GRILL_CONTROLLER.handle)
}