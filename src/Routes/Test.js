import React, { Component } from "react";
import ApiService from "../ApiSerivce";

class Test extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      age: '',
      salary: '',
      message: null
    }
  }

  componentDidMount() {
    this.reloadUserList();
  }

  reloadUserList = () => {
      ApiService.fetchUsers().then(res=> {
        this.setState({
          users: res.data
        })
      }).catch(err => {
        console.log('reloadUserList() Error!', err);
      })
    }

  deleteUser = (userID) => {
    ApiService.deleteUser(userID).then(res => {
      this.setState({
        message: "User Deleted Successfully."
      });
      this.setState({
        users: this.state.users.filter(user => user.id !== userID)
      });
    }).catch(err => {
      console.log('deleteUser() Error!', err);
    })
  }

  onChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
  }

  saveUser = (e) => {
    e.preventDefault();

    let user = {
        username: this.state.username,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        salary: this.state.salary,
    }
    ApiService.addUser(user).then( res=> {
        this.setState({
            message: user.username + '님이 등록되었습니다.'
        })
        console.log(this.state.message);
        this.setState({      
              users: [],
              username: '',
              password: '',
              firstName: '',
              lastName: '',
              age: '',
              salary: '',
              message: null
            });
        this.reloadUserList();
    }).catch( err=> {
        console.log('saveUser() error', err);
    });
  }

  loadUser = (props) => {
    console.log(props);
    ApiService.fetchUserByID(props).then( res=> {
        let user = res.data;
        this.setState({
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            salary: user.salary
        })
    }).catch(err => {
        console.log('loadUser() err', err);
    })
}

  editUser = (ID) => {
    window.localStorage.setItem("userID", ID);
    this.props.history.push('/edit-user');
  }

  addUser = () => {
    window.localStorage.removeItem("userID");
    this.props.history.push('/add-user');
  }
  
  render() {
    return (
      <>
        <div>
          <h2>User List</h2>
          <button onClick={this.addUser}> Add User </button>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>FistName</th>
                <th>LastName</th>
                <th>UserName</th>
                <th>Age</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map( user =>
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.username}</td>
                  <td>{user.age}</td>
                  <td>{user.salary}</td>
                  <td>
                    <button onClick={ () => this.loadUser(user.id)}>Edit</button>
                    <button onClick={ () => this.deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>  
              )}
            </tbody>
          </table>
        </div>
        <div>
          <h2>Add User</h2>
          <form>
              <div>
                  <label>User Name:</label>
                  <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
              </div>
              <div>
                  <label>Password:</label>
                  <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
              </div>
              <div>
                  <label>First Name:</label>
                  <input placeholder="first name" name="firstName" value={this.state.firstName} onChange={this.onChange} />
              </div>
              <div>
                  <label>Last Name:</label>
                  <input placeholder="last name" name="lastName" value={this.state.lastName} onChange={this.onChange} />
              </div>
              <div>
                  <label>age:</label>
                  <input placeholder="age" name="age" value={this.state.age} onChange={this.onChange} />
              </div>
              <div>
                  <label>salary Name:</label>
                  <input placeholder="salary" name="salary" value={this.state.salary} onChange={this.onChange} />
              </div>
              <button onClick={this.saveUser}>Save</button>
          </form>
        </div>
      </>
    );
  }
}


export default Test;