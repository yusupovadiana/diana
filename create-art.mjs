import faili from 'node:fs/promises';
import { fileURLToPath as putKFailu } from 'node:url';
import { createRequire as sozdatZagruzku } from 'node:module';
const zagruzit = sozdatZagruzku(import.meta.url);
const risovalka = zagruzit(process.env.SHARP_MODULE || 'sharp');
const papka = new URL('./', import.meta.url);
await faili.mkdir(papka, {recursive:true});
function obernut(soderzhimoe) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">${soderzhimoe}</svg>`;
}
function pryamougolnik(X,Y,shirina,visota,zalivka,eshe='') {
  return `<rect x="${X}" y="${Y}" width="${shirina}" height="${visota}" fill="${zalivka}" ${eshe}/>`;
}
function krug(X,Y,radius,zalivka) {
  return `<circle cx="${X}" cy="${Y}" r="${radius}" fill="${zalivka}"/>`;
}
function liniya(put,zalivka,eshe='') {
  return `<path d="${put}" fill="${zalivka}" ${eshe}/>`;
}
function chertochka(X1,Y1,X2,Y2,cvet,tolshina=4) {
  return `<path d="M${X1} ${Y1}L${X2} ${Y2}" fill="none" stroke="${cvet}" stroke-width="${tolshina}"/>`;
}
const kartinki={};
let otel = pryamougolnik(0,0,600,600,'#eaa7b5');
otel += krug(463,118,60,'#f8d9c7');
otel += liniya('M0 310L100 178L209 305L319 139L461 305L532 203L600 290V600H0Z','#b87990');
otel += liniya('M259 212L319 139L379 212L333 191L310 209L292 187Z','#f9eee1');
otel += pryamougolnik(55,486,490,114,'#7f365a');
otel += pryamougolnik(89,294,422,192,'#f9c7c3');
otel += pryamougolnik(183,203,234,283,'#f9d9c8');
otel += liniya('M66 294L97 261H503L535 294Z','#7b3958');
otel += liniya('M162 203L207 158H393L438 203Z','#7b3958');
otel += pryamougolnik(256,112,88,47,'#f9d9c8');
otel += liniya('M241 112L300 70L359 112Z','#7b3958');
otel += chertochka(300,71,300,31,'#7b3958',5);
otel += liniya('M303 31H344L330 43H303Z','#faf0d8');
for(let ryad=0;ryad<3;ryad++) {
  for(let stolbik=0;stolbik<9;stolbik++) {
    let X = 108+stolbik*43;
    let Y = 322+ryad*48;
    otel += pryamougolnik(X,Y,18,30,'#7b3958');
    otel += pryamougolnik(X+4,Y+4,5,20,'#d7ad79');
    otel += pryamougolnik(X-3,Y+30,24,4,'#b87990');
  }
}
for(let ryad=0;ryad<2;ryad++) {
  for(let stolbik=0;stolbik<5;stolbik++) {
    let X = 210 + stolbik * 38;
    let Y = 220 + ryad * 44;
    otel += pryamougolnik(X,Y,23,30,'#7b3958');
    otel += chertochka(X+11,Y+1,X+11,Y+29,'#f9d9c8',3);
  }
}
otel += liniya('M270 486V451A30 30 0 0 1 330 451V486Z','#552744');
otel += pryamougolnik(222,402,156,25,'#7b3958');
otel += '<text x="300" y="419" text-anchor="middle" font-family="serif" font-size="11" letter-spacing="2" fill="#fff0d3">GRAND BUDAPEST</text>';
for(let nomer=0;nomer<5;nomer++) {
  let X = 258 - nomer * 19;
  let Y = 486 + nomer * 18;
  let shirina = 84 + nomer * 38;
  otel += pryamougolnik(X,Y,shirina,12,'#f7d5c5');
}
kartinki['01-budapest']=otel;
let ameli = pryamougolnik(0,0,600,600,'#285b47');
ameli += krug(452,140,76,'#65846a');
ameli += pryamougolnik(98,171,404,350,'#f2d69f');
ameli += liniya('M80 171L131 98H469L520 171Z','#163d34');
ameli += pryamougolnik(118,210,364,255,'#173e35');
ameli += pryamougolnik(145,237,121,188,'#8c9b72');
ameli += pryamougolnik(315,237,141,188,'#8c9b72');
ameli += chertochka(205,237,205,425,'#e6c991',9);
ameli += chertochka(386,237,386,425,'#e6c991',9);
ameli += chertochka(145,323,266,323,'#e6c991',9);
ameli += chertochka(315,323,456,323,'#e6c991',9);
ameli += pryamougolnik(116,176,368,46,'#be4c3c');
for(let nomer=0;nomer<8;nomer++) {
  ameli += liniya(`M${116+nomer*46} 208h23v22q-12 15-23 0Z`,'#f2d69f');
  ameli += liniya(`M${139+nomer*46} 208h23v22q-12 15-23 0Z`,'#be4c3c');
}
ameli += pryamougolnik(233,119,134,34,'#285b47');
ameli += '<text x="300" y="142" text-anchor="middle" font-family="serif" font-size="21" letter-spacing="3" fill="#f2d69f">CAFÉ</text>';
ameli += pryamougolnik(0,521,600,79,'#163d34');
ameli += krug(164,479,71,'#be4c3c');
ameli += pryamougolnik(93,473,142,18,'#be4c3c');
ameli += chertochka(164,491,164,569,'#f2d69f',9);
ameli += pryamougolnik(141,446,38,30,'#f7ecd4');
ameli += liniya('M179 451C204 446 203 474 179 466','none','stroke="#f7ecd4" stroke-width="7"');
ameli += chertochka(147,438,147,426,'#f2d69f',3);
ameli += chertochka(161,438,166,416,'#f2d69f',3);
ameli += liniya('M397 528V443M397 488C357 469 348 438 369 427C394 425 398 456 397 477M397 474C438 457 447 425 424 418C404 420 397 447 397 474','none','stroke="#65846a" stroke-width="12"');
ameli += liniya('M365 523H428L417 570H378Z','#be4c3c');
kartinki['02-amelie']=ameli;
let luna = pryamougolnik(0,0,600,600,'#d4b263');
luna += krug(428,146,83,'#f6e5b7');
luna += liniya('M0 397Q135 288 257 384Q425 253 600 388V600H0Z','#89906a');
luna += liniya('M0 466Q160 358 330 460Q455 390 600 454V600H0Z','#556651');
luna += liniya('M125 475L300 232L480 475Z','#efe1b2');
luna += liniya('M300 232L361 475H480Z','#bd6b45');
luna += liniya('M300 282L219 475H357Z','#344c40');
luna += chertochka(300,216,300,241,'#344c40',6);
luna += chertochka(131,471,93,510,'#e9d9a8',4);
luna += chertochka(474,471,515,510,'#e9d9a8',4);
var derevya = [62,112,490,540];
for(let nomer=0;nomer<derevya.length;nomer++) {
  let X=derevya[nomer];
  luna += pryamougolnik(X-4,308,8,107,'#344c40');
  luna += liniya(`M${X} 215L${X-42} 333H${X+42}Z`,'#45604d');
}
luna += krug(106,127,28,'#344c40');
luna += krug(170,127,28,'#344c40');
luna += pryamougolnik(106,101,65,25,'#344c40');
luna += krug(106,132,17,'#8ea095');
luna += krug(170,132,17,'#8ea095');
luna += liniya('M115 87Q136 65 162 87','none','stroke="#344c40" stroke-width="5"');
luna += chertochka(48,554,552,554,'#d4b263',3);
kartinki['03-moonrise']=luna;
let lalalend = pryamougolnik(0,0,600,600,'#2d4383');
lalalend += krug(449,121,57,'#f6db87');
lalalend += krug(466,105,51,'#2d4383');
var zvezdi = [[79,100,3],[144,158,3],[293,95,4],[382,218,3],[504,263,3],[248,223,2],[75,306,3],[541,73,3]];
for (let nomer = 0; nomer < zvezdi.length; nomer++) {
  let X = zvezdi[nomer][0];
  let Y = zvezdi[nomer][1];
  let radius = zvezdi[nomer][2];
  lalalend += krug(X,Y,radius,'#f6db87');
}
lalalend += liniya('M0 430Q166 336 314 421Q464 355 600 431V600H0Z','#172d64');
lalalend += pryamougolnik(48,420,502,180,'#132447');
for(let nomer=0;nomer<9;nomer++) {
  let X = 62+nomer*54;
    let Y = 498-nomer*19;
  lalalend += pryamougolnik(X,Y,49,102+nomer*19,'#f6ecd0');
  if (nomer < 8) {
    if (nomer != 2 && nomer != 6) {
      lalalend += pryamougolnik(X+32,Y,24,55,'#15294c');
    }
  }
}
lalalend += pryamougolnik(90,227,9,190,'#f6db87');
lalalend += pryamougolnik(75,412,40,9,'#f6db87');
lalalend += liniya('M94 221L60 196H128Z','#f6db87');
lalalend += pryamougolnik(71,157,46,41,'#f6db87');
lalalend += liniya('M61 157L95 127L126 157Z','#15294c');
lalalend += pryamougolnik(90,135,8,13,'#f6db87');
lalalend += liniya('M350 277V236L398 224V264','none','stroke="#f6db87" stroke-width="6"');
lalalend += liniya('M349 277C321 268 321 299 349 288Z','#f6db87');
lalalend += liniya('M397 264C369 255 369 286 397 275Z','#f6db87');
kartinki['04-lalaland']=lalalend;
let prizraki = pryamougolnik(0,0,600,600,'#b54a42');
prizraki += krug(456,136,64,'#f0cf92');
prizraki += liniya('M0 359L96 261L183 350L307 205L441 341L600 240V600H0Z','#833f44');
prizraki += pryamougolnik(128,302,344,185,'#ead4ab');
prizraki += pryamougolnik(165,216,270,91,'#e4b986');
prizraki += pryamougolnik(222,156,156,60,'#ead4ab');
prizraki += liniya('M118 304Q158 284 178 259H422Q442 284 482 304Z','#294f48');
prizraki += liniya('M146 217Q184 198 204 175H396Q417 198 454 217Z','#294f48');
prizraki += liniya('M199 156Q253 137 300 95Q347 137 401 156Z','#294f48');
for(let X=154;X<450;X+=48) {
  prizraki += pryamougolnik(X,333,27,46,'#b54a42');
  prizraki += pryamougolnik(X,399,27,48,'#b54a42');
}
for(let X=196;X<418;X+=48) {
  prizraki += pryamougolnik(X,228,23,33,'#b54a42');
}
prizraki += liniya('M272 487V427A28 28 0 0 1 328 427V487Z','#294f48');
prizraki += pryamougolnik(0,487,600,113,'#294f48');
prizraki += liniya('M37 545Q300 418 563 545','none','stroke="#dc7760" stroke-width="24"');
prizraki += liniya('M37 495Q300 368 563 495','none','stroke="#f0cf92" stroke-width="7"');
for(let X=48;X<580;X+=56) {
  let Y=446+Math.pow(X-300,2)*.0008;
  prizraki += chertochka(X,Y-4,X,Y+51,'#f0cf92',6);
}
var fonari = [70,531];
for(let nomer=0;nomer<fonari.length;nomer++) {
  let X=fonari[nomer];
  prizraki += chertochka(X,234,X,345,'#f0cf92',4);
  prizraki += pryamougolnik(X-17,278,34,48,'#f0cf92','rx="13"');
  prizraki += chertochka(X-11,288,X+11,288,'#b54a42',3);
  prizraki += chertochka(X-11,316,X+11,316,'#b54a42',3);
}
kartinki['05-spirited']=prizraki;
let katushka = krug(300,300,278,'#282625');
katushka += krug(300,300,258,'#3a3634');
katushka += krug(300,300,240,'#282625');
var cveta = ['#eaa7b5','#285b47','#d4b263','#2d4383','#b54a42'];
for(let nomer=0;nomer<5;nomer++) {
  let ugol=(nomer*72-90)*Math.PI/180;
  let X = 300 + 147 * Math.cos(ugol);
  let Y = 300 + 147 * Math.sin(ugol);
  katushka += krug(X,Y,70,cveta[nomer]);
}
katushka += krug(300,300,41,'#f7f3e9');
katushka += krug(300,300,13,'#282625');
for(let nomer=0;nomer<40;nomer++) {
  let ugol=nomer*9*Math.PI/180;
  let X = 300 + 268 * Math.cos(ugol);
  let Y = 300 + 268 * Math.sin(ugol);
  katushka += krug(X,Y,3,'#e2cda7');
}
kartinki['reel']=katushka;
var imena = Object.keys(kartinki);
for(var nomer = 0; nomer < imena.length; nomer++) {
  var imya = imena[nomer];
  var risunok = obernut(kartinki[imya]);
  await faili.writeFile(new URL(imya+'.svg',papka),risunok);
  await risovalka(Buffer.from(risunok)).png().toFile(putKFailu(new URL(imya+'.png',papka)));
  console.log(imya+'.png: 600 × 600');
}
