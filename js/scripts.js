var names = [
  "Name1",
  "Name2",
  "Name3",
  "Name4",
  "Name5",
  "Name6",
  "Name7",
];

var emails = [
  "Name1@gmail.com",
  "Name2@gmail.com",
  "Name3@gmail.com",
  "Name4@gmail.com",
  "Name5@gmail.com",
  "Name6@gmail.com",
  "Name7@gmail.com",
];
for (var i = 0; i < names.length; i++){
  var html =  "<div class=\"contact\">"+
                  "<p>Name: " + names[i] + "</p>"+
                  "<p>" + emails[i] + "</p>"+
                  "</div>";
  var htmlEmail = "<p>Email " + emails[i] + "</p></div>";

  document.getElementById("text").insertAdjacentHTML('beforeend',html);

}
