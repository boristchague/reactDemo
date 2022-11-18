import React from "react";
import MenuButton from "./MenuButton";
import "./app.css"

class AlbumComponent extends React.Component{

    constructor(props){
        super(props);
        console.log("start constructeur");

        this.state = {
            album : [], 
            DataisLoaded : false
        };
    }

    
    componentDidMount(){

    
        const url = "http://localhost:8000/api/album?format=json";

        fetch(url)
            .then( (response) => response.json())
            .then( (json) => {
                this.setState( {
                    album: json,
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
                 
                    <h1> ALBUMS </h1> <br/>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Album name</th>
                            <th>Artist name</th>
                            <th>Release date</th>
                            <th>Production house</th>
                        </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.album.map((item) => ( 
                                
                                <tr key = { item.id } >
                                <td>{ item.name } </td>
                                <td>{ item.artist_name } </td> 
                                <td>{ item.release_date } </td> 
                                <td>{ item.production_house } </td> 
                                </tr>
                                ))
                            }
                        </tbody>
                    </table >

                    <br/><br/>         
                   
                </div>
            )
        }
    }

}

export default AlbumComponent