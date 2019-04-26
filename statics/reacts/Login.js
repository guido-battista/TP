class Login extends React.Component {

    render() {
        return(
            <div>
                <form>
                    <label for="usr">Usuario</label>
                    <input type="text" class="form-control" id="usr"/>
                    <br/>
                    <label for="pwd">Password</label>
                     <input type="password" class="form-control" id="pwd"/>
                    <br/>
                    <button onClick={handleLoginClickGet} class="btn btn-primary">Get</button>
                    <br/>
                    <button onClick={handleLoginClickPost} class="btn btn-primary">Post</button>
                    <br/>
                </form>
            </div>
            );
    }
}

handleLoginClickGet = function(e)
{
    e.preventDefault();
    fetch('http://localhost:3000/signin')
	.then((response) => {
    	return response.json()
    });
}

handleLoginClickPost = function(e)
{
    e.preventDefault();
    fetch('http://localhost:3000/signin',{
        method: "POST",
        body: JSON.stringify({
            title: 'New title added',
            body: 'New body added. Hello body.',
            userId: 2
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    })
	.then((response) => {
    	return response.json()
    });
}


ReactDOM.render(<Login />,document.getElementById('Login'));