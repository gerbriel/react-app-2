import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className='filter'>
                <div className='filter-results'>{this.props.count} products</div>
                <div className='filter-sort'>order{' '}
                <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option>Latest</option>
                    <option value='lowest'>lowest</option>
                    <option value='highest'>highest</option>
                </select></div>
                <div className='filter-size'>filter{' '}
                <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value=''>all</option>
                    <option value='XS'>xs</option>
                    <option value='S'>sm</option>
                    <option value='M'>m</option>
                    <option value='L'>l</option>
                    <option value='XL'>xl</option>
                    <option value='XXL'>xxl</option>
                </select></div>
            </div>
        );
    }
}

