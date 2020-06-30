import React from 'react'

export default function Search(props) {
    return (
        <input className="App__search" type="search" value={props.value} onChange={props.updateSearch.bind(this)} onKeyPress={props.addToFilter.bind(this)}/>
    )
}
