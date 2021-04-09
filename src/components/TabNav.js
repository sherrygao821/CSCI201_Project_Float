import { Component } from "react";
import "../components/TabNav.css";

class TabNav extends Component {
  render() {
    return (
      <div className="tabbar">
        <ul>
          {this.props.tabs.map((tab) => {
            return (
              <li key={tab} className="tab">
                <span onClick={() => this.props.setSelectedPage(tab)}>
                  {tab}
                </span>
              </li>
            );
          })}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default TabNav;
