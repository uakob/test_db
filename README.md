# core

## Requirements

- At least be sure that all Docker requirements satisfied, it's tested on:

```
➜  ~ docker -v
Docker version 20.10.17, build 100c701
➜  ~ docker-compose -v
Docker Compose version v2.6.1
```

- And be sure that [Make](https://www.gnu.org/software/make/) installed on your system:

```
➜  ~ make -v
GNU Make 4.2.1
Built for x86_64-pc-linux-gnu
Copyright (C) 1988-2016 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```

- We assume and strongly recommend some of the Docker monitoring tools installed too, like [ctop](https://github.com/bcicen/ctop) and [dive](https://github.com/wagoodman/dive) (choose on your own):

```
➜  ~ ctop -v
ctop version 0.7.7, build 11a1cb1 go1.18
➜ ~ dive -v
dive 0.9.2
```

## Run

- To start project you're simply need to run:

```
make start
```

### How it works:

- Makefile specifies commands that we need to start docker-compose (cp $ENV.env to .env, cp $ENV.docker-compose to docker-compose etc.) (it is make init command itself)
- then Make starts services using docker-compose file
- ?????
- PROFIT!

> App uses watch mode and Nest starts in development mode, so all changes you've done appears asap at recompile, and you can use debugger out of the box. In addition, all configuration for vscode specified at .vscode folder, feel free to improve and contribute, and add your own ide configurations

When you need to stop project, simply use

```
make stop
```

It will stop all containers, remove all unused volumes and cache, etc.

List of all available commands you can see by typing

```
make help
```

> To understand how make works see Makefile

## Test

- You can test app by yourself using [Swagger](http://localhost:1340/api)

- Or run E2E tests using following command

```
make test-e2e
```
