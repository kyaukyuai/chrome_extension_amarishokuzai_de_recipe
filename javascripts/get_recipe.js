var vars = new Object, params;
var temp_params = window.location.search.substring(1).split('&');
for(var i=0; i<temp_params.length; i++) {
        params = temp_params[i].split('=');
        vars[params[0]] = params[1];
}
var url = "https://recipe4u.herokuapp.com/search.json?";
var url = url + "service=cookpad&keyword=" + vars["shokuzai"];
$(function() {
                $.ajax(url, {
                                crossDomain: true,
                                dataType: "jsonp",
                                success: function(json) {
                                        for( var i=0; i<2; i++) {
                                                $('#recipes').append("<tr id=trt" + i + ">");
                                                for( var j=0; j<3; j++) {
                                                        $("#trt" + i).append("<td><a href=" + json.recipes[3*i+j].recipe.url + " target='_blank'><label>" + json.recipes[3*i+j].recipe.title + "</label></a></td>");
                                                }
                                                $('#recipes').append("</tr>");
                                                $('#recipes').append("<tr id=tri" + i + ">");
                                                for( var j=0; j<3; j++) {
                                                        $("#tri" + i).append("<td><a href=" + json.recipes[3*i+j].recipe.url + " target='_blank'><img src=" + json.recipes[3*i+j].recipe.image + "></a></td>");
                                                }
                                                $('#recipes').append("</tr>");
                                        }
                                }
                });
});
