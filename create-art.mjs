import faili from 'node:fs/promises';
import { createRequire as sozdatZagruzku } from 'node:module';
const zagruzit = sozdatZagruzku(import.meta.url);
const risovalka = zagruzit(process.env.SHARP_MODULE || 'sharp');
const papka = new URL('./', import.meta.url);
await faili.mkdir(papka, {recursive:true});
function obernut(soderzhimoe) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">${soderzhimoe}</svg>`;
}
function pryamougolnik(iks,igrek,shirina,visota,zalivka,eshe='') {
  return `<rect x="${iks}" y="${igrek}" width="${shirina}" height="${visota}" fill="${zalivka}" ${eshe}/>`;
}
function krug(iks,igrek,radius,zalivka) {
  return `<circle cx="${iks}" cy="${igrek}" r="${radius}" fill="${zalivka}"/>`;
}
function liniya(put,zalivka,eshe='') {
  return `<path d="${put}" fill="${zalivka}" ${eshe}/>`;
}
function chertochka(iks1,igrek1,iks2,igrek2,cvet,tolshina=4) {
  return `<path d="M${iks1} ${igrek1}L${iks2} ${igrek2}" fill="none" stroke="${cvet}" stroke-width="${tolshina}"/>`;
}
const kartinki={};
let otel=pryamougolnik(0,0,600,600,'#eaa7b5')+krug(463,118,60,'#f8d9c7')+liniya('M0 310L100 178L209 305L319 139L461 305L532 203L600 290V600H0Z','#b87990')+liniya('M259 212L319 139L379 212L333 191L310 209L292 187Z','#f9eee1');
otel+=pryamougolnik(55,486,490,114,'#7f365a')+pryamougolnik(89,294,422,192,'#f9c7c3')+pryamougolnik(183,203,234,283,'#f9d9c8')+liniya('M66 294L97 261H503L535 294Z','#7b3958')+liniya('M162 203L207 158H393L438 203Z','#7b3958')+pryamougolnik(256,112,88,47,'#f9d9c8')+liniya('M241 112L300 70L359 112Z','#7b3958')+chertochka(300,71,300,31,'#7b3958',5)+liniya('M303 31H344L330 43H303Z','#faf0d8');
for(let ryad=0;ryad<3;ryad++)for(let stolbik=0;stolbik<9;stolbik++){let iks=108+stolbik*43,igrek=322+ryad*48;otel+=pryamougolnik(iks,igrek,18,30,'#7b3958')+pryamougolnik(iks+4,igrek+4,5,20,'#d7ad79')+pryamougolnik(iks-3,igrek+30,24,4,'#b87990');}
for(let ryad=0;ryad<2;ryad++)for(let stolbik=0;stolbik<5;stolbik++)otel+=pryamougolnik(210+stolbik*38,220+ryad*44,23,30,'#7b3958')+chertochka(221+stolbik*38,221+ryad*44,221+stolbik*38,249+ryad*44,'#f9d9c8',3);
otel+=liniya('M270 486V451A30 30 0 0 1 330 451V486Z','#552744')+pryamougolnik(222,402,156,25,'#7b3958')+'<text x="300" y="419" text-anchor="middle" font-family="serif" font-size="11" letter-spacing="2" fill="#fff0d3">GRAND BUDAPEST</text>';
for(let nomer=0;nomer<5;nomer++)otel+=pryamougolnik(258-nomer*19,486+nomer*18,84+nomer*38,12,'#f7d5c5');
kartinki['01-budapest']=otel;
let ameli=pryamougolnik(0,0,600,600,'#285b47')+krug(452,140,76,'#65846a')+pryamougolnik(98,171,404,350,'#f2d69f')+liniya('M80 171L131 98H469L520 171Z','#163d34')+pryamougolnik(118,210,364,255,'#173e35')+pryamougolnik(145,237,121,188,'#8c9b72')+pryamougolnik(315,237,141,188,'#8c9b72')+chertochka(205,237,205,425,'#e6c991',9)+chertochka(386,237,386,425,'#e6c991',9)+chertochka(145,323,266,323,'#e6c991',9)+chertochka(315,323,456,323,'#e6c991',9)+pryamougolnik(116,176,368,46,'#be4c3c');
for(let nomer=0;nomer<8;nomer++)ameli+=liniya(`M${116+nomer*46} 208h23v22q-12 15-23 0Z`,'#f2d69f')+liniya(`M${139+nomer*46} 208h23v22q-12 15-23 0Z`,'#be4c3c');
ameli+=pryamougolnik(233,119,134,34,'#285b47')+'<text x="300" y="142" text-anchor="middle" font-family="serif" font-size="21" letter-spacing="3" fill="#f2d69f">CAFÉ</text>'+pryamougolnik(0,521,600,79,'#163d34')+krug(164,479,71,'#be4c3c')+pryamougolnik(93,473,142,18,'#be4c3c')+chertochka(164,491,164,569,'#f2d69f',9)+pryamougolnik(141,446,38,30,'#f7ecd4')+liniya('M179 451C204 446 203 474 179 466','none','stroke="#f7ecd4" stroke-width="7"')+chertochka(147,438,147,426,'#f2d69f',3)+chertochka(161,438,166,416,'#f2d69f',3)+liniya('M397 528V443M397 488C357 469 348 438 369 427C394 425 398 456 397 477M397 474C438 457 447 425 424 418C404 420 397 447 397 474','none','stroke="#65846a" stroke-width="12"')+liniya('M365 523H428L417 570H378Z','#be4c3c');
kartinki['02-amelie']=ameli;
let luna=pryamougolnik(0,0,600,600,'#d4b263')+krug(428,146,83,'#f6e5b7')+liniya('M0 397Q135 288 257 384Q425 253 600 388V600H0Z','#89906a')+liniya('M0 466Q160 358 330 460Q455 390 600 454V600H0Z','#556651')+liniya('M125 475L300 232L480 475Z','#efe1b2')+liniya('M300 232L361 475H480Z','#bd6b45')+liniya('M300 282L219 475H357Z','#344c40')+chertochka(300,216,300,241,'#344c40',6)+chertochka(131,471,93,510,'#e9d9a8',4)+chertochka(474,471,515,510,'#e9d9a8',4);
for(let iks of [62,112,490,540])luna+=pryamougolnik(iks-4,308,8,107,'#344c40')+liniya(`M${iks} 215L${iks-42} 333H${iks+42}Z`,'#45604d');
luna+=krug(106,127,28,'#344c40')+krug(170,127,28,'#344c40')+pryamougolnik(106,101,65,25,'#344c40')+krug(106,132,17,'#8ea095')+krug(170,132,17,'#8ea095')+liniya('M115 87Q136 65 162 87','none','stroke="#344c40" stroke-width="5"')+chertochka(48,554,552,554,'#d4b263',3);
kartinki['03-moonrise']=luna;
let lalalend=pryamougolnik(0,0,600,600,'#2d4383')+krug(449,121,57,'#f6db87')+krug(466,105,51,'#2d4383');
for(let [iks,igrek,radius] of [[79,100,3],[144,158,3],[293,95,4],[382,218,3],[504,263,3],[248,223,2],[75,306,3],[541,73,3]])lalalend+=krug(iks,igrek,radius,'#f6db87');
lalalend+=liniya('M0 430Q166 336 314 421Q464 355 600 431V600H0Z','#172d64')+pryamougolnik(48,420,502,180,'#132447');
for(let nomer=0;nomer<9;nomer++){let iks=62+nomer*54,igrek=498-nomer*19;lalalend+=pryamougolnik(iks,igrek,49,102+nomer*19,'#f6ecd0');if(nomer<8 && nomer!=2 && nomer!=6)lalalend+=pryamougolnik(iks+32,igrek,24,55,'#15294c');}
lalalend+=pryamougolnik(90,227,9,190,'#f6db87')+pryamougolnik(75,412,40,9,'#f6db87')+liniya('M94 221L60 196H128Z','#f6db87')+pryamougolnik(71,157,46,41,'#f6db87')+liniya('M61 157L95 127L126 157Z','#15294c')+pryamougolnik(90,135,8,13,'#f6db87')+liniya('M350 277V236L398 224V264','none','stroke="#f6db87" stroke-width="6"')+liniya('M349 277C321 268 321 299 349 288Z','#f6db87')+liniya('M397 264C369 255 369 286 397 275Z','#f6db87');
kartinki['04-lalaland']=lalalend;
let prizraki=pryamougolnik(0,0,600,600,'#b54a42')+krug(456,136,64,'#f0cf92')+liniya('M0 359L96 261L183 350L307 205L441 341L600 240V600H0Z','#833f44')+pryamougolnik(128,302,344,185,'#ead4ab')+pryamougolnik(165,216,270,91,'#e4b986')+pryamougolnik(222,156,156,60,'#ead4ab')+liniya('M118 304Q158 284 178 259H422Q442 284 482 304Z','#294f48')+liniya('M146 217Q184 198 204 175H396Q417 198 454 217Z','#294f48')+liniya('M199 156Q253 137 300 95Q347 137 401 156Z','#294f48');
for(let iks=154;iks<450;iks+=48)prizraki+=pryamougolnik(iks,333,27,46,'#b54a42')+pryamougolnik(iks,399,27,48,'#b54a42');
for(let iks=196;iks<418;iks+=48)prizraki+=pryamougolnik(iks,228,23,33,'#b54a42');
prizraki+=liniya('M272 487V427A28 28 0 0 1 328 427V487Z','#294f48')+pryamougolnik(0,487,600,113,'#294f48')+liniya('M37 545Q300 418 563 545','none','stroke="#dc7760" stroke-width="24"')+liniya('M37 495Q300 368 563 495','none','stroke="#f0cf92" stroke-width="7"');
for(let iks=48;iks<580;iks+=56){let igrek=446+Math.pow(iks-300,2)*.0008;prizraki+=chertochka(iks,igrek-4,iks,igrek+51,'#f0cf92',6);}
for(let iks of [70,531])prizraki+=chertochka(iks,234,iks,345,'#f0cf92',4)+pryamougolnik(iks-17,278,34,48,'#f0cf92','rx="13"')+chertochka(iks-11,288,iks+11,288,'#b54a42',3)+chertochka(iks-11,316,iks+11,316,'#b54a42',3);
kartinki['05-spirited']=prizraki;
let katushka=krug(300,300,278,'#282625')+krug(300,300,258,'#3a3634')+krug(300,300,240,'#282625');
for(let nomer=0;nomer<5;nomer++){let ugol=(nomer*72-90)*Math.PI/180;katushka+=krug(300+147*Math.cos(ugol),300+147*Math.sin(ugol),70,['#eaa7b5','#285b47','#d4b263','#2d4383','#b54a42'][nomer]);}
katushka+=krug(300,300,41,'#f7f3e9')+krug(300,300,13,'#282625');
for(let nomer=0;nomer<40;nomer++){let ugol=nomer*9*Math.PI/180;katushka+=krug(300+268*Math.cos(ugol),300+268*Math.sin(ugol),3,'#e2cda7');}
kartinki['reel']=katushka;
var imena = Object.keys(kartinki);
for(var nomer = 0; nomer < imena.length; nomer++){
 var imya = imena[nomer];
 var risunok = obernut(kartinki[imya]);
 await faili.writeFile(new URL(imya+'.svg',papka),risunok);
 await risovalka(Buffer.from(risunok)).png().toFile(new URL(imya+'.png',papka).pathname);
 console.log(imya+'.png: 600 × 600');
}
