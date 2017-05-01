var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    commentAuthor: {
        type: String,
        required: true
    },
    commentContent: {
        type: String,
        required: true
    },
    //needs to be autogen, for now wil have String as placeholder
    commentTimeStamp: String,
});

mongoose.model('Comment', commentSchema);