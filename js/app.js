// add images to DOM; will eventually improve using node.js so that images are added automatically to the page when added to the folder
const gallery = document.querySelector('.gallery');
let html = ``;
const dataCaptions = [
    'Jenga and I had a lovely time on the water - nothing gets her tired than a day on a paddleboard!', 
    'After long walks, Jenga will just have a huge smile on her face!', 
    'Jenga and I are resting in the middle of a long hike in Utah.',
    'When Jenga gets tired, she likes to be wrapped up in a little blanket.', 
    'At the beginning of 2020, I was in Chicago and got to see my brother and his family. Here is my little sister Cess, my brother Rod, and his three adorable kiddos Luciya, Vincent, and Isabel.', 
    'Jenga had another long day', 
    'Jenga sometimes gives me the most adorable looks and gives me her paws. This time, she was asking for dinner.',
    'I discovered that if I needed to, I could fit Jenga in a backpack and carry her around.', 
    `This was taken at my brother Rod's birthday party just a few weeks before his daugher was born. That's our sister, Livi, in the middle.`,
    'Sometimes Jenga is just plain silly.',
    'My brother, Ian, and I took a hike with our dad and decided to climb on these cool rocks. Jenga joined us and is a better climber than both of us!', 
    `Jenga LOVES playing with tennis balls. It's quite an experience seeing her sprint after one.`,
    `This is just a funny photo of me in a particular snapchat filter. I don't mind looking silly. BONK!`, 
    'Another one of Jenga just being silly', 
    'Jenga doing my physics homework. What a smart bear!', 
    'Me and a few friends from a Berkeley dance team at a beach in Santa Monica', 
    `Jenga couldn't have been more tired after our gigantic hike on Mount Tamalpais.`, 
    `A classic photo of me and my three older siblings with our dad. Apparently, my dad got horribly sunburned that day.`, 
    'Jenga also loves to play tug of war with this rope',
    'Isabel was just a few weeks old, and this was the first time I met her!!', 
    'Another very cute one of Jenga after a game of fetch. She will pant so hard that it looks like her tongue is falling out.',
    'Jenga again looking very happy after hunting for the tennis ball.', 
    'Jenga is ridiculously photogenic.', 
    `A particularly well-timed photo of Jenga mid-yawn while holding my roomate's hand`, 
    'Did I mention Jenga has a purple hoodie??', 
    'Another glamor shot of a very happy Jenga', 
    'Jenga and I had matching taco costumes.', 
    `Jenga will sometimes laugh charitably at my dumb dog dad jokes.`, 
    `Sometimes the field is quite muddy, but that doesn't stop Jenga from getting gassed playing fetch :)`, 
    `My dance team during our routine at a UC Berkeley dance showcase. you can see me if you look closely`
];
const alts = [
    'Jenga and Graham on a paddleboard', 
    'Jenga smiling up close', 
    'Jenga and Graham on a hike', 
    'Jenga wrapped in a blanket', 
    `Graham, brother, sister, and brother's 3 kiddos`, 
    `Jenga wrapped in a blanket`, 
    'Jenga withb puppy eyes before dinner time', 
    'Graham carrying Jenga in a backpack', 
    'Graham, brother and sister at his birthday', 
    'Jenga looking very content laying belly-up', 
    'Graham, brother and Jenga climbing rocks on a hike', 
    'Jenga chonking on a tennis ball', 
    'Bonk! snapchat filter', 
    'Jenga being silly on the couch', 
    'Jenga wearing a yellow shirt and Cal hat studying physics', 
    'Graham and friends at the beach', 
    'Jenga sleeping in the car after a long hike', 
    'Graham, older siblings and dad many years ago', 
    'Jenga playing tug of war', 
    'Graham meeting his niece for the first time', 
    'Jenga panting like crazy', 
    'Jenga smiling in the sun', 
    'Jenga laying on the floor without a care in the world', 
    'Jenga mid-yawn', 
    'Jenga in her purple hoodie', 
    'Jenga smiling', 
    'Jenga in her taco costume', 
    `Jenga lookiing like she's laughing`, 
    'Jenga covered in mud after playing fetch', 
    'Graham and dance team during a performance'
];
for (let i = 1; i <= dataCaptions.length; i++) {
    if (i < 10) {
        var number = `0${i}`;
    } else {
        var number = i;
    }
    html += `<a href='photos/${number}.jpg' data-caption="${dataCaptions[i - 1]}">
                <img src='photos/thumbnails/${number}.jpg' alt="${alts[i - 1]}">
            </a>`;
}

gallery.innerHTML = html;







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
