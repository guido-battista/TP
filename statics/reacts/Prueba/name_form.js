//import { timingSafeEqual } from "crypto";

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: props.name};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        < div>
            <form onSubmit={this.handleSubmit}>
              <label>
               Name:
               <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div>
            <b>El nombre ingresado es: {this.state.value}</b>
          </div>
        </div>
      );
    }
  }

  //ReactDOM.render(<NameForm />,document.getElementById('root5'));