# Makefile for teammark

SHELL := /bin/bash
export BASE := $(shell /bin/pwd)

BUMPVERSION := $(shell /usr/bin/which bumpversion)

IMAGE_TAG := 1

.DEFAULT_GOAL := docker.run

bumpversion.patch:
	$(BUMPVERSION) patch

bumpversion.minor:
	$(BUMPVERSION) minor

bumpversion.major:
	$(BUMPVERSION) major

.PHONY: docker.base
docker.base:
	docker build -t teammark-base -f Dockerfile-base .

.PHONY: docker.app
docker.app: docker.base
	docker-compose build webapp
	docker-compose build backend

.PHONY: docker.run
docker.run:
	docker-compose up -d

.PHONY: docker.rmcontainers
docker.rmcontainers:
	docker-compose rm