import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    active: ""
  }
  detailNames = {
    "profile": <Profile />,
    "photo": <Photos />,
    "cocktail": <Cocktails />,
    "pokemon": <Pokemon />
  }

  changeActive = activeId =>  {
    this.setState({
      active: activeId
    });
  }

  render() {


    return (
      <div>
        <MenuBar currentlyActive={this.state.active} changeActive={this.changeActive} />
        {this.detailNames[this.state.active]}
      </div>
    )
  }

}

export default MainBox
