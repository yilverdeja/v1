$(document).ready(setupTooltips);

function setupTooltips(){
    $('abbr').attr("data-toggle", "tooltip");
    $('abbr').attr("data-placement", "bottom");
    $('dfn').attr("data-toggle", "tooltip");
    $('dfn').attr("data-placement", "bottom");
    $('[data-toggle="tooltip"]').tooltip();
}

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
