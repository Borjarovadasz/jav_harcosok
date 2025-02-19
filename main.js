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

    const formarray = [
        
        { //elso obj
            label: "Harc megnevezése::",
            id: "harc_nev",
            for: "harc_nev"
        },
        
        { //masodik obj
            label: "1. Harcoló fél:",
            id: "harcolo1",
            for: "harcolo1"
        },
        
        { //harmadik obj
            label: "1. Haderő:",
            id: "hadero1",
            for: "hadero1"
        },
        
        { //negyedik obj
            label: "2. Harcoló fél:",
            id: "harcolo2",
            for: "harcolo2"
        },
        
        { //otodik objs
            label: "2. Haderő:",
            id: "hadero2",
            for: "hadero2"
        }
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
/**
 * Ez függvény generálja le nekünk a fejlécet bemeneti paraméterek alapján
 * @param {array} headerobjek 
 * @param {HTMLTableRowElement} sor 
 */
function genertaheader(arrayobj, sor) {
    for(adat of arrayobj) { //végigmegyünk az adott array adatain 

        const th = document.createElement('th') //csinálnuk egy th-t
        th.innerHTML = adat.szoveg //a th-nak az innerhtml-je legyen az adott adat-nak szövege
    
        sor.appendChild(th) //hozzátesszük a sorhoz
    }
    
}


genertaheader(fejlec,tr)

/**
 * Ez generálja le nekünk a formot 0-ról. A bementi értéke pedig egy array amin iterálunk és hozzuk létre a dolgokat
 * @param {array} arryform 
 */
function formgenerate(arryform) {

    const form = document.createElement('form') //létrehozunk egy formot
    form.id = "form" //form idje legyen form
    form.action = "#"

    for(let i = 0; i < arryform.length; i++) {//végigiterálunk a formon

        const div = document.createElement('div') //csinálnuk egy div-et
        const label = document.createElement('label') //csinálunk egy label-t
        const input = document.createElement('input') //csinálnuk egy input-ot
        const br = document.createElement('br') //csinálunk egy br-t

        label.innerHTML = arryform[i].label //a labelnek az innerhtmlje legyen az adott indexnél található label az arrayünkben
        label.htmlFor = arryform[i].for//a labelnek az for-ja legyen az adott indexnél található for az arrayünkben
        input.type = "text" //input typja legyen text
        input.id = arryform[i].id //input idja legyen az adott id az arrayünkben
        input.name = arryform[i].id  //input neve legyen az adott id az arrayünkben

        const errordiv = document.createElement('div') //csinálunk egy errodivet
        errordiv.className = "error" //ennek a divnek a classneve legyen error

        div.appendChild(label) //hozzátesszük a fődivhez a labelt
        div.appendChild(br) //hozzátesszük a fődivhez a brt
        div.appendChild(input) //hozzátesszük a fődivhez a inputot
        div.appendChild(errordiv) //hozzátesszük a fődivhez az errordivet

        form.appendChild(div)
    } 
    
        const button = document.createElement('button') //csinálunk egy gombot
    button.innerHTML = "Hozzáadás" //a gombnak legyen az innerhtml-je a "Hozzáadás"
    document.body.appendChild(form) //a bodyhoz hozzátesszük a formot
    form.appendChild(button) //majd a gombot pedig a formhoz
    document.body.appendChild(form) //majd a formot a bodyhoz
}


formgenerate(formarray)

/**
 * Ez generálja le nekünk a táblaztot. Bemeneti értékei egy array és egy globális tbody.
 * @param {array} thearray 
 * @param {HTMLTableSectionElement} bodyelement 
 */

function tablegenerate(arrayobjek, bodytest) {

    for(let adat of arrayobjek) { //végigiterálnuk az arrayobjek

        const tr = document.createElement('tr') //csinálunk egy sort

        const elsocella = document.createElement('td') //csinálunk egy td-t
        elsocella.innerHTML = adat.harc //elsőcellát-nek az értéke legyen az adott adat harca
        tr.appendChild(elsocella) //hozzátesszük a sorhoz az elsőcellát

        bodytest.appendChild(tr) //majd a tbodyhoz a sort

        if(adat.fel2 && adat.had2) { //ha létezik az adott objektumban fel2 ÉS had2
            elsocella.rowSpan = 2 //akkor legyen az elsőcellát rowspan 2
        }


        const masodikcella = document.createElement('td') //csinálunk egy td-t
        masodikcella.innerHTML = adat.fel1 //masodikcella-nek az értéke legyen az adott adat harca
        tr.appendChild(masodikcella)//hozzátesszük a sorhoz az masodikcella

        const harmadikcella = document.createElement('td') //csinálunk egy td-t
        harmadikcella.innerHTML = adat.had1//harmadikcella-nek az értéke legyen az adott adat harca
        tr.appendChild(harmadikcella) //hozzátesszük a sorhoz az harmadikcella


        if(elsocella.rowSpan == 2) { //hogyha az elsocella rowspan 2
 
            const masiksor = document.createElement('tr') //akkor egy uj sor megint

            const negyedikcella = document.createElement('td') //negyedik td cella
            negyedikcella.innerHTML = adat.fel2 //negyedik td cella innerhtml-je legyen a fel2

            const ötödikcella = document.createElement('td') //ötödik td cella
            ötödikcella.innerHTML = adat.had2 //ötödik td cella innerhtml-je legyen a had2

            masiksor.appendChild(negyedikcella) //az ujsorhoz hozzátesszük a negyedikcellát
            masiksor.appendChild(ötödikcella)  //az ujsorhoz hozzátesszük a ötödikcellát



            bodytest.appendChild(masiksor) //majd a tbodyhoz az ujsort.
        }



    }
}
tablegenerate(array, tbody)



const form = document.getElementById('form')

form.addEventListener('submit', function(e) { //nézzük hogy mikor submitelünk

    e.preventDefault()

    const harc = document.getElementById('harc_nev') //id alapján kérjük az értéket és tároljuk
    const fel1 = document.getElementById('harcolo1') //id alapján kérjük az értéket és tároljuk
    const had1 = document.getElementById('hadero1') //id alapján kérjük az értéket és tároljuk
    const fel2 = document.getElementById('harcolo2') //id alapján kérjük az értéket és tároljuk
    const had2 = document.getElementById('hadero2') //id alapján kérjük az értéket és tároljuk


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
    /**
     * Ez a függvény megnézi a bemeneti értéket hogy létezik e  hogyha nem akkor kiírja alá a megadott üzit.
     * @param {HTMLElement} ertek 
     * @param {string} uzenet 
     * @returns 
     */
    function alapcheck(ertek, uzenet) {
        let jo = true //csinálnuk egy változt aminek true az értéke
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


  /**
   * Ez a függvény két értéket kérbe és egymást nézek hogy ha az egyik pl üres akkor írja ki a másik értéknek
   * az üzenetet és fordítva.
   * @param {HTMLElement} ertek 
   * @param {HTMLElement} ertek2 
   * @param {string} uzenet 
   * @returns 
   */
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
    
        tablegenerate(array, tbody)
    }
    

   

})


