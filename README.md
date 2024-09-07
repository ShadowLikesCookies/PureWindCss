# Alot of the stuff here dosnt work yet, its still a work in progress and im just a hobbyist developer, THANK YOU! 


# PureWindCss
### A pure javascript Utility Class based library.

PureWindCss is a Simple, Expandable styling library written in pure javascript meant to be copied into your project and imported. Thats right, no node, no npm, no bullshit.



## Importing PureWindCss into your project

To use PureWindCss all you have to do is clone it into your project and put <script type="module" src="PureWindCss.js"></script> at the bottom of your html body, And then.. wait there are no more steps its that simple.

## Using PureWindCss in your project

Once you have imported PureWindCss into your html file you can now start using the library, all you have to do is put one of our identifiers, or one of your own written using our custom component system into the id tag of a element, and the styling will be automatically applied by the PureWindCss module.




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PureWindCss</title>
</head>
<body>
    <div id="background-blue,font-size(24),border-radius(10)" class="box">This div will have a blue background, large font size, and border radius.</div>
    <script type="module" src="PureWindCss.js"></script>
</body>
</html>

As you can see, inside our div, we use the id="background-blue" to apply a blue background to our div.


## PureWindCss Syntax

Our syntax is meant to be as readable and user friendly as possible, as such inside of the id we use a "," to seperate styles for example if we want a div with a blue background and red text, its as such

<div id="background-blue,text-red"></div>

This is a use of our Static Styling, but its not the only thing PureWindCss is capable of, Its also capable of dynamiclly applying styles as such


<div id="border-radius(50)"></div> 
will apply a border-radius of 50px, obviously allowing you to put any number you wish inside here.



## Custom Component System


Our custom component system, while simple is rather powerfull, for our custom component system you simply just go into the PureWindCss.js File and when you open it, after all the variable declerations the first thing you will see is a function to write your custom components in. To write a custom component in PureWindCss its as simple as a function with 2 arguments, the style and the name.


createComponent("background-gradient, opacity-50", "my-identifier");


and thats it, you write the styles in the first argument and the name in the second, from now on inside the id of a element you can just put the name you predefined and it will apply all the styles you specified.




