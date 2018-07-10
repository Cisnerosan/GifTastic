// when all html loads fire the Javascript****

$("document").ready(function(){
// console.log('hello');

// http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5 

var topicsDiv= $("#topics");
var topics= ["dogs", "cats", "birds","snakes","cars","cartoons","superheroes"];

for (var i=0; i< topics.length; i++){
    // console.log(topics[i]);
    var button=$("<button class='m-2'>"+topics[i]+"</button>");
    console.log(button);
    topicsDiv.append(button);

}


$.ajax({
    'type':"get",
    url: "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Fopyb8dYAz1FBAzfVqWQay25w8Jh1Bfj&limit=5"
})

// callback function//console logging result///
.done(function(result) {
    console.log(result);
    result.data
  })
})