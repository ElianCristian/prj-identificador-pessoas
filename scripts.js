function verificar(params) {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoFormulario = document.getElementById('ano')
    var resultado = document.querySelector('div#res')
        
    if (anoFormulario.value.length == 0 || anoFormulario.value > anoAtual) {
        alert('Verifique os dados e tente novamente')        
    }
    else{
        var fsex = document.getElementsByName('sex')
        var idade = anoAtual - Number(anoFormulario.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'            
        } else {
            genero = 'Mulher'
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        
    }
}