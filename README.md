## Vero's Website Performance Optimization Project

### PageSpeed score
You can check my PageSpeed score against <a href="http://veritoleon.github.io/optimization-project">this page</a>.

### Pizzeria Code
* <a href="http://veritoleon.github.io/optimization-project/views/pizza.html">Production page</a>
* <a href="https://github.com/VeritoLeon/optimization-project/tree/master/views/src">Development source code</a>

### Optimizations
* Took all the calculations I could out of the loops
* <a href="https://developers.google.com/speed/articles/optimizing-javascript">Optimized concatenation</a>
* Reduced the number of backgound pizzas (given that the 200 weren't visible)</a>
* <a href="http://css-tricks.com/using-requestanimationframe/">Used requestAnimationFrame() to the bg pizzas creation and updatePositions methods</a> +<a href="http://www.html5rocks.com/en/tutorials/speed/animations/">(another source)</a>
* Minified and inlined javascript and css files in pizza.html (<a href="https://www.youtube.com/watch?v=TMKj0BxzVgw">Grunt tutorial used by LearnCode.academy</a>)
* Minified the images used in pizza.html
* Added viewport tag to pizza.html

Also, I guided myself a lot from the <a href="https://piazza.com/class/i0sf6tsmg0r7do">piazza forums</a> and <a href="https://github.com/udacity/fend-office-hours/tree/master/Web%20Optimization/Effective%20Optimizations%20for%2060%20FPS">Effective Optimizations for 60 FPS</a>.