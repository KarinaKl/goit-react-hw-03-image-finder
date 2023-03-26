import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import styles from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    const { searchQuery } = this.state;

    if (searchQuery) {
      this.props.onSubmit(searchQuery);
      this.setState({ searchQuery: '' });
    } else {
      Notify.info('Please enter any search query');
    }
  };

  handleChange = event => {
    const searchQuery = event.target.value.trim();
    if (searchQuery.length > 0) {
      this.setState({ searchQuery: event.target.value });
    }
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.searchFormButton}>
            <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            className={styles.input}
            value={this.state.searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
