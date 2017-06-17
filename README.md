# angular-input-delay
When a user is typing on an input the function you indicate run after some delay the user has stopped typing.

npm install
```javascript
npm i angular-input-delay
```

Declare a dependency on the module
```javascript
angular.module('myModule', ['ngInputDelay']);
```
Insert input html
```html
<input type="text" name="example" ng-model="search_example" on-change="doSomething()" input-delay />
```

Default delay between user typing is 250 but you can always set your delay time by using it like this.
```html
<input type="text" name="example" ng-model="search_example" on-change="doSomething()" input-delay delay="450"/>
```
