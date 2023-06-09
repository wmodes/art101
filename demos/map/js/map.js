// Let's create a database of interesting places
const placeDB = [
    {
        name: "Buddha Shrine",
        location: [37.00669158425256, -122.0599991558532],
        description: "This peaceful shrine is a great place to meditate, reflect, or just take a break from the hustle and bustle of campus life.",
        icon: "tree",
        image: "buddha.jpg"
    },
    {
        name: "Caer Ellillon",
        location: [37.007495171766, -122.05633319921633],
        description: "Caer Ellillon is a sacred circle that has four direction altars and a large totem pole. <i>Caer</i> means santuary and <i>Ellilon</i> can mean Gods or Elves. In this case, it is a dedication to the earth spirits of the forest and of nature.",
        icon: "tree",
        image: "caer-ellillon.jpg"
    },
    {
        name: "Cave Gulch Trailhead",
        location: [36.98782690384421, -122.06885071440965],
        description: "Take a walk through one of the Wilder Ranch meadows and down into the gulch to brave IXL/Hellhole cave.",
        icon: "cave",
        image: "cave-gulch.jpg"
    },
    {
        name: "McHenry Library",
        location: [36.9957814610488, -122.05916543185673],
        description: "This library is one of the largest on the West Coast. It has a variety of resources, including books, journals, and databases. It's a great place to study or do research.",
        icon: "book",
        image: "mchenry.jpg"
    },
    {
        name: "Porter Meadow",
        location: [36.99485646098761, -122.06767038278397],
        description: "This beautiful meadow is a great place to relax, take a nap, or just enjoy the scenery.",
        icon: "sun",
        image: "porter-meadow.jpg"
    },
    {
        name: "Quarry Plaza Cafe",
        location: [36.99809807995018, -122.05589273233338],
        description: "The Quarry Plaza Cafe is a great place to get a coffee and a snack. It's also a great place to meet up with friends.",
        icon: "coffee",
        image: "quarry-cafe.jpg"
    },
    {
        name: "Sesnon Gallery",
        location: [36.99402048025026, -122.06505353996478],
        description: "This gallery features rotating exhibits of contemporary art, including paintings, sculptures, and photography. It's a great place to see new and innovative work by local and international artists.",
        icon: "art",
        image: "sesnon.jpg"
    },
    {
        name: "The Quarry",
        location: [36.99866153332791, -122.056227852731],
        description: "This former quarry is now a popular spot for hiking, biking, and rock climbing. It's a great place to enjoy the outdoors and get some exercise.",
        icon: "sun",
        image: "quarry.jpg"
    },  
    {
        name: "Trailer Park",
        location: [37.00132133537114, -122.06618061764895],
        description: "This off-the-beaten-path trailer park is a great place to see OG UCSC.",
        icon: "house",
        image: "trailerpark.jpg"
    },
    {
        name: "Tree Nine",
        location: [37.0047112108929, -122.05999975578163],
        description: "This large tree is a great place to get a bird's eye view of the campus.",
        icon: "tree",
        image: "tree9.jpg"
    },
    {
        name: "Upper Campus Natural Reserve",
        location: [37.00138677834418, -122.06165361108238],
        description: "This beautiful redwood forest is a great place to go for a hike, have a picnic, or just enjoy the peace and quiet.",
        icon: "tree",
        image: "upper-campus.png"
    },
    {
        name: "UCSC Gym & Pool",
        location: [36.99465964089265, -122.05450508603172],
        description: "The UCSC Gym & Pool is a great place to work out, swim, or take a yoga class. It's also a great place to relax and unwind.",
        icon: "gym",
        image: "gym-pool.jpg"
    },
    {
        name: "Collidge Drive Lookout",
        location: [36.99075333091118, -122.04900162807267],
        description: "The Collidge Drive Lookout, aka Spliff Cliff, is a great place to get a panoramic view of Santa Cruz. It's also a great place to take a break from studying or working and just enjoy the scenery.",
        icon: "lookout",    
        image: "lookout.png"
    },
    {
        name: "Disc Golf Course",
        location: [36.9950107545421, -122.05223645024876],
        description: "The Collidge Drive Lookout, aka Spliff Cliff, is a great place to get a panoramic view of Santa Cruz. It's also a great place to take a break from studying or working and just enjoy the scenery.",
        icon: "disc-golf",    
        image: "disc-golf.png"
    }
];
            
const imgDir = "img/";
const mapCenter = [36.99809807995018, -122.05589273233338];
const mapZoom = 15; // 1 = whole world, 10 = large city, 20 = city blocks
const mapMaxZoom = 18;
const mapMinZoom = 13;

// Set up the map
const map = L.map('map').setView(mapCenter, mapZoom);

// Set up the map filters
let myFilter = [
    'grayscale:100%',
    // 'contrast:90%',
    'sepia:35%',
    // 'brightness:110%',
];

// Add the basemap tiles
const mapLayer = L.tileLayer.colorFilter('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: mapMaxZoom,
    minZoom: mapMinZoom,
    filter: myFilter
}).addTo(map);

const iconDir = "img/icons/";
const iconSize = [48, 48];
const iconAnchor = [16, 32];
const popupAnchor = [0, -32];
// all icons as pngs in img/icons
// custom markers include:
const iconNames = [];
for (const place of placeDB) {
  iconNames.push(place.icon);
}
// iterate over iconNames to create an object of L.icon objects
const icons = {};
iconNames.forEach(function(iconName) {
    icons[iconName] = L.icon({
        iconUrl: iconDir + iconName + '.png',
        iconSize: iconSize,
        iconAnchor: iconAnchor,
        popupAnchor: popupAnchor
    });
});

// Add markers for each place
placeDB.forEach(function(place) {
    const marker = L.marker(place.location, {icon: icons[place.icon]}).addTo(map);
    marker.bindPopup(
        '<h3>' + place.name + '</h3>' +
        '<img src="' + imgDir + place.image + '" alt="' + place.name + '" width="300" height="200">' +
        '<p>' + place.description + '</p>'
    );
});

