// Returns all nodes in the order in which they were visited.
// Make nodes point back to their previous node so that we can compute the shortest path
// by backtracking from the finish node.

export function bfs(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  const queue = [];
  queue.push(startNode);

  while (queue.length !== 0) {
    const currentNode = queue.shift();
    if (currentNode === finishNode) return visitedNodesInOrder;

    if (!currentNode.isWall && (currentNode.isStart || !currentNode.isVisited)) {
      currentNode.isVisited = true;
      visitedNodesInOrder.push(currentNode);
      const {
        col,
        row
      } = currentNode;

      const neighbors = [{
          row: row - 1,
          col: col
        }, // North
        {
          row: row + 1,
          col: col
        }, // South
        {
          row: row,
          col: col - 1
        }, // West
        {
          row: row,
          col: col + 1
        } // East
      ];

      for (const neighbor of neighbors) {
        const {
          row: newRow,
          col: newCol
        } = neighbor;
        if (
          newRow >= 0 && newRow < grid.length &&
          newCol >= 0 && newCol < grid[0].length &&
          !grid[newRow][newCol].isVisited
        ) {
          grid[newRow][newCol].previousNode = currentNode;
          queue.push(grid[newRow][newCol]);
        }
      }
    }
  }

  return visitedNodesInOrder;
}