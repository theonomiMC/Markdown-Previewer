// const marked = require("marked")
const defaultMarkDown = "# React Markdown Previewer\n## [Python]\n\n### High-level programming language\nIn **Python** a function is defined using the `dev` keyword. You can read documentation (https://docs.python.org/3/),\n>(Blockquote) \n\nExample Code:\n```\ndef my_function():\n\n\nprint('Hello from a function')\nmy_function();\n}\n```\n\nTo call a function, use the _function_ name followed by **parenthesis**.\n\nWhy is Python so Popular?\n 1. Easy to Learn and Use\n 2. Mature and Supportive Python Community \n 3. Hundreds of Python Libraries and Frameworks\n\n\n![Python Logo](https://www.python.org/static/img/python-logo.png)\n\n";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: defaultMarkDown
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (

      React.createElement("div", { className: "form-group container-sm pt=3" },
        React.createElement("form", null,
          React.createElement("h1", null, " Markdown Text "),

          React.createElement("textarea", {
            name: "txt",
            value: this.state.txt,
            onChange: this.handleChange,
            className: "form-control", rows: "7",
            id: "editor"
          })),


        React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.txt) } })));
  }
}



ReactDOM.render(React.createElement(App, null), document.getElementById('root'));