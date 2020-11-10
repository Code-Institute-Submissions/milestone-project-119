let map;

// Different set of locations

let beachLocations = [{
        coords: {
            lat: 50.416308,
            lng: -5.099469
        }, // Fistral Beach
        content: `<h4 class="info-head">Fistral Beach</h4>
        <h6 class="info-address">Fistral Beach, Newquay, TR7 1HY</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.3483394,
            lng: -5.157094
        }, // Perranporth Beach
        content: `<h4 class="info-head">Perranporth Beach</h4>
        <h6 class="info-address">Perranporth, TR6 0DR</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 49.9732734,
            lng: -5.2337851
        }, // Kynance Cove
        content: `<h4 class="info-head">Kynance Cove</h4>
        <h6 class="info-address">Mullion, Helston, TR12 7PJ</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-times beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.1988996,
            lng: -5.4682206
        }, // Carbis Bay Beach
        content: `<h4 class="info-head">Carbis Bay Beach</h4>
        <h6 class="info-address">Beach Rd, Carbis Bay, Saint Ives, TR26 2NW</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.3908849,
            lng: -5.1483663
        }, // Holywell Bay Beach
        content: `<h4 class="info-head">Holywell Bay Beach</h4>
        <h6 class="info-address">Holywell Bay, Newquay, TR8 5PG</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.0429263,
            lng: -5.6527166
        }, // Porthcurno Beach
        content: `<h4 class="info-head">Porthcurno Beach</h4>
        <h6 class="info-address">Porthcurno, Cornwall, TR19 6JX</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.0535378,
            lng: -5.6944491
        }, // Nanjizal Beach
        content: `<h4 class="info-head">Nanjizal Beach</h4>
        <h6 class="info-address">St Just, Penzance, TR19 6JJ</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-times beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-times beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-times beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.1440767,
            lng: -5.0686287
        }, // Gyllyngvase Beach
        content: `<h4 class="info-head">Gyllyngvase Beach</h4>
        <h6 class="info-address">Cliff Road, Falmouth, TR11 4PA</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.3233711,
            lng: -4.7681669
        }, // Porthpean Beach
        content: `<h4 class="info-head">Porthpean Beach</h4>
        <h6 class="info-address">St Austell, Cornwall, PL25 3RD</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-times beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.8603023,
            lng: -4.5586691
        }, // Sandymouth Bay Beach
        content: `<h4 class="info-head">Sandymouth Bay Beach</h4>
        <h6 class="info-address">Sandymouth, Stibb, Bude, EX23 9HW</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.2894403,
            lng: -4.7821893
        }, // Pentewan Beach
        content: `<h4 class="info-head">Pentewan Beach</h4>
        <h6 class="info-address">Pentewan, Saint Austell, PL26 6BX</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-times beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.6447762,
            lng: -4.7626325
        }, // Trebarwith Beach
        content: `<h4 class="info-head">Trebarwith Beach</h4>
        <h6 class="info-address">Tintagel, PL34 0HB</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.6683152,
            lng: -4.7614876
        }, // Tintagel Haven
        content: `<h4 class="info-head">Tintagel Haven</h4>
        <h6 class="info-address">Atlantic Rd, Tintagel, PL34 0DS</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-times beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.5752425,
            lng: -4.918991
        }, // Polzeath Beach
        content: `<h4 class="info-head">Polzeath Beach</h4>
        <h6 class="info-address">Polzeath Beach, Polzeath, PL22 6TB</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-times beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-times beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-check beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.3528852,
            lng: -4.273459
        }, // Tregantle Beach
        content: `<h4 class="info-head">Tregantle Beach</h4>
        <h6 class="info-address">B3247, Antony, Torpoint, PL11 3AZ</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-check beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-times beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    },
    {
        coords: {
            lat: 50.3305601,
            lng: -4.5187893
        }, // Polperro Beach
        content: `<h4 class="info-head">Polperro Beach</h4>
        <h6 class="info-address">Polperro, Looe, PL13 2QY</h6>
        <div class="info-content">
        <ul>
        <li>Dog friendly<i class="fas fa-check beach-info-list"></i></li>
        <li>Car park<i class="fas fa-check beach-info-list"></i></li>
        <li>Lifeguards<i class="fas fa-times beach-info-list"></i></li>
        <li>Toilets<i class="fas fa-check beach-info-list"></i></li>
        <li>Disabled Access<i class="fas fa-times beach-info-list"></i></li>
        </ul>
        </div>`
    }
];

let activityLocations = [{
        coords: {
            lat: 50.299441,
            lng: -5.1055211
        }, // Bedlam Paintball Truro
        content: `<h4 class="info-head">Bedlam Paintball Truro</h4>
        <h6 class="info-address">Nansavallan Farm, Truro, TR3 6AD</h6>
        <div class="info-content">Phone:<span class="phone-num">07968695276</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.truropaintball.com/"></span>www.truropaintball.com</a></div>`
    },
    {
        coords: {
            lat: 50.5184814,
            lng: -4.8407397
        }, // Camel Trail Cycle Hire
        content: `<h4 class="info-head">Camel Trail Cycle Hire</h4>
        <h6 class="info-address">Eddystone Rd, Wadebridge, PL27 7AL</h6>
        <div class="info-content">Phone:<span class="phone-num">01208814104</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.cameltrailcyclehire.co.uk/"></span>www.cameltrailcyclehire.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.5984694,
            lng: -4.7351817
        }, // Big Dunk's Outdoor Lazer Tag
        content: `<h4 class="info-head">Big Dunk's Outdoor Lazer Tag</h4>
        <h6 class="info-address">Trevilley Farm, Nr Wadebridge, Delabole, PL33 9EU</h6>
        <div class="info-content">Phone:<span class="phone-num">07830153420</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.lasercornwall.co.uk/"></span>www.lasercornwall.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.4151414,
            lng: -5.0890206
        }, // Escape Surf School
        content: `<h4 class="info-head">Escape Surf School</h4>
        <h6 class="info-address">On the Seaview Terrace @ Belushis, 35 Fore St, Newquay, TR7 1HD</h6>
        <div class="info-content">Phone:<span class="phone-num">07810805624</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://escapesurfschool.co.uk/"></span>www.escapesurfschool.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.3048844,
            lng: -5.1903987
        }, // Koru Kayaking Adeventures
        content: `<h4 class="info-head">Koru Kayaking Adeventures</h4>
        <h6 class="info-address">Alder Cottage, Goonbell, Saint Agnes, TR5 0PL</h6>
        <div class="info-content">Phone:<span class="phone-num">07794321827</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.korukayaking.co.uk/"></span>www.korukayaking.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.2740266,
            lng: -5.1872099
        }, // ATV Centre Ltd
        content: `<h4 class="info-head">ATV Centre Ltd</h4>
        <h6 class="info-address">Blackwater, Truro, TR4 8HJ</h6>
        <div class="info-content">Phone:<span class="phone-num">01872560753</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.atv-centre.com/"></span>www.atv-centre.com</a></div>`
    },
    {
        coords: {
            lat: 50.4113864,
            lng: -5.0716177
        }, // Newquay Zoo
        content: `<h4 class="info-head">Newquay Zoo</h4>
        <h6 class="info-address">Trenance Gardens, Newquay, TR7 2NL</h6>
        <div class="info-content">Phone:<span class="phone-num">01637873342</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.newquayzoo.org.uk/"></span>www.newquayzoo.org.uk</a></div>`
    },
    {
        coords: {
            lat: 50.0951818,
            lng: -5.2080155
        }, // Cornish Seal Sanctuary
        content: `<h4 class="info-head">Cornish Seal Sanctuary</h4>
        <h6 class="info-address">Gweek, TR12 6UG</h6>
        <div class="info-content">Phone:<span class="phone-num">01326221361</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://sealsanctuary.sealifetrust.org/"></span>www.sealsanctuary.sealifetrust.org</a></div>`
    },
    {
        coords: {
            lat: 50.0920744,
            lng: -5.2622836
        }, // Flambards Theme Park
        content: `<h4 class="info-head">Flambards Theme Park</h4>
        <h6 class="info-address">Clodgey Ln, Helston, TR13 0QA</h6>
        <div class="info-content">Phone:<span class="phone-num">01326573404</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.flambards.co.uk/"></span>www.flambards.co.uk</a></div>`
    },
    {
        coords: {
            lat: 49.9679088,
            lng: -5.2080712
        }, // Lizard Adventure
        content: `<h4 class="info-head">Lizard Adventure</h4>
        <h6 class="info-address">Lizard Head Ln, Lizard, Helston, TR12 7NN</h6>
        <div class="info-content">Phone:<span class="phone-num">07845204040</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.lizardadventure.co.uk/"></span>www.lizardadventure.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.5413889,
            lng: -4.8642663
        }, // Cornish Coasteering
        content: `<h4 class="info-head">Cornish Coasteering</h4>
        <h6 class="info-address">Dinham Farm, St Minver, Wadebridge, PL27 6RH</h6>
        <div class="info-content">Phone:<span class="phone-num">01208622012</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.cornishcoasteering.com/"></span>www.cornishcoasteering.com</a></div>`
    },
    {
        coords: {
            lat: 50.1166804,
            lng: -5.5506217
        }, // Kernow Coasteering
        content: `<h4 class="info-head">Kernow Coasteering</h4>
        <h6 class="info-address">2 Orchard Ct, Penzance, TR18 4SX</h6>
        <div class="info-content">Phone:<span class="phone-num">07734343954</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.kernow-coasteering.co.uk/"></span>www.kernow-coasteering.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.3596247,
            lng: -4.1330105
        }, // Mount Batten Outdoor Climbing Wall
        content: `<h4 class="info-head">Mount Batten Outdoor Climbing Wall</h4>
        <h6 class="info-address">5 Lawrence Rd, Mount Batten, Plymouth, PL9 9SJ</h6>
        <div class="info-content">Phone:<span class="phone-num">07868123356</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.mountbattenclimbingwall.weebly.com/"></span>www.mountbattenclimbingwall.weebly.com</a></div>`
    },
    {
        coords: {
            lat: 50.5597671,
            lng: -4.6760462
        }, // Hallagenna Riding
        content: `<h4 class="info-head">Hallagenna Riding</h4>
        <h6 class="info-address">Hallagenna Farm, St Breward, Bodmin, PL30 4NS</h6>
        <div class="info-content">Phone:<span class="phone-num">01208851500</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.hallagenna.co.uk/"></span>www.hallagenna.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.1461954,
            lng: -5.5181397
        }, // Tremenheere Riding Stables
        content: `<h4 class="info-head">Tremenheere Riding Stables</h4>
        <h6 class="info-address">Ludgvan, Penzance, TR20 8XG</h6>
        <div class="info-content">Phone:<span class="phone-num">07799411697</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.tremenheereridingstables.co.uk/"></span>www.tremenheereridingstables.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.2092802,
            lng: -5.479281
        }, // St Ives Watersports
        content: `<h4 class="info-head">St Ives Watersports</h4>
        <h6 class="info-address">Porthminster Beach, Townside, Carbis Bay, Saint Ives, TR26 2EB</h6>
        <div class="info-content">Phone:<span class="phone-num">01736793938</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.stivessurfschool.co.uk/"></span>www.stivessurfschool.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.3750794,
            lng: -5.0437649
        }, // Lappa Valley Steam Railway
        content: `<h4 class="info-head">Lappa Valley Steam Railway</h4>
        <h6 class="info-address">St Newlyn East, Newquay, TR8 5LX</h6>
        <div class="info-content">Phone:<span class="phone-num">01872510317</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.lappavalley.co.uk/"></span>www.lappavalley.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.3829806,
            lng: -5.0117826
        }, // Dairyland Farm Park
        content: `<h4 class="info-head">Dairyland Farm Park</h4>
        <h6 class="info-address">Tresillian Barton, Newquay, TR8 5AA</h6>
        <div class="info-content">Phone:<span class="phone-num">01872510246</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.dairylandfarmpark.com/"></span>www.dairylandfarmpark.com</a></div>`
    },
    {
        coords: {
            lat: 50.3472852,
            lng: -4.7535074
        }, // Cornwall Football Golf
        content: `<h4 class="info-head">Cornwall Football Golf</h4>
        <h6 class="info-address">Trenowah Rd, Saint Austell, PL25 3GD</h6>
        <div class="info-content">Phone:<span class="phone-num">0172668952</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.cornwallfootballgolf.co.uk/"></span>www.cornwallfootballgolf.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.2661006,
            lng: -5.0552758
        }, // Truro Bowl
        content: `<h4 class="info-head">Truro Bowl</h4>
        <h6 class="info-address">1-2 Oak Way, Truro, TR1 1DW</h6>
        <div class="info-content">Phone:<span class="phone-num">01872222333</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.truro-bowl.co.uk/"></span>www.truro-bowl.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.0380941,
            lng: -5.2640414
        }, // Mullion Golf Club
        content: `<h4 class="info-head">Mullion Golf Club</h4>
        <h6 class="info-address">Cornwall, TR12 7BP</h6>
        <div class="info-content">Phone:<span class="phone-num">01326240685</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.mulliongolfclub.co.uk/"></span>www.mulliongolfclub.co.uk</a></div>`
    }
];

let restaurantLocations = [{
        coords: {
            lat: 50.5401069,
            lng: -4.938946
        }, // The Seafood Restaurant
        content: `<h4 class="info-head">The Seafood Restaurant</h4>
        <h6 class="info-address">Riverside, Padstow, PL28 8BY</h6>
        <div class="info-content">Phone:<span class="phone-num">01841532700</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://rickstein.com/restaurants/the-seafood-restaurant/"></span>www.rickstein.com/the-seafood-restaurant</a></div>`
    },
    {
        coords: {
            lat: 50.6635645,
            lng: -4.753678
        }, // King Arthurs Arms Inn
        content: `<h4 class="info-head">King Arthurs Arms Inn</h4>
        <h6 class="info-address">Fore St, Tintagel, PL34 0DA</h6>
        <div class="info-content">Phone:<span class="phone-num">01840770628</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.kingarthursarms.co.uk/"></span>www.kingarthursarms.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.4117706,
            lng: -5.1210257
        }, // Lewinnick Lodge
        content: `<h4 class="info-head">Lewinnick Lodge</h4>
        <h6 class="info-address">Pentire headland, Newquay, TR7 1QD</h6>
        <div class="info-content">Phone:<span class="phone-num">01637878117</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.lewinnicklodge.co.uk/"></span>www.lewinnicklodge.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.3182604,
            lng: -5.2045607
        }, // The Driftwood Spars
        content: `<h4 class="info-head">The Driftwood Spars</h4>
        <h6 class="info-address">Trevaunance Rd, Saint Agnes, TR5 0RT</h6>
        <div class="info-content">Phone:<span class="phone-num">01872552428</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.driftwoodspars.com/"></span>www.driftwoodspars.com</a></div>`
    },
    {
        coords: {
            lat: 50.4442014,
            lng: -5.0440957
        }, // The Beach Hut
        content: `<h4 class="info-head">The Beach Hut</h4>
        <h6 class="info-address">Watergate Bay, Newquay, TR8 4AA</h6>
        <div class="info-content">Phone:<span class="phone-num">01637860877</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.watergatebay.co.uk/eat/the-beach-hut/"></span>www.watergatebay.co.uk/eat/the-beach-hut</a></div>`
    },
    {
        coords: {
            lat: 50.3688044,
            lng: -4.9865617
        }, // The Fox's Revenge
        content: `<h4 class="info-head">The Fox's Revenge</h4>
        <h6 class="info-address">Carvynick Farm, A3058, Newquay, TR8 5AF</h6>
        <div class="info-content">Phone:<span class="phone-num">01872510544</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://thefoxsrevenge.com/"></span>www.thefoxsrevenge.com</a></div>`
    },
    {
        coords: {
            lat: 50.2741604,
            lng: -4.7882751
        }, // The Nutty Duck
        content: `<h4 class="info-head">The Nutty Duck</h4>
        <h6 class="info-address">Trevalsa Court, School Hill, Mevagissey, PL26 6TH</h6>
        <div class="info-content">Phone:<span class="phone-num">01726842468</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://thenuttyduckcornwall.co.uk/"></span>www.thenuttyduckcornwall.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.2132507,
            lng: -5.4826186
        }, // Beer & Bird
        content: `<h4 class="info-head">Beer & Bird</h4>
        <h6 class="info-address">18A Fore St, Saint Ives, TR26 1AB</h6>
        <div class="info-content">Phone:<span class="phone-num">01736780606</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.beerandbird.com/"></span>www.beerandbird.com</a></div>`
    },
    {
        coords: {
            lat: 50.118647,
            lng: -5.5357156
        }, // Old Lifeboat House Bistro
        content: `<h4 class="info-head">Old Lifeboat House Bistro</h4>
        <h6 class="info-address">Wharf Rd, Penzance, TR18 4AA</h6>
        <div class="info-content">Phone:<span class="phone-num">01736369409</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://oldlifeboathousebistro.com/"></span>www.oldlifeboathousebistro.com</a></div>`
    },
    {
        coords: {
            lat: 50.5414871,
            lng: -4.9421653
        }, // Paul Ainsworth Number 6
        content: `<h4 class="info-head">Paul Ainsworth Number 6</h4>
        <h6 class="info-address">6 Middle St, Padstow, PL28 8AP</h6>
        <div class="info-content">Phone:<span class="phone-num">01841532093</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.number6inpadstow.co.uk/"></span>www.number6inpadstow.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.3358357,
            lng: -4.6368888
        }, // Appleton's Bar and Restaurant
        content: `<h4 class="info-head">Appleton's Bar and Restaurant</h4>
        <h6 class="info-address">19 Fore St, Fowey, PL23 1AH</h6>
        <div class="info-content">Phone:<span class="phone-num">01872228738</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://appletonsrestaurant.com//"></span>www.appletonsrestaurant.com</a></div>`
    },
    {
        coords: {
            lat: 50.2293495,
            lng: -5.3889681
        }, // The Rockpool
        content: `<h4 class="info-head">The Rockpool</h4>
        <h6 class="info-address">1 Godrevy Towans, Gwithian, Hayle, TR27 5ED</h6>
        <div class="info-content">Phone:<span class="phone-num">01736449990</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.therockpoolbar.co.uk/"></span>www.therockpoolbar.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.5933214,
            lng: -4.8274969
        }, // The Angry Anchovy
        content: `<h4 class="info-head">The Angry Anchovy</h4>
        <h6 class="info-address">10 New Rd, Port Isaac, PL29 3SB</h6>
        <div class="info-content">Phone:<span class="phone-num">01208881384</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.theangryanchovy.co.uk/"></span>www.theangryanchovy.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.2627936,
            lng: -5.0535122
        }, // Manning's Bar and Restaurant
        content: `<h4 class="info-head">Manning's Bar and Restaurant</h4>
        <h6 class="info-address">Mannings Hotel, 82 Lemon St, Truro, TR1 2QB</h6>
        <div class="info-content">Phone:<span class="phone-num">01872247900</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.manningshotels.co.uk/restaurant"></span>www.manningshotels.co.uk/restaurant</a></div>`
    },
    {
        coords: {
            lat: 50.2378956,
            lng: -5.2489994
        }, // Tricky's
        content: `<h4 class="info-head">Tricky's</h4>
        <h6 class="info-address">Tolgus Mount, Redruth, TR15 3TA</h6>
        <div class="info-content">Phone:<span class="phone-num">01209219292</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.trickyscornwall.co.uk/"></span>www.trickyscornwall.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.1525864,
            lng: -5.0686506
        }, // Cribbs Cornwall
        content: `<h4 class="info-head">Cribbs Cornwall</h4>
        <h6 class="info-address">33 Arwenack St, Falmouth, TR11 3JE</h6>
        <div class="info-content">Phone:<span class="phone-num">01326210000</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.cribbscornwall.co.uk/"></span>www.cribbscornwall.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.1234351,
            lng: -5.4766158
        }, // The Godolphin
        content: `<h4 class="info-head">The Godolphin</h4>
        <h6 class="info-address">W End, Marazion, TR17 0EN</h6>
        <div class="info-content">Phone:<span class="phone-num">01736888510</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.thegodolphin.com/"></span>www.thegodolphin.com</a></div>`
    },
    {
        coords: {
            lat: 50.1010554,
            lng: -5.2768267
        }, // Henley's Bar and Restaurant
        content: `<h4 class="info-head">Henley's Bar and Restaurant</h4>
        <h6 class="info-address">2 Church St, Helston, TR13 8TG</h6>
        <div class="info-content">Phone:<span class="phone-num">01326561141</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.henlysbarandrestaurant.co.uk/"></span>www.henlysbarandrestaurant.co.uk</a></div>`
    },
    {
        coords: {
            lat: 49.9679807,
            lng: -5.2055365
        }, // The Witchball
        content: `<h4 class="info-head">The Witchball</h4>
        <h6 class="info-address">Lighthouse Rd, Lizard, Helston, TR12 7NJ</h6>
        <div class="info-content">Phone:<span class="phone-num">01326290662</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.witchball.co.uk/"></span>www.witchball.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.0657729,
            lng: -5.7167688
        }, // The Land's End Restaurant and Bar
        content: `<h4 class="info-head">The Land's End Restaurant and Bar</h4>
        <h6 class="info-address">Sennen, Penzance, TR19 7AA</h6>
        <div class="info-content">Phone:<span class="phone-num">01736871844</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.landsendrestaurant.co.uk/"></span>www.landsendrestaurant.co.uk</a></div>`
    }
];

let natureLocations = [{
        coords: {
            lat: 50.285367,
            lng: -4.8133752
        }, // Lost Gardens of Heligan
        content: `<h4 class="info-head">Lost Gardens of Heligan</h4>
        <h6 class="info-address">B3273, Pentewan, Saint Austell, PL26 6EN</h6>
        <div class="info-content">Phone:<span class="phone-num">01726845100</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://heligan.com/"></span>www.heligan.com</a></div>`
    },
    {
        coords: {
            lat: 50.1067235,
            lng: -5.1239471
        }, // Trebah Gardens
        content: `<h4 class="info-head">Trebah Gardens</h4>
        <h6 class="info-address">Trebah Garden Trust, Mawnan Smith, Falmouth, TR11 5JZ</h6>
        <div class="info-content">Phone:<span class="phone-num">01326252200</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.trebahgarden.co.uk/"></span>www.trebahgarden.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.4767156,
            lng: -4.784576
        }, // Camel Valley Vineyard 
        content: `<h4 class="info-head">Camel Valley Vineyard</h4>
        <h6 class="info-address">Nanstallon, Bodmin, PL30 5LG</h6>
        <div class="info-content">Phone:<span class="phone-num">0120877959</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.camelvalley.com/"></span>www.camelvalley.com</a></div>`
    },
    {
        coords: {
            lat: 50.378775,
            lng: -4.6840813
        }, // Hidden Valley Gardens
        content: `<h4 class="info-head">Hidden Valley Gardens</h4>
        <h6 class="info-address">Par, PL24 2TU</h6>
        <div class="info-content">Phone:<span class="phone-num">01208873225</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.hiddenvalleygardens.co.uk/"></span>www.hiddenvalleygardens.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.0632964,
            lng: -5.5699571
        }, // Chygurno Gardens
        content: `<h4 class="info-head">Chygurno Gardens</h4>
        <h6 class="info-address">Penryn, TR10 9LB</h6>
        <div class="info-content">Phone:<span class="phone-num">01736732153</span></div>`
    },
    {
        coords: {
            lat: 50.1859412,
            lng: -5.0979424
        }, // Enys Gardens
        content: `<h4 class="info-head">Enys Gardens</h4>
        <h6 class="info-address">Penryn, TR10 9LB</h6>
        <div class="info-content">Phone:<span class="phone-num">01326377621</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.enysgardens.org.uk/"></span>www.enysgardens.org.uk</a></div>`
    },
    {
        coords: {
            lat: 50.1091128,
            lng: -5.1192471
        }, // Glendurgen Gardens
        content: `<h4 class="info-head">Glendurgen Gardens</h4>
        <h6 class="info-address">Falmouth, TR11 5JZ</h6>
        <div class="info-content">Phone:<span class="phone-num">01326 252020</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.nationaltrust.org.uk/glendurgan-garden"></span>www.nationaltrust.org.uk</a></div>`
    },
    {
        coords: {
            lat: 50.6708412,
            lng: -4.7272415
        }, // St Nectan's Glen
        content: `<h4 class="info-head">St Nectan's Glen</h4>
        <h6 class="info-address">Trethevy, Tintagel, PL34 0BG</h6>
        <div class="info-content">Phone:<span class="phone-num">01840779538</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.st-nectansglen.co.uk/"></span>www.st-nectansglen.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.091692,
            lng: -5.1241721
        }, // Bosahan Gardens
        content: `<h4 class="info-head">Bosahan Gardens</h4>
        <h6 class="info-address">Bosahan Estate Office, Helston, TR12 6JL</h6>
        <div class="info-content">Phone:<span class="phone-num">01326231351</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.visitcornwall.com/things-to-do/outdoor/west-cornwall/helston/bosahan-garden"></span>www.visitcornwall.com</a></div>`
    },
    {
        coords: {
            lat: 50.4423936,
            lng: -4.7013472
        }, // Lanhydrock House and Gardens
        content: `<h4 class="info-head">Lanhydrock House and Gardens</h4>
        <h6 class="info-address">Treffry Ln, Bodmin, PL30 5AD</h6>
        <div class="info-content">Phone:<span class="phone-num">01208265950</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.nationaltrust.org.uk/lanhydrock"></span>www.nationaltrust.org.uk/lanhydrock</a></div>`
    },
    {
        coords: {
            lat: 50.4555128,
            lng: -5.0001858
        }, // The Japanese Garden
        content: `<h4 class="info-head">The Japanese Garden</h4>
        <h6 class="info-address">St Mawgan, Nr Newquay, TR8 4ET</h6>
        <div class="info-content">Phone:<span class="phone-num">01637860116</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.japanesegarden.co.uk/"></span>www.japanesegarden.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.4702743,
            lng: -4.6786729
        }, // Cardinham Woods
        content: `<h4 class="info-head">Cardinham Woods</h4>
        <h6 class="info-address">Bodmin, PL30 4AL</h6>
        <div class="info-content">Phone:<span class="phone-num">0120876787</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.forestryengland.uk/cardinham-woods"></span>www.forestryengland.uk/cardinham-woods</a></div>`
    },
    {
        coords: {
            lat: 50.1366064,
            lng: -5.5083667
        }, // Tremenheere Sculpture Gardens
        content: `<h4 class="info-head">Tremenheere Sculpture Gardens</h4>
        <h6 class="info-address">Nr Gulval, Penzance, TR20 8YL</h6>
        <div class="info-content">Phone:<span class="phone-num">01736448089</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.tremenheere.co.uk/"></span>www.tremenheere.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.2172203,
            lng: -5.034446
        }, // Trelissick Gardens
        content: `<h4 class="info-head">Trelissick Gardens</h4>
        <h6 class="info-address">Dicky Ln, Feock, Truro, TR3 6QL</h6>
        <div class="info-content">Phone:<span class="phone-num">01872862090</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.nationaltrust.org.uk/trelissick"></span>www.nationaltrust.org.uk/trelissick</a></div>`
    },
    {
        coords: {
            lat: 50.2913108,
            lng: -5.0618025
        }, // Idless Woods
        content: `<h4 class="info-head">Idless Woods</h4>
        <h6 class="info-address">Truro, TR4 9QT</h6>
        <div class="info-content">Phone:<span class="phone-num">0300 067 4800</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.forestryengland.uk/idless-woods"></span>www.forestryengland.uk/idless-woods</a></div>`
    },
    {
        coords: {
            lat: 50.4903549,
            lng: -4.5075518
        }, // Golitha Falls
        content: `<h4 class="info-head">Golitha Falls</h4>
        <h6 class="info-address">15 Well Ln, Liskeard, PL14 5ED</h6>
        <div class="info-content">Phone:<span class="phone-num">01726891096</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.gov.uk/government/publications/cornwalls-national-nature-reserves/cornwalls-nature-reserves#golitha-falls"></span>www.gov.uk/government/cornwalls-nature-reserves</a></div>`
    },
    {
        coords: {
            lat: 50.5548086,
            lng: -4.6178319
        }, // Bodmin Moore
        content: `<h4 class="info-head">Bodmin Moore</h4>
        <h6 class="info-address">Bodmin, PL30 4NN</h6>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.cornwalls.co.uk/bodmin/bodmin_moor.htm"></span>www.cornwalls.co.uk/bodmin/bodmin_moor</a></div>`
    }
];

let hotelLocations = [{
        coords: {
            lat: 50.4446539,
            lng: -5.0434669
        }, // Watergate Bay Hotel
        content: `<h4 class="info-head">Watergate Bay Hotel</h4>
        <h6 class="info-address">On The Beach, Trevarrian Hill, Newquay, TR8 4AA</h6>
        <div class="info-content">Phone:<span class="phone-num">01637860543</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.watergatebay.co.uk/"></span>www.watergatebay.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.3359557,
            lng: -4.6362102
        }, // The Old Quay House Hotel
        content: `<h4 class="info-head">The Old Quay House Hotel</h4>
        <h6 class="info-address">28 Fore St, Fowey, PL23 1AQ</h6>
        <div class="info-content">Phone:<span class="phone-num">01726833302</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.theoldquayhouse.com/"></span>www.theoldquayhouse.com</a></div>`
    },
    {
        coords: {
            lat: 50.0646398,
            lng: -5.5706962
        }, // The Cove Lamorna
        content: `<h4 class="info-head">The Cove Lamorna</h4>
        <h6 class="info-address">Lamorna Cove, Well Ln, Lamorna, Hotel, TR19 6XH</h6>
        <div class="info-content">Phone:<span class="phone-num">01736278990</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.thecovecornwall.co.uk/"></span>www.thecovecornwall.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.5404889,
            lng: -4.9398744
        }, // Rick Steins St Edmunds House
        content: `<h4 class="info-head">Rick Steins St Edmunds House</h4>
        <h6 class="info-address">5 St Edmunds Ln, Padstow, PL28 8BZ</h6>
        <div class="info-content">Phone:<span class="phone-num">01841532700</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.rickstein.com/accommodation/st-edmunds-house/"></span>www.rickstein.com/accommodation/st-edmunds-house</a></div>`
    },
    {
        coords: {
            lat: 50.0252684,
            lng: -5.1004173
        }, // The Bay Hotel
        content: `<h4 class="info-head">The Bay Hotel</h4>
        <h6 class="info-address">Coverack, Helston, TR12 6TE</h6>
        <div class="info-content">Phone:<span class="phone-num">01326280464</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.thebayhotel.co.uk/"></span>www.thebayhotel.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.0832088,
            lng: -5.5390743
        }, // Ship Inn
        content: `<h4 class="info-head">The Ship Inn</h4>
        <h6 class="info-address">S Cliff, Mousehole, Penzance, TR19 6QX</h6>
        <div class="info-content">Phone:<span class="phone-num">01736731234</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.shipinnmousehole.co.uk/"></span>www.shipinnmousehole.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.184234,
            lng: -5.5961044
        }, // Gurnards Head Hotel
        content: `<h4 class="info-head">Gurnards Head Hotel</h4>
        <h6 class="info-address">Coastguard Station, Zennor, St Ives, TR26 3DE</h6>
        <div class="info-content">Phone:<span class="phone-num">01736796928</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.gurnardshead.co.uk/"></span>www.gurnardshead.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.0219264,
            lng: -5.2558797
        }, // Polurrian on the Lizard
        content: `<h4 class="info-head">Polurrian on the Lizard</h4>
        <h6 class="info-address">Polurrian Rd, Mullion, Helston, TR12 7EN</h6>
        <div class="info-content">Phone:<span class="phone-num">01326240421</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.polurrianhotel.com/"></span>www.polurrianhotel.com</a></div>`
    },
    {
        coords: {
            lat: 50.1580258,
            lng: -5.0177567
        }, // St Mawes Hotel
        content: `<h4 class="info-head">St Mawes Hotel</h4>
        <h6 class="info-address">Harbourside, St Mawes, TR2 5DN</h6>
        <div class="info-content">Phone:<span class="phone-num">01326270170</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.stmaweshotel.com/"></span>www.stmaweshotel.com</a></div>`
    },
    {
        coords: {
            lat: 50.3359522,
            lng: -4.7413545
        }, // The Carlyon Bay Hotel
        content: `<h4 class="info-head">The Carlyon Bay Hotel</h4>
        <h6 class="info-address">Sea Rd, Carlyon Bay, Saint Austell, PL25 3RD</h6>
        <div class="info-content">Phone:<span class="phone-num">01726812304</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.carlyonbay.com/"></span>www.carlyonbay.com</a></div>`
    },
    {
        coords: {
            lat: 50.6682234,
            lng: -4.757652
        }, // Camelot Castle Hotel
        content: `<h4 class="info-head">Camelot Castle Hotel</h4>
        <h6 class="info-address">Castle View, Tintagel, PL34 0DQ</h6>
        <div class="info-content">Phone:<span class="phone-num">01840770202</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.camelotcastle.com/"></span>www.camelotcastle.com</a></div>`
    },
    {
        coords: {
            lat: 50.3053767,
            lng: -5.2161079
        }, // Beacon Country House Hotel
        content: `<h4 class="info-head">Beacon Country House Hotel</h4>
        <h6 class="info-address">Goonvrea Rd, Saint Agnes, TR5 0NW</h6>
        <div class="info-content">Phone:<span class="phone-num">01872552318</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.beaconhotel.co.uk/"></span>www.beaconhotel.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.1591359,
            lng: -5.01552
        }, // The Idle Rocks
        content: `<h4 class="info-head">The Idle Rocks</h4>
        <h6 class="info-address">Harbourside, Tredenham Rd, St Mawes, Truro, TR2 5AN</h6>
        <div class="info-content">Phone:<span class="phone-num">01326270270</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.idlerocks.com/"></span>www.idlerocks.com</a></div>`
    },
    {
        coords: {
            lat: 50.3398108,
            lng: -4.4972886
        }, // Tallard Bay Hotel
        content: `<h4 class="info-head">Tallard Bay Hotel</h4>
        <h6 class="info-address">Porthallow, Looe, PL13 2JB</h6>
        <div class="info-content">Phone:<span class="phone-num">01503272667</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.tallandbayhotel.co.uk/"></span>www.tallandbayhotel.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.2075034,
            lng: -4.9413554
        }, // The Nare Hotel
        content: `<h4 class="info-head">The Nare Hotel</h4>
        <h6 class="info-address">Carne Beach, Veryan-in-Roseland, Truro, TR2 5PF</h6>
        <div class="info-content">Phone:<span class="phone-num">01872501111</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.narehotel.co.uk/"></span>www.narehotel.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.2662784,
            lng: -5.0461957
        }, // The Alverton Hotel
        content: `<h4 class="info-head">The Alverton Hotel</h4>
        <h6 class="info-address">Tregolls Rd, Truro, TR1 1ZQ</h6>
        <div class="info-content">Phone:<span class="phone-num">01872276633</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.thealverton.co.uk/"></span>www.thealverton.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.1982306,
            lng: -5.4687445
        }, // Carbis Bay Hotel
        content: `<h4 class="info-head">Carbis Bay Hotel</h4>
        <h6 class="info-address">Carbis Bay, Saint Ives, TR26 2NP</h6>
        <div class="info-content">Phone:<span class="phone-num">01736795311</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.carbisbayhotel.co.uk/"></span>www.carbisbayhotel.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.1236677,
            lng: -5.4755258
        }, // Marizion Hotel
        content: `<h4 class="info-head">Marizion Hotel</h4>
        <h6 class="info-address">The Square, Marazion, TR17 0AP</h6>
        <div class="info-content">Phone:<span class="phone-num">01736710334</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.marazionhotel.co.uk/"></span>www.marazionhotel.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.6380725,
            lng: -4.3647504
        }, // The Eagle House Hotel
        content: `<h4 class="info-head">The Eagle House Hotel</h4>
        <h6 class="info-address">3 Castle St, Launceston, PL15 8BA</h6>
        <div class="info-content">Phone:<span class="phone-num">01566774488</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.theeaglehousehotel.com/"></span>www.theeaglehousehotel.com</a></div>`
    },
    {
        coords: {
            lat: 50.0656501,
            lng: -5.71666
        }, // The Land's End Hotel
        content: `<h4 class="info-head">The Land's End Hotel</h4>
        <h6 class="info-address">Land's End, Sennen, TR19 7AA</h6>
        <div class="info-content">Phone:<span class="phone-num">01736871844</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.landsendhotel.co.uk/"></span>www.landsendhotel.co.uk</a></div>`
    }
];

let artsLocations = [{
        coords: {
            lat: 50.0413674,
            lng: -5.6531434
        }, // The Minack Theatre
        content: `<h4 class="info-head">The Minack Theatre</h4>
        <h6 class="info-address">The Minack Theatre, Porthcurno, Penzance, TR19 6JU</h6>
        <div class="info-content">Phone:<span class="phone-num">01736810181</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.minack.com/"></span>www.minack.com</a></div>`
    },
    {
        coords: {
            lat: 50.2641193,
            lng: -5.0534362
        }, // Truro Cathedral
        content: `<h4 class="info-head">Truro Cathedral</h4>
        <h6 class="info-address">St Mary's St, Truro, TR1 2AF</h6>
        <div class="info-content">Phone:<span class="phone-num">01872276782</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.trurocathedral.org.uk/"></span>www.trurocathedral.org.uk</a></div>`
    },
    {
        coords: {
            lat: 50.1461128,
            lng: -5.0488191
        }, // Pendennis Castle
        content: `<h4 class="info-head">Pendennis Castle</h4>
        <h6 class="info-address">Castle Dr, Falmouth, TR11 4LP</h6>
        <div class="info-content">Phone:<span class="phone-num">01326316594</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.english-heritage.org.uk/visit/places/pendennis-castle/"></span>www.english-heritage.org.uk/pendennis-castle</a></div>`
    },
    {
        coords: {
            lat: 50.6672847,
            lng: -4.760694
        }, // Tintagel Castle
        content: `<h4 class="info-head">Tintagel Castle</h4>
        <h6 class="info-address">Castle Rd, Tintagel, PL34 0HE</h6>
        <div class="info-content">Phone:<span class="phone-num">03703331181</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://www.english-heritage.org.uk/visit/places/tintagel-castle"></span>www.english-heritage.org.uk/tintagel-castle</a></div>`
    },
    {
        coords: {
            lat: 50.3601378,
            lng: -4.7469065
        }, // Eden Project 
        content: `<h4 class="info-head">Eden Project</h4>
        <h6 class="info-address">Bodelva, Par, PL24 2SG</h6>
        <div class="info-content">Phone:<span class="phone-num">01726811911</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.edenproject.com/"></span>www.edenproject.com</a></div>`
    },
    {
        coords: {
            lat: 50.1165102,
            lng: -5.4802691
        }, // St Michael's Mount
        content: `<h4 class="info-head">St Michael's Mount</h4>
        <h6 class="info-address">Harbour View, Marazion, TR17 0HS</h6>
        <div class="info-content">Phone:<span class="phone-num">01736710265</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.stmichaelsmount.co.uk/"></span>www.stmichaelsmount.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.2148385,
            lng: -5.4846445
        }, // Tate St Ives
        content: `<h4 class="info-head">Tate St Ives</h4>
        <h6 class="info-address">Porthmeor Beach, Saint Ives, TR26 1TG</h6>
        <div class="info-content">Phone:<span class="phone-num">01736796226</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.tate.org.uk/stives"></span>www.tate.org.uk/stives</a></div>`
    },
    {
        coords: {
            lat: 50.2133028,
            lng: -5.4832626
        }, // Barbara Hepworth Museum
        content: `<h4 class="info-head">Barbara Hepworth Museum</h4>
        <h6 class="info-address">Barnoon Hill, Saint Ives, TR26 1AD</h6>
        <div class="info-content">Phone:<span class="phone-num">01736796226</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.tate.org.uk/visit/tate-st-ives/barbara-hepworth-museum-and-sculpture-garden"></span>www.tate.org.uk/barbara-hepworth-museum</a></div>`
    },
    {
        coords: {
            lat: 50.1517431,
            lng: -5.6784109
        }, // Geevor Tin Mine
        content: `<h4 class="info-head">Geevor Tin Mine</h4>
        <h6 class="info-address">Pendeen, Penzance, TR19 7EW</h6>
        <div class="info-content">Phone:<span class="phone-num">01736788662</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.geevor.com/"></span>www.geevor.com</a></div>`
    },
    {
        coords: {
            lat: 50.4748864,
            lng: -4.7307867
        }, // Bodmin Jail
        content: `<h4 class="info-head">Bodmin Jail</h4>
        <h6 class="info-address">Berrycoombe Rd, Bodmin, PL31 2NR</h6>
        <div class="info-content">Phone:<span class="phone-num">0120876292</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.bodminjail.org/"></span>www.bodminjail.org</a></div>`
    },
    {
        coords: {
            lat: 50.3226815,
            lng: -5.2027042
        }, // St Agnes Heritage Coast
        content: `<h4 class="info-head">St Agnes Heritage Coast</h4>
        <h6 class="info-address">7 Beachfield Ct, Penzance, TR18 4NQ</h6>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://visitstagnes.com/"></span>www.visitstagnes.com</a></div>`
    },
    {
        coords: {
            lat: 50.1556299,
            lng: -5.0746233
        }, // Falmouth Art Gallery
        content: `<h4 class="info-head">Falmouth Art Gallery</h4>
        <h6 class="info-address">The Moor, Municipal Buildings, Falmouth, TR11 2RT</h6>
        <div class="info-content">Phone:<span class="phone-num">01326313863</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.falmouthartgallery.com/"></span>www.falmouthartgallery.com</a></div>`
    },
    {
        coords: {
            lat: 50.2393609,
            lng: -4.8488722
        }, // Caerhays Castle
        content: `<h4 class="info-head">Caerhays Castle</h4>
        <h6 class="info-address">Gorran Churchtown, Saint Austell, PL26 6LY</h6>
        <div class="info-content">Phone:<span class="phone-num">01872501310</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="https://visit.caerhays.co.uk/"></span>www.visit.caerhays.co.uk</a></div>`
    },
    {
        coords: {
            lat: 50.386793,
            lng: -5.0410428
        }, // Trerice Manor
        content: `<h4 class="info-head">Trerice Manor</h4>
        <h6 class="info-address">Kestle Mill, Newquay, TR8 4PG</h6>
        <div class="info-content">Phone:<span class="phone-num">01637875404</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.nationaltrust.org.uk/trerice"></span>www.nationaltrust.org.uk/trerice</a></div>`
    },
    {
        coords: {
            lat: 50.2626163,
            lng: -5.0528392
        }, // Hall for Cornwall
        content: `<h4 class="info-head">Hall for Cornwall</h4>
        <h6 class="info-address">Back Quay, Truro, TR1 2LL</h6>
        <div class="info-content">Phone:<span class="phone-num">01872262466</span></div>
        <div class="info-content">Website:<span class="info-website"><a target="blank" href="http://www.hallforcornwall.co.uk/"></span>www.hallforcornwall.co.uk</a></div>`
    }
];

// Initialise map

function initMap(selectedLocations) {
    let myLatlng = {
        lat: 50.4211456,
        lng: -4.9904922
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: myLatlng,
        disableDefaultUI: true,
    });

    // Change zoom level on smaller screen sizes

    if (window.screen.width < 768) {
        let myLatlng = {
            lat: 50.4211456,
            lng: -4.9904922
        };

        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: myLatlng,
            disableDefaultUI: true,
        });
    }

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Iterate through the array of locations and place the markers on the map

    if (selectedLocations) {
        for (let i = 0; i < selectedLocations.length; i++) {
            let marker = new google.maps.Marker({
                position: selectedLocations[i].coords,
                map: map,
                animation: google.maps.Animation.DROP,
            });

            // Create info window

            const infowindow = new google.maps.InfoWindow({
                content: selectedLocations[i].content,
            });

            // Close previous info window when new info window opened

            google.maps.event.addListener(marker, 'click', function () {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }

                infowindow.open(map, marker);
                currentInfoWindow = infowindow;
            });

            var currentInfoWindow = null;
        }
    }
}

// Event listeners for button options to drop markers and call functions to display top 3

document.getElementById("beaches").addEventListener("click", () => {
    initMap(beachLocations);
    topThreeBeach();
});
document.getElementById("activities").addEventListener("click", () => {
    initMap(activityLocations);
    topThreeActivities();
});
document.getElementById("restaurants").addEventListener("click", () => {
    initMap(restaurantLocations);
    topThreeRestaurant();
});
document.getElementById("nature").addEventListener("click", () => {
    initMap(natureLocations);
    topThreeNature();
});
document.getElementById("hotels").addEventListener("click", () => {
    initMap(hotelLocations);
    topThreeHotel();
});
document.getElementById("arts").addEventListener("click", () => {
    initMap(artsLocations);
    topThreeArt();
});

// Functions to display top 3 recommendations

function topThreeBeach() {
    clearRecos();
    document.getElementById("beach-recos").style.display = "block";
}

function topThreeActivities() {
    clearRecos();
    document.getElementById("activity-recos").style.display = "block";
}

function topThreeRestaurant() {
    clearRecos();
    document.getElementById("restaurant-recos").style.display = "block";
}

function topThreeNature() {
    clearRecos();
    document.getElementById("nature-recos").style.display = "block";
}

function topThreeHotel() {
    clearRecos();
    document.getElementById("hotel-recos").style.display = "block";
}

function topThreeArt() {
    clearRecos();
    document.getElementById("art-recos").style.display = "block";
}

// Function to clear previous display of top 3 recommendations

function clearRecos() {
    document.getElementById("beach-recos").style.display = "none";
    document.getElementById("activity-recos").style.display = "none";
    document.getElementById("restaurant-recos").style.display = "none";
    document.getElementById("nature-recos").style.display = "none";
    document.getElementById("hotel-recos").style.display = "none";
    document.getElementById("art-recos").style.display = "none";
}