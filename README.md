# adonisjs-route-model-binding

Route Model Binding. When you inject a model ID into a route, you will often look to retrieve the model that corresponds to that ID. This package provides a convenient solution for Adonis 4.x.

AdonisJs makes it possible to extend routes by adding your own methods to it known as macros.
See this example in the official documentation [extending routes](https://adonisjs.com/docs/4.1/routing#_extending_routes)

[You can use this package with Lucid-mongo without problems](https://www.npmjs.com/package/lucid-mongo)


## Example Usage

Step One:

```bash
adonis install adonis-route-model-binding
# or
npm install --save adonisjs-route-model-binding
# or
yarn add adonisjs-route-model-binding
```

Step Two: Register the provider to your `start/app.js` file

```js
const providers = [
  ...
  'adonisjs-route-model-binding/providers/RMBProvider',
]
```

The bind method can be used as follows.

```js
Route.delete('route/:post', 'PostController.destroy').bind('Post');
```

Finally, you will have access to the `post` object in the `destroy` method

```js
class PostController {
  
  async destroy({ request, params, post }) {
    
    post.delete()
      return { status: 'post deleted succ...' }

  }
  
}
```
