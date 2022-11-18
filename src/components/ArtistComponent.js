import React from "react";
import MenuButton from "./MenuButton";
import "./app.css"

class ArtistComponent extends React.Component{

    constructor(props){
        super(props);
        console.log("start constructeur");

        this.state = {
            artist : [], 
            DataisLoaded : false
        };
    }

    
    componentDidMount(){

    
        const url = "http://localhost:8000/api/artist?format=json";

        fetch(url)
            .then( (response) => response.json())
            .then( (json) => {
                this.setState( {
                    artist: json,
                    DataisLoaded : true
                });
            });
    }

    render() {

        //console.log("start render");
        
        if (!this.state.DataisLoaded) {
        return 
            (<div> 
                <h1> Pleses wait some time.... 
                </h1> 
            </div> );
        }else {
            //console.log("start render else");
            console.log(this.state.DataisLoaded);
            return (
                <div className="container">
                                      
                    <MenuButton />

                    <br/><br/>
                 
                    <h1> List of Artist </h1> <br/>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Music type</th>
                        </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.artist.map((item) => ( 
                                
                                <tr key = { item.id } >
                                <td>{ item.name } </td>
                                <td>{ item.music_type } </td> 
                                </tr>
                                ))
                            }
                        </tbody>
                    </table >
                   
                </div>
            )
        }
    }

}

export default ArtistComponent