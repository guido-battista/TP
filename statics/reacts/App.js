class App extends React.Component {

    render() {
        return(
            <div>
                <Calculator name="Guido"/>
            </div>
            );
    }
}


ReactDOM.render(<App />,document.getElementById('root'));