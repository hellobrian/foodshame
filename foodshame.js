if (Meteor.isClient) {
  Template.takePhoto.events({
    'click .capture': function () {
      console.log("button clicked.");
    }
  });
}