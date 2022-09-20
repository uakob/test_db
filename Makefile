ifndef ENV
override ENV = local
endif
override _ENV = ENV=$(ENV)

override PROJECT = test
override _COMPOSE = DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml -p $(PROJECT)
override _FILTER = --force --filter "label=com.docker.compose.project=$(PROJECT)"

export CURRENT_DIR=$(shell pwd)

help:
	@echo "RTFM! LMD!"
	@echo "Available commands:"
	@echo "  start: starts entire project with all dependencies needed"
	@echo "  stop: completely stops the project"
	@echo "  clean: purge local docker artifacts, e.g. volumes, images, containers"
	@echo "  test-e2e: runs e2e tests using separate e2e container"

init:
	cp $(ENV).env .env
	cp $(ENV).docker-compose.yml docker-compose.yml

run:
	$(_COMPOSE)             \
	--profile base          \
	--profile app           \
	up -d --build           \

start:
	make init $(_ENV) && \
	make run $(_ENV)     \

stop:
	$(_COMPOSE)             \
	down                    \

prune:
	docker container prune $(_FILTER)
	docker network prune $(_FILTER)
	docker volume prune $(_FILTER)
	docker image prune $(_FILTER)
	rm -rf docker-compose.yml
	rm -rf .env

clean:
	make stop
	make prune

test-e2e:
	make init
	$(_COMPOSE)             \
	--profile=base          \
	--profile=app           \
	up                      \
	--no-deps               \
	e2e                     \
