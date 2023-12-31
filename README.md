


## ✨ Node Express REST api boilerplate

- src
  - config
    - index.js (configuration files)
  - controllers
    - index.js (controller files)
  - middlewares
    - index.js (middleware files)
  - models
    - index.js (model files)
  - routes
    - index.js (route files)
  - services
    - index.js (service files)
  - utils
    - index.js (utility files)
- tests
- node_modules
- package.json
- .env
- .env-sample
- .eslintrc
- .babelrc (babel configuration file)
- index.js (entry point)


Let's go through each folder and its purpose:

1. src: This is the main folder that contains the source code of the application.

    1. config: This folder holds configuration files, such as database configurations, environment variables, logging settings, etc.

    2. controllers: This folder contains the controllers responsible for handling HTTP requests, processing data, and interacting with services.

    3. models: This folder houses the data models or schema definitions for your application's data layer.

    4. routes: This folder contains the route definitions for different endpoints of your API or application.

    5. services: This folder holds the business logic or services that are responsible for processing data, interacting with models, and performing application-specific operations.

    6. utils: This folder contains utility files and helper functions that can be used across different parts of your application.

2. tests: This folder is dedicated to storing your application's unit tests, integration tests, or any other test files.

3. node_modules: This folder is automatically created and managed by npm. It contains all the dependencies installed for your project.

4. package.json: This file defines your project's metadata, dependencies, and scripts.

5. .env: This file is used to store environment-specific configuration variables. It is usually not committed to version control and can contain sensitive information like API keys or database credentials.

6. index.js: This file serves as the entry point of your application. It typically sets up the server, establishes database connections, and initializes other essential components.

```
MIT License

Copyright (c) 2023 Sivabharathy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
