const CEP = document.getElementById('CEP')
const Logradouro = document.getElementById('exibir')
const Complemento = document.getElementById('complemento')
const Unidade = document.getElementById('unidade')
const Bairro = document.getElementById('bairro')
const Localidade = document.getElementById('localidade')
const Uf = document.getElementById('uf')
const Estado = document.getElementById('estado')
const Regiao = document.getElementById('regiao')
const IBGE = document.getElementById('ibge')
const Gia = document.getElementById('gia')
const DDD = document.getElementById('ddd')
const Siaf = document.getElementById('siafi')
const botao = document.getElementById('butao')

botao.addEventListener('click', buscarCEP);

async function buscarCEP() {

    const URL = `https://viacep.com.br/ws/${CEP.value}/json/`

    try {
        const response = await fetch(URL);

        const dados = await response.json();

        Logradouro.innerHTML = dados.logradouro
        Complemento.innerHTML = dados.complemento
        Unidade.innerHTML = dados.unidade
        Bairro.innerHTML = dados.bairro
        Localidade.innerHTML = dados.localidade
        Uf.innerHTML = dados.uf
        Estado.innerHTML = dados.estado
        Regiao.innerHTML = dados.regiao
        IBGE.innerHTML = dados.ibge
        Gia.innerHTML = dados.gia
        DDD.innerHTML = dados.ddd
        Siaf.innerHTML = dados.siafi


    } catch (error) {
        alert(error)
    }
}