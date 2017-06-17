# angular-input-delay
When a user is typing on an input the function you indicate run after some delay the user has stopped typing.


Declare a dependency on the module
```javascript
angular.module('myModule', ['ngInputDelay']);
```
Insert input html
```html
<input type="text" name="example" ng-model="search_example" input-delay />
```
