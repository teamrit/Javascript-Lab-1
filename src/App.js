import React, { Component } from 'react';
import './App.css';
import {character, createTable, makeStory} from "./main";

class App extends Component {
  render() {
    return (
        <div className="container">
            <header className="mt-5">
                <h1>The Story of {character}</h1>
            </header>

            <section id="stats" className="mt-4">
                <h2 className="text-info">Details</h2>
                <table className="table table-dark rounded">
                    <tbody>
                    {createTable()}
                    </tbody>
                </table>
            </section>

            <section id="origin" className="mt-4">
                <h2 className="text-info">The Origin of {character}</h2>
                <p>{makeStory()}</p>
            </section>
        </div>
    );
  }
}

export default App;
