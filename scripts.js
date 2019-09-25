function verificar(params) {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoFormulario = document.getElementById('ano')
    var resultado = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (anoFormulario.value.length == 0 || anoFormulario.value > anoAtual) {
        alert('Verifique os dados e tente novamente')        
    } 
    else{
        var fsex = document.getElementsByName('sex')
        var idade = anoAtual - Number(anoFormulario.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <12) {
                //crianca
                img.setAttribute('src', 'mcrianca.png')
            }
            else if (idade < 18){
                // adolescente
                img.setAttribute('src', 'madolescente.png')
            }
            else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'mjovem.png')
            }
            else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'madulto.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'midoso.png')
            }            
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //crianca
                img.setAttribute('src', 'fcrianca.png')
            }
            else if (idade < 18) {
                // adolescente
                img.setAttribute('src', 'fadolescente.png')
            }
            else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'fjovem.png')
            }
            else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'fadulto.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'fidoso.png')
            }            
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(img)

    }
}