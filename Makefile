setup:
	yarn install
	bash scripts/install_godeps.sh

dev-server: protocgen
# for more information, see: https://webpack.github.io/docs/webpack-dev-server.html
	yarn concurrently --kill-others "go run server/server.go" "yarn webpack-dev-server --content-base dist --colors --watch --hot --inline"

webpack:
	yarn webpack

protocgen:
	bash scripts/protocgen.sh

.PHONY: dev-server webpack setup protocgen