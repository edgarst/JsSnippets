function deleteClass(nameClass)
{
    classDelete = '.'+nameClass;
    document.querySelectorAll(classDelete).forEach(function(deleted){
        deleted.remove();
    });
}