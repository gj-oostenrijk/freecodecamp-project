import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';

import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col><OnlineUsers /></Col>
            <Col><MyToDoList /></Col>
            <Col><GateKeeper /></Col>
          </Row>
          <Row>
            <Col><CheckUserAge /></Col>
            <Col><AddUser /></Col>
            <Col><ToggleDisplayANDAND/></Col>
          </Row>
          <Row>
            <Col><ControlledInput /></Col>
            <Col><ChangeText /></Col>
            <Col><MakeVisible /></Col>
            <Col><Counter /></Col>
          </Row>
          <Row>
            <Col>
              <h1>Exercise tracker</h1>
              <form action="https://boilerplate-project-exercisetracker.gjoostenrijk.repl.co/api/exercise/new-user" method="post">
                <h3>Create a New User</h3>
                <p><code>POST /api/exercise/new-user</code></p>
                <input id="uname" type="text" name="username" placeholder="username" />
                <input type="submit" value="Submit" />
              </form>
            </Col>
            <Col>
              <h5>Our proud users:</h5>
              <OurUsers />
            </Col>
          </Row>
          <Form>
          <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                  <Form.Text className="text-muted">We'll never share your email address ;))</Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
              </Col>
          </Row>
          <Button variant="secondary" type="submit">Login</Button>
          </Form>

          <Card className="mb-3" style={{color:"#000"}}>
            <Card.Img src="https://picsum.photos/200/80" />
            <Card.Body>
              <Card.Title>My title</Card.Title>
              <Card.Text>This is my example of a react bootstrap cards</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test 1</Breadcrumb.Item>
            <Breadcrumb.Item>Test 2</Breadcrumb.Item>
            <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="primary">This is my alert</Alert>
          <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

class ChangeText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({name:'React Rocks!'});
    // Change code above this line
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Click Me</Button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

class MakeVisible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    })
    );
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <Button onClick={this.toggleVisibility}>Click Me</Button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <Button onClick={this.toggleVisibility}>Click Me</Button>
        </div>
      );
    }
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  increment() {
    this.setState(state => ({
      count: state.count+=1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count-=1
    }));
  }
  reset() {
    this.setState(state => ({
      count: 0
    }));
  }
  // Change code above this line
  render() {
    return (
      <div>
        <Button variant="secondary" onClick={this.increment}>Increment!</Button>
        <Button variant="secondary" onClick={this.decrement}>Decrement!</Button>
        <Button variant="secondary" onClick={this.reset}>Reset</Button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'init'
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

class OurUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    };
  }

  componentDidMount() {
    fetch("https://boilerplate-project-exercisetracker.gjoostenrijk.repl.co/api/exercise/users")
      .then(response => response.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            users: data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading... XDDD</div>;
    } else {
      console.log(users)
      return (
        <ul className="list-group App-list">
          {users.map((user) => (
            <li className="list-group-item">{user.username}</li>
          ))}
        </ul>
      );
    }
  }
}

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      input: "",
      postId: "",
      value: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.addUser = this.addUser.bind(this);
  }

  addUser(username) {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username })
    };
    fetch('https://boilerplate-project-exercisetracker.gjoostenrijk.repl.co/api/exercise/new-user', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    this.addUser(this.state.input);

    alert('A name was submitted: ' + this.state.value);
    this.setState({
      input: ""
    });
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
      <Form.Group controlId="formNewUsername">
        <Form.Label>Waar komt dit
          <Form.Control placeholder="Your username" type="text" value={this.state.input} onChange={this.handleInputChange} ></Form.Control>
        </Form.Label>
        <Button type="submit" >Add new user</Button>
      </Form.Group>
      </Form>
    );
  }
}

class ToggleDisplayANDAND extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <Button onClick={this.toggleDisplay}>Toggle Display</Button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};


class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      input: "",
      userAge: ""
    };
    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    const inputStyle = {
      width: 235,
      margin: 5
    };
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <Button onClick={this.submit}>Submit</Button>;
    const buttonTwo = <Button>You May Enter</Button>;
    const buttonThree = <Button>You Shall Not Pass</Button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={this.inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}
        {this.state.userAge === ""
          ? buttonOne
          : this.state.userAge < 18
            ? buttonThree
            : buttonTwo}
        {/* Change code above this line */}
      </div>
    );
  }
}

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Change code below this line
    if (this.state.input.length > 15) {
      inputStyle.border = '3px solid red';
    }
    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};

const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput: "",
      toDoList: []
    };
    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(item => <li key={item}>{item}</li>);
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

class OnlineUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online); // Change this line
    const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>); // Change this line
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}

export default App;
