build: install
	@echo build ...
	@./node_modules/.bin/component-build --dev

install:
	@npm install
	@component install

test: install
	@echo test in browser
	@./node_modules/mocha-phantomjs/bin/mocha-phantomjs test/test-runner.html

.PHONY: test build
