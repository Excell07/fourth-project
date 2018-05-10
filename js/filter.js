// Calling function lightbox
$(document).ready(function(){
    $('#captions').lightGallery({
        subHtmlSelectorRelative: true
    });
});

// filter photos
document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('#captions');
    const searchBar = document.forms['search-photos'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        const photos = list.getElementsByTagName('a');
        Array.from(photos).forEach((photo) => {
            const title = photo.getAttribute("data-sub-html");
            if(title.toLowerCase().indexOf(term) != -1){
                photo.style.display = 'block';
                photo.style.marginRight = "auto";
            } else {
                photo.style.display = 'none';
            }
        });
    });
}); 