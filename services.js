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

    document.querySelector(".buttonPopup1").onclick = () => {
        Swal.fire({
            imageUrl: "./images/instagram.png",
            imageWidth: 80,
            imageHeight: 80,
            title: 'Book Appointment',
            text: 'Head on over to Instagram to follow @skinwithlovestudio to book your appointment!',
            showCancelButton: true,
            cancelButtonText: "Cancel",
            cancelButtonColor: '#d33',
            confirmButtonText: 'Book Now!'
          }).then((result) => {
              if(result.value) {
                  window.location.href = "https://www.instagram.com/skinwithlovestudio/?utm_source=ig_profile_share&igshid=1u69eaiosxy0x";
              }
          });
    }

    document.querySelector(".buttonPopup2").onclick = () => {
        Swal.fire({
            imageUrl: "./images/instagram.png",
            imageWidth: 80,
            imageHeight: 80,
            title: 'Book Appointment',
            text: 'Head on over to Instagram to follow @skinwithlovestudio to book your appointment!',
            showCancelButton: true,
            cancelButtonText: "Cancel",
            cancelButtonColor: '#d33',
            confirmButtonText: 'Book Now!'
          }).then((result) => {
              if(result.value) {
                  window.location.href = "https://www.instagram.com/skinwithlovestudio/?utm_source=ig_profile_share&igshid=1u69eaiosxy0x";
              }
          });
    }

    document.querySelector(".buttonPopup3").onclick = () => {
        Swal.fire({
            imageUrl: "./images/instagram.png",
            imageWidth: 80,
            imageHeight: 80,
            title: 'Book Appointment',
            text: 'Head on over to Instagram to follow @skinwithlovestudio to book your appointment!',
            showCancelButton: true,
            cancelButtonText: "Cancel",
            cancelButtonColor: '#d33',
            confirmButtonText: 'Book Now!'
          }).then((result) => {
              if(result.value) {
                  window.location.href = "https://www.instagram.com/skinwithlovestudio/?utm_source=ig_profile_share&igshid=1u69eaiosxy0x";
              }
          });
    }
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
