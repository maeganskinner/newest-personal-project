import React from 'react';
import './Landing.css';





function Landing() {
    return (
        <div>
            
            <p className="logo">

                 Simply You 

            </p>

            <p className="simple" class="font-weight-bold">
                <strong> SIMPLE STYLE | SIMPLE COLLECTION | SIMPLY YOU </strong>
            </p>


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
            <a href="http://facebook.com" class="fa fa-facebook rounded-circle z-depth-2"> </a> 
            <br></br>
            
            <a href="http://twitter.com" class="fa fa-twitter"> </a>
            <br></br>
             
            <a href="http://instagram.com" class="fa fa-instagram"> </a>
            

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <p className="menu">
            <span>
                <ul className='buttons'>

            
                    <button type="button" class="btn btn-outline-secondary btn-lg"> <li> Home </li> 
                    </button>
                    


                    <button type="button" class="btn btn-outline-secondary btn-lg"> <li> Shop </li> 
                    </button>

                    <button type="button" class="btn btn-outline-secondary btn-lg"> <li> Reviews </li> 
                    </button>

                    <button type="button" class="btn btn-outline-secondary btn-lg"> <li> 
                    Login </li> </button>

                    <button type="button" class="btn btn-outline-secondary btn-lg"> <li> Cart </li> 

                    <button type="button" class="btn btn-outline-secondary btn-lg"> <li> 
                    Register </li> </button>

                    </button>
                </ul>
            </span>
            </p>


        </div>
    );
}

export default Landing;