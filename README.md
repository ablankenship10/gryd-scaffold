GrydScaffold
=========
Simple REST API starter project.

### Features
  - A clean directory structure for your next project
  - Supports multiple applications/API versions per project
  - Modular application structure
  - Command Line Interface for project/application/resource generation

Installation
----
Use the GrydCLI to generate a new project
```js
    //Install the GrydCLI globally
    npm install -g gryd-cli

    //On first use
    gryd-cli install
    
    //In project workspace
    gryd-cli init ProjectName
```

Directory Structure
----
```js
    -app
        -config - Application configuration
        -controllers - Express controller code
        -models - Database (mongoose) models
        -services - Middleware + Helper functions
        -index.js - Routes files
    -templates - Used by GrydCLI, removed before project init.
    -.gitignore
    -.gryd - Signals to GrydCLI that this is a Gryd Project
    -index.js - Main file
    -package.json
    -README.md
    
```

Change Log
----
#### 0.5.0
>Updated to Gryd version 0.5.0, not backward compatible
>Major rewrite, removed some hacked together features including built in clustering, daemon file
>New method of calling global Gryd functions and objects
>Single application structure
>No more dealing with `this` context

#### 0.3.0
>Added daemon file to base application
>Updated README
>Version bump to match module

#### 0.2.0
>Moved core logic to its own module
>Restructure and rename of project to accommodate new module

#### 0.1.9
>WIP for version 2.0.0

#### 0.1.1
>Added ENV variable gryd_basepath to define api base route
>New basepath default is / instead of /api
>Fixed model naming to use singular name

#### 0.1.0
>Initial development


Contributors
----
Aaron Blankenship


License
----

Copyright (c) 2014, Aaron Blankenship

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.