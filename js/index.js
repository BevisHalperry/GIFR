//external js: masonry.pkgd.js, imagesloaded.pkgd.js

function Resize(imgId)
{
 	var img = document.getElementById(imgID);
	    var w = img.width, h = img.height;
	     // w /= parseInt(imgID);
	      h /= parseInt(imgID);
	        img.width = w;
	       //	img.height = h;
}



$(document).ready( function() {
  // init Masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  

});


