import React, { Component } from 'react';
import styled, {css} from 'styled-components';

// import logo from './logo.svg';
import './App.css';

const ControlButton = styled.div`
  ${
    props => props.active && css`
      cursor: pointer;
      text-shadow: 0px 0px 60px #03ff03;
    `
  }
`

const AppLayout = styled.div`
  padding: 1.5rem;
`

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 2.6rem;
`

const Logo = styled.div `
  font-size: 2rem;
`

const Content = styled.div`
`



class App extends Component {
  state = {
    menuItem: 'dashboard'
  }

  handlePageChange = ({ target }) => {
    this.setState(() => {
      const { innerHTML } = target;
      const page = innerHTML;
      const menuItem = page.toLowerCase();
    
      return {
        menuItem,
      }
    })
  }

  render() {
    const { menuItem } = this.state;
    
    
    console.log(menuItem)

    return (
      <AppLayout>
        <Bar>
          <Logo>
            Crypto Dash
          </Logo>
          <div />
          <ControlButton
            onClick={this.handlePageChange}
            active={menuItem === 'dashboard'}
          >
            Dashboard
          </ControlButton>
          <ControlButton
            onClick={this.handlePageChange}
            active={menuItem === 'settings'}
          >
            Settings
          </ControlButton>
        </Bar>
        <Content>
          It's the {this.state.menuItem} <button onClick={this.handlePageChange}>page</button>
        </Content>
      </AppLayout>
    );
  }
}

export default App;
