let map;

// Different set of locations

let beachLocations = [
        {coords: {lat:50.4165, lng:-5.1002 }, content:"<h3>Fistral Beach</h3>"}, // Fistral Beach
        {coords: {lat:50.3483394, lng:-5.157094 }, content:"<h3>Perranporth Beach</h3>"}, // Perranporth Beach
        {coords: {lat:49.9732734, lng:-5.2337851 }, content:"<h3>Kynance Cove</h3>"}, // Kynance Cove
        {coords: {lat:50.1988973, lng:-5.4660308 }, content:"<h3>Carbis Bay Beach</h3>"}, // Carbis Bay Beach  
        {coords: {lat:50.3908849, lng:-5.1483663 }, content:"<h3>Holywell Bay Beach</h3>"}, // Holywell Bay Beach
        {coords: {lat:50.0429263, lng:-5.6527166 }, content:"<h3>Porthcurno Beach</h3>"}, // Porthcurno Beach
        {coords: {lat:50.0535378, lng:-5.6944491}, content:"<h3>Nanjizal Beach</h3>"}, // Nanjizal Beach
        {coords: {lat:50.1440767, lng:-5.0686287}, content:"<h3>Gyllyngvase Beach</h3>"}, // Gyllyngvase Beach
        {coords: {lat:50.3233711, lng:-4.7681669}, content:"<h3>Porthpean Beach</h3>"}, // Porthpean Beach
        {coords: {lat:50.8603023,lng:-4.5586691}, content:"<h3>Sandymouth Bay Beach</h3>"}, // Sandymouth Bay Beach
        {coords: {lat:50.2833461, lng:-4.7920881}, content:"<h3>Pentewan Beach</h3>"}, // Pentewan Beach
        {coords: {lat:50.6447762, lng:-4.7626325}, content:"<h3>Trebarwith Beach</h3>"}, // Trebarwith Beach
        {coords: {lat:50.6683152, lng:-4.7614876}, content:"<h3>Tintagel Haven</h3>"}, // Tintagel Haven
        {coords: {lat:50.5629593, lng:-4.9567596}, content:"<h3>Butterhole Beach</h3>"}, // Butterhole Beach
        {coords: {lat:50.3528852, lng:-4.273459}, content:"<h3>Tregantle Beach</h3>"}, // Tregantle Beach
        {coords: {lat:50.3305601, lng:-4.5187893}, content:"<h3>Polperro Beach</h3>"} // Polperro Beach
    ];

let artsLocations = [
        {coords: {lat:50.0413674, lng:-5.6531434}, content:"<h3>Minack Theatre</h3>"}, // Minack Theatre
        {coords: {lat:50.2641193, lng:-5.0534362}, content:"<h3>Truro Cathedral</h3>"}, // Truro Cathedral
        {coords: {lat:50.1461128, lng:-5.0488191}, content:"<h3>Pendennis Castle</h3>"}, // Pendennis Castle
        {coords: {lat:50.6672847, lng:-4.760694}, content:"<h3>Tintagel Castle</h3>"}, // Tintagel Castle
        {coords: {lat:50.3601378, lng:-4.7469065}, content:"<h3>Eden Project</h3>"}, // Eden Project
        {coords: {lat:50.1175726, lng:-5.4800369}, content:"<h3>St Michael's Mount</h3>"}, // St Michael's Mount
        {coords: {lat:50.2148385, lng:-5.4846445}, content:"<h3>Tate St Ives</h3>"}, // Tate St Ives
        {coords: {lat:50.2133028, lng:-5.4832626}, content:"<h3>Barbara Hepworth Museum</h3>"}, // Barbara Hepworth Museum
        {coords: {lat:50.1517431, lng:-5.6784109}, content:"<h3>Geevor Tin Mine</h3>"}, // Geevor Tin Mine
        {coords: {lat:50.4748864, lng:-4.7307867}, content:"<h3>Bodmin Jail</h3>"}, // Bodmin Jail
        {coords: {lat:50.3226815, lng:-5.2027042}, content:"<h3>St Agnes Heritage Coast</h3>"}, // St Agnes Heritage Coast
        {coords: {lat:50.1556299, lng:-5.0746233}, content:"<h3>Falmouth Art Gallery</h3>"}, // Falmouth Art Gallery
        {coords: {lat:50.2393609, lng:-4.8488722}, content:"<h3>Caerhays Castle</h3>"}, // Caerhays Castle
        {coords: {lat:50.386793, lng:-5.0410428}, content:"<h3>Trerice Manor</h3>"}, // Trerice Manor
        {coords: {lat:50.2626163, lng:-5.0528392}, content:"<h3>Hall for Cornwall</h3>"} // Hall for Cornwall
    ];

let hotelLocations = [
        {coords: {lat:50.4446539, lng:-5.0434669}, content:"<h3>Watergate Bay Hotel</h3>"}, // Watergate Bay Hotel
        {coords: {lat:50.3359557, lng:-4.6362102}, content:"<h3>The Old Quay House Hotel</h3>"}, // The Old Quay House Hotel
        {coords: {lat:50.0646398, lng:-5.5706962}, content:"<h3>Lamorna Cove Hotel</h3>"}, // Lamorna Cove Hotel
        {coords: {lat:50.5404889, lng:-4.9398744}, content:"<h3>Rick Steins St Edmunds House</h3>"}, // Rick Steins St Edmunds House
        {coords: {lat:50.0169294, lng:-5.2599637}, content:"<h3>Mullion Cove Hotel</h3>"}, // Mullion Cove Hotel
        {coords: {lat:50.0846744, lng:-5.5394537}, content:"<h3>The Old Coastguard Hotel</h3>"}, // The Old Coastguard Hotel
        {coords: {lat:50.184234, lng:-5.5961044}, content:"<h3>Gurnards Head Hotel</h3>"}, // Gurnards Head Hotel
        {coords: {lat:50.0219264, lng:-5.2558797}, content:"<h3>Polurrian on the Lizard</h3>"}, // Polurrian on the Lizard
        {coords: {lat:50.1580258, lng:-5.0177567}, content:"<h3>St Mawes Hotel</h3>"}, // St Mawes Hotel
        {coords: {lat:50.3359522, lng:-4.7413545}, content:"<h3>The Carlyon Bay Hotel</h3>"}, // The Carlyon Bay Hotel
        {coords: {lat:50.6682234, lng:-4.757652}, content:"<h3>Camelot Castle Hotel</h3>"}, // Camelot Castle Hotel
        {coords: {lat:50.6380725, lng:-4.3647504}, content:"<h3>The Eagle House Hotel</h3>"}, // The Eagle House Hotel
        {coords: {lat:50.3053767, lng:-5.2161079}, content:"<h3>Beacon Country House Hotel</h3>"}, // Beacon Country House Hotel
        {coords: {lat:50.1591359, lng:-5.01552}, content:"<h3>The Idle Rocks Hotel</h3>"}, // The Idle Rocks Hotel
        {coords: {lat:50.3398108, lng:-4.4972886}, content:"<h3>Tallard Bay Hotel</h3>"}, // Tallard Bay Hotel
        {coords: {lat:50.2075034, lng:-4.9413554}, content:"<h3>The Nare Hotel</h3>"}, // The Nare Hotel
        {coords: {lat:50.2662784, lng:-5.0461957}, content:"<h3>The Alverton Hotel</h3>"}, // The Alverton Hotel
        {coords: {lat:50.1982306, lng:-5.4687445}, content:"<h3>Carbis Bay Hotel</h3>"}, // Carbis Bay Hotel
        {coords: {lat:50.1236677, lng:-5.4755258}, content:"<h3>Marizion Hotel</h3>"}, // Marizion Hotel
        {coords: {lat:50.6380725, lng:-4.3647504}, content:"<h3>The Eagle House Hotel</h3>"} // The Eagle House Hotel
    ];

let restaurantLocations = [
        {coords: {lat:50.5401069, lng:-4.938946}, 
        content:"<h3>The Seafood Restaurant</h3>"}, // The Seafood Restaurant
        {coords: {lat:50.6635645, lng:-4.753678}, 
        content:"<h3>King Arthurs Arms Inn</h3>"}, // King Arthurs Arms Inn
        {coords: {lat:50.4117706, lng:-5.1210257}, content:"<h3>Lewinnick Lodge</h3>"}, // Lewinnick Lodge
        {coords: {lat:50.3182604, lng:-5.2045607}, content:"<h3>Driftwood Spars</h3>"}, // Driftwood Spars
        {coords: {lat:50.4442014, lng:-5.0440957}, content:"<h3>The Beach Hut</h3>"}, // The Beach Hut
        {coords: {lat: 50.3688044, lng:-4.9865617}, content:"<h3>The Fox's Revenge</h3>"}, // The Fox's Revenge
        {coords: {lat:50.2741604, lng:-4.7882751}, content:"<h3>The Nutty Duck</h3>"}, // The Nutty Duck
        {coords: {lat:50.2132507, lng:-5.4826186}, content:"<h3>Beer & Bird</h3>"}, // Beer & Bird
        {coords: {lat:50.118647, lng:-5.5357156}, content:"<h3>Old Lifeboat House Bistro</h3>"}, // Old Lifeboat House Bistro
        {coords: {lat:50.5414871, lng:-4.9421653}, content:"<h3>Paul Ainsworth Number 6</h3>"}, // Paul Ainsworth Number 6
        {coords: {lat:50.1234351, lng:-5.4766158}, content:"<h3>The Godolphin</h3>"}, // The Godolphin
        {coords: {lat:50.1826145, lng:-5.5955026}, content:"<h3>The Gunards Head</h3>"}, // The Gunards Head
        {coords: {lat:50.3351513, lng:-4.6368258}, content:"<h3>Food For Thought</h3>"}, // Food For Thought
        {coords: {lat:50.2293495, lng:-5.3889681}, content:"<h3>The Rockpool</h3>"}, // The Rockpool
        {coords: {lat:50.592717, lng:-4.8244471}, content:"<h3>Port Gaverne Inn</h3>"}, // Port Gaverne Inn
        {coords: {lat:50.2627936, lng:-5.0535122}, content:"<h3>Manning's Bar and Restaurant</h3>"}, // Manning's Bar and Restaurant
        {coords: {lat:50.2378956, lng:-5.2489994}, content:"<h3>Tricky's</h3>"}, // Tricky's
        {coords: {lat:50.1516177, lng:-5.0728573}, content:"<h3>Cribbs Cornwall</h3>"}, // Cribbs Cornwall
        {coords: {lat:50.1234351, lng:-5.4766158}, content:"<h3>The Godolphin</h3>"}, // The Godolphin
        {coords: {lat:50.1010554, lng:-5.2768267}, content:"<h3>Henley's Bar and Restaurant</h3>"}, // Henley's Bar and Restaurant
        {coords: {lat:49.9679807, lng:-5.2055365}, content:"<h3>The Witchball</h3>"}, // The Witchball
        {coords: {lat:50.0657729, lng:-5.7167688}, content:"<h3>The Land's End Restaurant and Bar</h3>"} // The Land's End Restaurant and Bar
    ];

let natureLocations = [
        {coords: {lat:50.285367, lng:-4.8133752}, content:"<h3>Lost Gardens of Heligan</h3>"}, // Lost Gardens of Heligan
        {coords: {lat:50.1067235, lng:-5.1239471}, content:"<h3>Trebah Gardens</h3>"}, // Trebah Gardens
        {coords: {lat:50.4767156, lng:-4.784576}, content:"<h3>Camel Valley Vineyard</h3>"}, // Camel Valley Vineyard
        {coords: {lat:50.378775, lng:-4.6840813}, content:"<h3>Hidden Valley Gardens</h3>"}, // Hidden Valley Gardens
        {coords: {lat:50.0632964, lng:-5.5699571}, content:"<h3>Chygurno Gardens</h3>"}, // Chygurno Gardens
        {coords: {lat:50.1859412, lng:-5.0979424}, content:"<h3>Enys Gardens</h3>"}, // Enys Gardens
        {coords: {lat:50.1091128, lng:-5.1192471}, content:"<h3>Glendurgen Gardens</h3>"}, // Glendurgen Gardens
        {coords: {lat:50.6708412, lng:-4.7272415}, content:"<h3>St Nectan's Glen</h3>"}, // St Nectan's Glen
        {coords: {lat:50.091692, lng:-5.1241721}, content:"<h3>Bosahan Gardens</h3>"}, // Bosahan Gardens
        {coords: {lat:50.4423936, lng:-4.7013472}, content:"<h3>Lanhydrock House and Gardens</h3>"}, // Lanhydrock House and Gardens
        {coords: {lat:50.4555128, lng:-5.0001858}, content:"<h3>The Japanese Garden</h3>"}, // The Japanese Garden
        {coords: {lat:50.4702743, lng:-4.6786729}, content:"<h3>Cardinham Woods</h3>"}, // Cardinham Woods
        {coords: {lat:50.1366064, lng:-5.5083667}, content:"<h3>Tremenheere Sculpture Gardens</h3>"}, // Tremenheere Sculpture Gardens
        {coords: {lat:50.2172203, lng:-5.034446}, content:"<h3>Trelissick Gardens</h3>"}, // Trelissick Gardens
        {coords: {lat:50.2913108, lng:-5.0618025}, content:"<h3>Idless Woods</h3>"}, // Idless Woods
        {coords: {lat:50.4903549, lng:-4.5075518}, content:"<h3>Golitha Falls</h3>"}, // Golitha Falls
        {coords: {lat:50.5548086, lng:-4.6178319}, content:"<h3>Bodmin Moore</h3>"} // Bodmin Moore
    ];

let activityLocations = [
        {coords: {lat:50.385356, lng:-5.0080304}, content:"<h3>Newquay Paintball</h3>"}, // Newquay Paintball
        {coords: {lat:50.5184814, lng:-4.8407397}, content:"<h3>Camel Trail Cycle Hire</h3>"}, // Camel Trail Cycle Hire
        {coords: {lat:50.5984694, lng:-4.7351817}, content:"<h3>Big Dunk's Outdoor Lazer Tag</h3>"}, // Big Dunk's Outdoor Lazer Tag
        {coords: {lat:50.4151414, lng:-5.0890206}, content:"<h3>Escape Surf School</h3>"}, // Escape Surf School
        {coords: {lat:50.3048844, lng:-5.1903987}, content:"<h3>Koru Kayaking Adeventures</h3>"}, // Koru Kayaking Adeventures
        {coords: {lat:50.2740266, lng:-5.1872099}, content:"<h3>ATV Centre Ltd</h3>"}, // ATV Centre Ltd
        {coords: {lat:50.4113864, lng:-5.0716177}, content:"<h3>Newquay Zoo</h3>"}, // Newquay Zoo
        {coords: {lat:50.0951818, lng:-5.2080155}, content:"<h3>Cornish Seal Sanctuary</h3>"}, // Cornish Seal Sanctuary
        {coords: {lat:50.0920744, lng:-5.2622836}, content:"<h3>Flambards Theme Park</h3>"}, // Flambards Theme Park
        {coords: {lat:49.9679088, lng:-5.2080712}, content:"<h3>Lizard Adventure</h3>"}, // Lizard Adventure
        {coords: {lat:50.5413889, lng:-4.8642663}, content:"<h3>Cornish Coasteering</h3>"}, // Cornish Coasteering
        {coords: {lat:50.1166804, lng:-5.5506217}, content:"<h3>Kernow Coasteering</h3>"}, // Kernow Coasteering
        {coords: {lat:50.3596247, lng:-4.1330105}, content:"<h3>Mount Batten Outdoor Climbing Wall</h3>"}, // Mount Batten Outdoor Climbing Wall
        {coords: {lat:50.5597671, lng:-4.6760462}, content:"<h3>Hallagenna Riding</h3>"}, // Hallagenna Riding
        {coords: {lat:50.1461954, lng:-5.5181397}, content:"<h3>Tremenheere Riding Stables</h3>"}, // Tremenheere Riding Stables
        {coords: {lat:50.2092802, lng:-5.479281}, content:"<h3>St Ives Watersports</h3>"}, // St Ives Watersports
        {coords: {lat:50.3750794, lng:-5.0437649}, content:"<h3>Lappa Vallet Steam Railway</h3>"}, // Lappa Vallet Steam Railway
        {coords: {lat:50.3829806, lng:-5.0117826}, content:"<h3>Dairyland Farm Park</h3>"}, // Dairyland Farm Park
        {coords: {lat:50.3472852,lng:-4.7535074}, content:"<h3>Cornwall Football Golf</h3>"}, // Cornwall Football Golf
        {coords: {lat:50.2661006, lng:-5.0552758}, content:"<h3>Truro Bowl</h3>"} // Truro Bowl
            
    ];



// Initialise map

function initMap(selectedLocations) {

   /*  // For testing, let's set selectedLocations
    let selectedLocations = [
        { lat:50.4446539, lng:-5.0434669},
        { lat:50.4151414, lng:-5.0890206},
    ] */
    let myLatlng = { lat: 50.4211456, lng: -4.9904922 };
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 9,
            center: myLatlng
        });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
// iterate through the array of locations and place the markers on the map

    for (let i = 0; i < selectedLocations.length; i++) {
        let marker = new google.maps.Marker({
            position: selectedLocations[i].coords,
            map: map,
            animation: google.maps.Animation.DROP,
        });
   
        const infowindow = new google.maps.InfoWindow({
            content: selectedLocations[i].content,
        });
    
        /*marker.addListener("click", () => {.  // DONT NEED THIS HERE - DELETE SOON AFTER DOUBLE CHECKING
            infowindow.open(map, marker);
        }); */


    // Close previous info window when new info window opened

        google.maps.event.addListener(marker, 'click', function() {
            if (currentInfoWindow != null) {
                currentInfoWindow.close();
            }
        infowindow.open(map, marker);
        currentInfoWindow = infowindow;
        });
        
        var currentInfoWindow = null;
        };






        
// }; this belonged to placeMarkers()

// Add Info Window
    



//  function infoWindow(selectedLocations) {- NO NEED FOR FUNCTION HERE

                // simplify first
                // if(selectedLocations.content){
                //         let infoWindow = new google.maps.infoWindow({
                //             content: selectedLocations.content
                //         });

                //         // Listener for markers

                //     marker.addListener("click", () => {
                //         infoWindow.open(beachLocations);
                //     });
// }
        
 };
 


// Event listeners for button options

        document.getElementById("beaches").addEventListener("click", () => {
            initMap(beachLocations);
        })
        document.getElementById("activities").addEventListener("click", () => {
            initMap(activityLocations);
        })
        document.getElementById("restaurants").addEventListener("click", () => {
            initMap(restaurantLocations);
        })
        document.getElementById("nature").addEventListener("click", () => {
            initMap(natureLocations);
        })
        document.getElementById("hotels").addEventListener("click", () => {
            initMap(hotelLocations);
        })
        document.getElementById("arts").addEventListener("click", () => {
            initMap(artsLocations);
        });

        

// };


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

        

        /* let markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}); */