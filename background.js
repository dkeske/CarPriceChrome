var url = window.location.pathname;
var model = $(".basic-info ul li:nth-child(3)").text();
if(model === "Megane"){
    $.post("https://price-prediction-dkeske.c9users.io/chrome", {'url': url}, function (data) {
        $(".title").children("h1").append(data);
    });
} else {
    $(".title").children("h1").append("<span style='color: #EC9C1E'>(Not Megane)</span>");
}
