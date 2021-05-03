# TypeScript + Flow = Migration
This repo demonstrates that TypeScript and Flow can be happily married into one repo for the purpose of migration from one to the other.

## Create tsconfig.json and ignore .JS files

    "allowJS":  true,
    "include":  [
        "./src/**/*.ts",
        "./src/**/*.tsx"
    ],
    "exclude":  [
        "./src/**/*.js",
        "./src/**/*.jsx"
    ]

> ERROR: Type annotations can only be used in TypeScript files.

## Comment out Flow types, they will still be evaluated

> ./src/examples/FlowFile.js
> ./src/examples/FlowFile_Commented.js

    function  foo(x/*: ?number*/)/*: string*/{
   		if (x) {
   			return  x.toString();
   		}
   		return  "default string";
   	}

## Optionally disable JS checking in VS Code if you're still annoyed (no thanks)

> ./.vscode/settings.test.json  (rename to settings.json)

	{
		"javascript.validate.enable":  false
	}


## Test it out

    npm install
    npm run flow
    npm start
