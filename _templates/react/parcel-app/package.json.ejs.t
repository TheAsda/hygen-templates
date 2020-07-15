---
to: package.json
---
{
  "name": "<%= name.toLowerCase() %>",
  "version": "1.0.0",
  "main": "src/index.js",
  "license": "MIT",
  "scripts": {
    "parcel": "parcel app/index.html",
    "build": "parcel build app/index.html",
    "start": "yarn parcel"
  },
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "devDependencies": {
    "parcel": "^1.12.4"
  }
}
