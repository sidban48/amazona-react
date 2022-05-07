import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className='Filter'>
          <div className='filter-count'>{this.props.count}</div>
          <div className="filter-sort">
          Order{" "}
          <select
            value={this.props.sort}
            onChange={this.props.sortProducts}>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className='filter-size'>
          Size{" "}
          <select value={this.props.filter} onChange={this.props.filterProducts}>
          <option value = "ALL"> ALL </option> 
          <option value = "XS" > XS </option> 
          <option value = "S" > S </option> 
          <option value = "M" > M </option>
          <option value = "L" > L </option>
          <option value = "XL" > XL </option>
          <option value = "XXL" > XXL </option>
          </select>
        </div>
      </div>
    )
  }
}
