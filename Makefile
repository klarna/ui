.PHONY: test

build:
	npm run build

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

gh-pages:
	-git branch -D gh-pages
	git checkout -b gh-pages
	git reset --hard master
	echo node_modules > .gitignore
	yarn install --pure-lockfile
	yarn run build
	git add --all
	git commit -m "Update GH pages [skip ci]"
	git push origin --force gh-pages
