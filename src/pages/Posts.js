import React,{Component, Fragment} from 'react';
import {Redirect} from "react-router-dom";
import "../assts/css/Posts.css";

import Post from "../components/Post";

class Posts extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [
                {text:"Hola",date:`${new Date()}`},
                {text:"Hola",date:`${new Date()}`},
                {text:"Hola",date:`${new Date()}`},
                {text:"Hola",date:`${new Date()}`}
            ],
            data:[]
        }
        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount(){
        this.getPosts("/json/php/newBlog/post.php");
    }

    async getPosts(url){
        try{
            let res = await fetch(url,
            { method:"GET",
            mode:"no-cors",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            }
        });
            if(res.status===200){
                let data = await res.text();
                this.setState({
                    data
                });
                console.log(this.state.data);
            }else{
                throw new Error("No se recibio ningun dato"); 
            }
        }catch(error){
            console.log(error);
        }
    }
    
    render(){
        
        if(localStorage.getItem("isLoggedIn")==="true"){
            return(
                <Fragment>
                    <div className="ctr-posts">
                    {this.state.posts.map((post,key)=>{
                        return <Post key={`post_${key}`} post={post}/>
                    })}
                        
                    </div>
                </Fragment>
            );
        }else{
           return( <Redirect to="/login"/>);
        }
    }
}
export default Posts;