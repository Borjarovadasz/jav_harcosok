const fejlec  = //létrehozunk egy fejléc arrayt objektumokkal
    [
        {
            szoveg: "Harc megnevezése" //elso objektomunk amiben eltároljuk a szöveget
        },
        {
            szoveg: "Szembenálló felek" //második objektomunk amiben eltároljuk a szöveget
        },
        {
            szoveg: "Haderő" //harmadik objektomunk amiben eltároljuk a szöveget és adunk neki colspan-2 is
        }
    ]

    const foarray  = //létrehozunk egy fejléc arrayt objektumokkal
    [
        {
            harc: "Rákóczi szabadságharc",
            fél1: "Kuruc",
            fél2: "Labanc" ,
            hadero1 : "70000",
            hadero2 : "60000"
        },
        {
            harc: "48-as szabadságharc",
            fél1: "Osztrák császárság (+ Orosz birodalom)",
            fél2: "Magyar királyság" ,
            hadero1 : "170.000 (+ 200.000)",
            hadero2 : "170.000"
        },
        {
            harc: "I. világháború",
            fél1: "Antant",
            fél2: "Központi hatalmak" ,
            hadero1 : "43 millió",
            hadero2 : "25 millió"
        },
        {
            harc: "Bosworthi csata	",
            fél1: "Angolok (York + Lancester)",
            hadero1 : "15.000",
        },
    ]



const tablazat = document.createElement('table')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')
const tr = document.createElement('tr')

tablazat.appendChild(thead)
tablazat.appendChild(tbody)
document.body.appendChild(tablazat)



for(adat of fejlec) {
    
    
    const th = document.createElement('th')
    th.innerHTML = adat.szoveg

    tr.appendChild(th)

    thead.appendChild(tr)
}


function generatetable( ) {


    for(let adat of foarray) {

        const sor = document.createElement('tr')
        tbody.appendChild(sor)

        const elsocella = document.createElement('td')
        elsocella.innerHTML = adat.harc
     

        if(adat.fél2 && adat.hadero2) {
            elsocella.rowSpan = 2
        }
        sor.appendChild(elsocella)
        
        const masodikcella = document.createElement('td')
        masodikcella.innerHTML = adat.fél1
        sor.appendChild(masodikcella)


        const harmadikcella = document.createElement('td')
        harmadikcella.innerHTML = adat.hadero1
        sor.appendChild(harmadikcella)
       
        if(elsocella.rowSpan == 2) {
            const masiksor = document.createElement('tr')

            const negyedikcella = document.createElement('td')
            negyedikcella.innerHTML = adat.fél2
            masiksor.appendChild(negyedikcella)
    
            const ötödikcella = document.createElement('td')
            ötödikcella.innerHTML = adat.hadero2
            masiksor.appendChild(ötödikcella)
            
        
            tbody.appendChild(masiksor)
        }
        


        
    }

   
}




generatetable()


