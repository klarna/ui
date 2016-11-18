.PHONY: test

build:
	yarn run build

clean:
	rm -rf node_modules

install:
	yarn install --pure-lockfile

lint:
	yarn run lint

dev:
	yarn start

test:
	yarn test

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
