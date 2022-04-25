import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
import styles from './style.css';

class Home extends Component {

  getList() {
      const { list } = this.props;
      return list.map(item => <div key={item.id}>{item.title}</div>)
  }
  render() {
    return (
    <div>
        <div>Home</div>
        {this.getList()}
        <button onClick={() => { alert('click1'); }}>按钮</button>
    </div>
    )
  }	
  componentWillMount(){
    // 通过这个属性可以判断是在服务端调用
    if(this.props.staticContext) {
      // 给服务端注入的变量 staticContext 的 css属性中加入 css文本
      this.props.staticContext.css.push(styles._getCss());
    }
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

// 传入修改方法
const mapDispatchToProps = dispatch => ({
  getHomeList() {	
    dispatch(getHomeList());
  }
})

// 使用redux提供connect方法连接store，配合mapStatetoProps获取到状态
export default connect(mapStatetoProps, mapDispatchToProps)(Home);
