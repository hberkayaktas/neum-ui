# neum-ui

> neumorphic ui component library from Hami Berkay Aktaş The css content I used in this project was taken from this website. https://codes4education.com/amazing-neumorphism-ui-design-using-html-css/

[![NPM](https://img.shields.io/npm/v/neum-ui.svg)](https://www.npmjs.com/package/neum-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save neum-ui
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'neum-ui'
import 'neum-ui/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```
### Examples

- Simple button

  import {  Button,ButtonPressed } from 'neum-ui'
```jsx
  <Button href={"hamiberkayaktas.tk"}>Bu bir buton</Button>
  <ButtonPressed>Pressed Button</ButtonPressed>
```

  ![Cevap1](Button.png)
## License

MIT © [hberkayaktas](https://github.com/hberkayaktas)
