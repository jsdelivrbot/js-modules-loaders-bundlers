# js-modules-loaders-bundlers
Example of JavaScript modules loaders and bundlers.

Using IIFE for not to polute global name space.

```javascript
  var myModule = {}
  myModule.foo = function() { ... }
  myModule.bar = function() { ... }
  
  (function(m){
    m.foo();
    m.bar();
  })(myModule);
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>JS Modules</title>
  </head>
  <body>
    <!-- Your HTML Markup goes here -->
    <script type="text/javascript" src="file1.js"></script>
    <script type="text/javascript" src="file2.js"></script>
    <script type="text/javascript" src="file3.js"></script>
    <script type="text/javascript" src="main.js"></script>
  </body>
</html>

```
