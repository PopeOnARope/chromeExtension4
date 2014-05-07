var home;
$(document).ready(function(){
$('#domainform').on('submit', extension.init);

});



// var reddtmpl = "<%_.each(myData, function(element, index, list){ %> <div class='linkbox'> <ul> <li> <a href= <%=myData.url%> > <%= myData.thumbnail %> </a></li> <li><%=myData.title %></li> <li> <%=myData.subreddit</li></ul></div> <% }); %>"
var extension = {
	init : function(){
		$("#newsfeed").empty();
		var subreddit = $('#s').val();
		var linkToContent = "http://www.reddit.com/r/" + subreddit + ".json";
		event.preventDefault();
		$.getJSON(linkToContent,
		function(response){
			var myData = response.data.children;
			var html="";
			for(i=0; i<myData.length; i++){
				var obj = myData[i].data;
				var thumb = obj.thumbnail;
				var title = obj.title;
				var votes = obj.score;
				var subrdt = "/r/"+obj.subreddit;
				var redditurl = "http://www.reddit.com"+obj.permalink;
				var subrdturl = "http://www.reddit.com/r/"+obj.subreddit+"/";
				var exturl = obj.url
				var exturljpg = obj.url + '.jpg'
				$("#newsfeed").append('<li><a href=' + exturl + '><h3>'+ title + '</a></h3></li>'+
					'<li><a href=' + exturl + '><img src=' + '"' + exturljpg + '"></a></li>'+
					'<li><h5>score:' + votes + '</h5></li>'+
					'<li>	subreddit:<a href="' + subrdturl + '">'
					+ subrdt +'</a></li>');
				
			}
		}); //end response callbacck
	} // end pullJson 
}
	


