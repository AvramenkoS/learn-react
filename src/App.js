import React, {Component} from 'react';
import './App.scss';
import Search from "./components/Search";
import Table from "./components/Table";

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
    {
        title: 'Redax',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 2,
    }
];

const isSearched = (searchTerm) => {
    return item => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // list: list | Когда имя свойства в объекте совпадает с именем переменной, вы можете использовать следующее: list
            list,
            searchTerm: '',
            title: 'The road to learn react'
        }
    }


    onDismiss = (id) => {
        const list = this.state.list;
        const updatedList = list.filter(item => item.objectID !== id)
        this.setState({
            list: updatedList
        })
    }

    onSearchChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        const {list, searchTerm, title} = this.state

        return (
            <div className='App'>
                <h2>{title}</h2>
                <Search
                    value={searchTerm}
                    onChange={this.onSearchChange}
                >
                    Search
                </Search>

                <Table
                    list={list}
                    pattern={isSearched(searchTerm)}
                    onDismiss={this.onDismiss}
                />
            </div>
        )
    }
}

export default App;
