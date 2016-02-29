function Graph() {
  const vertices = [];
  const adjList = {};

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

}
