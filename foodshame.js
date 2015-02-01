if (Meteor.isClient) {
  Template.takePhoto.events({
    'click .capture': function () {
      console.log("button clicked.");
      MeteorCamera.getPicture({}, function (error, data) {
        if (error) {
          console.log("error: ", error);
        }

        Session.set('photo', data);
        // console.log("data: ", data);
      });
    }
  });

  Template.takePhoto.helpers({
    'photo': function() {
      return Session.get('photo');
    }
  })
}