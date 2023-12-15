const iptHour = document.querySelector('#work-hour')
const iptExt = document.querySelector('#exp-time')
const taxs = document.querySelector('#taxs')
const result = document.getElementById('results')
const button = document.getElementById('calc')




button.addEventListener('click', () =>{
  console.log("click")
  
  result.textContent  = "O valor que devera ser cobrado é de: " + Number((iptHour.value * iptExt.value) + Number(taxs.value)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " R$"

})
