let url = "https://zomatoajulypi.herokuapp.com/location"
let rurl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

const getCity = () => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
       for(i=0;i<data.length;i++) {
           let element = document.createElement('option') // <option></option>
           let text = document.createTextNode(data[i].state) // delhi
           element.appendChild(text) //<option>Delhi</option>
           element.value = data[i].state_id  //<option value="1">Delhi</option>
           document.getElementById('city').appendChild(element) //<select><option value="1">Delhi</option></select>
       }
    })
}

const getHotels = () => {
    let cityId = document.getElementById('city').value;
    let restaurants = document.getElementById('restaurants')
    while(restaurants.length>0){
        restaurants.remove(0)
    }
    fetch(`${rurl}${cityId}`)
    .then((res) => res.json())
    .then((data) => {
       for(i=0;i<data.length;i++) {
           let element = document.createElement('option')
           let text = document.createTextNode(`${data[i].restaurant_name} | ${data[i].address}`)
           element.appendChild(text)
           restaurants.appendChild(element)
       }
    })
}