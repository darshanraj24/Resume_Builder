# Dependency to add in this project 

npm install react-bootstrap bootstrap
npm install react-tag-input


# Explaination ref in Resume-builder project

I have used 'ref' in PersonalInfo.js file
In React, a ref is an object that provides a way to reference a DOM element or a React component instance created in the render method. It allows you to access and manipulate the underlying DOM or component directly. 

-The useRef hook is used to create four refs: nameRef, emailRef, addressRef, and phoneRef. Each ref is initially set to an empty value, then they are then assigned to the ref attribute of the respective input fields. ref={nameRef} is added to the name input field etc...
-The handleFormSubmit function is modified to handle the form submission. It prevents the default form submission behavior using e.preventDefault(). Then, it retrieves the values of the input fields using the current property of each ref.

# Result

if we open console, we can see the entered data is printed... after submiting the form, later we can store it