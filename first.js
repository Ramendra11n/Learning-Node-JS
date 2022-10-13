
//standard way to do it 
// let c=document.createElement("p");
// c.textContent="hi i am ramendra mishra";
// c.className="child"
// document.querySelector(".root").append(c);

//innerHTML way to do it ;

// document.querySelector(".root").innerHTML="hi ,see the console please ";
// let c=document.createElement("p");
// c.textContent="hi i am ramendra mishra";
// c.className="child"
// console.log(c);
// a jsx object that is used to write html in the javascript 

// const c=(<ul>
//     <li>home </li>
//     <li>about </li>
//     <li>contact</li>
//     <li>links </li>
//     <li>email</li>
// </ul>)
// if you have more than two elements you must make a parent element to enclose both of them as a single element 
// ReactDOM.render(<ul>
//     <li>home </li>
//     <li>about </li>
//     <li>contact</li>
//     <li>links </li>
//     <li>email</li>
// </ul>,document.querySelector(".root"));
/* conclusion of the render method in react
1. we cant have more than one component in the react 
2. if we console out the javascript elements we will get an object 
3.react is a declarative framework  
whereas the mordern javascript is  imperative 



*/


// chapter 2 :components in react
/* a component in react basically refer to a function that return a html syntax when called. 
for example :

*/ 
// var temp=()=>{
//     return(
//     <div>
//     <h1>
//     react render can take the functions as an arguement too that is called a component
//      </h1>
//     </div>);
//     };
/*in order that the components always work properly we need to have their name always writtten in   the pascal case and the  
we need to have them written in the format of the <Variablefunctionname />
always make the first component of the react capital 
example: */


var Head=()=>
{
    return (
        <header>
            <nav>
            <ul>
                <li>Home</li >
                <li>About </li >
                <li>Contacts</li >
                <li>Announcements</li >
                <li>React </li >

            </ul>
            </nav>
        </header>
    );
}
var Temp=()=>{
return(
        <div>
        <h1>
        react render can take the functions as an arguement too that is called a component
         </h1>
        </div>);
}


//way to put it as a function now we will explore to put it as a component 
    // ReactDOM.render(Temp(),document.querySelector(".root"));.
    //  ReactDOM.render(<Temp/>,document.querySelector(".root"));
//this is basically how you make a component in the react where make the name of the function Pascal Case and then write the name of the function a the 
//<variableFunctionname/> // ReactDOM.render(Temp(),document.querySelector(".root"));
//challenge in React


// ReactDOM.render(<Head/>,document.querySelector(".header"));
/*so we can make  more than one component if we want to have render more than one tag for example if we want a footer a header and some ol tags then we can accomplish that by
 separting the work  of each and every component separately then adding it */
 //example :

 var Header =()=>{
    <header>
      <h1>  <ul>
                <li>Home</li >
                <li>About </li >
                <li>Contacts</li >
                <li>Announcements</li >
                <li>React </li >
        </ul>
        </h1>
        </header>
 }
 var Footer=()=>{
    return(
        <footer>
         <small>  @copyright Ramendra Mishra </small>
        </footer>
    )
 }

 var MainContent =()=>
 {
    return (
    <div>
           <Header/>
    <h1>
        hi i am ramendra 
    </h1>
 
    <Footer/>
</div>
)


//JSX always convert the Jsx object into DOM objects so instead of class we will be using the ClassName in th react 
 }

 ReactDOM.render(<MainContent/>,document.querySelector(".root")); 

//props
/*props are basically the arguement that we pass through function containing the jsx
  the arguement to betreatwed as the javascript araiable we need to use the {} bracket representation
  the element enclosed inside the bracket will be treated as the javascript objects rather than the jsx 
  example 

  let fun=()=>{
 const date =new Date();
  let text
  if(date.hours>12){
    text="afternoon";
  }
  else{
    text="night";
  }
 
return 
(
    <h1>good {text}</h1> the bracket enclosing tell us that the
     variable is treated as the javascript objects rather than the jsx
);
}
we can specify the name of the properties folowing way 
we can use the curly braces required for the properties and then we can use the structure 

***always remember that the properties 
associated with he element are always in
 the form of a string and we cant 
 assign the numerical value and all
  the operation on the jsx props follow 
  the code of conduct of the string that javaScript has to offer 



import React from "react"
import Contact from "./Contact"

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
               
            />
           // this is the way to specify the properties of the variable 
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
              
            />
            <Contact 
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
             
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
              
            />
        </div>
    )
}

export default App







/in the second file 

import React from "react"

export default function Contact(props) {
    /**
     * Challenge: Fix the code below to use the `props`
     * object values in place of the hardcoded values below
     */
//      return (
//         <div className="contact-card">
//             <img src={props.img}/>
//             <h3>{props.name}</h3>
//             <div className="info-group">
//                 <img src="./images/phone-icon.png" />
//                 <p>{props.phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src="./images/mail-icon.png" />
//                 <p>{props.email}</p>
//             </div>
           
//         </div>
//     )
// }

/* 
{
    img: "./images/mr-whiskerson.png", 
    name: "Mr. Whiskerson", 
    phone: "(212) 555-1234", 
    email: "mr.whiskaz@catnap.meow"
}

*/


/*
destructuring the props 
props destructuring refers to the breaking down 
of the props into different elements that the code offrers as the object 

*** the name associated with the props must be 
same as the name that we are using at the time of 
rendering 
here is an example 
import React from "react"

// Challenge: fix the bug, now that we've destructured the props object


export default function Contact({img, name, phone, email}) {
    return (//breaking of the props into object properties 
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}


*/


/*map method 
it forms the one to one mappingto every element of the array and used frequently by the react developers

syntax
array_name.map(function(parameter){
    //code 
    return ;
})

now we use the map method to create the syntax and make things more simpler in react 
example  
export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke  setup={joke.setup}
        punchline={joke.punchline}/>
    })
    return (
        <div>
          <h3>{ jokeElements}</h3> //here we are making use of the map method instead of hardcoding we made everything done simply 
        </div>
    )
}
conditional rendering :
condititonal rendering refers to a condition where we give conditon to the element ,
that is a particular conditon decided whether the follwowing data will be shown on the website or not 
import React from "react"

export default function Card(props) {
    let badgeText="";
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
   
    
    return (
        <div className="card">
            {badgeText.length !== 0 && <div className="card--badge">{badgeText} </div>}
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
reducing the codelenegth 


import React from "react"

export default function Card(props) {
    console.log(props);
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    /*
    Challenge: Fix our component! 😱
    
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}


import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}  converting every line to single element 
            />
        )
    })        
    
            // <Hero />
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
another method to do the same is to use the es6 representation

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}//es6 represenation 
                
            />
        )
    })

    eventListener:eventListener basically refers to a way to add event to  a site
    it basically refers to a reaction that  a site will give when the user try to interact
    
    two method

    .addEventListener("click", function() {})

    <div onclick="myFunction()" id="root"></div>
    in react we genrally use thje second method and so we use the
    second method but we have camel case here
    import React from "react"

export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }
    
    /**
     * Challenge: 
     * Log something to the console when the mouse hovers over the image
      
    
     return (
        <div className="container">
            <img src="https://picsum.photos/640/360" />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}



*/
