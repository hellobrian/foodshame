Template.photosList.helpers({
  // photos: photosData
  photos: function () {
    return Photos.find();
  }
});