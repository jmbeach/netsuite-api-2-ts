# NetSuite API 2.0 TypeScript Declaration File

This package provides a TypeScript [declaration file](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) for NetSuite API 2.0 scripts. This effectively gives you [intelligent code completion](https://en.wikipedia.org/wiki/Intelligent_code_completion) for editing NetSuite scripts within the editor of your choice.

## Usage In VSCode

Add the type declaration file to your folder (either manually or via npm - `npm install netsuite-api-2-ts`).

Add a tsconfig.json file to your project similar to the following:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "baseUrl": "./",
    "checkJs": true,
    "module": "ESNext",
    "moduleResolution": "classic",
    "outDir": "lib",
    "paths": {
      "*": [
        "@types/*",
      ]
    },
    "target": "ESNext",
    "typeRoots": [
    ]
  },
  "include": [
    "./**/*"
  ]
}
```

The above code assumes that the `.d.ts` file is located in the folder `./@types`.

Using this in combination with the [NetSuite Upload](https://marketplace.visualstudio.com/items?itemName=nsupload-org.netsuite-upload) extension can completely replace the need for [NetSuite's SuiteCloud IDE](https://docs.oracle.com/cloud/latest/netsuitecs_gs/NSIDE/NSIDE.pdf).

## Contributing

The declaration file is edited manually. Not every entity in the API has been added to the declaration file yet. If there is something you would like to add, use NetSuite's [API Reference](https://docs.oracle.com/cloud/latest/netsuitecs_gs/NSAPI/NSAPI.pdf) to figure out the syntax and add it directly to netsuite-api-2.d.ts and create a pull request.
