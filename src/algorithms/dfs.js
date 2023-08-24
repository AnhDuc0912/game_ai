// Returns all nodes in the order in which they were visited.
// Make nodes point back to their previous node so that we can compute the shortest path
// by backtracking from the finish node.


export function dfs(grid, startNode, finishNode) {
  //const startTime = performance.now();
  const visitedNodesInOrder = []; //danh sách các node đã thăm
  const stack = [];
  stack.push(startNode);

  while (stack.length !== 0) { //Chạy đến hết stack
    const currentNode = stack.pop(); //Lấy ra node hiện tại
    if (currentNode === finishNode) return visitedNodesInOrder; //return khi tìm thấy node end
    if (!currentNode.isWall && (!currentNode.isVisited)) { //Node hiện tại không phải là tường và là node chưa thăm
      currentNode.isVisited = true; //đánh dấu đã thăm
      visitedNodesInOrder.push(currentNode); //thêm vào danh sách các node đã thăm
      const {
        row,
        col
      } = currentNode; //lấy hàng và cột của node hiện tại

      const neighbors = [ //Các code kề với nó trên ma trận 
        {
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
      ]; //Bị ngược ???

      for (const neighbor of neighbors) { //Lấy lần lược từng node kề với node hiện tại
        const {
          row: newRow,
          col: newCol
        } = neighbor;
        if ( //Thỏa điều kiện là node nằm trong ma trận và chưa được thăm
          newRow >= 0 && newRow < grid.length &&
          newCol >= 0 && newCol < grid[0].length &&
          !grid[newRow][newCol].isVisited
        ) {
          grid[newRow][newCol].previousNode = currentNode; //lưu node phía trước của node đang đứng
          //là node hiên tại phía bên trên vòng lặp, dùng để tìm đường đến node end (đường màu vàng)
          stack.push(grid[newRow][newCol]); //thêm vào ngăn xếp
        }
      }
    }
  }
  //   const endTime = performance.now();
  // const executionTime = endTime - startTime; // Thời gian chạy thuật toán trong milliseconds
  // let time=document.getElementById("time");
  // time.innerHTML=executionTime;
  return visitedNodesInOrder; //trả về danh sách các node đã thăm theo thứ tự.....
}