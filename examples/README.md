# VIRTUAL TWINS JS SDK

Example code in modern JavaScript for quick copy and paste.

## Requirements

All examples assume that the current scope defines the symbol **`vt`** that exposes the JavaScript API.

You can import it from the distributed file:

```js
import vt from '/virtualtwins.es.js'
```

Alternatively you may import the **`VT`** symbol like this:

```js
import { VT } from '/virtualtwins.es.js'
```

which allows you to use object-oriented notation:

```js
vt = new VT.Map(...)
```

You may use this notation especially when creating multiple maps on the same page.

## IDE Support

Typescript support is provided via [index.d.ts](index.d.ts). It should give you autocompletion and documentation on hover.

The file [jsconfig.json](jsconfig.json) should give you this kind of comfort even when writing plain Javascript code.

Note that automatic recognition of these files depends on your IDE. It was tested in VS Code.

# Licence (ISC)

Copyright (c) 2022, VIRTUAL TWINS / Archkomm GmbH

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
