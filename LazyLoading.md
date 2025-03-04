# Code Splitting, Lazy loading and suspense:

- Actually, react project use webpack bundler to make singleFile of all .js and other files.
- and in every .js(component) file importing other .js and assets
- now since webpack bundler: make bundle & creating single file of all. And that single bundle become `too heavier` when project is big.
- so code splitting help in such case where we can split this bundling into multiple chunk so that it load when it require because since large project get bundled into single large chunk file and when application load it entirely load that heavy single chunk file.
- so the solution is `lazy and suspense`

```js
// Instead of importing component as below ❌
import Description from "./components/Descrp";

// Step 1: we should import as following ✅
const Description = lazy(() => import("./components/Descrp"));
// And most importantly, ✅ Good: Declare lazy components outside of your components function.
// You can declare this above line inside function but than it suffer from re-render effect. ❌

// Now only this above thing make different chunk-bundle file for this above component instead of bundling that component into main single-chunk file.

// Step 2: Now to load/render that component on when it's required we have to it as following
<Suspense fallback={"...Loading"}>
    // fallback will executed until Description doesn't get executed. 
  <Description />
</Suspense>;
```

- This will help in following way:
1. Improved Initial Load Time `because big large chunk entire app initialy become smaller than eariler bad practice`.
2. Optimized Performance for Large Apps.

- you can see and experience everything in network tab by observing when chunk loading and it size. 
