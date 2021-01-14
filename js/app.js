baguetteBox.run('.gallery'); 

//search filter 

// get the value of the input field
let inputValue = document.getElementById('search');
// get as list of all the <a> tags, containing the images
let links = document.getElementsByClassName('gallery')[0].children; 
// define & populate a list of data-caption attributes, all lower case 
let captions = [];
for ( let i = 0; i < links.length; i++ ) {
    let captionText = links[i].getAttribute('data-caption');
    let lowerCaseCap = captionText.toLowerCase();
    captions.push( lowerCaseCap );
}

/**
 * Filter the image containers
 * If data-caption includes inputValue.value, display the image
 * Otherwise, hide the image
 */
const filter = () => {
    var x = document.getElementById('search');
    x.value = x.value.toLowerCase(); // make non-case sensitive
    for (let i = 0; i < captions.length; i++) {
        if ( !(captions[i].includes( inputValue.value ) ) ) {
            links[i].style.display = "none";
        } else {
            links[i].style.display = "inline";
        }
    }
}
//add event listener to update in real time
inputValue.addEventListener('keyup', filter); 
