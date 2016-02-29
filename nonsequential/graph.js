"use strict";

function Graph() {
  const vertices = [];
  const adjList = {};

  const initializeStatus = (val) => {
    const status = {};
    for (var i = 0; i < vertices.length; i++) {
      status[vertices[i]] = val;
    }
    return status;
  };

  // Helper function for DFS search
  const visitDFS = (vertex, status, callback) => {
    let neighbors = adjList[vertex];

    status[vertex] = "Discovered";
    if(!!callback){
      callback(vertex);
    }


    for (var i = 0; i < neighbors.length; i++) {
      if(status[neighbors[i]] == "Not Visited") {
        visitDFS(neighbors[i], status, callback);
      }
    }

    status[vertex] = "Finished";
    return;
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

  This BFS method will take a callback and use the callback in BFS fashion, it will return a predecessor object, which shows the predecessor for each vertex.
  */
  this.bfs = (vertex, callback) => {
    "use strict";
    const queue = [],
          status = initializeStatus("Not Visited"),
          distance = initializeStatus(0),
          predecessor = initializeStatus(null);

    status[vertex] = "Discovered";
    queue.push(vertex);

    while(queue.length !== 0) {
      let curr = queue.shift(),
          neighbors = adjList[curr];

      for (var i = 0; i < neighbors.length; i++) {
        if(status[neighbors[i]] == "Not Visited") {

          // For BFS
          status[neighbors[i]] = "Discovered";
          queue.push(neighbors[i]);

          // For finding distance
          distance[neighbors[i]] = distance[curr] + 1;
          predecessor[neighbors[i]] = curr;

        }
      }

      status[curr] = "Finished";

      if(callback) {
        callback(curr);
      }
    }
    return predecessor;
  };

  /*The DFS algorithm will start traversing the graph from the  rst speci ed vertex and will follow
  a path until the last vertex of this path is visited, and then will backtrack and then follow the next path.
  */
  this.dfs = (callback) => {
    const status = initializeStatus("Not Visited");

    for (var i = 0; i < vertices.length; i++) {
      if(status[vertices[i]] == "Not Visited") {
        visitDFS(vertices[i], status, callback);
      }
    }
  };
}


 var graph = new Graph();
   var myVertices = ['A','B','C','D','E','F','G','H','I']; //{7}
   for (var i=0; i<myVertices.length; i++){ //{8}
       graph.addVertex(myVertices[i]);
   }
   graph.addEdge('A', 'B'); //{9}
   graph.addEdge('A', 'C');
   graph.addEdge('A', 'D');
   graph.addEdge('C', 'D');
   graph.addEdge('C', 'G');
   graph.addEdge('D', 'G');
   graph.addEdge('D', 'H');
   graph.addEdge('B', 'E');
   graph.addEdge('B', 'F');
   graph.addEdge('E', 'I');

   graph.dfs(function(vertex) {
     console.log(vertex);
   });


// Map the distance using intermediate vertices between each vertex using BFS
const first = myVertices[0],
      predecessor = graph.bfs(first);

let myMap = "";

for (let i = 1; i < myVertices.length; i++) {
  let temp = myVertices[i],
      stack = [];

  while(temp != first) {
      stack.push(temp);
      temp = predecessor[temp];
  }

  myMap += first;
  while(stack.length > 0) {
    myMap += " -> " + stack.pop();
  }
  myMap += "\n";
 }
