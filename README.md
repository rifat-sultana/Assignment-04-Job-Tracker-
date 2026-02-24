
**Q.1. What is the difference between getElementById and getElementsByClassName?**

==> getElementById() is one kind of javascript method which is used to find out only one element which is fixed by id name. This id name is used only one times in full html. 


  getElementsByClassName() is a javascript method which is used to find out multiple elements under a specific class name.

  example: 
  In HTML .....
  ```
  <h1 id="title">Hello</h1>

  <p class="box">One</p>
  <p class="box">Two</p>
  <p class="box">Three</p>
  <p class="box">Four</p>
  <p class="box">five</p>
  ```

 Const heading = document.getElementById("title");
 ```
 <h1 id="title">Hello</h1>
```
const paragraph = document.getElementsByClassName("box);
 ->more than one element here includes in one class  box.


**Q.1.1 What is the difference between querySelector and querySelectorAll?**

==> querySelector() is a method that selects a first matching element using a CSS selector, and the selector is only first element changed if the same selector in multiple places.
  
  <!-- In HTML..... -->
  ```
<p class="box">Apple</p>
<p class="box">Banana</p>
<p class="box">Mango</p>
```
<!-- In Javascript -->
```
let item = document.querySelector(".box");
item.innerText = "Changed";
```


<!-- Result will be... -->
```
  "Changed"
  Banana
  Mango
  querySelectorAll() is a method that selected all matching element using a CSS selector. this method returns multiple elements.
```
  <!-- In HTML .....-->
```
<p class="box">Apple</p>
<p class="box">Banana</p>
<p class="box">Mango</p>
```

<!-- In Javascript... -->
```
let items = document.querySelectorAll(".box");
items[2].innerText = "Orange";
```

<!-- Result will be.... -->
```
  Apple
  Banana
 "Orange"
 ```



**Q.2.How do you create and insert a new element into the DOM?**
**
==>  let,

   In HTML...
   ```
  <div id="box"></div>
  ```
  now create a new element like <P>
```
  let p = document.createElement("p");   (javascript)
  ```
  then,
        p.innerText = "Hello"; write in javascript

  now it will be --   <p>Hello</p> 

  now turn to insert element in a DOM

  document.getElementById("box").appendChild(p);

  final result in HTMl :

  ```
  <div id="box">
  <p>Hello</p>
   </div>
   ```



**Q.3. What is Event Bubbling? And how does it work?**

==> Event bubbling is a process where events are promote from the inner elements to the parent element above. 

***** How event bubbling works:

   a. first click on a small thing, When click on a button, the button will first catch the event.

   b. then it will go to the parent above. Then that event will go to the parent of the button, meaning the div.

   c. It will go even higher. Then the event from the div will go to the body.

```
<body onclick="alert('body clicked')">
  <div onclick="alert('div clicked')">
    <button onclick="alert('btn clicked')">
      Click Me
    </button>
  </div>
</body>
```
 ** It means it starts rising from the bottom  to up — just like a bubble!
That's why it's called Bubbling. 


**Q.4.  What is Event Delegation in JavaScript? Why is it useful?**

==> Event delegation means the larger element takes care of the events of the smaller elements; that means event delegation is the process of sending event to the larger one(parent) rather than sending events separately to smaller one(child)

   Definitely event delegation is very useful because...
            1. require less code.
            2. works fast
            3.It will work even if add any new things.


**Q.5. What is the difference between preventDefault() and stopPropagation() methods?**

==>  preventDefault() method: 

 Something stops working on its own.

  let's there is a link....
```
  <a href="https://google.com">Go to Google</a>
  ```
 When  click it, it will go to Google. But if I write:
  ```
  event.preventDefault();
 ```
  It will no longer go to Google. That means the link will stop working on its own.
  
  stopPropagation() methods:
     The event stops rising. We know that event bubbling goes from bottom to top.
           If we write:

            event.stopPropagation();
Then the event will not go up anymore. It will only stop where it was clicked.
     