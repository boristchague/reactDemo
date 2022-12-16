import React from "react";
import MenuButton from "./MenuButton";
import "./app.css"


class SongComponent extends React.Component{

    constructor(props){
        super(props);
        console.log("start constructeur");

        this.state = {
            songs : [], 
            DataisLoaded : false
        };
    }

    
    componentDidMount(){

    
        const url = "http://localhost:8000/api/song?format=json";

        fetch(url)
            .then( (response) => response.json())
            .then( (json) => {
                this.setState( {
                    items: json,
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
                 
                    
                    <h1> Songs Lyrics </h1>    <br/>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Duration</th>
                            <th>Album</th>
                            <th>Lyrics </th>
                        </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.items.map((item) => ( 
                                
                                <tr key = { item.name } >
                                <td>{ item.name } </td>
                                <td>{ item.duration } </td> 
                                <td>{ item.album } </td> 
                                <td>{ item.lyrics } </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table >

                    <br/><br/>

                    <a href="/addsong"> Add Song </a>
                                       
                </div>
            )
        }
    }

}

export default SongComponent