import React, {Component} from 'react';
import './App.scss';
import axios from 'axios';
import BookList from "./BookList";
import Search from "./Search";
import Pagination from "./Pagination";

const api = axios.create({
  method: 'post',
  baseURL: "http://nyx.vima.ekt.gr:3000"
});

class App extends Component {

  constructor()
  {
    super();
    this.state = {
      books: [],
      count: 0,
      loading: false,
      currentPage: 1,
      booksPerPage: 20,
      filters: [],
      search: ''
    }
  }

  componentWillMount()
  {
    this.getBooks();
  }

  getBooks = async () => {
    this.setState({loading: true});
    try
    {
      let data = await api.post(`/api/books?page=${this.state.currentPage}&filters:[{type: "all", values: ${this.state.filters}}]`).then(({data})=> data);
      this.setState({books: data.books, count: data.count});
    }
    catch(exp){
      console.error(exp);
    }
    finally{
      this.setState({loading: false});
    }
  }

 updateSearch = (event) => {
   this.setState({search: event.target.value.substr(0, 20)});
   this.setState((state)=>{filters: state.filters.push(state.search)});
   console.log(this.state.filters)
 }

  render()
  {
    const paginate = (currentPage) => this.setState({ currentPage: currentPage});
    
    return (
      <div className="App">
        <header className="App__header">
          <h3>OnTrack Assignment: Books</h3>
         <Search value={this.state.search} updateSearch={this.updateSearch}/>
        </header>
        <BookList books={this.state.books} loading={this.state.loading} />
        <Pagination booksPerPage={this.state.booksPerPage} totalBooks={this.state.count} paginate={paginate}/>
      </div>
    );
  }
}
export default App;
