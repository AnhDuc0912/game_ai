export function AStar(grid, startNode, finishNode) {
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
      ];
      // Hàm sắp xếp thứ tự duyệt của neighbors sao cho duyệt nút có f là nhỏ nhất (f = h(n)+g(n))
      neighbors.sort((neighborA, neighborB) => {
        //H(n) được tính bằng khoảng cách ngắn nhất từ nút hiện tại đến nút cần tìm
        //G(n) được tính bằng khoảng cách từ nút bắt đầu đến nút hiện tại
        const hNA = Math.sqrt(Math.pow(neighborA.row - finishNode.row, 2) + Math.pow(neighborA.col - finishNode.col, 2));
        const gNA = Math.sqrt(Math.pow(neighborA.row - startNode.row, 2) + Math.pow(neighborA.col - startNode.col, 2));
        const hNB = Math.sqrt(Math.pow(neighborB.row - finishNode.row, 2) + Math.pow(neighborB.col - finishNode.col, 2));
        const gNB = Math.sqrt(Math.pow(neighborB.row - startNode.row, 2) + Math.pow(neighborB.col - startNode.col, 2));

        const fA = hNA + gNA;
        const fB = hNB + gNB;

        //Sắp xếp theo h(n) tăng dần
        return fB - fA;
      });
      for (const neighbor of neighbors) { //Lấy lần lược từng node kề với node hiện tại, lần lượt theo thứ tự tăng dần của H(n)
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
          //bằng cách duyệt từ end về start
          stack.push(grid[newRow][newCol]); //thêm vào ngăn xếp
        }
      }
    }
  }
  return visitedNodesInOrder; //trả về danh sách các node đã thăm theo thứ tự.....
}