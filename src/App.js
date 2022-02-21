const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, "Luna"),
        React.createElement("h3", {}, "Dog"),
        React.createElement("h4", {}, "Monkey")

    ])
}

const App = () => {
    return React.createElement(
        // "div"
        "x-custom-element", {},
        React.createElement("h1", { id: "my-brand" }, "React App")
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));