# `excpetionally` demo

This is a demonstration how [`exceptionally`](https://github.com/ivanhofer/exceptionally) can be used to improve your code quality.

You can find the related slides [here](https://github.com/ivanhofer/slides/blob/main/An%20'exeptionally'%20demo.pdf).

## branches

This repository has a few branches to show you how to get from zero exception handling to fully typed exceptions.

The branches show:

- [`1-base`](https://github.com/ivanhofer/exceptionally-demo/tree/1-base): the starting point that offers no exception handling
- [`2-throw-errors`](https://github.com/ivanhofer/exceptionally-demo/tree/2-throw-errors): throw errors whenever something could go wrong during `fetch`
- [`3-data-exception-tuple`](https://github.com/ivanhofer/exceptionally-demo/tree/3-data-exception-tuple): return exceptions instead of throwing them using the `[data,exception]-tuple` approach
- [`4-exception-classes`](https://github.com/ivanhofer/exceptionally-demo/tree/4-exception-classes): return different exception classes to be able to distinguish them
- [`5-exceptionally`](https://github.com/ivanhofer/exceptionally-demo/tree/5-exceptionally): refactor the codebase using `exceptionally` showing it's easy integration and utility functions
- [`6-complete`](https://github.com/ivanhofer/exceptionally-demo/tree/6-complete): showcase usage of utility functions
