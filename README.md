# verify url
A Node.js package for verifying the validity and reachability of URLs.

## Usage
Using npm:

```shell
$ npm i verify-url
```

In Javascript:
```javascript
import { isValidUrl } from "verify-url";

(async () => {
  const url = 'https://www.example.com';
  const isValid = await isValidUrl(url);
  console.log(`Is ${url} valid? ${isValid}`);
})();
```

## License
This project is licensed under the ISC License

## Bugs/Issues
Please report bugs and issues [here](https://github.com/PhivosJiar/verify-url/issues).