# [@eneto/agenda](https://medium.com/@enetoOlveda)
fullstack hello world type of project

The whole project is divided into 4 different directories
* client
* rest-api
* postgres
* nginx

## client
this is where we are going to spend must of the time.
```shell
$ cd client && npm start
```
## rest-api
Poor implementation of a restfull api.

* GET    /api/v1/users
* POST   /api/v1/users
* DELETE /api/v1/users/:id
* GET    /api/v1/lists
* POST   /api/v1/lists
* DELETE /api/v1/lists/:id

AS you might noticed it does not comes with any update method, it could be your Homework if you want.

to run the back all you need to do is:
```shell
$ cd rest-api && npm start
```
### NOTE: before you try to run the api, make sure postgres db is up and running.

## postgres

To run the db all you need to do is.
```shell
$ cd postgres && docker-compose up --build -d
```
if by any means you found a folder call `postgres-data` after you finish cloning the repo it might causes you some trouble. just remove it
```shell
$ rm -rf ./postgres/postgres-data
```

## nginx
To be honest with you, I don't think this shit works, so dont try to run it.
