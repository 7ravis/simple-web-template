const backendBaseUrl = 'http://httpbin.org';

var ajax = {

	searchForStuff: function (body, successFunction) {
		let endpointMapping = '/post';
		let fullUrl = encodeURI(backendBaseUrl + endpointMapping);
		console.log('HTTP Request: ' + fullUrl);
		$.ajax({
			type: 'POST',
			url: fullUrl,
			contentType: 'text/plain',
			data: body,
			success: function (response) {
				successFunction(response);
			},
			error: function (response) {
				displayResponseError(response);
			}
		});
	}

};

function displayResponseError(response) {
	let displayMessage;
	try {
		let obj = JSON.parse(response.responseText);
		displayMessage = obj.message;
	} catch (e) {
		displayMessage = 'Unable to connect to server. Please try again later.';
	}
	displayMessage(displayMessage);
}