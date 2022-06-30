const fs = require('fs/promises');
const colors = require('colors')

const multiplicaTabla = async (base, listar, hasta=2) => {

    try {

        let results = '';

        for (let m = 1; m <= hasta; m++) {
            results += `${base} x ${m} = ${base * m}\n`;
        };

        if (listar) {
            console.log('================'.green)
            console.log(`Tabla del ${base}`.red)
            console.log('================'.green)
            console.log(results.blue)
            fs.writeFile(`./ArchivosGenerados/Tabla del ${base}.txt`, results, {})
        } else {
            fs.writeFile(`./ArchivosGenerados/Tabla del ${base}.txt`, results, {})
        }


        throw `Tabla del ${base} generada`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    multiplicaTabla
}