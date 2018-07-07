function Voce(naziv, tezina) {
    this.naziv = naziv;
    this.tezina = tezina;
}

function Jabuka(naziv, tezina, crvljivo) {
    Voce.call(this, naziv, tezina);
    this.crvljivo = crvljivo;
}

function Sokovnik() {
    const posuda = {
        kapacitet: 130,
        voce: [],
        dodajVocku: function (vocka) {
            this.voce.push(vocka);
            console.log("ubaceno: " + vocka.naziv);
        },
    }

    const cediljka = {
        cedi: () => posuda.voce.reduce((acc, vocka) => acc + vocka.tezina * 0.4, 0)
    }

    for (let i = 0; i < 100; i++) {
        var cedjenje = cediljka.cedi();
        console.warn(cedjenje);
        const tezinaJabuke = Math.floor((Math.random() * 3) + 1);
        const crvljiva = Math.random() < 0.2;
        
        if (Math.random() < 0.7) {
            const jabuka = new Jabuka("crvena", tezinaJabuke, crvljiva);
            if(!jabuka.crvljivo){
                posuda.dodajVocku(jabuka);
            }
        }
        if (Math.random() < 0.3) {
            if(cedjenje > posuda.kapacitet) {
                console.log('Broj vocki ' + posuda.voce.length);
                console.log(`Preostala zapremina ${posuda.kapacitet - cedjenje}`);

                throw new Error('premasili ste tezinu');
            }
        }
    }
    console.log('Broj vocki ' + posuda.voce.length);
    console.log(`Preostala zapremina ${posuda.kapacitet - cedjenje}`);
    console.log(`Iscedili smo ${Math.round(cedjenje)} litra soka.`);
}