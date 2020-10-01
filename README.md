## flat object

```javascript
import { flat } from '@zhaolei0791/flat';

const t = {
  key1: {
    key3: 'v1',
  },
  key2: {
    key4: 'v2',
  },
  key3: { a: { b: { c: 2 } } },
};

console.log(flat(t));
```

output:

```javascript
{
  'key1.key3': 'v1',
  'key2.key4': 'v2',
  'key3.a.b.c': 2,
}
```

CommonJS:

```javascript
import obj from '@zhaolei0791/flat';

const t = {
  key1: {
    key3: 'v1',
  },
  key2: {
    key4: 'v2',
  },
  key3: { a: { b: { c: 2 } } },
};

console.log(obj.flat(t));
```