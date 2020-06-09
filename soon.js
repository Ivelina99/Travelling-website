function soon() {
    const collectionOfCommingSoon = document.getElementsByClassName('comming-soon');

    const informationParg = document.querySelector('.information-alert');

    const closeInformationBtn = document.getElementsByClassName('close-information');

    console.log(collectionOfCommingSoon)
    console.log(closeInformationBtn)
    for (let i = 0; i < collectionOfCommingSoon.length; i++) {
        collectionOfCommingSoon[i].addEventListener("click", soonAlert);
    }

    closeInformationBtn[0].addEventListener("click", closeInformation);

    function soonAlert() {
        informationParg.style.display = 'block';

    }

    function closeInformation() {
        informationParg.style.display = 'none';

    }

}


soon();