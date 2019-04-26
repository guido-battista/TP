function Welcome(props) {
  return React.createElement(
    "h1",
    null,
    "Hello, ",
    props.name
  );
}

function SeveralWelcomes() {
  return React.createElement(
    "div",
    null,
    React.createElement(Welcome, { name: "Sara" }),
    React.createElement(Welcome, { name: "Cahal" }),
    React.createElement(Welcome, { name: "Edite" })
  );
}

//ReactDOM.render(<App />,document.getElementById('root2'));