const { SAMPLE_JSON } = require("../../config/constants");
const rule = require("../validators/grill-data");
let Validator = require('validatorjs');
const {calculate} = require("../services/calculate");

const sample_data = JSON.stringify(SAMPLE_JSON , null , 4).trim();

module.exports = {

    show : (request , response) => {
        let textarea_data = sample_data;
        response.render('main' , {layout : 'index' , textarea_data});
    },

    handle : (req , res) => {

        let data = req.body;

        if(!data.data) {
            req.flash('danger' , 'Grill data is required')
            res.redirect('/');
        }

        try {

            let textarea_data = data.data;

            data = JSON.parse(data.data);
        
            let validation = new Validator(data, rule);
    
            if(validation.fails()) {
                let errors = validation.errors.errors;
                req.flash('danger' , validation.errors.first(Object.keys(errors)[0]))
                console.log(errors);
                res.redirect('/');
            }

            data = data.grill;

            let calculated_result = calculate(data.width , data.height , data.grillItems);
            
            res.render('main' , {layout : 'index' , textarea_data , calculated_result});
       
        } catch(e) {
            console.log('e' , e);
            req.flash('danger' , 'Grill data should be an object')
            res.redirect('/');
        } 
    }

};