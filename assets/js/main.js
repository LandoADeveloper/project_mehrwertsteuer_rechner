

const checkedDirection = () => {
    const mwstDeclaration = document.getElementById("mwstDirection1").checked ? "Nettobetrag(Preis ohne Mehrwertsteuer) in Euro*" : "Bruttobetrag(Preis mit Mehrwertsteuer) in Euro*"

    document.getElementById("valDeclaration").innerHTML= mwstDeclaration
}

const calcMwst = ()=> {
    const mwst = document.getElementById("nineteenPercent").checked ? 0.19 : 0.07
    const mwstDirection = document.getElementById("mwstDirection1").checked ? "n2b" : "b2n"
    let val = Number(document.getElementById("val").value)
    const output = document.getElementById("result")

    let result = 0
    if (mwstDirection === "n2b") {
        result = val * (mwst + 1)
        result = result.toFixed(2)
        output.innerHTML = `
        <div>
        <h4>Mehrwertsteuerbetrag</h4>
        <p> ${(val*mwst).toFixed(2)} Euro</p>
    </div>
    <div>
        <h4>Bruttobetrag (Endpreis)</h4>
        <p>  ${result} Euro</p>
    </div>`
    }else{
        result = ((val )/ (1+mwst))
        result = result.toFixed(2)

        output.innerHTML = `<div>
        <h4>Mehrwertsteuerbetrag</h4>
        <p> ${(((val*mwst)/(1+mwst))).toFixed(2)} Euro</p>

    </div>
    <div>
        <h4>Nettobetrag</h4>
        <p> ${result} Euro </p>
    </div>`
    }

}