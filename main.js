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

const form = document.createElement('form')

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


    const ujadat = { // egy uj objektumot hozunk létre 
        harc: harcertek, // az uj fizikateruletnek a teruletertek lesz az értéke
        fel1 : fel1ertek, // az idoszaknak az idoszakerteke lesz az értéke
        had1 : had1ertek, // a tudos1-nek a tudos1ertek lesz az új értéke
        fel2 : fel2ertek ,// a tudos2-nek a tudos2ertek lesz az új értéke
        had2 : had2ertek // a tudos2-nek a tudos2ertek lesz az új értéke
    }

    form.reset()

    array.push(ujadat)
    tbody.innerHTML = ""

    tablegenerate()

})













