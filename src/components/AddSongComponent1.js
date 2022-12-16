import React, { useRef, useState } from "react";


class AddSongComponent extends React.Component{

    constructor(props){
        super(props)
        console.log('honjour')
        this.state = {
            title : "",
            duration : "",
            album : "",
            lyrics : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this) 
    }


    handleSubmit = (e) =>{
        return (
        this.setState = {
            title: "bon",
            duration : "jour",
            album : "mr",
            lyrics : "prof"
        })
    }

    render(){

        return(

            <div>
                <h3> adding a song</h3>  <br/>

                <form method="post" action="song">
                    Title : <input placeholder="title"/>  <br/>
                    Duration : <input placeholder="duration"/> <br/>
                    Album : <input placeholder="album"/> <br/>
                    Lyrics : <input placeholder="lyrics"/>  <br/><br/>

                    <h2> {this.state.album} </h2> 

                    <button onClick={this.handleSubmit}> Add </button>
                </form>

            </div>

        )
    }
}

export default AddSongComponent;