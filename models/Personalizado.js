const { Schema, model} = require('mongoose');
const shortid = require('shortid');

const linkSchema = new Schema({
    linkoriginal: { type: String },
    urlcortada: { type: String, default: () => shortid.generate().substring(0, 4) }
});

module.exports = model('Links', linkSchema);