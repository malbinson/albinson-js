$(document).ready(function() {

    $("#processCell").append(
        '<button class="btn_go" id="btn_go">Go!</button><br>' +
        '<textarea id="text_area"></textarea><br>' +
        '<div id="debug"></div>');

    for(var d=0;d<names.length;d++) {
        $("#problems").append($("<option>").attr('value', d+1).text(names[d]));
    }

    $(".btn_go").click(function() {
        $("#debug,#countDiv,#outputCell").empty();
        processFunction($('#problems'));
    });

});

function processFunction(select) {
    $("#outputCell").append('<div class="outputHead"><span class="output1"><h2>Expected</h2></span><span style="width:30%" class="output2"><h2>Run</h2></span></div>');
    var item = select.val();

    var s = $("#text_area").val();
    if(s[0]=='"' && s[s.length-1]=='"') {
        s = stripQuotes($("#text_area").val());
    }

    try {
        eval(s);
    } catch(err) {
        $("#debug").html(err);
    }

    var count = 0;
    for (var x = 0; x < eval("test_"+item+".length"); x++) {
        try {
        var e = eval(eval("test_" + item + "[x]"));
        } catch(err) {
            $("#debug").html(err);
        }

        $("#outputCell").append(
            "<div class='output'>" +
                "<span class='output1'>" + eval("test_" + item + "[x]") + " → " + eval("answer_"+item+"[x]") + "</span>" +
                "<span class='output2' id='output_" + x + "'>" + e + "</span>" +
                "<span class='output3'  id='outputImg_" + x + "'></span>" +
            "</div>"
        );

        if (e == eval("answer_"+item+"[x]")) {
            $("#output_" + x).css("background", "forestgreen");
            $("#outputImg_" + x).html("<img src='check.png' width='20'/>");
            count++;

        } else {
            $("#output_" + x).css("background", "red");
            $("#outputImg_" + x).html("<img src='x.png' width='20'/>");
        }
    }

    $("#outputCell").append("<div id='countDiv'>" + count + " out of " + x + " correct.</div>");
}

function stripQuotes(str) {
    //console.log("stripping");
    str = str.substring(1,str.length-1);
    str = str.replace(/""/g,'"')
    return str;
}

