function createFormData(formInputs)
{
    var formData = new FormData();
    for (let index = 0; index < formInputs.length; index++) {
        formData.append(formInputs[index].name, formInputs[index].value);
    }
    return formData;
}
