
# logo

  

**To use the script only import inside tag HEAD**

  
`<script src="logotooltip.js"></script>`

**modify the next properties if you need to change de functionality**

  

     /**
      * Text to display in the Tooltip
      */
    `textTooltip = "'Powered by wiringbits'";`


       /**
        * Page to redirect
        */
        hrefLogo = "https://wiringbits.net/?utm_medium=referrer&utm_source=${window.location.hostname}";

      /**
        * Logo rendered in SVG, change this to change the form logo
       */
    
        `svgLogo = "M0,10.5982,10.5982,0l2.9874,2.9874L2.9874,13.5856Zm44.6556,2.9874,2.9873-2.9874L37.0447,0,34.0573,2.9874ZM16.21,26.8091l7.6108-7.6108,7.6108,7.6108L42.03,16.2109,31.432,5.6127l-7.6108,7.61L16.21,5.6127,5.6122,16.2109Zm0-15.2217,4.6234,4.6235L16.21,20.8338l-4.623-4.6229Zm15.2216,0,4.6235,4.6235L31.432,20.8338l-4.6234-4.6229Z";`

     Color's logo, change this to change the whole color
    
    `svgLogoColor = "#39f`

>There are a bunch of variables that you can modify, be careful these all variables can affects the styles and the display

     /**
    * Color of the text to show when get hover inside the logo
    */
    bakgroundTooltip = "#73d8ff";
    
     /**
    * Color of the text to show when get hover inside the logo
    */
    colorTextTooltip = "#000000";
    
     /**
    * Class name to define the main container 
    */
    mainContainer = `wiringbitsLogo`;
    
    /**
    * Class name to set the container 
    */
    fixed = "wiringbitsFixed";
    
    /**
    * Class name to define the position
    */
    floatLogo = "wiringbitsFloatLogo";
    
    /**
    * Class name to define shine
    */
    highLight ="wiringbitsHighlight";
    
    /**
    * Class name to define links styles
    */
    link = "wiringbitsLogoLink";
    
    /**
    * Background style, currently using a gradient style
    */
    backgroundStyle= "background-image: linear-gradient(to bottom right, #60d3ff, #ffffff);";
    
    /**
    * Distance from logobottom
    */
    alignLogoBottom = "5px";
        
    /**
    * Distance from logo right
    */
    alignLogoRight = "5px";
    
    /**
    * Width Logo
    */
    width = "50px;";
    
    /**
    * Height Logo
    */
    height = "50px";
    
    borderRadius = "8px";
