import React from 'react';
import Home1 from './home';



class header extends React.Component{
    render(){
        return(
            <div>
            <nav class="nav">
            <div class="nav-menu flex-row">
                <div class="nav-brand">
                    <a href="#" class="text-gray">Spiritual Comfort</a>
                </div>
                <div class="toggle-collapse">
                    <div class="toggle-icons">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
                <div>
                    <ul class="nav-items">
                        <li class="nav-link">
                            <a href="#">Home</a>
                        </li>
                        <li class="nav-link">
                            <a href="#">Category</a>
                        </li>
                        <li class="nav-link">
                            <a href="#">Archive</a>
                        </li>
                        <li class="nav-link">
                            <a href="#">Pages</a>
                        </li>
                        <li class="nav-link">
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div class="social text-gray">
                    <a href="https://www.facebook.com/Spiritual-comfort-105027254543412/"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/home"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.youtube.com/channel/UC--DSuqV_3gHPvxZ2JC5nwA?view_as=subscriber"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </nav>
     
         <Home1/>
       
      
        </div>
      
    
        );
    }
}
export default header;