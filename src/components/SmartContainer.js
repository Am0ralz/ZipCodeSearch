import React, {Component} from "react"
import ZipForm from './ZipForm.js'
import CityCard from './CityCard.js'

class Results extends Component{
  state = {
    cities:[],
    loading:true
  }

  handleChange = () => {
    const zipcode =document.getElementById("zippy").value
    if(zipcode.length=== 5){
      fetch("http://ctp-zip-api.herokuapp.com/zip/"+zipcode)
      .then(response => response.json())
      .then(data => {
        this.setState({
          cities: data,
          loading:false
        })
      })
    }else{
      this.setState({
        loading:true
      })
    }
  }
  render(){
    const cityCards =this.state.loading ? <h1>Enter Zipcode</h1>: this.state.cities.map(city => <CityCard
      city={city}/>)
      return(
        <div>
        <ZipForm handleChange={this.handleChange}/>
        {cityCards}

        </div>
      )
    }
  }
  export default Results
