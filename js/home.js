const SUPPORT_EMAIL = 'no email configured';

$(document).ready(function () {
	$(document).ajaxStart(function () {
		$("#loadingMessage").modal();
	});
	$(document).ajaxComplete(function () {
		$("#loadingMessage").modal("hide");
	});
	$('.hrefMailToSupport').attr('href', 'mailto:' + SUPPORT_EMAIL);
});

function displayMessage(message) {
	$("#loadingMessage").modal("hide");
	alert(message);
}

function doStuff() {
	ajax.searchForStuff('this is the text body for my http reqeust', doStuffWithHttpResponse);
}

function doStuffWithHttpResponse(response) {
	console.log(response);
	displayMessage('hey you did stuff!');
}

function goToElement(elementId) {
	var loc = document.location.toString().split('#')[0];
	document.location = loc + '#' + elementId;
	return false;
}

function showDivPage(selector) {
	$('.divPage').hide();
	goToElement('topOfPage');
	$(selector).show();
}