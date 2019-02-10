install:
	npm install

run-geo:
	npx babel-node -- 'src/bin/get-geo.js'

run-pipe:
	npx babel-node -- 'src/bin/pipeline.js'

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
