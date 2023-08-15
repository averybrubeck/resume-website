import React from 'react';
import pdfFile from './Resume.pdf';
function MainContent() {
    return (
        <div>
     
<section class="home">
    <p class="title1">Hello my name is</p>
    <h1 class="title2">Avery Brubeck</h1>
    <p class="shortdescription">Currently residing in <a href="https://www.google.com/maps/place/Virginia+Beach,+VA/">Virginia Beach, Virginia</a> and managing IT at <a href="https://www.xerox.com/en-us/services/it-services">Xerox</a></p>


<section class="contact">
    <p>Email me at <a href="mailto:averybrubeck@yahooo.com">AveryBrubeck@Yahoo.com</a></p>

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
<div class="socialsBar" order="4, 4"> 

   <div class="linkedInIcon" >
    <a href="https://www.linkedin.com/in/mark-a-brubeck/" title="Avery Brubeck" target="_blank">
        <svg class="linkedInSvg" fill="none" stroke="currentcolor" strokeWidth="1.5" stroke-linecap="round" stoke-linejoin="round">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2"></circle>
        </svg>
    </a>
    </div>
    
    
    
    
    
    
    
        <div class="githubIcon">
        <a href="https://github.com/averybrubeck" title="@AveryBrubeck" target="_blank">
        <svg class="gihubSvg"  fill='none' stroke="currentColor" strokeWidth="2" stroke-strokeLinecap="round" stroke-strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
        </svg>
    </a>
    </div>
        
        
        
        
        
    </div>








</section>











<section class="resume">
    <p>You can view my <a href={pdfFile} target="_blank">resume here.</a></p> 
    </section>


            </section>
        </div> 

    );
}

export default MainContent;
