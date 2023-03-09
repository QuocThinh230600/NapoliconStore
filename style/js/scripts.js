let inputHover = document.querySelector('.search');
let aSearchHeader = document.querySelector('.search-header');
let inputHoverID = document.getElementById('search');

aSearchHeader.addEventListener('mouseover', function(e){
    aSearchHeader.classList.add('show');
    inputHoverID.focus();
});

aSearchHeader.addEventListener('mouseout', function(e){
    aSearchHeader.classList.remove('show');
});

inputHover.addEventListener('click', function(e){
    inputHoverID.focus();
});

