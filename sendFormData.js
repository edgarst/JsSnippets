function sendData(form, formData, formAction)
{
    var httpRequest = new XMLHttpRequest();
    var formMethod = form.getAttribute('method');
    httpRequest.open(formMethod, formAction);
    httpRequest.send(formData);
}