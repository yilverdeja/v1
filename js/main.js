function changeImage(){
    // figure out how to not repeat profile images that are currently being displayed
    var rand = Math.floor(Math.random() * 3) + 1;
    var newSrc = "images/profile/profile"+rand+".png";
    $('#myImg').attr('src', newSrc);
}

function toggleExperienceDetail(){
    if ($('.experience-detail').css('display') == 'none'){
        $('.experience-detail').show();
        $('.detail-btn').text('Collapse');
    } else {
        $('.experience-detail').hide();
        $('.detail-btn').text('Expand');
    }
}
