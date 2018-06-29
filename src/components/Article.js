import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { loadArticle } from 'actions/Article';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

import logo from 'react.svg';
import './Home.css';
class Article extends Component {
  static async getInitialProps({store}) {
    await store.dispatch(loadArticle())
    return {};
  }
  componentDidMount() {
    if(!this.props.articles) {
      this.props.dispatch(loadArticle());
    }
  }

  render() {
    const list = this.props.articles || null;
    return (
      <Provider store={store()}>
        <div className="Home">
          <div className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <h2>Welcome to After.js</h2>
          </div>
          <div style={{ display: 'block', textAlign: 'left', maxWidth: 960, marginLeft: 30, flexDirection: 'column' }}>
            <h2>Today news</h2>
            <small>/<Link to="/">Home</Link>/Blog</small>
              {list && list[0] ? list.map((post) => (
                <div style={{ padding: 4 }} key={post.id}>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              )) :
              <p>Loading...</p>
              }
          </div>
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => {
  return ({
    articles: state.article.listArticle
  })
}
export default connect(mapStateToProps)(Article);
