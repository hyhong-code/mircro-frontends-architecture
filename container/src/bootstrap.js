import "products/ProductsIndex";
import "cart/CartIndex";
// Load files from remote:
// Upon processing by webpack, if it cannot find a module with name
// `products` in package.json dependency, it will look into ModuleFederationPlugin
// `remote` section of webpack.config.js and check for a key of `products`
// `ProductsIndex` corresponds to `exposes` property of remote's ModuleFederationPlugin object

// Note:
// loads remoteEntry.js, sees dependencies of src/index.js and faker.js
// then loads those 2 files
// then executes bootstrap.js with those 2 files at the same time

console.log("container");
