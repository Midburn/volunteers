const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentFormSchema = new Schema({
    departmentId: String,
    eventId: String,
    form: [{
        question : {
            en:String,
            he:String
        },
        questionType : String,
        options: [{
            en:String,
            he: String
        }],
        optional: Boolean
    }]
}, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

const DepartmentForm = mongoose.model('department-form', DepartmentFormSchema);

module.exports = DepartmentForm;
