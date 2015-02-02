var photosData = [
  {
    photo: "http://placehold.it/500x500", 
    title: "This is some food.",
    date: new Date()
  },
  {
    photo: "http://placehold.it/500x500", 
    title: "This is some food.",
    date: new Date()
  },
  {
    photo: "http://placehold.it/500x500", 
    title: "This is some food.",
    date: new Date()
  }
];

Template.photosList.helpers({
  photos: photosData
});