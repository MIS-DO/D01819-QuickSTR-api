# QuickSTR-API

## Overview
This is an API for the ascending order of a set of numbers for stress analysis and benchmarking.

This server was scaffolded with [oas-generator](https://github.com/isa-group/oas-generator); quick-sort algorithm is taken from [quick-srt](https://www.npmjs.com/package/quick-sort.js).

There is a **on-line demo** deployment available at: https://do1819-quickstr-api.herokuapp.com


### Running the API using docker

If you have docker, you can use it out of the box: `docker run -p 4000:80 -d franciscatalin/quickstr-api` to run the container at port `4000`


### Running the API using node

To run the server, just use:

```
npm install 
npm start
```

Then, if running in localhost, you can check the swagger UI doc portal in: `http://localhost:8080/`

### Using the API

#### Stress request

In order to send a request, either GET or POST can be used:

- `POST /api/v1/stress` 
```json
{
	"problem": "quickstr",
	"parameters": [
		{
			"id": "quantityNumber",
			"value": 40
		},
		{
			"id": "maxSize",
			"value": 3000
		}
	],
	"config": {
		"maxMemory": -1,
		"maxTime": -1
	}
}
```

- `GET /api/v1/stress/40/300` would generate and solve an ascending order problem of a set of 40 random numbers that have a range between 1 and 3000.

#### Quickstr problem solving

In order to solve a given set problem you should send a POST to `/api/v1/problems` endpoint: 

`POST /api/v1/problems`
```json
{
  "id": "quickstr",
  "problem": {
    "unsortedArray": [742,55,76,234,34,3,543,432,765,435]
  }
}
```
will get: 
```json
{
  "id": "quickstr",
  "problem": {
    "unsortedArray": [
      742,
      55,
      76,
      234,
      34,
      3,
      543,
      432,
      765,
      435
    ]
  },
  "solution": {
    "sortedArray": [
      3,
      34,
      55,
      76,
      234,
      432,
      435,
      543,
      742,
      765
    ],
    "stats": {
      "solvingTime": 0.7018009996414185
    }
  }
}
```
****