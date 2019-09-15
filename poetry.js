// set the bg and text color from a JSON array

var data = [{"bg": "#119ba2", "text": "#890014"}, {"bg": "#27dca7", "text": "#d01752"}, {"bg": "#c91090", "text": "#30eb6c"}, {"bg": "#b07a8d", "text": "#0f4838"}, {"bg": "#dbad2a", "text": "#0f4838"}, {"bg": "#ea4040", "text": "#003e41"}, {"bg": "#2a088c", "text": "#d2f470"}, {"bg": "#613b20", "text": "#9bc1dc"}, {"bg": "#300d0f", "text": "#ccefed"}, {"bg": "#633fa1", "text": "#99bd5b"}];

var min = 0;
var max = data.length;
var random = Math.floor(Math.random() * (max - min)) + min;

var bg = data[random].bg;
var text = data[random].text;

$('.newTab').css("background-color", bg);
$('.newTab').css("color", text);


// choose a random poem

var poems = '[{"poem": "Babel d\'escaliers et d\'arcades,<br>C\'&eacute;tait un palais infini,<br>Plein de bassins et de cascades<br>Tombant dans l\'or mat ou bruni ;", "author": "Charles Baudelaire", "title": "R&ecirc;ve Parisien", "recueil": "Les Fleurs du Mal"}, {"poem": "Die Augen schlie&szlig;\' ich wieder,<br>Noch schl&auml;gt das herz so warm.<br>Wann gr&uuml;nt ihr Bl&auml;tter am Fenster ?<br>Wann halt\' ich mein Liebchen im Arm ?", "author": "Whilhelm M&uuml;ller", "title": "Fr&uuml;hlingstraum", "recueil": "Voyage d\'hiver"}, {"poem": "I bequeath myself to the dirt to grow from the grass I love,<br>If you want me again look for me under your bootsoles.<br>You will hardly know who I am or what I mean<br>But I shall be good health to you nevertheless,<br>And filter and fibre your blood.", "author": "Walt Whitman", "title": "Song of Myself", "recueil": "Leaves of Grass"}, {"poem": "Le vent se l&egrave;ve !... Il faut tenter de vivre !<br>L\'air immense ouvre et referme mon livre,<br>La vague en poudre ose jaillir des rocs !<br>Envolez-vous, pages tout &eacute;blouies !<br>Rompez, vagues ! Rompez d\'eaux r&eacute;jouies<br>Ce toit tranquille o&ugrave; picoraient des focs !", "author": "Paul Val&eacute;ry", "title": "Le Cimeti&egrave;re marin", "recueil": "Oeuvres"}]';

poems = JSON.parse(poems);

var min = 0;
var max = poems.length;
var randomPoem = Math.floor(Math.random() * (max - min)) + min;

// display random poem + details

$("#text").append('&laquo; ' + poems[randomPoem].poem + ' &raquo;');
$("#author").append(poems[randomPoem].author);
$("#title").append('&laquo; ' + poems[randomPoem].title + ' &raquo;');
$("#recueil").append(poems[randomPoem].recueil);

// set font size to fit box

$('#textContainer').textfill({
        widthOnly: true,
        maxFontPixels: 60
});

// set the favorite sites

function siteList(data) {
  var listContents = document.getElementById('mostVisited');

  for (var i = 0; i < 6; i++) {
    var div = listContents.appendChild(document.createElement('div'));
    div.className = 'linkContainer';
    var a = div.appendChild(document.createElement('a'));
    a.href = data[i].url;
    a.appendChild(document.createTextNode(data[i].title));

    $(".linkContainer").hover(function(){
      $(this).css("background-color", text);
      $(this).css("color", bg);
    }, function(){
      $(this).css("background-color", bg);
      $(this).css("color", text);
    });
  }

  $('.linkContainer').prepend("<span>&#10084;&nbsp;</span>");

}

chrome.topSites.get(siteList);
