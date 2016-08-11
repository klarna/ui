.PHONY: test

clean:
	rm -rf node_modules

install:
	npm install

lint:
	npm run lint

dev:
	npm start

test:
	npm test
