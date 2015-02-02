if (Photos.find().count() === 0) {
  Photos.insert({
    photo: "http://placehold.it/500x500", 
    title: "This is some food.",
    date: new Date()
  }); 

  Photos.insert({
    photo: "http://placehold.it/500x500", 
    title: "This is some other food.",
    date: new Date()
  });

  Photos.insert({
    photo: "http://placehold.it/500x500", 
    title: "Hey! More food!",
    date: new Date()
  });
}