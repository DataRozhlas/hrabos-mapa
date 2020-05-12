export function gCode (map) {
  const form = document.getElementById('frm-geocode')
  form.onsubmit = function submitForm (event) {
    event.preventDefault()
    const text = document.getElementById('inp-geocode').value
    if (text === '') {
      map.flyTo({
        center: [15.3350758, 49.7417517],
        zoom: 7
      })
    } else {
      fetch(`https://api.mapy.cz/geocode?query=${text}`) // Mapy.cz geocoder
        .then(res => res.text())
        .then(str => (new window.DOMParser()).parseFromString(str, 'text/xml'))
        .then(results => {
          const res = results.firstChild.children[0]
          if (res.children.length === 0) {
            document.getElementById('inp-geocode').style.borderColor = 'red'
            return
          }
          const x = parseFloat(res.children[0].attributes.x.value)
          const y = parseFloat(res.children[0].attributes.y.value)

          if (x < 12 || x > 19 || y < 48 || y > 52) { // omezení geosearche na česko, plus mínus
            document.getElementById('inp-geocode').style.borderColor = 'red'
            return
          }
          map.flyTo({
            center: [x, y],
            zoom: 10
          })
        })
        .catch(err => { throw err })
    }
  }
}
