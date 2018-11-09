An object of XMLHttpRequest is used for asynchronous communication between client and server.

It performs following operations:

1. data from the client in the background

2.Receives the data from the server

3.Updates the webpage without reloading it.

## Properties of XMLHttpRequest object
The common properties of XMLHttpRequest object are as follows:

| Property | Description |
| -------- | ----------- |
| onReadyStateChange | It is called whenever readystate attribute changes. It must not be used with synchronous requests. 
| readyState | represents the state of the request. It ranges from 0 to 4. 0 UNOPENED	open() is not called. 1	OPENED	open is called but send() is not called. 2	HEADERS_RECEIVED	send() is called, and headers and status are available. 3	LOADING	Downloading data; responseText holds the data. 4	DONE	The operation is completed fully. | 
| reponseText | returns response as text. |
| responseXML |	returns response as XML |

## Methods of XMLHttpRequest object
The important methods of XMLHttpRequest object are as follows:

| Method | Description |
| ------ | ----------- | 
| void open(method, URL) | opens the request specifying get or post method and url. |
| void open(method, URL, async) | same as above but specifies asynchronous or not. |
| void open(method, URL, async, username, password) | same as above but specifies username and password. |
| void send() | sends get request. |
| void send(string) | send post request. |
| setRequestHeader(header,value) | it adds request headers. |
