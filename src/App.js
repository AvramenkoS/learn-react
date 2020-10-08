import React, {Component} from 'react';
import './App.scss';
import Search from "./components/Search";
import Table from "./components/Table";

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '2';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null,
            searchTerm: DEFAULT_QUERY,
            title: 'The road to learn react'
        }
    }

    fetchSearchTopStories = (searchTerm, page = 0) => {
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
            .then(response => response.json())
            .then(result => this.setSearchTopStories(result))
            .catch(error => error);
    }

    componentDidMount() {
        const {searchTerm} = this.state;
        this.fetchSearchTopStories(searchTerm);
    }

    onSearchSubmit = (event) => {
        const {searchTerm} = this.state;
        this.fetchSearchTopStories(searchTerm);
        event.preventDefault()
    }

    setSearchTopStories = (result) => {
        const {hits, page} = result
        const oldHits = page !== 0
            ? this.state.result.hits
            : [];
        const updatedHits = [
            ...oldHits,
            ...hits
        ];
        this.setState({
            result: {hits: updatedHits, page}
        });

    }

    onSearchChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    onDismiss = (id) => {
        const {result} = this.state;
        const isNotId = item => item.objectID !== id;
        const updatedHits = result.hits.filter(isNotId);
        this.setState({
            result: {...result, hits: updatedHits}
        })
    }

    render() {
        const {searchTerm, title, result} = this.state;
        const page = (result && result.page) || 0;

        return (
            <div className='App'>
                <h2 className="App__title">{title}</h2>
                <Search
                    value={searchTerm}
                    onChange={this.onSearchChange}
                    onSubmit={this.onSearchSubmit}
                >
                    Search
                </Search>

                {result
                    ? <Table
                        hits={result.hits}
                        onDismiss={this.onDismiss}
                    />
                    : null
                }

                <div className="App__interactions">
                    <button
                        className="App__btn App__btn-more"
                        onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}
                    >
                        More stories
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
