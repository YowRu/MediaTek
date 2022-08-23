
  let w = $('#main img.top').width();
  let h = $('#main img.top').height();
  if(w>0){
    $('#main p').width(w);
    $('#main .border').outerWidth(w);
    $('iframe').width(w);
  }
  if(h>0){
    $('iframe').height(h);
  }
 
//resize
  $(window).resize(function(){
    let w = $('#main img.top').width();
    let h = $('#main img.top').height();
    $('iframe').height(h);
    if(w>0){
      $('#main p').width(w);
      $('#main .border').outerWidth(w);
      $('iframe').width(w);
    }
  });