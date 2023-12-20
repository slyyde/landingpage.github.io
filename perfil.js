function calcularprojeto() {
    var tipoproj = document.getElementById('tipoprojeto').value;
    var horaproj = document.getElementById('horasprojeto').value;

    var precohora;
    switch (tipoproj) {

        case 'Website':
            precohora = 50;
            break;
        case 'LandingPage':
            precohora = 40;
            break;
        case 'WebApp':
            precohora = 60;
            break;
        default:
            precohora = 25;
    }
    var precototal = precohora * horaproj;
    document.getElementById('preco').innerHTML = "Preço do Projeto" + precototal;
}