import { Component } from "react";

class LinkToMyGitHubClass extends Component {
  constructor(props) {
    super(props);
    this.link = { url: "https://github.com/MissKamilla" };
  }

  render() {
    return (
      <a
        href={this.link.url}
        style={{ color: "pink" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub
      </a>
    );
  }
}

export default LinkToMyGitHubClass;
