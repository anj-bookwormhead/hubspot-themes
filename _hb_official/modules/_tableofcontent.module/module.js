//Sticky Banner
const hisStickySidebar = (event) => {
  const scrollingMe = window.scrollY
  const pageWidth = window.innerWidth
  const tableofContent = document.querySelector ('#toc')
  console.log (scrollingMe);
   if (scrollingMe >= 600 && scrollingMe <= 900 ) {      
     //  tableofContent.classList.add ('fixedBanner')
       tableofContent.style.display = "block";
   } else if (scrollingMe <=600 ) {
      // tableofContent.classList.remove ('fixedBanner')
      tableofContent.removeAttribute ('style');
       
   } else if ( pageWidth <=1200) {
 //  remove when the resolution is less than 1271
   tableofContent.removeAttribute ('style');
    
   } else {
}
window.addEventListener('scroll', hisStickySidebar, false);
window.addEventListener('load', hisStickySidebar, false);
};
hisStickySidebar ();

// Make the Table Of Content 
var c = function() {
    return({
        log: function(msg) {
          consoleDiv = document.getElementById('console');
          para = document.createElement('p');
          text = document.createTextNode(msg);
          para.appendChild(text);
          consoleDiv.appendChild(para);
        }
    });
}();

window.onload = function () {
    var toc = "";
    var level = 0;
    var maxLevel = 3;

    document.getElementById("contents").innerHTML =
        document.getElementById("contents").innerHTML.replace(
            /<h([\d])>([^<]+)<\/h([\d])>/gi,
            function (str, openLevel, titleText, closeLevel) {
                if (openLevel != closeLevel) {
				 c.log(openLevel)
                    return str + ' - ' + openLevel;
                }

                if (openLevel > level) {
                    toc += (new Array(openLevel - level + 1)).join("<ol>");
                } else if (openLevel < level) {
                    toc += (new Array(level - openLevel + 1)).join("</ol>");
                }

                level = parseInt(openLevel);

                var anchor = titleText.replace(/ /g, "_");
                toc += "<li><a href=\"#" + anchor + "\">" + titleText
                    + "</a></li>";

                return "<h" + openLevel + "><a name=\"" + anchor + "\">"
                    + titleText + "</a></h" + closeLevel + ">";
            }
        );

    if (level) {
        toc += (new Array(level + 1)).join("</ol>");
    }

    document.getElementById("toc").innerHTML += toc;
};


//end of Table of Content 
