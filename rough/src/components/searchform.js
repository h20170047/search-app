import React,{Component} from "react";

export class SearchForm extends Component{

    constructor(){
        super();
        this.state={
            // user:[{fname:'Shyam', age:7}, {fname:'John', age:11}]};
            users: [],
            user:{fname: 'Ram',age:10},
        }
        this.updateModel= this.updateModel.bind(this);
    }
    render(){
        return (
            <div>
                <input name='fname' value= {this.state.user.fname} onChange={this.updateModel}></input>
                <input name='age'  value= {this.state.user.age} onChange={this.updateModel}></input>
                <input name="gender" type='radio' value='Male' onChange={this.updateModel}/>Male
                <input name="gender" type='radio' value='Female' onChange={this.updateModel}/>Female
                <button onClick={()=>{
                    this.state.users.push(this.state.user)
                    this.setState({
                        users:this.state.users
                    })
                }}>Search</button>
                <ol>
                    {this.state.users.map((user)=><li>{user.fname}, {user.age}, {user.gender}</li>)}
                </ol>
            </div>
        )
    }
    updateModel(event){
        this.setState({
            user:Object.assign({}, this.state.user, { [event.target.name]:event.target.value})
        })
    }

}