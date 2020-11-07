import React from "react"
// import img from "../img/austrian-national-library-4868492_1920.jpg"
import {Link} from "gatsby"

export default function Home() {
  return <div style={{color:'red'}}>
           <h1>Hello Gatsby!!!!!!!!!</h1>
           <img src="https://source.unsplash.com/random/400x200"/>
           <img src={require('../img/austrian-national-library-4868492_1920.jpg')}/>
           <br/>
           <Link to="/about/">about us</Link>
         </div>
}
