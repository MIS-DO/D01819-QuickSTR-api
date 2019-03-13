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

In order to send a request, either GET 
- `GET /api/v1/stress/40/300` would generate and solve an ascending order problem of a set of 40 random numbers that have a range between 1 and 3000.

```json
{
  "problem": "quickstr",
  "parameters": [
    {
      "id": "quantityNumber",
      "value": 20
    },
    {
      "id": "maxSize",
      "value": 200
    }
  ],
  "config": {
    "maxMemory": -1,
    "maxTime": -1
  },
  "info": {
    "initialMemory": 18.672,
    "heapStats": {
      "total_heap_size": 24.145,
      "total_heap_size_executable": 3,
      "total_physical_size": 24.145,
      "total_available_size": 1434.907,
      "used_heap_size": 18.674,
      "heap_size_limit": 1456.175,
      "malloced_memory": 0.008,
      "peak_malloced_memory": 3.134,
      "does_zap_garbage": 0
    }
  },
  "result": {
    "stages": [
      {
        "id": "problemGeneration",
        "duration": 0.426,
        "memory": 0.034
      },
      {
        "id": "problemSolving",
        "duration": 1.122,
        "memory": 0.262
      }
    ],
    "total": {
      "duration": 2.443,
      "memory": 0.296
    }
  }
}
```



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
- `GET /api/v1/stress/info` would generate and solve an ascending order problem of a set of 40 random numbers that have a range between 1 and 3000.

```json

{
  "cpuUsage": 0.16380383370674634,
  "cpuFree": 0.864516129032258,
  "cpuCount": 4,
  "memInfo": {
    "total": 7619.277,
    "free": 1077.898,
    "used": 6541.379,
    "active": 6541.379,
    "available": 1077.898,
    "buffcache": 0,
    "swaptotal": 7168,
    "swapused": 544,
    "swapfree": 6624
  },
  "freemem": 1079.277,
  "totalmem": 7619.277,
  "freememPercentage": 0.14165088039948015,
  "cpuInfo": {
    "manufacturer": "Intel®",
    "brand": "Core™ i7-6500U",
    "vendor": "GenuineIntel",
    "family": "6",
    "model": "78",
    "stepping": "3",
    "revision": "19971",
    "voltage": "",
    "speed": "2.50",
    "speedmin": "",
    "speedmax": "2.59",
    "cores": 4,
    "physicalCores": 2,
    "processors": 1,
    "socket": "Other",
    "cache": {
      "l1d": 64,
      "l1i": 64,
      "l2": 524288,
      "l3": 4194304
    }
  },
  "sysUptime": 49758,
  "processUptime": 172.789,
  "loadavgLast1Minute": 0,
  "loadavgLast5Minutes": 0,
  "loadavgLast15Minutes": 0,
  "platform": "win32"
}
```

****