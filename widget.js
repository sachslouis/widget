
var pictureArray = ["img/banana.jpeg", "img/walrus.jpeg", "img/moustache.jpg", "img/belly.jpeg", "img/trash.jpeg", "img/cat.jpeg"];
var clickbaitArray = ["Click here to find out how you are going to die", "Do you know what Beatles songs REALLY mean?", "What animal do you look like?", "10 of the hottest summer fashion trends you never saw coming", "This deadly mold is growing in your garbage can right now!", "Friend or enemy. Take this quiz to see if you can spot the difference"]
var brandingArray = ["Brought to you by the letter E", "BuzzDrugs", "WhoRU | Sponsored Links", "ClickBatesMotel", "MindHatch", "Kinks College"]
var linkArray = ["https://www.gotoquiz.com/how_am_i_going_to_die", "https://allthatsinteresting.com/beatles-songs", "https://www.quizony.com/what-animal-do-i-look-like/1.html", "https://www.thetrendspotter.net/fashion-trends-spring-summer-2019/", "https://gleampressurewashing.com/5-worst-things-growing-trash-can/", "https://www.proprofs.com/quiz-school/story.php?title=frends-enemies"];
var widget = document.createElement("div");
widget.id = "widget";
var header = document.createElement("header");
header.id = "header";
var alsoLike = document.createElement("span");
alsoLike.id = "alsoLike";
var disclosure = document.createElement("span");
disclosure.id = "disclosure";
var taboolaIcon = document.createElement("img");
taboolaIcon.setAttribute("src", "img/taboola.png");
taboolaIcon.setAttribute("height", "12");

alsoLike.innerHTML = "You may also like:";
disclosure.innerHTML = "Sponsored Links by Taboola";

document.body.appendChild(widget);
widget.appendChild(header);
header.appendChild(alsoLike);
header.appendChild(disclosure);
disclosure.appendChild(taboolaIcon)

for (i = 0; i < pictureArray.length; i++) {
    var widgetItem = document.createElement("a");
    widgetItem.className = "widgetItem";
    widgetItem.setAttribute("href", linkArray[i]);

    var thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", pictureArray[i]);
    thumbnail.className = "thumbnail";

    var itemTitle = document.createElement("div");
    itemTitle.className = "itemTitle";
    itemTitle.innerHTML = clickbaitArray[i];
    itemTitle.setAttribute("href", linkArray[i]);

    var branding = document.createElement("div");
    branding.className = "branding";
    branding.innerHTML = brandingArray[i];

    widgetItem.appendChild(thumbnail);
    widgetItem.appendChild(itemTitle);
    widgetItem.appendChild(branding);

    document.getElementById("widget").appendChild(widgetItem);
}

