const radanet = document.querySelector('#radanet')
const epl = document.querySelector('#epl')
const mentes = document.querySelector('#mentes')

epl.style.display = 'none'
mentes.style.display = 'none'

function showHide(escenarios)
{
    if( escenarios == 'epl'){
        radanet.style.display = 'none'
        epl.style.display = 'flex'
        mentes.style.display = 'none'
    }
    else if( escenarios == 'mentes' ){
        radanet.style.display = 'none'
        epl.style.display = 'none'
        mentes.style.display = 'flex'
    }
    else if( escenarios == 'radanet' ){
        radanet.style.display = 'flex'
        epl.style.display = 'none'
        mentes.style.display = 'none'
    }
}

