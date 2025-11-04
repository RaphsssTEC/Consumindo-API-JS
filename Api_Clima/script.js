const Localidade = document.getElementById('localidade')
const Temp = document.getElementById('temp')
const Umidade = document.getElementById('umidade')
const VelVento = document.getElementById('velvento')
const botao = document.getElementById('butao')

botao.addEventListener('click', buscarClima);

async function buscarClima() {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(Localidade.value)}&units=metric&appid=873551a7852e2858f0ccdcadfa74bed9`
  try {
    const response = await fetch(URL);
    const dados = await response.json();
    Temp.textContent = `${dados.main.temp} °C`;
    Umidade.textContent = `${dados.main.humidity} %`;
    VelVento.textContent = `${dados.wind.speed} m/s`;

  } catch (error) {
    alert(error);
  }
}