import { fuggvenyem } from "./main.js";

export function tesztesetek_fuggvenyemhez() {
  let szam = 1234;
  let vart = 4321;
  console.log(
    `szam:${szam}, várt: ${vart},kapot:${fuggvenyem(szam)}, eredmény: ${
      vart === fuggvenyem(szam)
    }`
  );
  szam = Number.MAX_VALUE;
  vart = "sok szám?yes";
  console.log(
    `szam:${szam}, várt: ${vart},kapot:${fuggvenyem(szam)}, eredmény: ${
      vart === fuggvenyem(szam)
    }`
  );
  szam = Number.MIN_VALUE;
  vart = 5e-324;
  console.log(
    `szam:${szam}, várt: ${vart},kapot:${fuggvenyem(szam)}, eredmény: ${
      vart === fuggvenyem(szam)
    }`
  );
  szam = 100;
  vart = 1;
  console.log(
    `szam:${szam}, várt: ${vart},kapot:${fuggvenyem(szam)}, eredmény: ${
      vart === fuggvenyem(szam)
    }`
  );
  szam = null;
  vart = 0;
  console.log(
    `szam:${szam}, várt: ${vart},kapot:${fuggvenyem(szam)}, eredmény: ${
      vart === fuggvenyem(szam)
    }`
  );
  szam = -1234;
  vart = -4321;
  console.log(
    `szam:${szam}, várt: ${vart},kapot:${fuggvenyem(szam)}, eredmény: ${
      vart === fuggvenyem(szam)
    }`
  );
}
