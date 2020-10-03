let map, infoWindow;

// Different set of locations

let beachLocations = [
            { lat:50.4164145, lng:-5.1100574 }, // Fistral Beach
            { lat:50.3608112, lng:-5.1707412 }, // Perranporth Beach
            { lat:49.9732734, lng:-5.2337851 }, // Kynance Cove
            { lat:50.1988973, lng:-5.4660308 }, // Carbis Bay Beach  
            { lat:50.3908849, lng:-5.1483663 }, // Holywell Bay Beach
            { lat:50.0429263, lng:-5.6527166}, // Porthcurno Beach
            { lat:50.0535378, lng:-5.6944491}, // Nanjizal Beach
            { lat:50.1440767, lng:-5.0686287}, // Gyllyngvase Beach
            { lat:50.3233711, lng:-4.7681669}, // Porthpean Beach
            { lat:50.8603023,lng:-4.5586691}, // Sandymouth Bay Beach
            { lat:50.2833461, lng:-4.7920881} // Pentewan Beach
        ];

let artsLocations = [
            { lat:50.0413674, lng:-5.6531434}, // Minack Theatre
            { lat:50.2641193, lng:-5.0534362}, // Truro Cathedral
            { lat:50.1461128, lng:-5.0488191}, // Pendennis Castle
            { lat:50.6672847, lng:-4.760694}, // Tintagel Castle
            { lat:50.3601378, lng:-4.7469065}, // Eden Project
            { lat:50.1175726, lng:-5.4800369}, // St Michael's Mount
            { lat:50.2148385, lng:-5.4846445}, // Tate St Ives
            { lat:50.2133028, lng:-5.4832626}, // Barbara Hepworth Museum
            { lat:50.1517431, lng:-5.6784109}, // Geevor Tin Mine
            { lat:50.4748864, lng:-4.7307867}, // Bodmin Jail
            { lat:50.3226815, lng:-5.2027042}, // St Agnes Heritage Coast
            { lat:50.1556299, lng:-5.0746233}, // Falmouth Art Gallery
            { lat:50.2393609, lng:-4.8488722}, // Caerhays Castle
            { lat:50.386793, lng:-5.0410428} // Trerice Manor
        ];

let hotelLocations = [
            { lat:50.4446539, lng:-5.0434669}, // Watergate Bay Hotel
            { lat:50.3359557, lng:-4.6362102}, // The Old Quay House Hotel
            { lat:50.0846744, lng:-5.5394537}, // The Old Coastguard Hotel
            { lat:50.0646398, lng:-5.5706962}, // Lamorna Cove Hotel
            { lat:50.5404889, lng:-4.9398744}, // Rick Steins St Edmunds House
            { lat:50.0169294, lng:-5.2599637}, // Mullion Cove Hotel
            { lat:50.2045106, lng:-5.4800476}, // Tregenna Castle Hotel
            { lat:50.0219264, lng:-5.2558797}, // Polurrian on the Lizard
            { lat:50.1580258, lng:-5.0177567}, // St Mawes Hotel
            { lat:50.3359522, lng:-4.7413545}, // The Carlyon Bay Hotel
            { lat:50.2566701, lng:-5.0571887}, // Merchant House Hotel
            { lat:50.6380725, lng:-4.3647504}, // The Eagle House Hotel
            { lat:50.3053767, lng:-5.2161079}, // Beacon Country House Hotel
            { lat:50.1591359, lng:-5.01552}, // The Idle Rocks Hotel
            { lat:50.3398108, lng:-4.4972886}, // Tallard Bay Hotel
            { lat:50.2075034, lng:-4.9413554}, // The Nare Hotel
            { lat:50.2662784, lng:-5.0461957}, // The Alverton Hotel
            { lat:50.1982306, lng:-5.4687445}, // Carbis Bay Hotel
            { lat:50.1236677, lng:-5.4755258} // Marizion Hotel
];

let restaurantLocations = [
            { lat:50.5401069, lng:-4.938946}, // The Seafood Restaurant
            { lat:50.6635645, lng:-4.753678}, // King Arthurs Arms Inn
            { lat:50.4117706, lng:-5.1210257}, // Lewinnick Lodge
            { lat:50.3182604, lng:-5.2045607}, // Driftwood Spars
            { lat:50.4442014, lng:-5.0440957}, // The Beach Hut
            { lat: 50.3688044, lng:-4.9865617}, // The Fox's Revenge
            { lat:50.2741604, lng:-4.7882751}, // The Nutty Duck
            { lat:50.2132507, lng:-5.4826186}, // Beer & Bird
            { lat:50.118647, lng:-5.5357156}, // Old Lifeboat House Bistro
            { lat:50.5414871, lng:-4.9421653}, // Paul Ainsworth Number 6
            { lat:50.1234351, lng:-5.4766158}, // The Godolphin
            { lat:50.1826145, lng:-5.5955026}, // The Gunards Head
            { lat:50.3351513, lng:-4.6368258}, // Food For Thought
            { lat:50.2293495, lng:-5.3889681}, // The Rockpool
            { lat:50.592717, lng:-4.8244471} // Port Gaverne Inn
];

let natureLocations = [
            { lat:50.285367, lng:-4.8133752}, // Lost Gardens of Heligan
            { lat:50.1067235, lng:-5.1239471}, // Trebah Gardens
            { lat:50.4767156, lng:-4.784576}, // Camel Valley Vineyard
            { lat:50.378775, lng:-4.6840813}, // Hidden Valley Gardens
            { lat:50.0632964, lng:-5.5699571}, // Chygurno Gardens
            { lat:50.1859412, lng:-5.0979424}, // Enys Gardens
            { lat:50.1091128, lng:-5.1192471}, // Glendurgen Gardens
            { lat:50.6708412, lng:-4.7272415}, // St Nectan's Glen
            { lat:50.091692, lng:-5.1241721}, // Bosahan Gardens
            { lat:50.4423936, lng:-4.7013472}, // Lanhydrock House and Gardens
            { lat:50.4555128, lng:-5.0001858}, // The Japanese Garden
            { lat:50.4702743, lng:-4.6786729}, // Cardinham Woods
            { lat:50.1366064, lng:-5.5083667}, // Tremenheere Sculpture Gardens
            { lat:50.2172203, lng:-5.034446}, // Trelissick Gardens
            { lat:50.2913108, lng:-5.0618025}, // Idless Woods
            { lat:50.4903549, lng:-4.5075518}, // Golitha Falls
            { lat:50.5548086, lng:-4.6178319} // Bodmin Moore
];

let activityLocations = [
            { lat:50.385356, lng:-5.0080304}, // Newquay Paintball
            { lat:50.5184814, lng:-4.8407397}, // Camel Trail Cycle Hire
            { lat:50.5984694, lng:-4.7351817}, // Big Dunk's Outdoor Lazer Tag
            { lat:50.4151414, lng:-5.0890206}, // Escape Surf School
            { lat:50.3048844, lng:-5.1903987}, // Koru Kayaking Adeventures
            { lat:50.2740266, lng:-5.1872099}, // ATV Centre Ltd
            { lat:50.4113864, lng:-5.0716177}, // Newquay Zoo
            { lat:50.0951818, lng:-5.2080155}, // Cornish Seal Sanctuary
            { lat:50.0920744, lng:-5.2622836}, // Flambards Theme Park
            { lat:49.9679088, lng:-5.2080712}, // Lizard Adventure
            { lat:50.5413889, lng:-4.8642663}, // Cornish Coasteering
            { lat:50.1166804, lng:-5.5506217}, // Kernow Coasteering
            { lat:50.3596247, lng:-4.1330105}, // Mount Batten Outdoor Climbing Wall
            { lat:50.5597671, lng:-4.6760462}, // Hallagenna Riding
            { lat:50.1461954, lng:-5.5181397}, // Tremenheere Riding Stables
            { lat:50.2092802, lng:-5.479281}, // St Ives Watersports
            { lat:50.3750794, lng:-5.0437649}, // Lappa Vallet Steam Railway
            { lat:50.3829806, lng:-5.0117826} // Dairyland Farm Park
];

// Initialise map
 function initMap() {
     let myLatlng = { lat: 50.4211456, lng: -4.9904922 };
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 9,
                center: myLatlng
            });

        let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        };
        

// function that is being called by the button click
// that is passing in the appropriate set of locations
    function placeMarkers(selectedLocations) {
    
// iterate through the array of locations and place the markers on the map
        for (let i = 0; i < selectedLocations.length; i++) {
          let marker = new google.maps.Marker({
            position: selectedLocations[i],
            map: map,
            animation: google.maps.Animation.DROP,
          });
        };

        /* let markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}); */
        };

        // tried this with removeMarkers() in the event listener - still doesnt work
        /* function removeMarkers(){
            for(i=0; i<emptyArray.length; i++){
                emptyArray[i].setMap(null);
            }
        } */

        // function setMapOnAll(map) {
        //     for (let i = 0; i < activityLocations.length; i++) {
        //         activityLocations[i].setMap(map);
        //     }
        // }
    

// Event listeners for button options

        document.getElementById("beaches").addEventListener("click", () => {
            initMap();
            placeMarkers(beachLocations);
        })
        document.getElementById("activities").addEventListener("click", () => {
            initMap();
            placeMarkers(activityLocations);
        })
        document.getElementById("restaurants").addEventListener("click", () => {
            initMap();
            placeMarkers(restaurantLocations);
        })
        document.getElementById("nature").addEventListener("click", () => {
            initMap();
            placeMarkers(natureLocations);
        })
        document.getElementById("hotels").addEventListener("click", () => {
            initMap();
            placeMarkers(hotelLocations);
        })
        document.getElementById("arts").addEventListener("click", () => {
            initMap();
            placeMarkers(artsLocations);
        })

       


        

    /* let beachLocations = [
            { lat: 49.9746732, lng: -5.2402168},
            { lat : 50.4164145, lng: -5.1100574},
            { lat: 50.0429246, lng: -5.6516222}
        ];

        let beachMarkers = beachLocations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        }); */