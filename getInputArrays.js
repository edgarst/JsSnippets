function getInputArrays(inputs)
{
    var values = [];
    for (let index = 0; index < inputs.length; index++) {
        values.push(inputs[index].value);
    }
    return values;
}