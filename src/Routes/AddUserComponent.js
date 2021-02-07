import React, { Component } from "react";
import ApiSerivce from "../ApiSerivce";

class AddUserComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
            message: null
        }
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

        ApiSerivce.addUser(user).then( res=> {
            this.setState({
                message: user.username + '님이 등록되었습니다.'
            })
            console.log(this.state.message);
            //this.props.history.push('/users');
        }).catch( err=> {
            console.log('saveUser() error', err);
        });
    }

    render() {
        return(
            <>
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
};

export default AddUserComponent;