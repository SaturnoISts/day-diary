const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Este dia já foi adicionado")
  }
  if (dayExists) {
    var eai = prompt(
      "Quer adicionar outro dia? (Digite S para sim e N para não"
    )
    if (eai === "s" || eai === "S") {
      var dia = prompt("Digite a data que deseja incluir (DIA/MÊS")
      alert("O dia " + dia + " foi adicionado")
      nlwSetup.addDay(dia)
      return
    } else {
      alert("Operação cancelada")
      return
    }
  }

  alert("O dia " + today + " foi adicionado")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

function del() {
  localStorage.removeItem("NLWSetup@habits") || {}
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
