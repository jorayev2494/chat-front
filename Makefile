CC=g++
CFLAGS=-c -Wall
LDFLAGS=

DOCKER_COMPOSE_FILE = ./docker/docker-compose.yml

ps:
	@docker-compose --file ${DOCKER_COMPOSE_FILE} ps

bash:
	@docker-compose --file ${DOCKER_COMPOSE_FILE} exec node bash

sh:
	@docker-compose --file ${DOCKER_COMPOSE_FILE} exec node sh

up:
	@docker-compose --file ${DOCKER_COMPOSE_FILE} up --build -d

down:
	@docker-compose --file ${DOCKER_COMPOSE_FILE} down

npmi:
	@docker-compose --file ${DOCKER_COMPOSE_FILE} exec node npm i

ss:
	@make sstart

sstart:
	@docker-compose --file ${DOCKER_COMPOSE_FILE} exec node npm run serve