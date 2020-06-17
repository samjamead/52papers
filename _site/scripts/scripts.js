jQuery(document).ready(function($){

  // Dynamically set bottom margin of body for sticky footer
  stickyFooter();

  // Set height of YouTube iframes
  keepRatio();

  // Add target="_blank" to all external links
  $("a[href^='http://']").attr("target","_blank");
  $("a[href^='https://']").attr("target","_blank");

  // Unless it's because of Github pages
  $("a[href^='http://fluxphysics.github.io/']").attr("target","_self");
  $("a[href^='https://fluxphysics.github.io/']").attr("target","_self");

  // Open the menu
  var $hamburger = $('.hamburger');
  $hamburger.on("click", function(){
    $hamburger.toggleClass("is-active");
    $('.navbar').toggleClass("menu-open");
  });

  // Dynamically number footnotes
  $(".footnote-ref").each(function(i){
    // var $footnotelink = $(this).attr("data-footnote-link");
    // var $footnotetitle = $(this).attr("data-footnote-title");
    var $footnotecontent = $(this).attr("data-footnote-content");
    var $footnoteref = i+1;
    $(this).html("[" + $footnoteref + "]" );
    // Create list of footnotes
    // $("#footnote-list").append(
    //   '<li>'+ $footnotetitle +': <a target="_blank" href="'+ $footnotelink +'">'+ $footnotecontent +'</a></li>'
    // );
    $("#footnote-list").append(
      '<li>'+ $footnotecontent +'</li>'
    );
  });

  // Number your figures
  $(".figure-number").each(function(i){
    var $fignum = i+1;
    $(this).html($fignum);
  });

});

// Trigger sizing functions on window resize
$( window ).resize(function() {
  stickyFooter();
  keepRatio();
});

// Dynamically set bottom margin of body for sticky footer
function stickyFooter() {
  var bodyBottomMargin = $("footer").outerHeight();
  $("body").css("margin-bottom", bodyBottomMargin);
}

// Get absolute width of iFrame and set height using known ratio (for Youtube it's 0.5625)
function keepRatio() {
  $(".youtube").each(function(){
    var iframeWidth = $(this).width();
    $(this).height(iframeWidth * 0.5625);
  });
}
