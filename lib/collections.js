Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function(userId, doc) {
    return !! userId;
  }
});

Posts.attachSchema(new SimpleSchema({

  title: {
    type: String,
    max: 30,
    label: 'Title (maximum of 30 characters)'
  },

  content: {
    type: String,
    max: 300,
    label: "Message (maximum of 300 characters)",
    autoform: {
      afFieldInput: {
        type: 'textarea'
      }
    }
  },

  createdAt: {
    type: Date,
    autoform: {
      type: 'hidden'
    },
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },

  createdBy: {
    type: String,
    label: 'Posted by',
    autoform: {
      type: 'hidden'
    },
    autoValue: function() {
      if (this.isInsert) {
        return Meteor.userId();
      }
    }
  }

}))
