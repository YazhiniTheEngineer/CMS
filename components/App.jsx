import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Card from "./Card";
import tasks from "./tasks";

function App(){

    function AddTask(note){
        console.log(note);
    }

    return(
        <div>
            <Header />
            <Main />

            {tasks.map((item) => {
                return (
                <Card
                title={item.title}
                task = {item.task}
                radio = {item.radio}
            />
            )})}
            
            <Footer /> 
        </div>
    );
}

export default App; 