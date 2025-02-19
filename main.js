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


formgenerate(formarray)
tablegenerate(array, tbody)
genertaheader(fejlec,tr)  




form.addEventListener('submit', function(e) { //nézzük hogy mikor submitelünk

    e.preventDefault()

    const harc = document.getElementById('harc_nev') //id alapján kérjük az értéket és tároljuk
    const fel1 = document.getElementById('harcolo1') //id alapján kérjük az értéketés tároljuk
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

    

    const valid1 = alapcheck(harc, "Add meg a harc nevét") 
    const valid2 = alapcheck(fel1, "Add meg az egyik fél nevéts") 
    const valid3 = alapcheck(had1, "Add meg az első fél had erejét") 
    const valid4 = optionalcheck(fel2,had2, "Kérlek add meg a harcoló felet ha megadtál haderőt")
    const valid5 = optionalcheck(had2,fel2, "Kérlek add meg a harcoló fél haderejét")


 

  
    
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


