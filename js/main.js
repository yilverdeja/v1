$(document).ready(setupTooltips);

function setupTooltips(){
    $('abbr').attr("data-toggle", "tooltip");
    $('abbr').attr("data-placement", "bottom");
    $('dfn').attr("data-toggle", "tooltip");
    $('dfn').attr("data-placement", "bottom");
    $('[data-toggle="tooltip"]').tooltip();
}

function toggleExperience(num){
    if ($('.experience'+num).css('display') == 'none'){
        $('.experience'+num).show();
        $('.summary'+num).hide();
        $('.btnE'+num).text('Summarize');
    } else {
        $('.experience'+num).hide();
        $('.summary'+num).show();
        $('.btnE'+num).text('See Details');
    }
}
