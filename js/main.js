function changeImage(){
    // figure out how to not repeat profile images that are currently being displayed
    var rand = Math.floor(Math.random() * 3) + 1;
    var newSrc = "images/profile/profile"+rand+".png";
    $('#myImg').attr('src', newSrc);
}

function toggleExperience(num){
    if ($('.experience'+num).css('display') == 'none'){
        $('.experience'+num).show();
        $('.summary'+num).hide();
        $('.btnE'+num).text('Summarize');
    } else {
        $('.experience'+num).hide();
        $('.summary'+num).show();
        $('.btnE'+num).text('Show Tasks');
    }
}
