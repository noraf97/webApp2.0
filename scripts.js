let data0 = {
    photo: 'images/mosaic.jpg',
    title: 'Mosaic',
    description: 'Life is a mosaic of pleasure and pain - grief is an interval between two moments of joy. \nSathya Sai Baba'
};
  
  let data1 = {
    photo: 'images/airplane.jpg',
    title: 'Flying',
    description: 'When once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return. \nLeonardo da Vinci'
};

let data2 = {
    photo: 'images/bubbles.jpg',
    title: 'Bubbles',
    description: "Enthusiasm just creates bubbles; it doesn't keep them from popping. \nAdora Svitak"
};

let data3 = {
    photo: 'images/moon.jpg',
    title: 'Moon',
    description: "Yours is the light by which my spirit's born: - you are my sun, my moon, and all my stars. \nE. E. Cummings"
};

let data4 = {
    photo: 'images/incense.jpg',
    title: 'Incense',
    description: 'When the mind is possessed of reality, it feels tranquil and joyous even without music or song, and it produces a pure fragrance even without incense or tea. \nZicheng Hong'
};

let data5 = {
    photo: 'images/tea.jpg',
    title: 'Tea',
    description: "A woman is like a tea bag - you can't tell how strong she is until you put her in hot water. \nEleanor Roosevelt"
};

let data6 = {
    photo: 'images/petra.jpg',
    title: 'Traveling',
    description: 'We travel for romance, </br> we travel for  architecture, </br> and we travel to be lost. \nRay Bradbury'
};

let data7 = {
    photo: 'images/coffee.jpg',
    title: 'Coffee',
    description: "We want to do a lot of stuff; we're not in great shape. We didn't get a good night's sleep. We're a little depressed. Coffee solves all these problems in one delightful little cup."
};

let data8 = {
    photo: 'images/bumblebee.jpg',
    title: 'Bumblebee',
    description: "Aerodynamically, the bumble bee shouldn't be able to fly, but the bumble bee doesn't know it so it goes on flying anyway. Mary Kay Ash"
};

let currentPhoto = 0;
let imagesData = [data0, data1, data2, data3, data4, data5, data6, data7, data8];
$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);