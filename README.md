# stlite

A port of [Streamlit](https://streamlit.io/) to Wasm, powered by [Pyodide](https://pyodide.org/).

[![Build and Deploy GitHub Pages](https://github.com/whitphx/stlite/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/whitphx/stlite/actions/workflows/gh-pages.yml)

<a href="https://www.buymeacoffee.com/whitphx" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 50px !important;width: 180px !important;" ></a>

[![GitHub Sponsors](https://img.shields.io/github/sponsors/whitphx?label=Sponsor%20me%20on%20GitHub%20Sponsors&style=social)](https://github.com/sponsors/whitphx)

## Try it out

Visit the [playground demo](https://whitphx.github.io/stlite/).

## Use it on your web page

Here is a sample HTML page.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Stlite App</title>
</head>
<body>
  <div id="root"></div>
  <script src="https://whitphx.github.io/stlite/lib/application/stlite.js" ></script>
  <script>
    stlite.mount({
      mainScriptData: `
import streamlit as st

name = st.text_input("Name")
st.write("Hello, ", name or "world")
`,
      container: document.getElementById("root")
    })
  </script>
</body>
</html>
```

In this sample,
* stlite library is imported with the first script tag, then the global `stlite` object becomes available.
* `stlite.mount()` mounts Streamlit frontend on the `<body />` element and runs the Python script passed through the `mainScriptData` option.

> **Warning**
> stlite is at the very beginning of its development and the API can drastically change without any notice in the future.
Moreover, the hosted JS runtime is not versioned now, so future API changes may cause problems with backward compatibility.

## Development
### Building the packages

In the root directory,
```shell
make
```

After building, you can run the playground app by running the command below. Access http://localhost:5001/
```shell
make serve
```