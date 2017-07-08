# yeps-docker-compose-example

YEPS app with docker compose example (3 nodes with nginx loadbalancer).


To run it you should install [docker-compose](https://docs.docker.com/compose/install/).

### Start

```bash
$ docker-compose up
```
And open [http://localhost/](http://localhost/) to see static files or
[http://localhost/test](http://localhost/test) to see dynamic response.

### Service

To run as service:

```bash
$ docker-compose up -d
```
And to stop:

```bash
$ docker-compose stop
```

### To bring everything down

```bash
$ docker-compose down --volumes
```

Or if you want to remove docker images:

```bash
$ docker-compose down --rmi all
```