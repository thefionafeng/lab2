$(document).ready(function() {
    initializePage();
});

function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#7fff00");
}

function initializePage() {
	$("a.thumbnail").click(projectClick);
    $('#testjs').click(function(e) {
            $('.jumbotron h1').text("Javascript is connected");
            });
}
