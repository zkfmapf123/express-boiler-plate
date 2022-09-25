get-home:
	curl -X GET http://localhost:8080/v1

get-ex:
	curl -X GET http://localhost:8080/v1/ex/get

mysql-up:
	docker run --name mysql-local -p 3306:3306/tcp -e MYSQL_ROOT_PASSWORD=test -d mysql:8
