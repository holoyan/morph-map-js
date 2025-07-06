# Framework-agnostic Morph map class

Checkout other my packages

- [AdonisJs Permissions](https://github.com/holoyan/adonisjs-permissions)
- [AdonisJs activity log](https://github.com/holoyan/adonisjs-activitylog)


## Description

The Solo purpose of this package is to provide a morph map class that can be used to register and resolve morph maps for classes.


## Installation

```bash
  npm i @holoyan/morph-map-js
  
```

# Usage

### Binding a morph map

```ts
import { MorphMap } from '@holoyan/morph-map'

MorphMap('users')
class User {
    
}

```

### Resolving a morph map

```ts
import { morphMap } from '@holoyan/morph-map' // NOTE: lowercase import


const User = morphMap.get('users')
morphMap.has('users') // true
morphMap.has('non-existing') // false

class Admin {
  // ...
}

morphMap.set('Admins', Admin)

morphMap.get('Admins') // Admin class
morphMap.has('Admins') // true

morphMap.hasTaget(Admin) // true
morphMap.getTarget(Admin) // 'Admins' 


```
