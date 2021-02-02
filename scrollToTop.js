function scrollToTop()
{
    if(window.scrollY!==0)
    {
        setTimeout(function() {
            window.scrollTo(0,window.scrollY-60);
            scrollToTop();
        }, 10);
    }
}