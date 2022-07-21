//, and
//, false, &&, false, =, false
//, false, &&, true, =, false
//, true, &&, false, =, false
//, true, &&, true, =, true

//, or
//, false, ||, false, =, false
//, false, ||, true, =, true
//, true, ||, false, =, true
//, true, ||, true, =, true

//, not
//, true, =, !false
//, false, =, !true

//, console.log(5, +, 14);
//, console.log("5", +, "14");

//, var1, =, 0;

//, var2, =, Boolean(var1);

//, var3, =, ", , , , ";

//, var4, =, Boolean(var3);

//, console.log(Boolean("Hello"), &&, Boolean(-10));

//, a, =, 10;

//, console.log(a++);
//, console.log(++a);

//, false, &&, false, =, false
//, false, &&, true, =, false
//, true, &&, false, =, false
//, true, &&, true, =, true

//, false, ||, false, =, false
//, false, ||, true, =, true
//, true, ||, false, =, true
//, true, ||, true, =, true

//, var3, =, prompt("Unesite, vrednost");

//, console.log(2022, -, var3);

//, 2.2.2022.

//, 32
//, 1
//, 2022

//, tmp_dan, =, 2;
//, tmp_mesec, =, 2;
//, tmp_godina, =, 2022;

//, godine, =, 1995;
//, mesec, =, 7;
//, dan, =, 4;

//, if, (dan, <=, tmp_dan), {
//, , , console.log("Imam",, tmp_dan, -, dan,, "dana");
//, }, else, {
//, , , tmp_mesec, -=, 1;
//, , , console.log("Imam",, tmp_dan, +, 30, -, dan,, "dana");
//, }

//, if, (mesec, <=, tmp_mesec), {
//, , , console.log("Imma",, tmp_mesec, -, mesec,, "meseci");
//, }, else, {
//, , , tmp_godina, -=, 1;
//, , , console.log("Imam",, tmp_mesec, +, 12, -, mesec,, "meseci");
//, }

//, for, (i, =, 1;, i, <, 11;, i++), {
//, , , if, (i, ===, 7), {
//, , , , , break;
//, , , }

//, , , console.log(i);

//, , , //, if, (i, !==, 7), {
//, , , //, , , console.log(i);
//, , , //, }
//, }

//, suma, =, 0;

//, for, (i, =, 1;, i, <, 2501;, i++), {
//, , , suma, =, suma, +, i;
//, , , //, suma, +=, i
//, }

//, console.log(suma);
//, suma, =, 0;
//, for, (i, =, 0;, i, <, 21;, i, =, i, +, 2), {
//, , , suma, =, suma, +, i;
//, , , console.log("nakon, broja",, i,, "zbir, je",, suma);
//, }

//, python
//, python
//, python
//, jes, super
//, jes, super
//, jes, super

//, for, (let, i, =, 0;, i, <, 6;, i++), {
//, , , if, (i, <, 3), {
//, , , , , console.log("python");
//, , , }, else, {
//, , , , , console.log("je, super");
//, , , }
//, }

//, for, (let, i, =, 0;, i, <, 6;, i++), {
//, , , if, (i, <, 3), {
//, , , , , console.log("python");
//, , , , , continue;
//, , , }
//, , , console.log("je, super");
//, }

//, broj, =, Number(prompt("Unesite, broj"));, //, 8
//, broj, =, prompt("Unesite, broj");, //, 8

//, for, (i, =, 0;, i, <=, broj;, i, =, i, +, 2), {
//, , , console.log(i);
//, }

//, broj, =, Number(prompt("Unesite, broj"));
//, broj, =, 8;

//, for, (i, =, 0;, i, <=, broj;, i++), {
//, , , if, (i, %, 2, ===, 0), {
//, , , , , console.log(i);
//, , , }
//, }

//, bbrojeva, =, Number(prompt("Unesite, broj, brojeva:"));
//, brParnih, =, 0;
//, brNeparnih, =, 0;

//, for, (i, =, 0;, i, <, bbrojeva;, i++), {
//, , , broj, =, Number(prompt("Unesite, broj"));

//, , , if, (broj, %, 2, ===, 0), {
//, , , , , brParnih++;
//, , , }, else, {
//, , , , , brNeparnih++;
//, , , }
//, }

//, console.log("Br, parnih",, brParnih);
//, console.log("Br, neparnih",, brNeparnih);

//, broj, =, Number(prompt("Unesite, broj:"));
//, brDel, =, 0;

//, for, (let, i, =, 0;, i, <=, broj;, i++), {
//, , , if, (broj, %, i, ===, 0), {
//, , , , , console.log(i);
//, , , , , brDel++;
//, , , }
//, }

//, if, (brDel, ===, 2), {
//, , , console.log("broj, je, prost");
//, }

//, pass, =, "";

//, while, (true), {
//, , , if, (pass, ===, "sifra123"), {
//, , , , , break;
//, , , }
//, , , console.log("aaaaa");
//, , , pass, =, prompt("Unesite, sifru:");
//, }

//, ctr, =, 0;

//, for, (let, i, =, 0;, i, <, 3;, i++), {
//, , , for, (let, j, =, 0;, j, <, 4;, j++), {}
//, }

//, console.log(ctr);

//, while, (true), {
//, , , operacija, =, prompt("Unesite, operaicju");
//, , , if, (operacija, ===, "exit", ||, operacija, ===, "0"), {
//, , , , , console.log("kraj, programa");
//, , , , , break;
//, , , }

//, , , br1, =, Number(prompt("Unesite, prvi, broj:"));
//, , , br2, =, Number(prompt("Unesite, drugi, broj:"));

//, , , switch, (operacija), {
//, , , , , case, "+":
//, , , , , , , console.log("Zbir, je:",, br1, +, br2);
//, , , , , , , break;
//, , , , , case, "-":
//, , , , , , , console.log("Razlika, je:",, br1, -, br2);
//, , , , , , , break;
//, , , , , case, "*":
//, , , , , , , console.log("Prozivod, je:",, br1, *, br2);
//, , , , , , , break;
//, , , , , case, "/":
//, , , , , , , console.log("Kolicnik, je:",, br1, /, br2);
//, , , , , , , break;
//, , , }
//, }

//, var1, =, 10;
//, console.log("vrednst, var1:",, var1);

//, console.log(`vrednost, var1:, ${var1, +, 5}`);

//, suma, =, 0;
//, for, (let, i, =, 1;, i, <, 1000;, i++), {
//, , , if, (i, %, 3, ===, 0, ||, i, %, 5, ===, 0), {
//, , , , , console.log(i);
//, , , , , suma, +=, i;
//, , , }
//, }

//, console.log(suma);

//, 1, 2, 3
//, 4, 5, 6
//, 7, 8, 9

//, //, for, (let, i, =, 0;, i, <, niz1.length;, i++), {
//, //, , , for, (let, j, =, 0;, j, <, niz1[i].length;, j++), {
//, //, , , , , console.log(niz1[i][j],, i,, j);
//, //, , , }
//, //, }

//, niz1.splice(0,, 0,, "Helloworld");
//, niz1.splice(niz1.length,, 0,, "na, kraju");

//, console.log(niz1);

//, niz1, =, [37,, 5,, 34,, 64,, 32,, 3];

//, niz2, =, niz1.slice();

//, niz1.splice(0,, niz1.length);

//, console.log(niz1);
//, console.log(niz2);

//, for, (let, i, =, 0;, i, <, niz1.length;, i++), {
//, , , red, =, "";
//, , , for, (let, j, =, 0;, j, <, niz1[i].length;, j++), {
//, , , , , red, +=, niz1[i][j], +, ", ";
//, , , }
//, , , console.log(red);
//, }

//, niz1, =, [
//, , , [1,, 2,, 3],
//, , , [4,, 5,, 6],
//, , , [7,, 8,, 9],
//, , , [12,, 15,, 18],
//, ];

//, 1, , , 2, , 3
//, 4, , , 5, , 6
//, 7, , , 8, , 9
//, --------
//, 12, 15, 18

//, 1, , 2, , 3
//, 4, , 5, , 6
//, 7, , 8, , 9

//, 4, , 1, , 2
//, 7, , 5, , 3
//, 8, , 9, , 6

//, 1, , 2, , 3
//, 4, , 5, , 6
//, 7, , 8, , 9

//, primarna, diagonala
//, 1
//, , , 5
//, , , , , 9
//, ==========
//, sekundarna, diagonala
//, , , , , 3
//, , , 5
//, 7

//, var1, =, [34,, true,, "hello",, false,, 45.23];
//, //, , , , , , 0, , , , 1, , , , , , 2, , , , , , , , 3, , , , , 4

//, var1.splice(2,, 0,, "novavred1");

//, console.log(var1);

//, sumaEl, =, 0;

//, for, (let, i, =, 0;, i, <, niz.length;, i++), {
//, , , if, (niz[i], %, 2, ===, 0), {
//, , , , , sumaEl, +=, niz[i];
//, , , }
//, }

//, console.log("Suma, je",, sumaEl);

//, sumaEl, =, 0;
//, niz.forEach((el), =>, {
//, , , if, (el, %, 2, ===, 0), sumaEl, +=, el;
//, });

//, console.log(sumaEl);

//, sumaEl, =, niz
//, , , .filter((el), =>, el, %, 2, ===, 0)
//, , , .reduce((prevVal,, currVal), =>, prevVal, +, currVal);
//, niz, =, [1,, 2,, 34,, 5,, 6,, 7,, 3,, 5,, 4,, 3];

//, sumaEl, =, niz.reduce((prevVal,, currVal), =>, {
//, , , if, (currVal, %, 2, ===, 0), {
//, , , , , return, prevVal, +, currVal;
//, , , }, else, {
//, , , , , return, prevVal;
//, , , }
//, },, 0);

//, console.log(sumaEl);

//, niz2, =, niz.map((el), =>, {
//, , , if, (el, >, 1000), {
//, , , , , return, el;
//, , , }
//, });
//, console.log(niz2);

//, niz, =, [
//, , , [1,, 2,, 3],
//, , , [4,, 5,, 6],
//, , , [7,, 8,, 9],
//, ];

//, var, longestCommonPrefix, =, (strs), =>, {
//, , , prefix, =, strs[0];

//, , , for, (let, i, =, 1;, i, <, strs.length;, i++), {
//, , , , , p, =, "";
//, , , , , for, (let, j, =, 0;, j, <, prefix.length;, j++), {
//, , , , , , , if, (prefix[j], ===, strs[i][j]), {
//, , , , , , , , , p, +=, prefix[j];
//, , , , , , , }, else, {
//, , , , , , , , , break;
//, , , , , , , }
//, , , , , }
//, , , , , prefix, =, p;
//, , , }
//, , , console.log(prefix);
//, , , return, prefix;
//, };

//, longestCommonPrefix(["flower",, "flow",, "flight"]);
//, longestCommonPrefix(["cir",, "car"]);

//, niz, =, [
//, , , [1,, 2,, 3],
//, , , [4,, 5,, 6],
//, , , [7,, 8,, 9],
//, ];

//, //, niz, za, sume, kolona
//, suma, =, [];
//, for, (let, i, =, 0;, i, <, niz.length;, i++), {
//, , , //, pomocna, var, za, sumu, kolone
//, , , s, =, 0;
//, , , for, (let, j, =, 0;, j, <, niz[i].length;, j++), {
//, , , , , console.log(niz[j][i]);
//, , , , , s, +=, niz[j][i];
//, , , }
//, , , //, dodajemo, sumu, u, niz, suma
//, , , suma.push(s);
//, }
//, //, dodajemo, u, glavni, niz,, niz, suma
//, niz.push(suma);
//, console.log(niz);

//, niz, =, [
//, , , [1,, 2,, 3],
//, , , [4,, 5,, 6],
//, , , [7,, 8,, 9],
//, ];

//, for, (let, i, =, 0;, i, <, niz.length;, i++), {
//, , , console.log(niz[i][i]);
//, }
//, //, ========================================
//, for, (let, i, =, 0;, i, <, niz.length;, i++), {
//, , , red, =, "";
//, , , for, (let, j, =, 0;, j, <, niz[i].length;, j++), {
//, , , , , if, (i, ===, j), {
//, , , , , , , red, +=, niz[i][j], +, ", ";
//, , , , , }, else, {
//, , , , , , , red, +=, ", , ";
//, , , , , }
//, , , }
//, , , console.log(red);
//, }

//, niz, =, [
//, , , [1,, 2,, 3,, 4],
//, , , [5,, 6,, 7,, 8],
//, , , [9,, 10,, 11,, 12],
//, , , [13,, 14,, 15,, 16],
//, ];

//, for, (let, i, =, 0;, i, <, niz.length;, i++), {
//, , , red, =, "";
//, , , for, (let, j, =, 0;, j, <, niz[i].length;, j++), {
//, , , , , if, (i, +, j, ===, niz.length, -, 1), {
//, , , , , , , red, +=, niz[i][j], +, ", ";
//, , , , , }, else, {
//, , , , , , , red, +=, ", , ";
//, , , , , }
//, , , }
//, , , console.log(red);
//, }

//, niz2, =, [];

//, for, (let, i, =, 0;, i, <, niz.length;, i++), {
//, , , niz2.push(niz[i], *, 2);
//, }

//, niz2, =, niz.map((el), =>, {
//, , , return, el, *, 2;
//, });

//, niz2, =, niz.filter((el), =>, {
//, , , return, el, >, 10, &&, el;
//, });

//, niz, =, [1,, 2,, 3,, 4,, 5,, 6,, 7,, 8,, 9];

//, niz.forEach((el), =>, {});

//, console.log(niz);

//, const, array, =, [2,, 2,, 2,, 3];

//, res, =, array.every((el), =>, {
//, , , return, el, %, 2, ===, 0;
//, });
//, if, (res), {
//, , , console.log("svi, su, parni, br");
//, }, else, {
//, , , console.log("nisu, svi, su, parni, br");
//, }

//, const, beasts, =, ["ant",, "bison",, "camel",, "duck",, "bison"];

//, console.log(beasts.indexOf("bison"));
//, //, expected, output:, 1

//, //, start, from, index, 2
//, console.log(beasts.indexOf("bison",, 2));
//, //, expected, output:, 4

//, console.log(beasts.indexOf("giraffe"));
//, //, expected, output:, -1

//, const, beasts, =, ["ant",, "bison",, "camel",, "duck",, "bison"];

//, //, b2, =, beasts.filter((el,, index), =>, {
//, //, , , if, (index, >, 2), {
//, //, , , , , return, el;
//, //, , , }
//, //, });

//, b2, =, beasts.slice(3);
//, console.log(b2);

//, niz, =, [23,, 2,, 32,, 2,, 32,, 3,, 2];

//, s, =, niz.reduce((prevVal,, currVall,, index,, arr), =>, {
//, , , console.log(currVall,, index,, arr);
//, , , return, prevVal, +, currVall;
//, },, 7);

//, console.log(s);

//, a, =, ["aflower",, "aflow",, "aflight"];
//, ("afl");

//, a, =, ["car",, "car",, "car"];

//, ("car");
//, function, treca(), {
//, , , console.log("treca");
//, }

//, function, druga(), {
//, , , treca();
//, , , console.log("druga");
//, }

//, function, prva(), {
//, , , druga();
//, , , console.log("prva");
//, }

//, prva();

//, a, =, 10;
//, console.log(a);

//, var, a;

//, function, treca(), {
//, , , let, a, =, 99;
//, , , console.log("treca");
//, , , console.log(1);
//, , , console.log(2);
//, , , setTimeout((), =>, {
//, , , , , console.log("33333333333333333",, a);
//, , , },, 0);
//, }

//, function, druga(), {
//, , , treca();
//, , , console.log("druga");
//, }

//, function, prva(), {
//, , , druga();
//, , , console.log("prva");
//, }

//, prva();

//, function, prva(), {
//, , , const, a, =, 10;
//, , , function, druga(arg2), {
//, , , , , console.log(arg2, +, a);
//, , , }

//, , , return, druga;
//, }

//, var2, =, prva();

//, var2(5);

//, import, {, FilmsAPIService, }, from, "./films-api-service.js";
//, import, {, FilmsDataStatsGenerator, }, from, "./films-data-stats-generator.js";

//, async, function, main(), {
//, , , const, filmsApiService, =, new, FilmsAPIService();
//, , , const, filmsDataStatsGenerator, =, new, FilmsDataStatsGenerator(filmsApiService);
//, , , const, brfilm, =, await, filmsDataStatsGenerator.getBestRatedFilm(
//, , , , , "Christopher, Nolan"
//, , , );
//, , , filmsDataStatsGenerator.getDirectorWithMostFilms();
//, }

//, main();

//, {
//, , , name:, 'The, Martian',
//, , , length:, 151,
//, , , rating:, 8,
//, , , releaseDate:, '2015-09-30',
//, , , directorName:, 'Ridley, Scott'
//, }

//, nums, =, [-2,, 1,, -3,, 4,, -1,, 2,, 1,, -5,, 4];

//, maxSuma, =, nums[0];

//, i, =, 0;
//, j, =, i, +, 1;

//, while, (i, <, nums.length), {
//, , , sum, =, nums[i];
//, , , if, (sum, >, maxSuma), {
//, , , , , maxSuma, =, sum;
//, , , }
//, , , for, (;, j, <, nums.length;, j++), {
//, , , , , if, (sum, >, maxSuma), {
//, , , , , , , maxSuma, =, sum;
//, , , , , , , continue;
//, , , , , }
//, , , , , sum, +=, nums[j];
//, , , }
//, , , i++;
//, }

//, console.log(maxSuma);

//, strs, =, ["flower",, "flow",, "flight"];

//, word, =, "";

//, maxSuma, =, -Infinity;
//, trenutna, =, 0;

//, for, (let, i, =, 0;, i, <, nums.length;, i++), {
//, , , trenutna, =, Math.max(nums[i],, trenutna, +, nums[i]);
//, , , maxSuma, =, Math.max(trenutna,, maxSuma);
//, }

//, console.log(maxSuma);

//, strs, =, ["flower",, "flow",, "flight"];

//, prefix, =, strs[0];

//, for, (let, i, =, 0;, i, <, strs.length;, i++), {
//, , , p, =, "";
//, , , for, (let, j, =, 0;, j, <, strs[i].length;, j++), {
//, , , , , if, (prefix[j], !==, strs[i][j]), {
//, , , , , , , break;
//, , , , , }
//, , , , , p, +=, prefix[j];
//, , , }
//, , , prefix, =, p;
//, }

//, console.log(prefix);
// osoba1, =, {};

// osoba1.name, =, "dzemil";
// osoba1.lastName, =, "dupljak";
// osoba1.noviKey, =, "nova, vrednost";
// osoba1.name, =, "lalalalaalal";

// console.log(osoba1);

// [[08,, 02,, 22,, 97,, 38,, 15,, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
// [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
// 81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
// 52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
// 22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
// 24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
// 32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70
// 67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21
// 24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72
// 21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95
// 78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92
// 16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57
// 86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58
// 19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40
// 04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66
// 88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69
// 04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36
// 20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16
// 20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54
// 01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48

// broj =
//   "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

// broj = `73167176531330624919225119674426574742355349194934
// 96983520312774506326239578318016984801869478851843
// 85861560789112949495459501737958331952853208805511
// 12540698747158523863050715693290963295227443043557
// 66896648950445244523161731856403098711121722383113
// 62229893423380308135336276614282806444486645238749
// 30358907296290491560440772390713810515859307960866
// 70172427121883998797908792274921901699720888093776
// 65727333001053367881220235421809751254540594752243
// 52584907711670556013604839586446706324415722155397
// 53697817977846174064955149290862569321978468622482
// 83972241375657056057490261407972968652414535100474
// 82166370484403199890008895243450658541227588666881
// 16427171479924442928230863465674813919123162824586
// 17866458359124566529476545682848912883142607690042
// 24219022671055626321111109370544217506941658960408
// 07198403850962455444362981230987879927244284909188
// 84580156166097919133875499200524063689912560717606
// 05886116467109405077541002256983155200055935729725
// 71636269561882670428252483600823257530420752963450`;

// cifre = broj.split("\n").join("").split("");

// cifre = cifre.map((c) => {
//   return Number(c);
// });

// console.log(cifre);

// maxProizod = 0;
// maxCifre = [];

// for (let i = 0; i < cifre.length - 13; i++) {
//   s = 1;
//   cs = [];
//   for (let j = 0; j < 13; j++) {
//     s = s * cifre[i + j];
//     cs.push(cifre[i + j]);
//   }
//   if (s > maxProizod) {
//     maxProizod = s;
//     maxCifre = cs;
//   }
// }

// console.log(maxProizod);
// console.log(maxCifre);

// class Car {
//   constructor() {
//     this.name = "audi";
//   }
// }

// // oiq3uldak
// var1 = new Car();

// // var2 = oiq3uldak
// var2 = { ...var1 };

// var2.name = "asdsadsad";

// console.log(var1);
// console.log(var2);

// function ispisMatrice(arg1) {
//   for (let i = 0; i < arg1.length; i++) {
//     for (let j = 0; j < arg1[i].length; j++) {
//       console.log(arg1[i][j]);
//     }
//   }
// }

// function sumaNiza(arg1) {
//   suma = 0;
//   for (let i = 0; i < arg1.length; i++) {
//     suma += arg1[i];
//   }
//   return suma;
// }

// function sumaPrvih10el() {
//   suma = 0;
//   niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   niz.forEach((b) => {
//     suma += b;
//   });
//   return suma;
// }

// resenje = sumaNiza([1, 2, 3, 4, 5]);
// res2 = sumaNiza([1, 2, 3]);

// zbir10 = sumaPrvih10el() / 5;
// //            55 / 5

// console.log(resenje);
// console.log(res2);
// console.log(zbir10);

// function zbir2broja(br1, br2) {
//   return br1 + br2;
// }

// suma = zbir2broja(5, 6);

// console.log(suma);

// function reverseNum(num) {
//   num = String(num).split(""); // ['3','2','2','4','3']

//   for (let i = 0; i < num.length / 2; i++) {
//     // [num[i], num[num.length - 1 - i]] = [num[num.length - 1 - i], num[i]];
//     pomVar = num[i];
//     num[i] = num[num.length - 1 - i];
//     num[num.length - 1 - i] = pomVar;
//   }

//   // num = String(num); // '32243'
//   // res = ""; // 34223

//   // for (let i = num.length - 1; i >= 0; i--) {
//   //   res += num[i];
//   // }

//   // return Number(res);
//   a = a * b;
//   b = a * b;
//   a = a * b;

//   return Number(num.join(""));
// }

// x = 32243;
// outp = reverseNum(x);

// console.log(outp);

// function showUserInfo(uName, uUser, uPass) {
//   console.log(uName);
//   console.log(uUser);
//   console.log(uPass);
// }

// user = {
//   username: "dzemil",
//   password: "sifra123",
//   name: "Dzemil",
// };

// showUserInfo(user.name, user.username, user.password);

// function suma2nums(num1, num2) {
//   res = num1 + num2;
//   return res;
// }

// retrunValue = suma2nums(10, 13);

// console.log(retrunValue);

// function evenElements(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   res = arr.filter((el) => {
//     if (el % 2 === 0) {
//       return el;
//     }
//   });

//   return res;
// }

// niz1 = evenElements([2, 3, 4, 5, 4, 3, 2]);
// niz2 = evenElements([]);

// console.log(niz1);
// console.log(niz2);

// function sumaArrEl(arg1) {
//   suma = arg1.reduce((prev, curr) => {
//     return prev + curr;
//   }, 0);

//   return suma;
// }

// rez = sumaArrEl([1, 2, 3, 46, 45, 3, 42, 43]);

// if (rez > 100) {
//   console.log("suma je veca od 100");
// } else {
//   console.log("suma nije veca od 100");
// }

// function firstLetterToUppercase(word) {
//   wordArr = word.split(" ");

//   for (let i = 0; i < wordArr.length; i++) {
//     wordArr[i] = wordArr[i].split("");
//     // wordArr[i] = ["T"].concat(['h', 'e'])
//     wordArr[i] = [wordArr[i][0].toUpperCase()].concat(wordArr[i].slice(1));
//     wordArr[i] = wordArr[i].join("");

//     // the
//     wordArr[i] = wordArr[i].split("");
//     // ['t', 'h', 'e']
//     wordArr[i][0] = wordArr[i][0].toUpperCase();
//     // ['T', 'h', 'e']
//     wordArr[i] = wordArr[i].join("");
//     // The
//   }

//   return wordArr.join(" ");
// }

// recenica = "the quick brown fox";

// recenica2 = firstLetterToUppercase(recenica);

// console.log(recenica);
// console.log(recenica2);

// rec = "nekarec";
// rec = "kapak";
// ln = rec.length - 1;

// for (let i = 0; i < rec.length / 2; i++) {
//   if (rec[i] !== rec[ln - i]) {
//     console.log("Nije planidrom");
//     break;
//   }
// }

// isPalidrom = rec.split("").reverse().join("") === rec;

// if (isPalidrom) {
//   console.log("jeste");
// } else {
//   console.log("nije");
// }

// prev = 1;
// curr = 1;
// suma = 0;
// while (curr + prev < 4000000) {
//   // [curr, prev] = [prev + curr, curr];
//   pomvar = curr + prev;
//   prev = curr;
//   curr = pomvar;

//   c;
//   if (curr % 2 === 0) {
//     suma += curr;
//   }
// }

// console.log(suma);

// function prefectNumber(num) {
//   divNum = 0;

//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       divNum += i;
//     }
//   }

//   if (divNum === num) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(prefectNumber(496));
// console.log(prefectNumber(4));

// function apoensCalc(amount, apoens) {
//   i = 0;

//   money = [];

//   while (amount > 0) {
//     if (amount - apoens[i] >= 0) {
//       amount -= apoens[i];
//       money.push(apoens[i]);
//     } else {
//       i++;
//     }
//   }
//   return money;
// }

// arg1 = [25, 10, 5, 2, 1];
// arg2 = 174;

// console.log(apoensCalc(arg2, arg1));

// class Car {
//   constructor(n, age) {
//     this.carname = n;
//     this.age = age;
//   }

//   printName() {
//     console.log(n);
//   }

//   countAge(year) {
//     console.log(year - this.age);
//   }
// }

// c = new Car("ad", 1123);

// c.printName();

// var1 = {
//   carName: "audi",
//   age: 22,
//   printName: function () {
//     console.log(this.carName);
//   },
// };

// var1.printName();

// function mojaFunc() {
//   var1 = 10;

//   function drugaFunc() {
//     var2 = 20;
//     console.log(var1 + var2);
//   }

//   return drugaFunc;
// }

// function mojaFunc() {
//   console.log("nest");
// }
// //0293urq = 0293urq
// var1 = mojaFunc;

// var1();

// let a = 99;

// if (true) {
//   let a = 10 + a;
//   console.log(a);
// }

// console.log(a);

// function mojaFunc() {
//   if (true) {
//     var a = 10;
//     console.log(a);
//   }
//   console.log(a);
// }

// mojaFunc();

// var ad = "ads";

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// function f1() {
//   const a = 10;
//   if (true) {
//   }
//   console.log(a);
// }

// function f2() {
//   console.log(a);
// }

// f1();
// f2();

// function third() {
//   console.log("tri!!");
// }

// function second() {
//   console.log("dva");
//   third();
// }

// function first() {
//   console.log("jedan");
//   second();
// }

// first();

// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 1005);

// console.log(4);

// setTimeout(() => {
//   console.log(5);
// }, 1000);

//   for (let i = 0; i < 900000000; i++) {}

// drugiPosao = () => {
//   console.log("drugi posao!!!");
// };

// // treciPosao = () => {
// //   console.log("treci posao!!!");
// // };

// function glavniPosao(clb) {
//   console.log("pocetak");
//   for (let i = 0; i < 909000000; i++) {}
//   console.log("kraj");
//   clb();
// }

// glavniPosao(drugiPosao);

// glavniPosao(() => {
//   console.log("treci posao!!!");
// });

// clb = () => {
//   console.log("nestoo");
// };

// setTimeout(clb, 1000);

// setTimeout(() => {
//   console.log("nestoo");
// }, 1000);

// let arr1 = [1, 4, 9, 16];

// mojaMap = (arr, clb) => {
//   resArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newEl = clb(arr[i]);
//     resArr.push(newEl);
//   }

//   return resArr;
// };

// arr2 = mojaMap(arr1, (el) => {
//   return el * 2;
// });

// arr2 = arr1.map((el) => {
//   return el * 2;
// });

// console.log(arr1);
// console.log(arr2);

// posao = new Promise((resolve, reject) => {
//   let status = 201;
//   for (let i = 0; i < 990000000; i++) {}
//   if (status === 200) {
//     resolve("neka vrednost");
//   } else {
//     reject("NEKA ERROR");
//   }
// });

// posao
//   .then((res) => {
//     console.log("Uspesno", res);
//   })
//   .catch((err) => {
//     console.log("eroor", err);
//   });

// fetch("https://catfact.ninja/facts")
//   .then(async (result) => {
//     res = await result.json();
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(
//       err,
//       "============NEUSPESNO FETCH-anje========================"
//     );
//   });

// prom = new Promise((res, rej) => {
//   res();
// });

// setTimeout(() => {
//   setTimeout(() => {
//     console.log("B");
//   }, 0);
//   console.log("A");
// }, 200);

// prom.then(() => {
//   setTimeout(() => {
//     console.log("E");
//   }, 0);
//   console.log("C");
// });

// prom.then(() => {
//   console.log("D");
// });

// function func3() {
//   console.log("func3");
// }

// function func2() {
//   console.log("func2");
//   func3();
// }

// function func1() {
//   console.log("func1");
//   func2();
// }

// func1();

// console.log(1);
// console.log(2);
// setTimeout(function nekiPosao() {
//   console.log(3);
// }, 1000);

// console.log(4);

// function drugiPosao() {
//   console.log("SLEDECI POSAO");
// }

// function glavniPosao(arg1) {
//   console.log("pocinje posao");
//   for (let i = 0; i < 900000000; i++) {}
//   console.log("zavrsen posao");
//   arg1();
// }

// glavniPosao(drugiPosao);
// glavniPosao(() => {
//   console.log("treci posao");
// });
moajF = () => {
  console.log("posao!!");
};
setTimeout(moajF, 100);
