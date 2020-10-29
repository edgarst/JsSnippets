function createInput(type, value, text, name)
{
    var input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.value = value;
    input.innerHTML = text;
    return input;
}