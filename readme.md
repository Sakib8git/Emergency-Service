1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   <!-- !Ans: -->
   **getElementById("id"):**
   Only returns an element whose ID matches.
   **getElementsByClassName("class"):**
   Returns multiple elements as (HTMLCollection) that match class names.  
   **querySelector(""):".class" / "#id"**
   Returns the first matching element.
   **querySelectorAll("")**
   Returns all elements as(NodeList) that match the name of the selectors.
   <!-- ------------------------------------------------- -->

2. How do you **create and insert a new element into the DOM**?
   <!-- !Ans: -->
   First, craet an element by using --> const newElement= document.createElement("div")
   Then insert innerText/ innerHTML
   Finally, append the new element to the parent element.
   <!-- note: Parent element can be the document.body or another div -->
   <!-- ------------------------------------------------- -->

3. What is **Event Bubbling** and how does it work?
   <!-- !Ans: -->
   **Event Bubbling:**
   It is the default behavior of the browser.
   When an event occurs on a child element, it goes up to the parent, then the parent of the parent, then ......... to the document.
   For example: Clicking a button inside a div will also trigger the div's click event.
<!-- ------------------------------------------------- -->

4. What is **Event Delegation** in JavaScript? Why is it useful?
   <!-- !Ans: -->
   **Event Delegation**
   It helps to handle the events of child elements.
   It useful because:
   i. can easily handle the common multiple event of multiple child elements, so the code structure remains simple,
   ii. reduce the extra memory consumption,
   iii. keeps your code clean and organized,
   iv. working in dynamically added element.

<!-- ------------------------------------------------- -->

5. What is the difference between **preventDefault() and stopPropagation()** methods?
<!-- !Ans: -->
**preventDefault():**
Shut down the default activities of the Browser. 
Like: behavior of the form submit button
**stopPropagation()**
Stops event bubbling of child elements.
