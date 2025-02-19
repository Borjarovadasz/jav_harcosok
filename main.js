const fejlec  = //létrehozunk egy fejléc arrayt objektumokkal
    [
        {
            szoveg: "Harc megnevezése" //elso objektomunk amiben eltároljuk a szöveget
        },
        {
            szoveg: "Szembenálló felek" //második objektomunk amiben eltároljuk a szöveget
        },
        {
            szoveg: "Haderő", colSpan: 2 //harmadik objektomunk amiben eltároljuk a szöveget és adunk neki colspan-2 is
        }
    ]


    const array = [
        {
            harc : "Rákóczi szabadságharc	",
            fel1 : "Kuruc",
            fel2 : "Labanc",
            had1 : "70.000",
            had2 : "60.000"

        },
        {
            harc : "48-as szabadságharc",
            fel1 : "Osztrák császárság (+ Orosz birodalom)",
            fel2 : "Magyar királyság",
            had1 : "170.000 (+ 200.000)",
            had2 : "170.000"

        },
        {
            harc : "I. világháború	",
            fel1 : "Antant",
            fel2 : "Központi hatalmak",
            had1 : "43 millió",
            had2 : "25 millió"

        },
        {
            harc : "Bosworthi csata	",
            fel1 : "Angolok (York + Lancester)	",
            had1 : "15.000",

        },

    ]



const tablazat = document.createElement('table')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')

const tr = document.createElement("tr")
thead.appendChild(tr)
tablazat.appendChild(thead)


tablazat.appendChild(tbody)
thead.appendChild(tr)

document.body.appendChild(tablazat)


for(adat of fejlec) {

    const th = document.createElement('th')
    th.innerHTML = adat.szoveg

    tr.appendChild(th)
}


function tablegenerate() {

    for(let adat of array) {

        const tr = document.createElement('tr')

        const elsocella = document.createElement('td')
        elsocella.innerHTML = adat.harc
        tr.appendChild(elsocella)

        tbody.appendChild(tr)

        if(adat.fel2 && adat.had2) {
            elsocella.rowSpan = 2
        }


        const masodikcella = document.createElement('td')
        masodikcella.innerHTML = adat.fel1
        tr.appendChild(masodikcella)

        const harmadikcella = document.createElement('td')
        harmadikcella.innerHTML = adat.had1
        tr.appendChild(harmadikcella)


        if(elsocella.rowSpan == 2) {

            const masiksor = document.createElement('tr')

            const negyedikcella = document.createElement('td')
            negyedikcella.innerHTML = adat.fel2

            const ötödikcella = document.createElement('td')
            ötödikcella.innerHTML = adat.had2

            masiksor.appendChild(negyedikcella)
            masiksor.appendChild(ötödikcella)



            tbody.appendChild(masiksor)
        }



    }
}

tablegenerate()

const form = document.getElementById('form')

form.addEventListener('submit', function(e) {

    e.preventDefault()

    const harc = document.getElementById('harc_nev')
    const fel1 = document.getElementById('harcolo1')
    const had1 = document.getElementById('hadero1')
    const fel2 = document.getElementById('harcolo2')
    const had2 = document.getElementById('hadero2')


    const harcertek = harc.value
    const fel1ertek = fel1.value
    const had1ertek = had1.value
    const fel2ertek = fel2.value
    const had2ertek = had2.value

    const form = e.currentTarget  
    const errorhtml = form.querySelectorAll('.error') //a formon belül mindenet aminek error classal rendelkezik beletesszük egy változoba
    for(const errorelement of errorhtml){  //minden egyes element ami ebben az errorhtml-ben van 
        errorelement.innerHTML = '' //annak legyen az innerhtml-je üres string. (igy eltűnik majd a validácios szöveg ha tényleg irunk valamit)
    }   

    let valid = true

    function alapcheck(ertek, uzenet) {
        let jo = true
        if (!ertek.value) { 
            valid = false
            const parentElement = ertek.parentElement; 
            const errormsg = parentElement.querySelector('.error'); 
            if (errormsg) { //ha az errormsg van akkor 
                errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
            }
            jo = false
        }
        return jo
    }
    
  
    

    const valid1 = alapcheck(harc, "Add meg a harc nevét") 
    const valid2 = alapcheck(fel1, "Add meg az egyik fél nevéts") 
    const valid3 = alapcheck(had1, "Add meg az első fél had erejét") 
    const valid4 = optionalcheck(fel2,had2, "Kérlek add meg a harcoló felet ha megadtál haderőt")
    const valid5 = optionalcheck(had2,fel2, "Kérlek add meg a harcoló fél haderejét")


  
    function optionalcheck(ertek, ertek2, uzenet) {
        let jo = true //csinálunk egy jo változót aminek az értéke true lesz
        if (!ertek.value && ertek2.value) {  //hogyha az egyik bejővő érték undefined vagy "" és a másik pedig létezik
            valid = false //akkor legyen valid false
            const parentElement = ertek.parentElement;  //megnézzük a parentelementjét a bejövő HTMLELEMENT-nek
            const errormsg = parentElement.querySelector('.error');   //megnézzük hogy van benne olyan element aminek a class-ja error.
            if (errormsg) { //ha az errormsg van akkor 
                errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
            }
            jo = false //hogyha hibás akkor legyen false a jó és akkor nem adjuk hozzá az adatokat
        }
        return jo //visszatérunk a jó változó értékkel (ami amúgy true)
    
    }


  
    
    form.reset()

    if(valid1 && valid2 && valid3 && valid4 && valid5) {
        const ujadat = { // egy uj objektumot hozunk létre 
            harc: harcertek, // az uj fizikateruletnek a teruletertek lesz az értéke
            fel1 : fel1ertek, // az idoszaknak az idoszakerteke lesz az értéke
            had1 : had1ertek, // a tudos1-nek a tudos1ertek lesz az új értéke
            fel2 : fel2ertek ,// a tudos2-nek a tudos2ertek lesz az új értéke
            had2 : had2ertek // a tudos2-nek a tudos2ertek lesz az új értéke
        }
       

        array.push(ujadat)
        tbody.innerHTML = ""
    
        tablegenerate()
    }
    

   

})


