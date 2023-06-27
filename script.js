let lightOn = true

function toggleLight() {
  if (lightOn == false) {
    lightOn = true
    document.getElementById("onBulb").style.visibility = null
    document.getElementById("lightSwitch").style.transform = "rotate(180deg)"
    return
  }
  if (lightOn == true) {
    lightOn = false
    document.getElementById("onBulb").style.visibility = "hidden"
    document.getElementById("lightSwitch").style.transform = "rotate(0deg)"
    return
  }
}

function changeDim() {
  document.getElementById("onBulb").style.opacity = (document.getElementById("dimmer").value / 100)
}