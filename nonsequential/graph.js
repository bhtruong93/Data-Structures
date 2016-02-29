function Graph() {
  const vertices = [];
  const adjList = {};

  const initializeStatus = () => {
    const status = {};
    for (var i = 0; i < vertices.length; i++) {
      status[vertices[i]] = "Not Visited";
    }
    return status;
  };

  this.addVertex = val => {
    vertices.push(val);
    adjList[val] = [];
  };

  this.addEdge = (first, second) => {
    adjList[first].push(second);
    adjList[second].push(first);
  };

  this.print = () => {
    var list = "";
    for(var k in adjList) {
      list += k + " -> ";
      for (var i = 0; i < adjList[k].length; i++) {
        list += adjList[k][i] + " ";
      }
      list += "\n";
    }
    return list;
  };

  /* The BFS algorithm will start traversing the graph from the first specifed vertex and will visit all its neighbors (adjacent vertices)
  first, as it is visiting each layer of the graph at a time. It uses a queue to keep track of the order which a vertex is visited.
  */
  this.bfs = (vertex, callback) => {
    "use strict";
    const queue = [],
          status = initializeStatus();

    status[vertex] = "Discovered";
    queue.push(vertex);

    while(queue.length !== 0) {
      let curr = queue.shift(),
          neighbors = adjList[curr];

      for (var i = 0; i < neighbors.length; i++) {
        if(status[neighbors[i]] == "Not Visited") {
          status[neighbors[i]] = "Discovered";
          queue.push(neighbors[i]);
        }
      }

      status[curr] = "Finished";

      if(callback) {
        callback(curr);
      }
    }
  };

  /* The DFS algorithm will start traversing the graph from the first specifed vertex and will visit all its neighbors (adjacent vertices)
  first, as it is visiting each layer of the graph at a time. It uses a queue to keep track of the order which a vertex is visited.
  */
  this.bfs = (vertex, callback) => {
    "use strict";
    const queue = [],
          status = initializeStatus();

    status[vertex] = "Discovered";
    queue.push(vertex);

    while(queue.length !== 0) {
      let curr = queue.shift(),
          neighbors = adjList[curr];

      for (var i = 0; i < neighbors.length; i++) {
        if(status[neighbors[i]] == "Not Visited") {
          status[neighbors[i]] = "Discovered";
          queue.push(neighbors[i]);
        }
      }

      status[curr] = "Finished";

      if(callback) {
        callback(curr);
      }
    }
  };

}

 //
 // var graph = new Graph();
 //   var myVertices = ['A','B','C','D','E','F','G','H','I']; //{7}
 //   for (var i=0; i<myVertices.length; i++){ //{8}
 //       graph.addVertex(myVertices[i]);
 //   }
 //   graph.addEdge('A', 'B'); //{9}
 //   graph.addEdge('A', 'C');
 //   graph.addEdge('A', 'D');
 //   graph.addEdge('C', 'D');
 //   graph.addEdge('C', 'G');
 //   graph.addEdge('D', 'G');
 //   graph.addEdge('D', 'H');
 //   graph.addEdge('B', 'E');
 //   graph.addEdge('B', 'F');
 //   graph.addEdge('E', 'I');
 //
 //   function printNode(value){ //{16}
 //       console.log('Visited vertex: ' + value); //{17}
 //   }
 //   graph.bfs(myVertices[0], printNode); //{18}
