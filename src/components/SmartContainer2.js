import React, {Component} from "react"
import ZipForm from './ZipForm.js'
import CityCard from './CityCard.js'

class Results extends Component{
  state = {
    cities:[],
    loading:true
  }

  handleChange = (e) => {
    let zipcode =document.getElementById("zippy").value
    zipcode = zipcode.toUpperCase()
      fetch("http://ctp-zip-api.herokuapp.com/city/"+zipcode)
      .then(response => response.json())
      .then( zipcodes => {
          let cityArr = [];

          const requests = zipcodes.map((zip) =>{
            return fetch("http://ctp-zip-api.herokuapp.com/zip/"+ zip)
            .then(response => response.json())
            .then(data => {
                cityArr = cityArr.concat(data)
                // console.log(cityArr)
             
            }).catch(error => console.log(error))
        })   
        return Promise.all(requests).then(() => {
            cityArr.sort((a, b) => (a.State > b.State) ? 1 : -1)
            this.setState({
                cities: cityArr,
                loading:false
              })
          });


      })
      .catch(error => console.log(error))
    
  }


  render(){
    const cityCards =this.state.loading ? <h1>Enter Zipcode</h1>: 
    this.state.cities.map(city => <CityCard city={city}/>)
      return(
        <div>
        <ZipForm handleChange={this.handleChange}/>
        {cityCards}

        </div>
      )
    }
  }
  export default Results
