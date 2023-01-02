# Troubleshooting

## Creating a map container

You will find the following often in the examples:

```js
var mapContainer = document.createElement('div')
mapContainer.style.height = '100%'
document.body.append(mapContainer)
```

This code has a couple of alternatives.

You can also declare the `div` in HTML:

```html
<div id="mapContainer" style="height:100%"></div>
<script>
    document.querySelector('#mapContainer') // <div>
</script>
```

Or in a MVVM framework like Vue:

```html
<script setup>
    import { ref, onMounted } from 'vue'

    const el = ref()

    onMounted(() => {
        el.value // <div>
    })
</script>

<template>
    <div ref="el" style="height:100%"></div>
</template>
```

## Using iframe communication

When a parent frame communicates with one of its iframes, the same-origin policy applies.

You might see this error:

```
Failed to execute ‘postMessage’ on ‘DOMWindow’: The target origin provided (‘https://localhost:3000’) does not match the recipient window’s origin (‘http://127.0.0.1:8080’).
```

with different origins.

To avoid this error set `vt.targetOrigin` to the appropriate value (usually the origin of the iframe).
