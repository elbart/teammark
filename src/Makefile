# Makefile for teammark

.PHONY: build
build:
	yarn install
	bash scripts/install_godeps.sh

.PHONY: webapp.run
webapp.run: protobuf
# for more information, see: https://webpack.github.io/docs/webpack-dev-server.html
	yarn webpack-dev-server --content-base dist --colors --watch --hot --inline

.PHONY: backend.run
backend.run: protobuf
	go run server/server.go

.PHONY: rethink.run
rethink.run:
	mkdir -p var/rethinkdb
	docker-compose up -d

.PHONY: protobuf
protobuf:
	bash scripts/protocgen.sh