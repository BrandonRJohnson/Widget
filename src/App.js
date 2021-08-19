import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route'; 
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'a',
        content: 'b'
    },
    {
        title: 'c',
        content: 'd'
    }
];

const options =[
    {
        label: "the color red",
        value: "red"
    },
    {
        label: "the color blue",
        value: "blue"
    },
    {
        label: "the color green",
        value: "green"
    }
];

const App = () => {
    const [ selected, setSelected ] = useState(options[0]);
    return (
            <div>
                <Header />
                <Route path="/">
                    <Accordion items={items} />
                </Route>
                <Route path="/list">
                    <Search />
                </Route>
                <Route path="/dropdown">
                    <Dropdown 
                        label="Select a color"
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                </Route>
                <Route path="/translate">
                    <Translate />
                </Route>
            </div>

    );
}; 

export default App;