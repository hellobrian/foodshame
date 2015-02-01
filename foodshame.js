if (Meteor.isClient) {
  Template.takePhoto.events({
    'click .capture': function () {
      console.log("button clicked.");
      // navigator.geolocation.getCurrentPosition(function(position) {
      //   Session.set('position', position);
      //   console.log(position);
      // });
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
    }, 

    'location': function() {
      return Session.get('location');
    }
  });
}