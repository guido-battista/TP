var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    null,
                    React.createElement(
                        "label",
                        { "for": "usr" },
                        "Usuario"
                    ),
                    React.createElement("input", { type: "text", "class": "form-control", id: "usr" }),
                    React.createElement("br", null),
                    React.createElement(
                        "label",
                        { "for": "pwd" },
                        "Password"
                    ),
                    React.createElement("input", { type: "password", "class": "form-control", id: "pwd" }),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { onClick: handleLoginClickGet, "class": "btn btn-primary" },
                        "Get"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { onClick: handleLoginClickPost, "class": "btn btn-primary" },
                        "Post"
                    ),
                    React.createElement("br", null)
                )
            );
        }
    }]);

    return Login;
}(React.Component);

handleLoginClickGet = function handleLoginClickGet(e) {
    e.preventDefault();
    fetch('http://localhost:3000/signin').then(function (response) {
        return response.json();
    });
};

handleLoginClickPost = function handleLoginClickPost(e) {
    e.preventDefault();
    fetch('http://localhost:3000/signin', {
        method: "POST",
        body: JSON.stringify({
            title: 'New title added',
            body: 'New body added. Hello body.',
            userId: 2
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    }).then(function (response) {
        return response.json();
    });
};

ReactDOM.render(React.createElement(Login, null), document.getElementById('Login'));