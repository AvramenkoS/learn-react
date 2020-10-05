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
        title: 'Vue',
        url: 'https://redux.js.org/',
        author: 'Andrew Tomas',
        num_comments: 12,
        points: 1,
        objectID: 2,
    },
    {
        title: 'Angular',
        url: 'https://redux.js.org/',
        author: 'Frank Novik',
        num_comments: 2,
        points: 4,
        objectID: 3,
    },
    {
        title: 'Jquery',
        url: 'https://redux.js.org/',
        author: 'Andrew Clark',
        num_comments: 2,
        points: 15,
        objectID: 4,
    }
];

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

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
            result: null,
            searchTerm: DEFAULT_QUERY,
            title: 'The road to learn react'
        }
    }

    setSearchTopStories = (result) => {
        this.setState({
            result: result
        })
    }

    componentDidMount() {
        const {searchTerm} = this.state;

        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
            .then(response => response.json())
            .then(result => this.setSearchTopStories(result))
            .catch(error => error);
    }

    onDismiss = (id) => {
        const result = this.state.result;
        const updatedList = result.hits.filter(item => item.objectID !== id)
        this.setState({
            result: updatedList
        })
    }

    onSearchChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        const {searchTerm, title, result} = this.state

        if (!result) return null

        return (
            <div className='App'>
                <h2 className="App__title">{title}</h2>
                <Search
                    value={searchTerm}
                    onChange={this.onSearchChange}
                >
                    Search
                </Search>

                <Table
                    list={result.hits}
                    pattern={isSearched(searchTerm)}
                    onDismiss={this.onDismiss}
                />
            </div>
        )
    }
}

export default App;
