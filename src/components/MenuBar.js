import React from 'react'

class MenuBar extends React.Component {

  /*

  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  handleClick = (e) => {
    this.props.changeActive(e.target.id);
  }

  render() {
    return (<div className="ui four item menu" onClick={this.handleClick}>
      <a className={`item ${this.props.currentlyActive === 'profile' ? 'active' : ''}`} id="profile">
        <i className="user large icon" id="profile"/>
      </a>
      <a className={`item ${this.props.currentlyActive === 'photo' ? 'active' : ''}`} id="photo">
        <i className="photo large icon" id="photo"/>
      </a>
      <a className={`item ${this.props.currentlyActive === 'cocktail' ? 'active' : ''}`} id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>
      <a className={`item ${this.props.currentlyActive === 'pokemon' ? 'active' : ''}`} id="pokemon">
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>);
  }

}

export default MenuBar
