const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: {
            // Mongoose's ObjectId data type
            type: Schema.Types.ObjectId,
            // Default value is set to a new ObjectId
            default: () => new Types.ObjectId(),
        },

         reationBody: {
             type: String,
             required: true,
             maxlength: 280,
         },
         username: {
             type: String,
             required: true,
         },
         createdAt: {
             type: Date,
             // set the default value to the current timestamp
             default: Date.now,
             // use a getter method to format the timestamps on query
             get: (timestamp) => dateFormat(timestamp),
         },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type:String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type:Date,
            // this set the value to the current timestamp
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            required: true,
        },

        reactions:[ ReactionSchema ]

    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    },
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

