// Erode Explore: vanilla JavaScript. No framework or installation needed.
(() => {
"use strict";
let destinations = [
  {
    "id": "kodiveri",
    "name": "Kodiveri Dam",
    "category": "Dams & Rivers",
    "location": "Kodiveri, near Gobichettipalayam",
    "description": "A beautiful cascade across the Bhavani River, framed by greenery. A favourite escape for a relaxed day by the water.",
    "tagline": "Waterfront escape",
    "note": "Check current water releases and local access restrictions. Bathing may be prohibited during high flows.",
    "source": "https://erode.nic.in/tourism/places-of-interest/",
    "image": "/__l5e/assets-v1/76454968-efc8-455c-9498-f579d1b6687c/erode-kodiveri.jpg",
    "mapQuery": "Kodiveri Dam, Kodiveri, near Gobichettipalayam, Tamil Nadu, India"
  },
  {
    "id": "bannari",
    "name": "Bannari Amman Temple",
    "category": "Temples",
    "location": "Bannari, near Sathyamangalam",
    "description": "A revered Amman shrine at the forest foothills, where faith, tradition and the beauty of the hills come together.",
    "tagline": "Sacred traditions",
    "note": "Dress respectfully. Festival dates and visiting arrangements should be confirmed with the temple.",
    "source": "https://erode.nic.in/religious-tourism/",
    "image": "/__l5e/assets-v1/625066f4-26ea-4286-a5c4-4bdc605ed916/erode-bannari.jpg",
    "mapQuery": "Bannari Amman Temple, Bannari, near Sathyamangalam, Tamil Nadu, India"
  },
  {
    "id": "vellode",
    "name": "Vellode Bird Sanctuary",
    "category": "Nature & Wildlife",
    "location": "Vellode, near Erode",
    "description": "A peaceful wetland on Periyakulam Lake, home to resident birds and seasonal visitors. Slow down and listen to nature.",
    "tagline": "Birdwatcher’s favourite",
    "note": "Winter is generally rewarding for birdwatching. Carry binoculars and avoid disturbing nesting birds.",
    "source": "https://erode.nic.in/tourism/places-of-interest/",
    "image": "/__l5e/assets-v1/84f412ae-e6bf-42a2-b7eb-2aa1208c9559/erode-vellode.jpg",
    "mapQuery": "Vellode Bird Sanctuary, Vellode, near Erode, Tamil Nadu, India"
  },
  {
    "id": "bhavanisagar",
    "name": "Bhavanisagar Dam",
    "category": "Dams & Rivers",
    "location": "Bhavanisagar, near Sathyamangalam",
    "description": "An impressive earthen dam on the Bhavani River, with expansive reservoir scenery and a nearby public park.",
    "tagline": "Reservoir views",
    "note": "Confirm park access before visiting. Restricted dam areas are not open for casual exploration.",
    "source": "https://erode.nic.in/water-bodies-dams/",
    "image": "/__l5e/assets-v1/ed517e06-92cb-4d3d-b181-78d92cb3c986/erode-bhavanisagar.jpg",
    "mapQuery": "Bhavanisagar Dam, Bhavanisagar, near Sathyamangalam, Tamil Nadu, India"
  },
  {
    "id": "sangameshwarar",
    "name": "Bhavani Sangameshwarar Temple",
    "category": "Temples",
    "location": "Kooduthurai, Bhavani",
    "description": "An ancient Shiva temple beside the meeting of the Cauvery and Bhavani rivers, a cherished spiritual landmark of Kongu Nadu.",
    "tagline": "Riverside heritage",
    "note": "The Amudha river is part of religious tradition. Riverbank access depends on water levels.",
    "source": "https://erode.nic.in/religious-tourism/",
    "image": "/__l5e/assets-v1/795306c7-3611-4450-a00f-ad2e89dfb24e/erode-sangameshwarar.jpg",
    "mapQuery": "Bhavani Sangameshwarar Temple, Kooduthurai, Bhavani, Tamil Nadu, India"
  },
  {
    "id": "jamakkalam",
    "name": "Bhavani Jamakkalam Weaving Heritage",
    "category": "Heritage & Culture",
    "location": "Bhavani",
    "description": "Discover the colourful handwoven carpets of Bhavani and the skilled craft traditions passed down through generations.",
    "tagline": "Living craft traditions",
    "note": "This is a local craft tradition rather than a single ticketed attraction. Arrange workshop visits directly with artisans.",
    "source": "https://erode.nic.in/rural-handy-crafts-tourism/",
    "image": "/__l5e/assets-v1/3c004f15-f2ef-4794-b0d3-c3cfb30cd29e/erode-jamakkalam.jpg",
    "mapQuery": "Bhavani Jamakkalam weaving Bhavani Tamil Nadu"
  },
  {
    "id": "varattupallam",
    "name": "Varattupallam Dam",
    "category": "Dams & Rivers",
    "location": "Near Anthiyur, Bargur foothills",
    "description": "An irrigation reservoir near the Bargur hills, surrounded by rural scenery and forest-edge landscapes.",
    "tagline": "A quieter escape",
    "note": "Visitor access is subject to local restrictions. Keep away from forest areas and wildlife.",
    "source": "https://erode.nic.in/water-bodies-dams/",
    "image": "/__l5e/assets-v1/d55941c2-2b02-496b-9b21-6b26168d85a9/erode-varattupallam.jpg",
    "mapQuery": "Varattupallam Dam, Near Anthiyur, Bargur foothills, Tamil Nadu, India"
  },
  {
    "id": "kunderipallam",
    "name": "Kunderipallam Dam",
    "category": "Dams & Rivers",
    "location": "Near Kongarpalayam, Gobichettipalayam region",
    "description": "A reservoir nestled against the hills in northern Erode district, valued for irrigation and its scenic setting.",
    "tagline": "Hill-framed waters",
    "note": "Check access locally. Do not swim or enter restricted water-management areas.",
    "source": "https://erode.nic.in/water-bodies-dams/",
    "image": "/__l5e/assets-v1/4151ca97-179d-4ec2-b5a4-bab9ef5b865a/erode-kunderipallam.jpg",
    "mapQuery": "Kunderipallam Dam, Near Kongarpalayam, Gobichettipalayam region, Tamil Nadu, India"
  },
  {
    "id": "sathyamangalam",
    "photoAlt": "Dhimbam hills in the Sathyamangalam region",
    "name": "Sathyamangalam Tiger Reserve",
    "category": "Nature & Wildlife",
    "location": "Sathyamangalam region",
    "description": "A remarkable forest landscape linking the Western and Eastern Ghats, protecting tigers, elephants and rich biodiversity.",
    "tagline": "Wild at heart",
    "note": "Only authorised forest visits are permitted. Check current arrangements with the Forest Department; sightings are never guaranteed.",
    "source": "https://erode.nic.in/eco-tourism/",
    "image": "/__l5e/assets-v1/31732357-6025-43b7-8d35-e3a6d52e3b82/erode-sathyamangalam.jpg",
    "mapQuery": "Sathyamangalam Tiger Reserve, Sathyamangalam region, Tamil Nadu, India"
  },
  {
    "id": "chennimalai",
    "name": "Chennimalai Murugan Temple",
    "category": "Temples",
    "location": "Chennimalai",
    "description": "A celebrated hilltop Murugan shrine with sweeping views of the Kongu countryside and a long devotional tradition.",
    "tagline": "Hilltop serenity",
    "note": "Plan for steps or confirm hill-road transport arrangements. Respect worship and photography restrictions.",
    "source": "https://erode.nic.in/religious-tourism/",
    "image": "/__l5e/assets-v1/dfc547e6-9afc-44a0-a478-5d60e968e2d6/erode-chennimalai.jpg",
    "mapQuery": "Chennimalai Murugan Temple, Chennimalai, Tamil Nadu, India"
  },
  {
    "id": "thindal",
    "name": "Thindal Murugan Temple",
    "category": "Temples",
    "location": "Thindal, Erode",
    "description": "A hill shrine dedicated to Lord Murugan on the western side of Erode, offering a peaceful pause above the city.",
    "tagline": "Above the city",
    "note": "Steps and uneven surfaces may affect accessibility. Confirm temple timings locally.",
    "source": "https://erode.nic.in/religious-tourism/",
    "image": "/__l5e/assets-v1/6de65c1a-edfb-4fc3-a9a4-009856d4afec/erode-thindal.jpg",
    "mapQuery": "Thindal Murugan Temple, Thindal, Erode, Tamil Nadu, India"
  },
  {
    "id": "magudeswarar",
    "name": "Magudeswarar Temple",
    "category": "Temples",
    "location": "Kodumudi",
    "description": "A historic temple complex by the Cauvery, with shrines associated with Shiva, Vishnu and Brahma.",
    "tagline": "Cauvery-side devotion",
    "note": "Dress respectfully and follow local instructions near the river.",
    "source": "https://erode.nic.in/religious-tourism/",
    "image": "/__l5e/assets-v1/5c5092b2-4e31-4db5-a4fb-afb0f33a252f/erode-magudeswarar.jpg",
    "mapQuery": "Magudeswarar Temple, Kodumudi, Tamil Nadu, India"
  },
  {
    "id": "museum",
    "name": "Government Museum Erode",
    "category": "Heritage & Culture",
    "location": "Erode city",
    "description": "Explore the region’s archaeological and cultural history through sculptures, hero stones and objects connected with Kodumanal.",
    "tagline": "Stories of Kongu Nadu",
    "note": "Confirm the current museum location, opening days and visitor arrangements before travelling.",
    "source": "https://erode.nic.in/heritage-tourism/",
    "image": "/__l5e/assets-v1/ceb5b612-6622-4f11-8088-a31e747e241e/erode-museum.jpg",
    "mapQuery": "Government Museum Erode, Erode city, Tamil Nadu, India"
  },
  {
    "id": "periyar",
    "name": "Periyar Memorial House",
    "category": "Heritage & Culture",
    "location": "Periyar Street, Erode",
    "description": "A memorial in the ancestral home of social reformer E. V. Ramasamy, preserving the story of his life and public work.",
    "tagline": "A reformer’s legacy",
    "note": "Confirm visiting hours locally; photography inside may be restricted.",
    "source": "https://erode.nic.in/heritage-tourism/",
    "image": "/__l5e/assets-v1/2df54ca0-9269-4de0-a1e7-04ca089ad115/erode-periyar.jpg",
    "mapQuery": "Periyar Memorial House, Periyar Street, Erode, Tamil Nadu, India"
  },
  {
    "id": "kodumanal",
    "name": "Kodumanal Archaeological Site",
    "category": "Heritage & Culture",
    "location": "Kodumanal, near the Noyyal River",
    "description": "An ancient trade and industrial settlement known for bead-making, iron working and archaeological evidence of far-reaching trade.",
    "tagline": "Ancient stories",
    "note": "An archaeological site, not a daily visitor attraction. Seek permission and current access information; never disturb remains.",
    "source": "https://erode.nic.in/heritage-tourism/",
    "image": "/__l5e/assets-v1/abd6b502-addf-45f3-aa30-8a0af081fc89/erode-kodumanal.jpg",
    "mapQuery": "Kodumanal Archaeological Site, Kodumanal, near the Noyyal River, Tamil Nadu, India"
  },
  {
    "id": "voc",
    "photoSource": "https://erodeinfo.com/erode-photos/erode-voc-park-photos.htm",
    "photoCredit": "Erode Info",
    "name": "VOC Park",
    "category": "Leisure & Parks",
    "location": "Erode city",
    "description": "A well-known public recreation space in Erode for a leisurely walk and an easy-going break within the city.",
    "tagline": "A city pause",
    "note": "Facilities and accessible areas can change. Confirm current park access locally.",
    "source": "https://erode.nic.in/tourism/places-of-interest/",
    "image": "/__l5e/assets-v1/20139ca7-21f2-4a73-8aac-b26207fbeeeb/erode-voc.jpg",
    "mapQuery": "VOC Park, Erode city, Tamil Nadu, India"
  },
  {
    "id": "kalingarayan",
    "name": "Kalingarayan Canal and Anicut",
    "category": "Dams & Rivers",
    "location": "Bhavani and the Erode countryside",
    "description": "A historic irrigation system drawing from the Bhavani River, reflecting the engineering heritage of the Kongu region.",
    "tagline": "Engineering heritage",
    "note": "The canal spans multiple places; the map link points to the anicut. Keep clear of flowing water.",
    "source": "https://erode.nic.in/water-bodies-dams/",
    "image": "/__l5e/assets-v1/ccb76410-28d4-47ac-b43f-54e40ec1e314/erode-kalingarayan.jpg",
    "mapQuery": "Kalingarayan Anicut Bhavani Tamil Nadu"
  },
  {
    "id": "kongalamman",
    "name": "Kongalamman Temple",
    "category": "Temples",
    "location": "Central Erode",
    "description": "A long-established temple dedicated to Goddess Kongalamman, closely connected with the spiritual life of Erode’s old town.",
    "tagline": "Old-town traditions",
    "note": "Confirm temple visiting arrangements locally and follow respectful dress and photography rules.",
    "source": "https://erode.nic.in/religious-tourism/",
    "image": "",
    "mapQuery": "Kongalamman Temple, Central Erode, Tamil Nadu, India"
  },
  {
    "id": "aarudra",
    "photoSource": "https://nrameshrao.wordpress.com/2018/10/27/sri-arudra-kapaleeswara-temple-erode/",
    "photoCredit": "N. Ramesh Rao",
    "name": "Aarudra Kabaaleeswarar Temple",
    "category": "Temples",
    "location": "Fort area, Erode",
    "description": "A historic Shiva shrine in Erode’s old Fort area, also known as Arudra Kabaleeswarar Temple.",
    "tagline": "In the heart of old Erode",
    "note": "Look for the Erode Fort temple when navigating, not Chennai’s similarly named temple.",
    "source": "https://erode.nic.in/religious-tourism/",
    "image": "/__l5e/assets-v1/1c6cd5b7-e29b-4b18-9943-c9236dbde240/erode-aarudra-gopuram.jpg",
    "mapQuery": "Aarudra Kabaaleeswarar Temple, Fort area, Erode, Tamil Nadu, India"
  },
  {
    "id": "chillout",
    "name": "Chillout Theme Park",
    "category": "Leisure & Parks",
    "location": "Perundurai–Vellode Road, near Perundurai",
    "description": "A family recreation destination with water-based entertainment and leisure facilities near Perundurai.",
    "tagline": "A family day out",
    "note": "Confirm operating status, opening hours, ticket prices and available attractions directly with the park.",
    "source": "https://erode.nic.in/tourism/places-of-interest/",
    "image": "/__l5e/assets-v1/af43aa81-eea9-42ab-ba35-3c254dab3271/erode-chillout.jpg",
    "mapQuery": "Chillout Theme Park, Perundurai–Vellode Road, near Perundurai, Tamil Nadu, India"
  }
];
const heroImage = "/__l5e/assets-v1/345d01fc-df7f-4426-888e-e4a1fc1869f3/erode-hero.jpg";
// Small inline SVG icons: no icon library needed.
const paths={mountain:'<path d="m2 19 7-13 5 8 3-5 5 10H2Z"/><path d="m6 12 3 2 2-2m4 1 2 1 2-1"/><circle cx="18" cy="5" r="2"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',search:'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',leaf:'<path d="M20 3C7 2 2 8 5 15s15 5 15-12Z"/><path d="M3 21 16 8"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/>',train:'<rect x="5" y="3" width="14" height="15" rx="3"/><path d="M5 10h14M9 18l-3 4m9-4 3 4M12 3v7"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/>',bag:'<rect x="4" y="7" width="16" height="14" rx="2"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5 5-3Z"/>',waves:'<path d="M2 7c4-5 6 5 10 0s6 5 10 0M2 13c4-5 6 5 10 0s6 5 10 0M2 19c4-5 6 5 10 0s6 5 10 0"/>',temple:'<path d="M3 21h18M5 21v-7h14v7M4 14l3-4h10l3 4M8 10V7h8v3M9 7l3-5 3 5M10 21v-4h4v4"/>',heritage:'<path d="m3 7 9-5 9 5H3Zm2 3v8m5-8v8m4-8v8m5-8v8M3 21h18M3 18h18"/>',park:'<path d="M12 2 5 10h4l-6 7h8v5m2-5h8l-6-7h4l-7-8Z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',external:'<path d="M14 3h7v7m-1-6-9 9M10 3H3v18h18v-7"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 17 5-5 4 4 4-6 5 7"/><circle cx="8" cy="8" r="1"/>'};
function icon(name){return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name]||paths.pin}</svg>`;}
function fillIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function safeURL(value,image=false){if(typeof value!=='string')return false;if(image&&(value===''||/^\/__l5e\/assets-v1\/[a-zA-Z0-9/_.-]+$/.test(value)))return true;try{return new URL(value).protocol==='https:';}catch{return false;}}
function validCatalogue(rows){if(!Array.isArray(rows))return false;const ids=new Set(),names=new Set();return rows.every(d=>{if(!d||typeof d!=='object'||typeof d.id!=='string'||! /^[a-z0-9-]+$/.test(d.id)||ids.has(d.id)||!Object.hasOwn(categories,d.category)||d.category==='All Places')return false;const fields=['name','location','description','tagline','note','mapQuery'];if(fields.some(k=>typeof d[k]!=='string'||!d[k].trim()||d[k].length>10000))return false;const name=d.name.trim().toLowerCase();if(names.has(name)||!safeURL(d.source)||!safeURL(d.image,true)||(d.photoSource&&!safeURL(d.photoSource)))return false;ids.add(d.id);names.add(name);return true;});}
const categories={'All Places':'grid','Dams & Rivers':'waves','Temples':'temple','Nature & Wildlife':'leaf','Heritage & Culture':'heritage','Leisure & Parks':'park'};
const storageKey='erode-explore-favourites-v1';
const validIds=new Set(destinations.map(d=>d.id));
let favourites=new Set();
try{const stored=JSON.parse(localStorage.getItem(storageKey)||'[]');if(Array.isArray(stored))favourites=new Set(stored.filter(id=>validIds.has(id)));}catch{ /* Continue without stored favourites if storage is unavailable. */ }
let category='All Places',query='',favouritesOnly=false,itineraryIds=null,limit=6,openedDestination=null,toastTimer;
const grid=document.getElementById('destination-grid'),filters=document.getElementById('filters'),dialog=document.getElementById('destination-dialog'),searchInput=document.getElementById('search-input');
const destinationPage=document.getElementById('destination-page'),pageDestinationId=new URLSearchParams(window.location.search).get('destination');
if(!grid||!filters||!dialog||!searchInput||!destinationPage)return;
const hero=document.getElementById('hero-image');if(hero)hero.src=heroImage;
 document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.alt='Photograph unavailable';}));
fillIcons();
function notify(message){const toast=document.getElementById('toast');toast.textContent=message;toast.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.hidden=true,2500);}
function updateFavCount(){const count=document.getElementById('fav-count');count.textContent=String(favourites.size);count.hidden=!favourites.size;document.getElementById('favourites-nav').setAttribute('aria-pressed',String(favouritesOnly));}
function toggleFavourite(id){if(favourites.has(id)){favourites.delete(id);notify('Removed from your favourites');}else{favourites.add(id);notify('Saved to your favourites');}try{localStorage.setItem(storageKey,JSON.stringify([...favourites]));}catch{notify('Saved for this visit. Your browser has blocked storage.');}render();if(openedDestination)renderDetails(openedDestination);}
function photo(d,modal=false){return d.image?`<img class="${modal?'modal-photo':'card-image'}" src="${escapeHTML(d.image)}" alt="${escapeHTML(d.photoAlt||d.name)} — Erode district" ${modal?'':'loading="lazy"'}>`:`<div class="${modal?'modal-photo ':''}missing-photo">${icon('image')}<span>Destination photograph unavailable</span></div>`;}
function destinationHref(id){return window.parent!==window?`/destinations/${encodeURIComponent(id)}`:`?destination=${encodeURIComponent(id)}`;}
function destinationTarget(){return window.parent!==window?'_top':'_self';}
function renderDestinationPage(d){if(!pageDestinationId){destinationPage.hidden=true;return;}document.body.classList.add('destination-view');destinationPage.hidden=false;if(!d){destinationPage.innerHTML=`<div class="container destination-page-status"><h1>Destination not found</h1><p>This place is not in the Erode Explore catalogue.</p><a class="btn btn-outline" href="${window.parent!==window?'/#destinations':'index.html#destinations'}" target="${destinationTarget()}">Browse destinations</a></div>`;return;}const backHref=window.parent!==window?'/#destinations':'index.html#destinations';const saved=favourites.has(d.id);destinationPage.innerHTML=`<div class="container destination-page-inner"><div class="destination-page-top"><a class="text-link" href="${backHref}" target="${destinationTarget()}">${icon('arrow')} All destinations</a></div><div class="destination-cover">${photo(d,true)}</div><article class="destination-page-content"><div class="eyebrow">${escapeHTML(d.category)} · ${escapeHTML(d.tagline)}</div><h1>${escapeHTML(d.name)}</h1><div class="card-location">${icon('pin')}${escapeHTML(d.location)}</div><p class="destination-lede">${escapeHTML(d.description)}</p><div class="destination-facts"><div class="destination-fact"><span>Opening hours</span><strong>Not listed</strong></div><div class="destination-fact"><span>Entry fee</span><strong>Not listed</strong></div></div><div class="visitor-note"><strong>Before you go</strong><br>${escapeHTML(d.note)}</div><div class="modal-actions"><a class="btn" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(d.mapQuery)}" target="_blank" rel="noopener noreferrer">${icon('pin')}Get Directions ${icon('external')}</a><button class="btn btn-outline" data-save="${escapeHTML(d.id)}" aria-pressed="${saved}">${icon('heart')}${saved?'Saved to favourites':'Save to favourites'}</button></div><a class="photo-credit" href="${escapeHTML(d.source)}" target="_blank" rel="noopener noreferrer">Destination reference ${icon('external')}</a>${d.image?`<a class="photo-credit" href="${escapeHTML(d.photoSource||d.source)}" target="_blank" rel="noopener noreferrer">Photograph: ${escapeHTML(d.photoCredit||'Erode District tourism')} ${icon('external')}</a>`:''}</article></div>`;}
function matching(){return destinations.filter(d=>(category==='All Places'||d.category===category)&&(!favouritesOnly||favourites.has(d.id))&&(!itineraryIds||itineraryIds.includes(d.id))&&`${d.name} ${d.location} ${d.category} ${d.description}`.toLowerCase().includes(query));}
function render(){const results=matching();filters.innerHTML=Object.entries(categories).map(([name,symbol])=>`<button class="filter ${category===name?'active':''}" data-filter="${escapeHTML(name)}" aria-pressed="${category===name}">${icon(symbol)}${name}</button>`).join('')+`<span class="result-count">${results.length} ${results.length===1?'place':'places'} to explore</span>`;
 document.getElementById('destinations-heading').textContent=favouritesOnly?'Your favourite places':'Explore Erode';document.getElementById('destinations-subtitle').textContent=favouritesOnly?'Your little collection of places worth discovering.':'Beautiful places. Local stories. Unforgettable moments.';
 grid.innerHTML=results.slice(0,limit).map(d=>`<article class="destination-card"><div class="card-image-wrap">${photo(d)}<span class="category-badge">${icon(categories[d.category])}${escapeHTML(d.category)}</span><button class="heart-btn ${favourites.has(d.id)?'saved':''}" data-save="${escapeHTML(d.id)}" aria-label="${favourites.has(d.id)?'Remove':'Save'} ${escapeHTML(d.name)} ${favourites.has(d.id)?'from':'to'} favourites" aria-pressed="${favourites.has(d.id)}" title="${favourites.has(d.id)?'Remove from':'Save to'} favourites">${icon('heart')}</button></div><div class="card-content"><h3>${escapeHTML(d.name)}</h3><div class="card-location">${icon('pin')}${escapeHTML(d.location)}</div><p class="card-description">${escapeHTML(d.description)}</p><div class="card-bottom"><span class="card-note">${icon('compass')}${escapeHTML(d.tagline)}</span><button class="detail-btn" data-details="${escapeHTML(d.id)}" aria-label="Explore ${escapeHTML(d.name)}">Explore ${icon('arrow')}</button></div></div></article>`).join('');
 if(!results.length)grid.innerHTML=`<div class="empty-state"><h3>${favouritesOnly?'No saved places found':'No places found'}</h3><p>${favouritesOnly?'Save a place with its heart, or clear your filters.':'Try another destination name or category.'}</p><button class="btn" id="clear-filters">Explore all places ${icon('arrow')}</button></div>`;
 document.getElementById('load-more').hidden=results.length<=limit;updateFavCount();}
function selectCategory(name){itineraryIds=null;category=name;limit=6;render();}
function reset(){itineraryIds=null;category='All Places';query='';searchInput.value='';favouritesOnly=false;limit=6;render();}
function renderDetails(d){const saved=favourites.has(d.id);document.getElementById('dialog-content').innerHTML=photo(d,true)+`<div class="modal-body"><div class="eyebrow">${escapeHTML(d.category)}</div><h2 id="dialog-title">${escapeHTML(d.name)}</h2><div class="card-location">${icon('pin')}${escapeHTML(d.location)}</div><p>${escapeHTML(d.description)}</p><div class="visitor-note"><strong>Before you go</strong><br>${escapeHTML(d.note)}</div><div class="modal-actions"><a class="btn" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(d.mapQuery)}" target="_blank" rel="noopener noreferrer">${icon('pin')}Google Maps directions ${icon('external')}</a><button class="btn btn-outline" data-save="${escapeHTML(d.id)}" aria-pressed="${saved}">${icon('heart')}${saved?'Saved to favourites':'Save to favourites'}</button><a class="btn btn-outline" href="${destinationHref(d.id)}" target="${destinationTarget()}">Full destination page ${icon('arrow')}</a></div><a class="photo-credit" href="${escapeHTML(d.source)}" target="_blank" rel="noopener noreferrer">Destination reference ${icon('external')}</a>${d.image?`<a class="photo-credit" href="${escapeHTML(d.photoSource||d.source)}" target="_blank" rel="noopener noreferrer">Photograph: ${escapeHTML(d.photoCredit||'Erode District tourism')} ${icon('external')}</a>`:''}</div>`;}
function openDetails(id){const d=destinations.find(place=>place.id===id);if(!d)return;openedDestination=d;renderDetails(d);dialog.showModal();document.body.style.overflow='hidden';}
function closeDetails(){dialog.close();}
dialog.addEventListener('close',()=>{openedDestination=null;document.body.style.overflow='';});
dialog.querySelector('.modal-close').addEventListener('click',closeDetails);
dialog.addEventListener('click',e=>{if(e.target===dialog){const box=dialog.getBoundingClientRect();if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)closeDetails();}});
document.addEventListener('click',e=>{const target=e.target instanceof Element?e.target:null;if(!target)return;const save=target.closest('[data-save]');if(save){toggleFavourite(save.dataset.save);return;}const details=target.closest('[data-details]');if(details){openDetails(details.dataset.details);return;}const filter=target.closest('[data-filter]');if(filter){selectCategory(filter.dataset.filter);return;}if(target.closest('#clear-filters'))reset();});
searchInput.addEventListener('input',()=>{query=searchInput.value.trim().toLowerCase();limit=20;render();});
document.getElementById('search-form').addEventListener('submit',e=>{e.preventDefault();query=searchInput.value.trim().toLowerCase();limit=20;render();document.getElementById('destinations').scrollIntoView({behavior:'smooth'});});
document.getElementById('load-more').addEventListener('click',()=>{limit+=6;render();});
document.getElementById('view-all').addEventListener('click',()=>{reset();limit=20;render();});
document.getElementById('favourites-nav').addEventListener('click',()=>{favouritesOnly=!favouritesOnly;itineraryIds=null;category='All Places';query='';searchInput.value='';limit=20;render();document.getElementById('destinations').scrollIntoView({behavior:'smooth'});});
const menu=document.getElementById('menu-toggle'),nav=document.querySelector('.nav-links');menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));menu.setAttribute('aria-label',expanded?'Open navigation':'Close navigation');nav.classList.toggle('open',!expanded);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');nav.querySelectorAll('a').forEach(link=>link.classList.toggle('active',link===a));}));
document.querySelectorAll('.itinerary-link').forEach(btn=>btn.addEventListener('click',()=>{favouritesOnly=false;query='';searchInput.value='';category='All Places';itineraryIds=btn.dataset.stops.split(',');limit=20;render();document.getElementById('destinations').scrollIntoView({behavior:'smooth'});}));
render();
renderDestinationPage(destinations.find(d=>d.id===pageDestinationId));
// The hosted page receives the public catalogue from its same-origin parent.
// Opening these three files independently still uses the original offline list.
window.addEventListener('message',event=>{
 if(event.origin!==window.location.origin||event.source!==window.parent)return;
 if(event.data?.type==='erode:destinations-error'){document.body.dataset.catalogueSource='fallback';notify('Connection unavailable. Showing saved destination information.');return;}
 if(event.data?.type!=='erode:destinations')return;
 if(!validCatalogue(event.data.destinations)){document.body.dataset.catalogueSource='fallback';notify('Destination information could not be loaded. Showing saved information.');return;}
 destinations=event.data.destinations;destinations.forEach(d=>validIds.add(d.id));document.body.dataset.catalogueSource='supabase';render();renderDestinationPage(destinations.find(d=>d.id===pageDestinationId));
 if(openedDestination){const updated=destinations.find(d=>d.id===openedDestination.id);if(updated){openedDestination=updated;renderDetails(updated);}else closeDetails();}
});
})();
