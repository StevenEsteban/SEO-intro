import React from 'react'
import axios from 'axios';


export default class PersonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            area: "",
            subtype: "",
            room_number: "",
            location:"",
            facade_count: "",
            building_condition: "",
            price:0
        };
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleSubtypeChange = this.handleSubtypeChange.bind(this);
        this.handleRoomCount = this.handleRoomCount.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
        this.handleFacadeCount = this.handleFacadeCount.bind(this);
        this.handleBuildingCondition = this.handleBuildingCondition.bind(this);

        this.handleform = this.handleform.bind(this);
}

    handleAreaChange(e){
        this.setState({area: e.target.value});
        }
        
    handleSubtypeChange(e){
        this.setState({subtype: e.target.value});
    }
    handleRoomCount(e){
        this.setState({room_number: e.target.value});
    }
    handleZipChange(e){
        this.setState({location: e.target.value});
    }
    handleFacadeCount(e){
        this.setState({facade_count: e.target.value});
    }
    handleBuildingCondition(e){
        this.setState({building_condition: e.target.value});
    }

    handleform(e){
        e.preventDefault();
        const data = {
            area: this.state.area,
            subtype: this.state.subtype,
            rule_number: this.state.room_number,
            location: this.state.location,
            facade_count: this.state.facade_count,
            building_condition: this.state.building_condition
        };



        axios.post('https://app-deployment-example.herokuapp.com/predict', data)
            .then((response)=> {
                console.log(response.data.price);
                this.setState({price: response.data.price})
            });
    }
    
    render() {

        let button;
        if (this.state.price === 0) {
        button = <h3 className="align--center pt2 pb3">Please fill out the form to get your price prediction</h3>
      }else{
        button = <h3 className="align--center pt2 pb3">Price prediction is: {this.state.price}€ </h3>
    
    }
        return (

            
<div className='formWrap'>
    <form className = "dataInput">
    <div className = "wrap">
    <section className="align--center pt2 pb3">
        <p className="h2">Price Prediction Form</p>
       
    </section>
<div>
<label htmlFor ="area">Area: </label>
<input type ="number" id = "area" placeholder ="Total area in mq2" onChange={this.handleAreaChange} />
</div>
<div>
<label htmlFor = "subtype">Subtype: </label>
<select onChange={this.handleSubtypeChange}>
    <option value="MIXED_USE_BUILDING">Mixed use building</option>
    <option value="HOUSE">House</option>
    <option value="MANSION">Mansion</option>
    <option value="APARTMENT">Apartment</option>
    <option value="VILLA">Villa</option>
    <option value="EXCEPTIONAL_PROPERTY">Exceptional Property</option>
    <option value="PENTHOUSE">Penthouse</option>
    <option value="GROUND_FLOOR">Ground Floor</option>
    <option value="TOWN_HOUSE">Town House</option>
    <option value="DUPLEX">Duplex</option>
    <option value="APARTMENT_BLOCK">Apartment Block</option>
    <option value="FARMHOUSE">Farmhouse</option>
    <option value="COUNTRY_COTTAGE">Country Cottage</option>
    <option value="FLAT_STUDIO">Flat Studio</option>
    <option value="SERVICE_FLAT">Service Flat</option>
    <option value="TRIPLEX">Triplex</option>
    <option value="FLAT_STUDIO">Flat Studio</option>
    <option value="CHALET">Chalet</option>
    <option value="LOFT">Loft</option>
    <option value="KOT">Kot</option>
    <option value="MANOR_HOUSE">Manor House</option>
    <option value="PAVILION">Pavilion</option>
    <option value="CASTLE">Castle</option>
    <option value="OTHER_PROPERTY">Other Property</option>
</select>
</div>
<div>
<label htmlFor = "room_number">Room count: </label>
<select onChange={this.handleRoomCount}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
</select>
</div>
<div>
<label htmlFor ="location">Zipcode: </label>
<input type ="number" id = "location" placeholder ="ex: 1000" onChange={this.handleZipChange}/>
</div>
<div>
<label htmlFor = "facade_count">Facade count: </label>
<select onChange={this.handleFacadeCount}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
</div>
<div>
<label htmlFor = "building_condition">Building Condition: </label>
<select onChange={this.handleBuildingCondition}>
    <option value="GOOD">Good</option>
    <option value="TO_BE_DONE_UP">To be done up</option>
    <option value="AS_NEW">As new</option>
    <option value="TO_RESTORE">To restore</option>
    <option value="JUST_RENOVATED">Just renovated</option>
    <option value="TO_RENOVATE">To renovate</option>
</select>
</div>
<div className='submitButton'>
<button className="btn btn--outline" onClick={this.handleform}>Submit</button>
   

</div>
</div>
</form>
{button}
</div>
        )

    }
    
}
