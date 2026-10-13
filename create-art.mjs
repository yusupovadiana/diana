// Original flat illustrations: vector sources are retained beside exported PNGs.
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require(process.env.SHARP_MODULE || 'sharp');
const dir = new URL('./', import.meta.url);
await fs.mkdir(dir, {recursive:true});
const wrap = (body) => `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">${body}</svg>`;
const rect=(x,y,w,h,fill,extra='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${extra}/>`;
const circle=(x,y,r,fill)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
const path=(d,fill,extra='')=>`<path d="${d}" fill="${fill}" ${extra}/>`;
const line=(x1,y1,x2,y2,color,width=4)=>`<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${width}"/>`;
const art={};
// 01: a symmetrical pink hotel, mountain skyline and ceremonial stairway.
let hotel=rect(0,0,600,600,'#eaa7b5')+circle(463,118,60,'#f8d9c7')+path('M0 310L100 178L209 305L319 139L461 305L532 203L600 290V600H0Z','#b87990')+path('M259 212L319 139L379 212L333 191L310 209L292 187Z','#f9eee1');
hotel+=rect(55,486,490,114,'#7f365a')+rect(89,294,422,192,'#f9c7c3')+rect(183,203,234,283,'#f9d9c8')+path('M66 294L97 261H503L535 294Z','#7b3958')+path('M162 203L207 158H393L438 203Z','#7b3958')+rect(256,112,88,47,'#f9d9c8')+path('M241 112L300 70L359 112Z','#7b3958')+line(300,71,300,31,'#7b3958',5)+path('M303 31H344L330 43H303Z','#faf0d8');
for(let row=0;row<3;row++)for(let col=0;col<9;col++){let x=108+col*43,y=322+row*48;hotel+=rect(x,y,18,30,'#7b3958')+rect(x+4,y+4,5,20,'#d7ad79')+rect(x-3,y+30,24,4,'#b87990');}
for(let row=0;row<2;row++)for(let col=0;col<5;col++)hotel+=rect(210+col*38,220+row*44,23,30,'#7b3958')+line(221+col*38,221+row*44,221+col*38,249+row*44,'#f9d9c8',3);
hotel+=path('M270 486V451A30 30 0 0 1 330 451V486Z','#552744')+rect(222,402,156,25,'#7b3958')+'<text x="300" y="419" text-anchor="middle" font-family="serif" font-size="11" letter-spacing="2" fill="#fff0d3">GRAND BUDAPEST</text>';
for(let i=0;i<5;i++)hotel+=rect(258-i*19,486+i*18,84+i*38,12,'#f7d5c5');
art['01-budapest']=hotel;
// 02: a Paris café, a red awning and a small cup — an interpretation of Amélie's palette.
let amelie=rect(0,0,600,600,'#285b47')+circle(452,140,76,'#65846a')+rect(98,171,404,350,'#f2d69f')+path('M80 171L131 98H469L520 171Z','#163d34')+rect(118,210,364,255,'#173e35')+rect(145,237,121,188,'#8c9b72')+rect(315,237,141,188,'#8c9b72')+line(205,237,205,425,'#e6c991',9)+line(386,237,386,425,'#e6c991',9)+line(145,323,266,323,'#e6c991',9)+line(315,323,456,323,'#e6c991',9)+rect(116,176,368,46,'#be4c3c');
for(let i=0;i<8;i++)amelie+=path(`M${116+i*46} 208h23v22q-12 15-23 0Z`,'#f2d69f')+path(`M${139+i*46} 208h23v22q-12 15-23 0Z`,'#be4c3c');
amelie+=rect(233,119,134,34,'#285b47')+'<text x="300" y="142" text-anchor="middle" font-family="serif" font-size="21" letter-spacing="3" fill="#f2d69f">CAFÉ</text>'+rect(0,521,600,79,'#163d34')+circle(164,479,71,'#be4c3c')+rect(93,473,142,18,'#be4c3c')+line(164,491,164,569,'#f2d69f',9)+rect(141,446,38,30,'#f7ecd4')+path('M179 451C204 446 203 474 179 466','none','stroke="#f7ecd4" stroke-width="7"')+line(147,438,147,426,'#f2d69f',3)+line(161,438,166,416,'#f2d69f',3)+path('M397 528V443M397 488C357 469 348 438 369 427C394 425 398 456 397 477M397 474C438 457 447 425 424 418C404 420 397 447 397 474','none','stroke="#65846a" stroke-width="12"')+path('M365 523H428L417 570H378Z','#be4c3c');
art['02-amelie']=amelie;
// 03: a tent, island and binoculars.
let moon=rect(0,0,600,600,'#d4b263')+circle(428,146,83,'#f6e5b7')+path('M0 397Q135 288 257 384Q425 253 600 388V600H0Z','#89906a')+path('M0 466Q160 358 330 460Q455 390 600 454V600H0Z','#556651')+path('M125 475L300 232L480 475Z','#efe1b2')+path('M300 232L361 475H480Z','#bd6b45')+path('M300 282L219 475H357Z','#344c40')+line(300,216,300,241,'#344c40',6)+line(131,471,93,510,'#e9d9a8',4)+line(474,471,515,510,'#e9d9a8',4);
for(let x of [62,112,490,540])moon+=rect(x-4,308,8,107,'#344c40')+path(`M${x} 215L${x-42} 333H${x+42}Z`,'#45604d');
moon+=circle(106,127,28,'#344c40')+circle(170,127,28,'#344c40')+rect(106,101,65,25,'#344c40')+circle(106,132,17,'#8ea095')+circle(170,132,17,'#8ea095')+path('M115 87Q136 65 162 87','none','stroke="#344c40" stroke-width="5"')+line(48,554,552,554,'#d4b263',3);
art['03-moonrise']=moon;
// 04: piano keys climbing towards a blue Los Angeles night.
let lala=rect(0,0,600,600,'#2d4383')+circle(449,121,57,'#f6db87')+circle(466,105,51,'#2d4383');
for(let [x,y,r] of [[79,100,3],[144,158,3],[293,95,4],[382,218,3],[504,263,3],[248,223,2],[75,306,3],[541,73,3]])lala+=circle(x,y,r,'#f6db87');
lala+=path('M0 430Q166 336 314 421Q464 355 600 431V600H0Z','#172d64')+rect(48,420,502,180,'#132447');
for(let i=0;i<9;i++){let x=62+i*54,y=498-i*19;lala+=rect(x,y,49,102+i*19,'#f6ecd0');if(i<8&&![2,6].includes(i))lala+=rect(x+32,y,24,55,'#15294c');}
lala+=rect(90,227,9,190,'#f6db87')+rect(75,412,40,9,'#f6db87')+path('M94 221L60 196H128Z','#f6db87')+rect(71,157,46,41,'#f6db87')+path('M61 157L95 127L126 157Z','#15294c')+rect(90,135,8,13,'#f6db87')+path('M350 277V236L398 224V264','none','stroke="#f6db87" stroke-width="6"')+path('M349 277C321 268 321 299 349 288Z','#f6db87')+path('M397 264C369 255 369 286 397 275Z','#f6db87');
art['04-lalaland']=lala;
// 05: the bathhouse, lanterns and a red bridge.
let spirit=rect(0,0,600,600,'#b54a42')+circle(456,136,64,'#f0cf92')+path('M0 359L96 261L183 350L307 205L441 341L600 240V600H0Z','#833f44')+rect(128,302,344,185,'#ead4ab')+rect(165,216,270,91,'#e4b986')+rect(222,156,156,60,'#ead4ab')+path('M118 304Q158 284 178 259H422Q442 284 482 304Z','#294f48')+path('M146 217Q184 198 204 175H396Q417 198 454 217Z','#294f48')+path('M199 156Q253 137 300 95Q347 137 401 156Z','#294f48');
for(let x=154;x<450;x+=48)spirit+=rect(x,333,27,46,'#b54a42')+rect(x,399,27,48,'#b54a42');
for(let x=196;x<418;x+=48)spirit+=rect(x,228,23,33,'#b54a42');
spirit+=path('M272 487V427A28 28 0 0 1 328 427V487Z','#294f48')+rect(0,487,600,113,'#294f48')+path('M37 545Q300 418 563 545','none','stroke="#dc7760" stroke-width="24"')+path('M37 495Q300 368 563 495','none','stroke="#f0cf92" stroke-width="7"');
for(let x=48;x<580;x+=56){let y=446+Math.pow(x-300,2)*.0008;spirit+=line(x,y-4,x,y+51,'#f0cf92',6);}
for(let x of [70,531])spirit+=line(x,234,x,345,'#f0cf92',4)+rect(x-17,278,34,48,'#f0cf92','rx="13"')+line(x-11,288,x+11,288,'#b54a42',3)+line(x-11,316,x+11,316,'#b54a42',3);
art['05-spirited']=spirit;
// A real transparent PNG, not a painted-in background: five coloured reel holes.
let reel=circle(300,300,278,'#282625')+circle(300,300,258,'#3a3634')+circle(300,300,240,'#282625');
for(let i=0;i<5;i++){let a=(i*72-90)*Math.PI/180;reel+=circle(300+147*Math.cos(a),300+147*Math.sin(a),70,['#eaa7b5','#285b47','#d4b263','#2d4383','#b54a42'][i]);}
reel+=circle(300,300,41,'#f7f3e9')+circle(300,300,13,'#282625');
for(let i=0;i<40;i++){let a=i*9*Math.PI/180;reel+=circle(300+268*Math.cos(a),300+268*Math.sin(a),3,'#e2cda7');}
art['reel']=reel;
for(const [name,body] of Object.entries(art)){
 const svg=wrap(body);await fs.writeFile(new URL(name+'.svg',dir),svg);
 await sharp(Buffer.from(svg)).png().toFile(new URL(name+'.png',dir).pathname);
 console.log(name+'.png: 600 × 600');
}
