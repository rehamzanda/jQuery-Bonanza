$("#f-in-btn").click(function() {
    $( "#img-bee" ).fadeIn("slow");
  } );

  $( "#f-out-btn" ).on( "click", function() {
    $( "#img-fish" ).fadeOut( 1000, function() {
        $( "#fade-note" ).text( "fish-img has faded!, click show to see it" );
      }) })

  $( "#btn-show" ).on( "click", function() {
    $( "#img-fish" ).show(); 
    $( "#fade-note" ).remove();
})

$('#append-btn').click(function(){
    $('#append-text').append( document.createTextNode( "if you want another text, press append button again , " ))
})

$('append-p').removeClass('text-decoration');

$('#add-class').click(function(){
    $('.btn').addClass('bg-black, text-bg-primary');
    $('#append-p').addClass('text-size');
})

$('#change-color-btn').click(function(){
    $('#color-p').css( {background:'red', color:'pink'})
})

$( "#animate-btn1" ).on( "click", function() {
    $( "#animate-p1" ).animate({
      width: "70%",
      opacity: 0.4,
      marginLeft: "0.6in",
      fontSize: "3em",
      borderWidth: "10px"
    }, 1500 );
  });

  $( "#animate-btn2" ).on( "click", function() {
    $( "#animate-p2" )
      .animate({ width: "90%" }, 1000 )
      .animate({ fontSize: "24px" }, 1000 )
      .animate({ borderLeftWidth: "15px" }, 1000 )
  });

$( "#slide-up" ).click(function() {
$('#slide-area').slideUp(3000)
})

$( "#slide-down" ).click(function() {
    $('#slide-area').slideDown(3000,function(){
        $('#slide-area').html( "<p>A hidden paragraph</p>" )
    })
    })
  
$( "li.odd" ).hover(function() {
$( this ).hide( 500 );});

$( "li" ).even().hover(function() {
$( this ).toggleClass( "active" )})



$( "input" ).keyup(function(e) {
    let code= e.which;
    if(code ==13){
$("#footer-p").append("<li>" + e.target.value + "</li>")
  }  })
  
  $( "#hide" ).click(function() {
    $("#footer-p").fadeOut(100)
    $("#footer-p").fadeIn(200);
 })

 $( "#hide" ).on( "click", function() {
    var text = $( this ).text();
    $( "input" ).val( text );
  });