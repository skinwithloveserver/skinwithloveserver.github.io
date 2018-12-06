var navSmallExpanded = false;

function expandNavSmall(expand) {
    if(expand) {
        document.querySelector('#navSmallMax').style.visibility = 'visible';
    }
    else {
        document.querySelector('#navSmallMax').style.visibility = 'hidden';
    }
}

window.onload = () => {
    expandNavSmall(navSmallExpanded);

    document.querySelector('#hamburger').onclick = () => {
        navSmallExpanded = navSmallExpanded ? false : true;
        expandNavSmall(navSmallExpanded);
    };
};

window.addEventListener(
    'resize',
    () => {
        if(window.innerWidth > 900) {
            navSmallExpanded = false;
            expandNavSmall(navSmallExpanded);
        }
    }
);
