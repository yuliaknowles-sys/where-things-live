const zones=['All items','Guest suites','Primary suite','Kitchen & dining','Laundry','Pool & beach','Family'];
const data=[
['Guest queen linens','Guest suites','linens',3,'sets','Upstairs landing → Linen closet → Shelf 2 → Queen bags','Housekeeper','Fold matching sheets inside their pillowcase. Keep bed-size labels visible.','extra sheets spare bedding guest linen'],
['Beach towels','Pool & beach','beach',20,'towels','Pool house → Towel cabinet → Shelves 1–2','Housekeeper','Return washed and fully dry. Keep beach towels separate from bathroom linens.','pool beach swimming towels'],
['Dinner napkins','Kitchen & dining','dining',16,'napkins','Dining room → Sideboard → Drawer 2','Housekeeper','Store pressed napkins flat. Separate stained pieces for treatment.','table linens dinner entertaining'],
['Weekend luggage','Laundry','luggage',2,'cases','Storage room → Travel shelving → Lower bay','Personal Assistant','Empty and wipe cases after travel. Keep each packing-cube set inside its case.','suitcase carry on bags luggage travel'],
['Children’s beach kits','Family','family',4,'kits','Pool house → Family cabinet → Baskets A–D','Nanny / Housekeeper','Keep one labeled kit per child. Confirm sizes and contents with the nanny before each stay.','kids children beach poncho toys family'],
['Guest amenity sets','Guest suites','supplies',6,'sets','Guest bathroom → Vanity → Bottom drawer','Housekeeper','Keep sealed toiletries together. Flag fewer than three complete sets.','shampoo soap toiletries guest bathroom'],
['Primary king linens','Primary suite','linens',3,'sets','Primary dressing room → Linen cabinet → Shelf 1','Housekeeper','Reserve for the primary suite. Keep matching sets in labeled cotton bags.','king bedding extra sheets primary master'],
['Outdoor tableware','Kitchen & dining','dining',16,'settings','Pantry → Shelf 4 → Outdoor service bin','Chef / Housekeeper','Keep outdoor service separate from indoor glassware. Count after entertaining.','plates dinner outdoor dishes dining'],
['Guest bath towels','Laundry','linens',12,'towels','Laundry room → Upper cabinet → Shelf 1','Housekeeper','Rotate clean stock and keep folded edges facing outward.','bath towels bathroom linen spare'],
['Beach chairs','Pool & beach','beach',8,'chairs','Beach store → Left wall rack → Bay C','Groundskeeper','Remove sand and dry before returning to the rack. Check for wear before use.','seaside beach chairs outdoor'],
['Children’s spare outfits','Family','family',4,'sets','Family room → Wardrobe → Labeled bins A–D','Nanny','One fictional profile per child: ages 3, 6, 10 and 14. Confirm current sizes before every trip.','kids clothing children clothes toddler teen sizes'],
['Travel packing cubes','Laundry','luggage',4,'sets','Storage room → Travel shelf → Bin P','Personal Assistant','Keep complete sets together; use removable labels for each trip.','packing cubes travel luggage bags'],
['Lightweight blankets','Primary suite','linens',2,'blankets','Primary dressing room → Linen cabinet → Shelf 3','Housekeeper','Store clean and dry in breathable bags.','throw duvet bedding warm blanket'],
['Serving platters','Kitchen & dining','dining',4,'platters','Dining room → Sideboard → Right cabinet','Chef / Housekeeper','Use felt separators; inspect edges and avoid overstacking.','serving dishes entertaining tray platter'],
['Cleaning cloths','Laundry','supplies',24,'cloths','Laundry room → Supply shelf → Color-coded bins','Housekeeper','Maintain designated colors for separate cleaning areas. Return only clean, dry cloths.','microfiber supplies cleaning'],
['Beach umbrellas','Pool & beach','beach',3,'umbrellas','Beach store → Upright rack → Bay U','Groundskeeper','Dry completely and fit protective covers before storage.','beach shade outdoor umbrella'],
['Family games & books','Family','family',8,'sets','Family room → Games cabinet → Shelves 2–3','Nanny / Family Assistant','Group by reading stage and age label. Check game pieces; keep small parts away from younger children.','kids children books puzzles teen games family'],
['Children’s travel sets','Family','luggage',4,'sets','Storage room → Travel shelf → Bin FAMILY','Nanny / Personal Assistant','Use profiles A–D rather than names in this demo. Check clothing fit and trip needs before packing.','kids packing children travel bags'],
['Primary bathrobes','Primary suite','linens',2,'robes','Primary bathroom → Linen cupboard → Shelf 2','Housekeeper','Store laundered robes with their belts attached.','robe bathroom dressing primary'],
['Outdoor throws','Pool & beach','linens',6,'throws','Pool house → Storage bench → Bag B','Housekeeper','Store dry and keep guest-ready stock separate from used throws.','outdoor blanket throws pool'],
['Toiletry refills','Laundry','supplies',2,'bottles','Laundry room → Supply shelf → Bin T','Housekeeper','Keep original labels. Review replenishment when stock reaches two bottles.','shampoo soap refills supplies toiletries'],
['Guest pillows','Guest suites','linens',6,'pillows','Upstairs landing → Linen closet → Top shelf','Housekeeper','Keep protectors fitted. Store in breathable bags apart from used bedding.','pillow bedding spare guest'],
['Travel accessories','Laundry','luggage',1,'pouch','Storage room → Travel shelf → Bin A','Personal Assistant','Check adapter compatibility for the destination before packing.','adapter travel accessories plugs'],
['Poolside cushion covers','Pool & beach','linens',8,'covers','Pool house → Storage bench → Bag C','Housekeeper','Label by matching furniture set. Store clean and fully dry.','outdoor cushions covers furniture']
].map((r,i)=>({id:'HMP-'+String(i+1).padStart(3,'0'),name:r[0],zone:r[1],image:'item-'+String(i+1).padStart(2,'0'),quantity:r[3],unit:r[4],location:r[5],owner:r[6],standard:r[7],tags:r[8]}));
for(const x of data){if(x.location.startsWith('Pool house →'))x.location=x.location.replace('Pool house →','Pool house → Storage room →');else if(x.location.startsWith('Beach store →'))x.location=x.location.replace('Beach store →','Beach store → Equipment room →');else x.location='Main house → '+x.location;}
if(typeof extraInventory!=='undefined')data.push(...extraInventory);
for(const x of data){if(x.location.startsWith('Butler pantry →'))x.location='Main house → '+x.location;}
const collections=[
 {id:'bedrooms',name:'Bedrooms & bathrooms',image:'item-01',hint:'Suite linens, bath essentials & guest readiness',zones:['Guest suites','Primary suite']},
 {id:'dining',name:'Kitchen & entertaining',image:'entertaining',hint:'Tableware, service pieces & event collections',zones:['Kitchen & dining','Entertaining']},
 {id:'family',name:'Family & wellness',image:'item-05',hint:'Children’s essentials, activities & sports',zones:['Family','Sports & wellness']},
 {id:'outdoors',name:'Pool, beach & outdoors',image:'item-10',hint:'Summer essentials, bicycles & garden equipment',zones:['Pool & beach','Garage & outdoors']},
 {id:'housekeeping',name:'Housekeeping & estate',image:'estate',hint:'Laundry, travel storage, tools & technology',zones:['Laundry','Estate supplies','Technology & office']},
 {id:'seasonal',name:'Seasonal decorations',image:'seasonal',hint:'Holiday collections, carefully stored year round',zones:['Seasonal decorations']}
];
const holidays=[['Christmas','christmas'],['Halloween','halloween'],['Easter','easter'],['Valentine’s Day','valentine'],['Thanksgiving','thanksgiving'],['Fourth of July','julyfourth'],['New Year’s Eve','newyear']];
const roomNotes={'Guest suites':'Bed linens, bathroom essentials and guest arrival stock.','Primary suite':'Dedicated bedding, bath and garment care essentials.','Kitchen & dining':'Everyday dining, formal service, glassware and table linens.','Laundry':'Housekeeping supplies, pressing equipment and travel storage.','Pool & beach':'Pool towels, beach equipment and outdoor comfort.','Family':'Four fictional children: ages 3, 6, 10 and 14.','Seasonal decorations':'Seven holiday collections in the climate-controlled seasonal store.','Entertaining':'Service pieces, floral accessories and estate event equipment.','Sports & wellness':'Fitness, tennis, yoga and treatment room essentials.','Estate supplies':'Tools, replacement parts, reserve stock and storm supplies.','Technology & office':'Chargers, AV accessories, guest tech and office stock.','Garage & outdoors':'Bicycles, garden equipment, outdoor covers and mudroom essentials.'};
zones.splice(1,zones.length-1,...Object.keys(roomNotes));
const storage={get(k,f){try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
let locations=storage.get('wtl-hamptons-locations',{}),checks=storage.get('wtl-hamptons-checks',[]),activeCollection='all',activeZone='All items',selectedHoliday='',currentPage='directory',selected=null,visibleLimit=12;
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const locationFor=x=>locations[x.id]||x.location;
const normalize=s=>String(s).toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,' ').trim();
const stem=w=>w.length>4?w.replace(/ies$/,'y').replace(/(ing|ers|er|es|s)$/,''):w;
const termMatch=(text,w)=>text.includes(w)||text.includes(stem(w));
function resetDirectory(){activeCollection='all';activeZone='All items';selectedHoliday='';visibleLimit=12;$('#search').value='';render()}
function chooseCollection(id){activeCollection=id;activeZone='All items';selectedHoliday='';visibleLimit=12;$('#search').value='';render()}
function collectionForZone(z){return collections.find(c=>c.zones.includes(z))}
function listRow(x){const photo=x.image?`<span class="row-photo"><img src="assets/${esc(x.image)}.webp" alt="Illustrative photo of ${esc(x.name)}" loading="lazy" decoding="async"></span>`:'';return `<button type="button" class="inventory-row ${x.image?'has-photo':''}" data-id="${esc(x.id)}" aria-label="View photo and storage for ${esc(x.name)}"><div class="row-item">${photo}<div class="row-name"><b>${esc(x.name)}</b><small>${esc(x.group||x.zone)} · ${esc(x.id)}</small></div></div><div class="row-location"><span class="eyebrow">STORED HERE</span>${esc(locationFor(x))}</div><div class="row-quantity">${x.quantity} ${esc(x.unit)}<span>View details ↗</span></div></button>`}
function photoCard(x){return `<button type="button" class="item-card photo-item" data-id="${esc(x.id)}" aria-label="View ${esc(x.name)}"><div class="card-image"><img src="assets/${esc(x.image)}.webp" alt="Illustrative photo of ${esc(x.name)}" loading="lazy" decoding="async"></div><div class="card-info"><h3>${esc(x.name)}</h3><div class="card-location">${esc(locationFor(x))}</div><div class="card-bottom"><span>${x.quantity} ${esc(x.unit)}</span><span>View details ↗</span></div></div></button>`}
function render(){
 const q=$('#search').value.trim(),terms=normalize(q).split(' ').filter(w=>w.length>1&&!['where','the','are','can','find','for','have','some','things','is','my','our'].includes(w));
 const collection=collections.find(c=>c.id===activeCollection);
 const overview=!q&&activeCollection==='all';
 const holidayOverview=!q&&activeCollection==='seasonal'&&!selectedHoliday;
 let list=data.filter(x=>(q||!collection||collection.zones.includes(x.zone))&&(q||activeZone==='All items'||x.zone===activeZone)&&(q||!selectedHoliday||x.group===selectedHoliday)&&(!terms.length||terms.every(w=>termMatch(normalize(x.name+' '+x.tags+' '+x.zone+' '+(x.group||'')+' '+locationFor(x)),w))));
 if($('#sort').value==='name')list.sort((a,b)=>a.name.localeCompare(b.name));
 $('#record-count').textContent=currentPage==='directory'?(overview?`6 collections · ${data.length} sample records`:holidayOverview?`7 holidays · ${list.length} items`:`${list.length} items found`):`${zones.length-1} household zones`;
 if(currentPage==='directory'){
  $('#page-heading').textContent=overview?'A place for everything':q?'Find your item':selectedHoliday||collection?.name||'The household';
  $('#section-eyebrow').textContent=overview?'EXPLORE THE RESIDENCE':q?'SEARCH RESULTS · WHOLE ESTATE':'HAMPTONS RESIDENCE / '+(selectedHoliday?'SEASONAL DECORATIONS':'YOUR COLLECTION');
 }
 $('#clear-search').hidden=!holidayOverview;
 $('.filter-row').hidden=overview||holidayOverview;
 $('#filters').innerHTML='<button type="button" data-home>← All collections</button>'+(selectedHoliday?'<button type="button" data-seasonal>All holidays</button>':'');
 $('#zone-filter').hidden=!collection||collection.zones.length<2||!!q;
 $('#zone-filter').innerHTML='<option value="All items">All areas</option>'+(collection?collection.zones.map(z=>`<option value="${esc(z)}" ${activeZone===z?'selected':''}>${esc(z)}</option>`).join(''):'');
 const photoView=list.length>0&&list.every(x=>x.image);
 $('#items').className=overview||holidayOverview?'item-grid category-grid':photoView?'item-grid photo-inventory':'inventory-list';
 $('#more-items').hidden=true;
 if(overview){$('#items').innerHTML=collections.map(c=>`<button type="button" class="category-card" data-category="${c.id}" aria-label="Explore ${esc(c.name)}"><div class="category-image"><img src="assets/${c.image}.webp" alt="${esc(c.hint)}" loading="lazy"></div><div class="category-body"><div class="eyebrow">${data.filter(x=>c.zones.includes(x.zone)).length} ITEMS</div><h3>${esc(c.name)}</h3><p>${esc(c.hint)}</p><span class="category-action">Explore collection <span aria-hidden="true">↗</span></span></div></button>`).join('');return}
 if(holidayOverview){$('#items').innerHTML=holidays.map(([name,image])=>`<button type="button" class="category-card" data-holiday="${esc(name)}" aria-label="Explore ${esc(name)} decorations"><div class="category-image"><img src="assets/${image}.webp" alt="Illustrative ${esc(name)} decoration collection" loading="lazy"></div><div class="category-body"><div class="eyebrow">${list.filter(x=>x.group===name).length} ITEMS · SEASONAL STORE</div><h3>${esc(name)}</h3><p>Decorations, storage bins and return standards.</p><span class="category-action">Find this collection <span aria-hidden="true">↗</span></span></div></button>`).join('');return}
 const familyNote=activeCollection==='family'&&!q?'<div class="family-note">Four fictional child profiles · Ages 3, 6, 10 and 14 · Sizes and suitability checked before each stay</div>':'';
 $('#items').innerHTML=familyNote+(list.length?(photoView?'':'<div class="inventory-header"><span>ITEM & COLLECTION</span><span>EXACT STORAGE LOCATION</span><span>QUANTITY</span></div>')+list.slice(0,visibleLimit).map(photoView?photoCard:listRow).join(''):'<div class="empty"><h3>No matching record yet.</h3><p>Try an item name, holiday or storage area. This is a fictional sample inventory; absence from the list does not confirm that an item is absent from a home.</p></div>');
 $('#more-items').hidden=list.length<=visibleLimit;$('#more-items').textContent=`Show more items (${Math.min(visibleLimit,list.length)} of ${list.length})`;
}
function openItem(id){
 selected=data.find(x=>x.id===id);if(!selected)return;
 $('.modal-image').hidden=!selected.image;
 if(selected.image){$('#detail-image').src='assets/'+selected.image+'.webp';$('#detail-image').alt='Illustrative photo: '+selected.name}
 $('#detail-category').textContent=selected.zone+' / '+selected.id;$('#detail-name').textContent=selected.name;
 $('#detail-location').textContent='Hamptons Residence → '+locationFor(selected);
 $('#detail-qty').textContent=selected.quantity+' '+selected.unit;$('#detail-owner').textContent=selected.owner;$('#detail-standard').textContent=selected.standard;
 $('#new-location').value=locationFor(selected);$('#save-note').textContent=locations[selected.id]?'Location edited in this browser · Fictional sample record':'Fictional sample record · Location and quantity not physically verified';
 $('#item-dialog').querySelector('details').open=false;$('#item-dialog').showModal();
}
function page(name){currentPage=name;document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===name));['directory','rooms','handover'].forEach(p=>$('#'+p).hidden=p!==name);$('#page-heading').textContent={directory:'A place for everything',rooms:'Every zone, clearly mapped',handover:'Ready for the next pair of hands'}[name];$('#section-eyebrow').textContent={directory:'EXPLORE THE RESIDENCE',rooms:'ROOM BY ROOM',handover:'CONTINUITY, MADE SIMPLE'}[name];render()}
function renderChecks(){const valid=checks.filter(z=>zones.includes(z));$('#progress').textContent=valid.length+' / '+(zones.length-1);$('#handover-list').innerHTML=zones.slice(1).map(z=>`<label class="check-row"><input type="checkbox" data-check="${esc(z)}" ${checks.includes(z)?'checked':''}><div><b>${esc(z)}</b><p>${esc(roomNotes[z])} Confirm storage locations, quantities, condition and responsible roles with the outgoing team.</p></div></label>`).join('')}
const zoneImages={'Guest suites':'item-01','Primary suite':'item-19','Kitchen & dining':'item-08','Laundry':'item-15','Pool & beach':'item-10','Family':'item-05','Seasonal decorations':'seasonal','Entertaining':'entertaining','Sports & wellness':'wellness','Estate supplies':'estate','Technology & office':'technology','Garage & outdoors':'garage'};
$('#room-grid').innerHTML=zones.slice(1).map((z,i)=>`<article class="room-card"><img class="room-image" src="assets/${zoneImages[z]}.webp" alt="Illustrative ${esc(z)} collection" loading="lazy"><div class="eyebrow">ZONE ${String(i+1).padStart(2,'0')} · ${data.filter(x=>x.zone===z).length} RECORDS</div><h3>${esc(z)}</h3><p>${esc(roomNotes[z])}</p><button data-room="${esc(z)}">Find items in this zone ↗</button></article>`).join('');
$('nav').addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(b){if(b.dataset.page==='directory')resetDirectory();page(b.dataset.page)}});
$('#filters').addEventListener('click',e=>{if(e.target.closest('[data-home]'))resetDirectory();if(e.target.closest('[data-seasonal]'))chooseCollection('seasonal')});
$('#search-form').addEventListener('submit',e=>{e.preventDefault();visibleLimit=12;render()});$('#search').addEventListener('input',()=>{visibleLimit=12;render()});$('#sort').addEventListener('change',render);$('#zone-filter').addEventListener('change',()=>{activeZone=$('#zone-filter').value;visibleLimit=12;render()});
$('#clear-search').addEventListener('click',resetDirectory);$('#more-items').addEventListener('click',()=>{visibleLimit+=12;render()});
$('#items').addEventListener('click',e=>{const c=e.target.closest('[data-category]');if(c){chooseCollection(c.dataset.category);return}const h=e.target.closest('[data-holiday]');if(h){selectedHoliday=h.dataset.holiday;visibleLimit=12;render();return}const b=e.target.closest('[data-id]');if(b)openItem(b.dataset.id)});
$('#room-grid').addEventListener('click',e=>{const b=e.target.closest('[data-room]');if(b){activeCollection=collectionForZone(b.dataset.room)?.id||'all';activeZone=b.dataset.room;selectedHoliday='';visibleLimit=12;$('#search').value='';page('directory')}});
$('.close').addEventListener('click',()=>$('#item-dialog').close());$('#item-dialog').addEventListener('click',e=>{if(e.target===$('#item-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});
$('#move-form').addEventListener('submit',e=>{e.preventDefault();const v=$('#new-location').value.trim();if(!v||!selected)return;locations[selected.id]=v;storage.set('wtl-hamptons-locations',locations);$('#detail-location').textContent='Hamptons Residence → '+v;$('#save-note').textContent='Location saved in this browser only · Fictional demo, not a shared estate database';render()});
$('#handover-list').addEventListener('change',e=>{const z=e.target.dataset.check;if(!z)return;checks=e.target.checked?[...new Set([...checks,z])]:checks.filter(x=>x!==z);storage.set('wtl-hamptons-checks',checks);renderChecks()});$('#reset-checks').addEventListener('click',()=>{checks=[];storage.set('wtl-hamptons-checks',checks);renderChecks()});render();renderChecks();

const heroSlides=[
 {image:'hamptons-estate',name:'Summer',alt:'Illustrative Hamptons waterfront residence in summer, with open pool and coastal gardens'},
 {image:'hamptons-autumn',name:'Fall',alt:'The same illustrative Hamptons residence in fall, with golden foliage and seasonal planting'},
 {image:'hamptons-winter',name:'Winter Holidays',alt:'The same illustrative Hamptons residence in winter, with a covered pool and warm holiday lights'}
];let heroIndex=0;
function showHeroSeason(i){heroIndex=(i+heroSlides.length)%heroSlides.length;const s=heroSlides[heroIndex];$('#residence-image').src='assets/'+s.image+'.webp';$('#residence-image').alt=s.alt;$('#hero-season').textContent=(heroIndex+1)+' / '+heroSlides.length;$('#residence-gallery').querySelector('span').textContent='HAMPTONS RESIDENCE · '+s.name.toUpperCase();document.querySelectorAll('[data-season]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.season)===heroIndex)))}
$('#hero-prev').addEventListener('click',()=>showHeroSeason(heroIndex-1));$('#hero-next').addEventListener('click',()=>showHeroSeason(heroIndex+1));$('#hero-seasons').addEventListener('click',e=>{const b=e.target.closest('[data-season]');if(b)showHeroSeason(Number(b.dataset.season))});
let heroTouchX=null;$('#residence-gallery').addEventListener('touchstart',e=>{if(!e.target.closest('button'))heroTouchX=e.changedTouches[0].clientX},{passive:true});$('#residence-gallery').addEventListener('touchend',e=>{if(heroTouchX===null)return;const dx=e.changedTouches[0].clientX-heroTouchX;heroTouchX=null;if(Math.abs(dx)>45)showHeroSeason(heroIndex+(dx<0?1:-1))},{passive:true});

/* Browser history: lets the Back and Forward buttons move between screens inside the demo. */
let restoringHistory=false;
function historySnapshot(){const d=$('#item-dialog');return{page:currentPage,collection:activeCollection,zone:activeZone,holiday:selectedHoliday,item:d.open&&selected?selected.id:null}}
function rememberScreen(){const s=historySnapshot();if(restoringHistory||JSON.stringify(s)===JSON.stringify(history.state))return;history.pushState(s,'')}
history.replaceState(historySnapshot(),'');
['nav','#filters','#items','#room-grid','#clear-search'].forEach(sel=>$(sel).addEventListener('click',()=>setTimeout(rememberScreen,0)));
$('#zone-filter').addEventListener('change',()=>setTimeout(rememberScreen,0));
$('#item-dialog').addEventListener('close',()=>{if(!restoringHistory&&history.state&&history.state.item)history.back()});
window.addEventListener('popstate',e=>{const s=e.state;if(!s)return;restoringHistory=true;try{activeCollection=s.collection;activeZone=s.zone;selectedHoliday=s.holiday;visibleLimit=12;$('#search').value='';page(s.page);const d=$('#item-dialog');if(s.item){if(!d.open)openItem(s.item)}else if(d.open)d.close()}finally{restoringHistory=false}});
