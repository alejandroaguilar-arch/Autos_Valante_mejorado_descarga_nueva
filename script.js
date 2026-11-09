'use strict';
const icons={heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',check:'<path d="m5 12 4 4L19 6"/>',plus:'<path d="M12 5v14M5 12h14"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M20 14v6H4V4h6"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>'};
const icon=(name)=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;

// Precios de referencia consultados en sitios de marcas en Colombia (octubre de 2026).
// No son inventario ni cotizaciones en tiempo real. Revisa las fuentes antes de comprar.
const cars = [
  {id:'kwid',brand:'Renault',name:'Kwid',category:'Hatchback',price:55990000,fuel:'Gasolina',trans:'Manual',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Renault%20Kwid.jpg?width=720',source:'https://www.renault.com.co/vehiculos/kwid/configurador.html',photoPage:'https://commons.wikimedia.org/wiki/File:Renault%20Kwid.jpg',photoAuthor:'Jason Lawrence',photoLicense:'CC BY 2.0'},
  {id:'picanto',brand:'Kia',name:'Picanto',category:'Hatchback',price:57990000,fuel:'Gasolina',trans:'Consultar versión',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Picanto%20%2852730962762%29.jpg?width=720',source:'https://kia.com.co/nuestros-vehiculos',photoPage:'https://commons.wikimedia.org/wiki/File:Kia%20Picanto%20%2852730962762%29.jpg',photoAuthor:'Jason Lawrence',photoLicense:'CC BY 2.0'},
  {id:'k3',brand:'Kia',name:'K3 Sedán',category:'Sedán',price:72990000,fuel:'Gasolina',trans:'Consultar versión',image:'https://commons.wikimedia.org/wiki/Special:FilePath/2024%20Kia%20K3%20Sedan%20GT%20Line%20%28Colombia%29%20front%20view.jpg?width=720',source:'https://kia.com.co/nuestros-vehiculos',photoPage:'https://commons.wikimedia.org/wiki/File:2024%20Kia%20K3%20Sedan%20GT%20Line%20%28Colombia%29%20front%20view.jpg',photoAuthor:'Autosdeprimera',photoLicense:'CC BY 3.0'},
  {id:'onix',brand:'Chevrolet',name:'Onix Sedán',category:'Sedán',price:75790000,fuel:'Gasolina',trans:'Consultar versión',image:'https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Chevrolet%20Onix%20Sedan%201.0%20Premier%20Turbo%20%28Colombia%29%20front%20view.png?width=720',source:'https://www.chevrolet.com.co/comprar-carros/onix-sedan-2026',photoPage:'https://commons.wikimedia.org/wiki/File:2021%20Chevrolet%20Onix%20Sedan%201.0%20Premier%20Turbo%20%28Colombia%29%20front%20view.png',photoAuthor:'Autosdeprimera',photoLicense:'Consultar ficha'},
  {id:'duster',brand:'Renault',name:'Duster',category:'SUV',price:85990000,fuel:'Gasolina',trans:'Consultar versión',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Renault%20Duster%2C%20Colombia.jpg?width=720',source:'https://www.renault.com.co/vehiculos/duster/precios-y-versiones.html?gradeCode=ENS_MDL2P1SERIELIM4',photoPage:'https://commons.wikimedia.org/wiki/File:Renault%20Duster%2C%20Colombia.jpg',photoAuthor:'JLaw45',photoLicense:'CC BY 2.0'},
  {id:'corolla',brand:'Toyota',name:'Corolla',category:'Sedán',price:109900000,fuel:'Híbrido',trans:'Consultar versión',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Corolla%20Altis%20%2831462914466%29.jpg?width=720',source:'https://www.toyota.com.co/mi-toyota/servicios-conectados',photoPage:'https://commons.wikimedia.org/wiki/File:Toyota%20Corolla%20Altis%20%2831462914466%29.jpg',photoAuthor:'Consultar ficha',photoLicense:'Consultar ficha'},
  {id:'taos',brand:'Volkswagen',name:'Taos',category:'SUV',price:114990000,fuel:'Gasolina',trans:'Automática',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Taos%20%2820240301%29.jpg?width=720',source:'https://www.volkswagen.co/taos/taos-2/Taos',photoPage:'https://commons.wikimedia.org/wiki/File:Volkswagen%20Taos%20%2820240301%29.jpg',photoAuthor:'Mateusmatsuda',photoLicense:'CC BY 4.0'},
  {id:'kicks',brand:'Nissan',name:'Kicks',category:'SUV',price:117990000,fuel:'Gasolina',trans:'CVT',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Nissan%20Kicks%202.0%20Exclusive%202026.jpg?width=720',source:'https://www.nissan.com.co/vehiculos/nuevos/kicks.html',photoPage:'https://commons.wikimedia.org/wiki/File:Nissan%20Kicks%202.0%20Exclusive%202026.jpg',photoAuthor:'RL GNZLZ',photoLicense:'CC BY-SA 4.0',note:'Referencia publicada con vigencia hasta septiembre de 2026'},
  {id:'sportage',brand:'Kia',name:'Sportage',category:'SUV',price:129990000,fuel:'Gasolina / híbrido según versión',trans:'Consultar versión',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Sportage%20%28NQ5%29%201X7A0319.jpg?width=720',source:'https://kia.com.co/New-Sportage-Reservas',photoPage:'https://commons.wikimedia.org/wiki/File:Kia%20Sportage%20%28NQ5%29%201X7A0319.jpg',photoAuthor:'Consultar ficha',photoLicense:'Consultar ficha'},
  {id:'cross',brand:'Toyota',name:'Corolla Cross',category:'SUV',price:139900000,fuel:'Gasolina / híbrido',trans:'Consultar versión',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Corolla%20Cross%2C%20white.jpg?width=720',source:'https://toyota.com.co/cotiza-tu-toyota/vehiculos-nuevos',photoPage:'https://commons.wikimedia.org/wiki/File:Toyota%20Corolla%20Cross%2C%20white.jpg',photoAuthor:'Ssu',photoLicense:'Consultar ficha'},
  {id:'ranger',brand:'Ford',name:'Ranger',category:'Pickup',price:165990000,fuel:'Diésel',trans:'Según versión',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20Ranger%204x4%20Sport%202024.jpg?width=720',source:'https://www.ford.com.co/pick-ups/ranger-nueva-generacion/',photoPage:'https://commons.wikimedia.org/wiki/File:Ford%20Ranger%204x4%20Sport%202024.jpg',photoAuthor:'Consultar ficha',photoLicense:'Consultar ficha',note:'Precio de entrada publicado para versión XL Chasis 4x4; vigencia septiembre de 2026'},
  {id:'rav4',brand:'Toyota',name:'RAV4',category:'SUV',price:207500000,fuel:'Híbrido',trans:'Consultar versión',image:'https://commons.wikimedia.org/wiki/Special:FilePath/TOYOTA%20RAV4%20%28XA40%29%20China%20%2825%29.jpg?width=720',source:'https://www.toyota.com.co/cotiza-tu-toyota/vehiculos-nuevos',photoPage:'https://commons.wikimedia.org/wiki/File:TOYOTA%20RAV4%20%28XA40%29%20China%20%2825%29.jpg',photoAuthor:'Consultar ficha',photoLicense:'Consultar ficha'}
];
// Clasificación orientativa por precio de referencia, no segmento oficial de fabricante.
// Baja: hasta $79.999.999; Media: $80.000.000 a $149.999.999; Alta: desde $150.000.000.
const gama = c => c.price < 80000000 ? 'Baja' : c.price < 150000000 ? 'Media' : 'Alta';
const categoryOrder = {'Sedán':0,'Hatchback':1,'SUV':2,'Pickup':3};
const $ = id => document.getElementById(id);
const plateDefaults = {
kwid:[50,72,22,12],picanto:[50,73,24,12],picanto_extra:[50,63,24,12],k3:[50,75,24,12],
onix:[50,75,23,12],duster:[50,74,25,12],corolla:[50,75,23,12],
taos:[50,74,24,12],kicks:[50,75,25,12],sportage:[50,74,25,12],
cross:[50,75,25,12],ranger:[50,74,26,12],rav4:[50,74,25,12]
};
function platePos(id){
 try {const v=JSON.parse(localStorage.getItem('placa_'+id));if(Array.isArray(v)&&v.length===4)return v;}catch(e){}
 return plateDefaults[id]||[50,74,25,12];
}

const money = n => new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n);
const million = n => '$' + (n/1000000).toLocaleString('es-CO',{maximumFractionDigits:1}) + ' M';
const escapeHTML = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const svgFallback = (car) => { const label=escapeHTML(car.brand+' '+car.name); const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="480" viewBox="0 0 800 480"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#29313d"/><stop offset="1" stop-color="#0e1218"/></linearGradient></defs><rect width="800" height="480" fill="url(#g)"/><path d="M135 292h530l-35-60-100-40H275l-95 40z" fill="#758397" stroke="#d0d8e3" stroke-width="5"/><rect x="250" y="204" width="120" height="55" rx="8" fill="#303d50"/><rect x="384" y="204" width="120" height="55" rx="8" fill="#303d50"/><circle cx="250" cy="302" r="40" fill="#101318" stroke="#aeb8c7" stroke-width="12"/><circle cx="555" cy="302" r="40" fill="#101318" stroke="#aeb8c7" stroke-width="12"/><text x="400" y="410" font-family="Arial" font-size="31" fill="#e5ebf5" text-anchor="middle">${label}</text><text x="400" y="447" font-family="Arial" font-size="17" fill="#9caabd" text-anchor="middle">ILUSTRACIÓN DE REFERENCIA · NO FOTOGRAFÍA</text></svg>`;return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);};
const safeRead=(key)=>{try{return JSON.parse(localStorage.getItem(key))||[];}catch{return [];}};
let favorites=new Set(safeRead('valante_favorites').filter(id=>cars.some(c=>c.id===id)));
let compare=new Set();let onlyFavorites=false;
const persist=()=>{try{localStorage.setItem('valante_favorites',JSON.stringify([...favorites]));}catch{}};
let toastTimer;function toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),3000);}
function updateStats(){ $('totalCars').textContent=cars.length; $('lowestPrice').textContent=million(Math.min(...cars.map(c=>c.price)));$('favCount').textContent=favorites.size;$('favStat').textContent=favorites.size;$('compareStat').textContent=compare.size+'/3';$('favoritosBtn').setAttribute('aria-pressed',String(onlyFavorites));}
function render(){let q=$('search').value.trim().toLocaleLowerCase('es');let cat=$('category').value;let budget=Number($('budget').value);let range=$('range').value;let list=cars.filter(c=>(!q||(c.brand+' '+c.name+' '+c.category).toLocaleLowerCase('es').includes(q))&&(cat==='all'||c.category===cat)&&(range==='all'||gama(c)===range)&&(!budget||c.price<=budget)&&(!onlyFavorites||favorites.has(c.id)));
list.sort((a,b)=>$('sort').value==='category'?(categoryOrder[a.category]-categoryOrder[b.category]||a.price-b.price):$('sort').value==='priceDesc'?b.price-a.price:$('sort').value==='name'?(a.brand+' '+a.name).localeCompare(b.brand+' '+b.name):a.price-b.price);
$('resultsCount').textContent=`${list.length} de ${cars.length} vehículos`;$('filterHint').textContent=onlyFavorites?'Mostrando solo favoritos':'';$('noResults').hidden=list.length!==0;
$('carGrid').innerHTML=list.map(c=>`<article class="car-card"><div class="car-photo"><img loading="lazy" decoding="async" width="720" height="432" src="${escapeHTML(c.image||svgFallback(c))}" data-fallback="${escapeHTML(svgFallback(c))}" alt="${c.image?'Fotografía ilustrativa de':'Ilustración de'} ${escapeHTML(c.brand+' '+c.name)}"><span class="tag">${escapeHTML(c.category)}</span><span class="gama-tag">Gama ${gama(c)}</span><span class="placa-oculta" data-placa="${c.id}" style="left:${platePos(c.id)[0]}%;top:${platePos(c.id)[1]}%;width:${platePos(c.id)[2]}%;height:${platePos(c.id)[3]}%" title="Arrastra para ajustar la posición de la placa" aria-hidden="true"></span>${c.id==='picanto'?`<span class="placa-oculta" data-placa="picanto_extra" style="left:${platePos('picanto_extra')[0]}%;top:${platePos('picanto_extra')[1]}%;width:${platePos('picanto_extra')[2]}%;height:${platePos('picanto_extra')[3]}%" title="Arrastra este segundo rectángulo para cubrir la placa" aria-hidden="true"></span>`:''}<button class="heart ${favorites.has(c.id)?'active':''}" data-action="favorite" data-id="${c.id}" aria-label="${favorites.has(c.id)?'Quitar de':'Añadir a'} favoritos" aria-pressed="${favorites.has(c.id)}">${icon('heart')}</button></div><p class="photo-credit">© Marca: ${escapeHTML(c.brand)} · Autor indicado: ${escapeHTML(c.photoAuthor)} · Licencia indicada: ${escapeHTML(c.photoLicense)} (sin verificar) · <a href="${escapeHTML(c.photoPage)}" target="_blank" rel="noopener noreferrer">Autoría y licencia ${icon('external')}</a></p><div class="car-body"><span class="car-brand">${escapeHTML(c.brand)}</span><h3>${escapeHTML(c.name)}</h3><div class="car-price"><small>Desde </small>${money(c.price)}</div><div class="car-info"><span>${escapeHTML(c.fuel)}</span><span>${escapeHTML(c.trans)}</span></div>${c.note?`<small style="color:#bfc6d0;margin-bottom:12px">${escapeHTML(c.note)}</small>`:''}<div class="car-actions"><button class="btn subtle" data-action="compare" data-id="${c.id}">${icon(compare.has(c.id)?'check':'plus')} ${compare.has(c.id)?'Comparando':'Comparar'}</button></div><a class="source" href="${escapeHTML(c.source)}" target="_blank" rel="noopener noreferrer">Consultar precio en sitio oficial ${icon('external')}</a></div></article>`).join('');updateStats();}
$('carGrid').addEventListener('error',e=>{if(e.target.tagName==='IMG'&&e.target.dataset.fallback&&e.target.src!==e.target.dataset.fallback){e.target.src=e.target.dataset.fallback;e.target.alt='Ilustración de referencia del vehículo';} },true);
$('carGrid').addEventListener('click',e=>{const btn=e.target.closest('button[data-action]');if(!btn)return;const id=btn.dataset.id;const car=cars.find(c=>c.id===id);if(!car)return;if(btn.dataset.action==='favorite'){favorites.has(id)?favorites.delete(id):favorites.add(id);persist();render();toast('Favoritos actualizados');}if(btn.dataset.action==='compare'){if(compare.has(id))compare.delete(id);else if(compare.size>=3){toast('Puedes comparar máximo tres vehículos');return;}else compare.add(id);$('sort').value='category';render();renderCompare();}});
function renderCompare(){const chosen=cars.filter(c=>compare.has(c.id));$('comparison').innerHTML=chosen.length?`<table class="compare-table"><thead><tr><th>Característica</th>${chosen.map(c=>`<th>${escapeHTML(c.brand+' '+c.name)}<br><button class="remove" data-remove="${c.id}">Quitar ${icon('x')}</button></th>`).join('')}</tr></thead><tbody><tr><td>Precio desde</td>${chosen.map(c=>`<td>${money(c.price)}</td>`).join('')}</tr><tr><td>Categoría</td>${chosen.map(c=>`<td>${escapeHTML(c.category)}</td>`).join('')}</tr><tr><td>Motorización</td>${chosen.map(c=>`<td>${escapeHTML(c.fuel)}</td>`).join('')}</tr><tr><td>Transmisión</td>${chosen.map(c=>`<td>${escapeHTML(c.trans)}</td>`).join('')}</tr><tr><td>Fuente</td>${chosen.map(c=>`<td><a class="source" href="${escapeHTML(c.source)}" target="_blank" rel="noopener noreferrer">Marca oficial ${icon('external')}</a></td>`).join('')}</tr></tbody></table>`:'<p class="empty">Aún no has seleccionado vehículos para comparar.</p>';$('compareStat').textContent=compare.size+'/3';}
$('comparison').addEventListener('click',e=>{const btn=e.target.closest('[data-remove]');if(btn){compare.delete(btn.dataset.remove);renderCompare();render();}});
['search','category','range','budget','sort'].forEach(id=>$(id).addEventListener(id==='search'?'input':'change',render));
$('clearFilters').addEventListener('click',()=>{$('search').value='';$('category').value='all';$('range').value='all';$('budget').value='0';$('sort').value='category';onlyFavorites=false;render();});
$('favoritosBtn').addEventListener('click',()=>{onlyFavorites=!onlyFavorites;render();document.getElementById('catalogo').scrollIntoView({behavior:'smooth'});});

render();renderCompare();

// Ajuste individual: arrastrar cada rectángulo negro; la posición queda guardada.
let plateDrag=null;
$('carGrid').addEventListener('pointerdown',e=>{
 const el=e.target.closest('.placa-oculta');
 if(!el)return;
 const rect=el.parentElement.getBoundingClientRect();
 plateDrag={el,rect,id:el.dataset.placa};
 el.setPointerCapture(e.pointerId);
 e.preventDefault();
});
$('carGrid').addEventListener('pointermove',e=>{
 if(!plateDrag)return;
 const {el,rect}=plateDrag;
 const x=Math.max(5,Math.min(95,(e.clientX-rect.left)/rect.width*100));
 const y=Math.max(5,Math.min(95,(e.clientY-rect.top)/rect.height*100));
 el.style.left=x+'%';el.style.top=y+'%';
});
function savePlate(){
 if(!plateDrag)return;
 const {el,id}=plateDrag;
 const pos=[parseFloat(el.style.left),parseFloat(el.style.top),parseFloat(el.style.width),parseFloat(el.style.height)];
 try{localStorage.setItem('placa_'+id,JSON.stringify(pos));}catch(e){}
 plateDrag=null;
}
$('carGrid').addEventListener('pointerup',savePlate);
$('carGrid').addEventListener('pointercancel',savePlate);
