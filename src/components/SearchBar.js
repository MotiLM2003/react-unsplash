import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormsubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormsubmit}>
          <div className='field'>
            <label htmlFor=''>Image Search</label>
            <input
              name='term'
              type='text'
              value={this.state.term}
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
