import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader';


class App extends React.Component {
    
    state={ lat:null,errorMessage:''};
    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(

            (position) =>  this.setState({ lat: position.coords.latitude }),
            (err) =>  this.setState({ lat: '', errorMessage: err.message })            

        );
    }

    renderContent(){
        var text='favor acepta el permiso para ubicacion'
        var lat = this.state.lat;
        var error = this.state.errorMessage;
        if (lat && !error) {

            return <SeasonDisplay lat ={lat}/>;
        };
        if (!lat && error) {

            return <div> Error : {error}</div>;

        };
        return <Loader text= {text}/>;

    }
   
    render() {
       
        return (

            <div className= "border red">

                {this.renderContent()}
            </div>
        )
    }
};

ReactDOM.render(<App />, document.querySelector('#root'));