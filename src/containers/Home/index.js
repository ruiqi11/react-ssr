import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';

class Home extends Component {

  getList() {
      const { list } = this.props;
      return list.map(item => <div key={item.id}>{item.title}</div>)
  }
  render() {
      return (
      <div>
          <Header/>
          <div>Home</div>
          {this.getList()}
          <button onClick={() => { alert('click1'); }}>按钮</button>
      </div>
      )
    }	

  componentDidMount() {
    if (!this.props.list.length) {	
      this.props.getHomeList()	
    }
  }
}

Home.loadData = (store) => {
  // 执行action，扩充store。
  return store.dispatch(getHomeList());
}

const mapStatetoProps = state => ({
  list: state.home.list
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {	
    dispatch(getHomeList());
  }
})

// 连接store
export default connect(mapStatetoProps, mapDispatchToProps)(Home);
