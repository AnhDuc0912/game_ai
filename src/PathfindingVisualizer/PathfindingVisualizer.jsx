import React, { Component } from "react";
import Node from "./Node/Node";
import { dijkstra } from "../algorithms/dijkstra";
import { AStar } from "../algorithms/aStar";
import { dfs } from "../algorithms/dfs";
import { bfs } from "../algorithms/bfs";
import CircularProgress from "@mui/material/CircularProgress";
import "./PathfindingVisualizer.css";
import { Stack } from "@mui/material";
import _ from "lodash";
import { greedySearch } from "../algorithms/greedySearch";
import sound from "../assets/loading.mp3";

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      START_NODE_ROW: 5,
      START_NODE_COL: 5,
      FINISH_NODE_ROW: 10,
      FINISH_NODE_COL: 30,
      mouseIsPressed: false,
      ROW_COUNT: 25,
      COLUMN_COUNT: 35,
      MOBILE_ROW_COUNT: 10,
      MOBILE_COLUMN_COUNT: 20,
      isRunning: false,
      isStartNode: false,
      isFinishNode: false,
      isWallNode: false, // xxxxxxx
      currRow: 0,
      currCol: 0,
      isDesktopView: true,

      executionTime: 0,
      resultLoading: true,
      shortestPath: [],
      algo: null,
      showDetail: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.toggleIsRunning = this.toggleIsRunning.bind(this);
  }

  componentDidMount() {
    const grid = this.getInitialGrid();
    this.setState({ grid });
  }

  toggleIsRunning() {
    this.setState({ isRunning: !this.state.isRunning });
  }

  toggleView() {
    if (!this.state.isRunning) {
      this.clearGrid();
      this.clearWalls();
      const isDesktopView = !this.state.isDesktopView;
      let grid;
      if (isDesktopView) {
        grid = this.getInitialGrid(
          this.state.ROW_COUNT,
          this.state.COLUMN_COUNT
        );
        this.setState({ isDesktopView, grid });
      } else {
        if (
          this.state.START_NODE_ROW > this.state.MOBILE_ROW_COUNT ||
          this.state.FINISH_NODE_ROW > this.state.MOBILE_ROW_COUNT ||
          this.state.START_NODE_COL > this.state.MOBILE_COLUMN_COUNT ||
          this.state.FINISH_NODE_COL > this.state.MOBILE_COLUMN_COUNT
        ) {
          alert("Start & Finish Nodes Must Be within 10 Rows x 20 Columns");
        } else {
          grid = this.getInitialGrid(
            this.state.MOBILE_ROW_COUNT,
            this.state.MOBILE_COLUMN_COUNT
          );
          this.setState({ isDesktopView, grid });
        }
      }
    }
  }

  getInitialGrid = (
    rowCount = this.state.ROW_COUNT,
    colCount = this.state.COLUMN_COUNT
  ) => {
    const initialGrid = [];
    for (let row = 0; row < rowCount; row++) {
      const currentRow = [];
      for (let col = 0; col < colCount; col++) {
        currentRow.push(this.createNode(row, col));
      }
      initialGrid.push(currentRow);
    }
    return initialGrid;
  };

  createNode = (row, col) => {
    return {
      row,
      col,
      isStart:
        row === this.state.START_NODE_ROW && col === this.state.START_NODE_COL,
      isFinish:
        row === this.state.FINISH_NODE_ROW &&
        col === this.state.FINISH_NODE_COL,
      distance: Infinity,
      distanceToFinishNode:
        Math.abs(this.state.FINISH_NODE_ROW - row) +
        Math.abs(this.state.FINISH_NODE_COL - col),
      isVisited: false,
      isWall: false,
      previousNode: null,
      isNode: true,
    };
  };

  handleMouseDown(row, col) {
    if (!this.state.isRunning) {
      if (this.isGridClear()) {
        if (
          document.getElementById(`node-${row}-${col}`).className ===
          "node node-start"
        ) {
          this.setState({
            mouseIsPressed: true,
            isStartNode: true,
            currRow: row,
            currCol: col,
          });
        } else if (
          document.getElementById(`node-${row}-${col}`).className ===
          "node node-finish"
        ) {
          this.setState({
            mouseIsPressed: true,
            isFinishNode: true,
            currRow: row,
            currCol: col,
          });
        } else {
          const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
          this.setState({
            grid: newGrid,
            mouseIsPressed: true,
            isWallNode: true,
            currRow: row,
            currCol: col,
          });
        }
      } else {
        this.clearGrid();
      }
    }
  }

  isGridClear() {
    for (const row of this.state.grid) {
      for (const node of row) {
        const nodeClassName = document.getElementById(
          `node-${node.row}-${node.col}`
        ).className;
        if (
          nodeClassName === "node node-visited" ||
          nodeClassName === "node node-shortest-path"
        ) {
          return false;
        }
      }
    }
    return true;
  }

  handleMouseEnter(row, col) {
    if (!this.state.isRunning) {
      if (this.state.mouseIsPressed) {
        const nodeClassName = document.getElementById(
          `node-${row}-${col}`
        ).className;
        if (this.state.isStartNode) {
          if (nodeClassName !== "node node-wall") {
            const prevStartNode =
              this.state.grid[this.state.currRow][this.state.currCol];
            prevStartNode.isStart = false;
            document.getElementById(
              `node-${this.state.currRow}-${this.state.currCol}`
            ).className = "node";

            this.setState({ currRow: row, currCol: col });
            const currStartNode = this.state.grid[row][col];
            currStartNode.isStart = true;
            document.getElementById(`node-${row}-${col}`).className =
              "node node-start";
          }
          this.setState({ START_NODE_ROW: row, START_NODE_COL: col });
        } else if (this.state.isFinishNode) {
          if (nodeClassName !== "node node-wall") {
            const prevFinishNode =
              this.state.grid[this.state.currRow][this.state.currCol];
            prevFinishNode.isFinish = false;
            document.getElementById(
              `node-${this.state.currRow}-${this.state.currCol}`
            ).className = "node";

            this.setState({ currRow: row, currCol: col });
            const currFinishNode = this.state.grid[row][col];
            currFinishNode.isFinish = true;
            document.getElementById(`node-${row}-${col}`).className =
              "node node-finish";
          }
          this.setState({ FINISH_NODE_ROW: row, FINISH_NODE_COL: col });
        } else if (this.state.isWallNode) {
          const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
          this.setState({ grid: newGrid });
        }
      }
    }
  }

  handleMouseUp(row, col) {
    if (!this.state.isRunning) {
      this.setState({ mouseIsPressed: false });
      if (this.state.isStartNode) {
        const isStartNode = !this.state.isStartNode;
        this.setState({
          isStartNode,
          START_NODE_ROW: row,
          START_NODE_COL: col,
        });
      } else if (this.state.isFinishNode) {
        const isFinishNode = !this.state.isFinishNode;
        this.setState({
          isFinishNode,
          FINISH_NODE_ROW: row,
          FINISH_NODE_COL: col,
        });
      }
      this.getInitialGrid();
    }
  }

  handleMouseLeave() {
    if (this.state.isStartNode) {
      const isStartNode = !this.state.isStartNode;
      this.setState({ isStartNode, mouseIsPressed: false });
    } else if (this.state.isFinishNode) {
      const isFinishNode = !this.state.isFinishNode;
      this.setState({ isFinishNode, mouseIsPressed: false });
    } else if (this.state.isWallNode) {
      const isWallNode = !this.state.isWallNode;
      this.setState({ isWallNode, mouseIsPressed: false });
      this.getInitialGrid();
    }
  }

  clearGrid() {
    if (!this.state.isRunning) {
      const newGrid = this.state.grid.slice();
      for (const row of newGrid) {
        for (const node of row) {
          let nodeClassName = document.getElementById(
            `node-${node.row}-${node.col}`
          ).className;
          if (
            nodeClassName !== "node node-start" &&
            nodeClassName !== "node node-finish" &&
            nodeClassName !== "node node-wall"
          ) {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              "node";
            node.isVisited = false;
            node.distance = Infinity;
            node.distanceToFinishNode =
              Math.abs(this.state.FINISH_NODE_ROW - node.row) +
              Math.abs(this.state.FINISH_NODE_COL - node.col);
          }
          if (nodeClassName === "node node-finish") {
            node.isVisited = false;
            node.distance = Infinity;
            node.distanceToFinishNode = 0;
          }
          if (nodeClassName === "node node-start") {
            node.isVisited = false;
            node.distance = Infinity;
            node.distanceToFinishNode =
              Math.abs(this.state.FINISH_NODE_ROW - node.row) +
              Math.abs(this.state.FINISH_NODE_COL - node.col);
            node.isStart = true;
            node.isWall = false;
            node.previousNode = null;
            node.isNode = true;
          }
        }
      }
    }
  }

  clearWalls() {
    if (!this.state.isRunning) {
      const newGrid = this.state.grid.slice();
      for (const row of newGrid) {
        for (const node of row) {
          let nodeClassName = document.getElementById(
            `node-${node.row}-${node.col}`
          ).className;
          if (nodeClassName === "node node-wall") {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              "node";
            node.isWall = false;
          }
        }
      }
    }
  }

  visualize(algo) {
    if (!this.state.isRunning) {
      this.setState({ isRunning: !this.state.isRunning });

      this.clearGrid();
      this.toggleIsRunning();
      const { grid } = this.state;
      const startNode =
        grid[this.state.START_NODE_ROW][this.state.START_NODE_COL];
      const finishNode =
        grid[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];
      let visitedNodesInOrder;
      const startTime = performance.now();
      let endTime;
      let executionTime;

      switch (algo) {
        case "Dijkstra":
          visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
          break;
        case "AStar":
          visitedNodesInOrder = AStar(grid, startNode, finishNode);
          break;
        case "BFS":
          visitedNodesInOrder = bfs(grid, startNode, finishNode);
          endTime = performance.now();
          executionTime = endTime - startTime;

          this.setState({ executionTime });
          console.log("executionTime", executionTime);
          break;
        case "DFS":
          visitedNodesInOrder = dfs(grid, startNode, finishNode);
          endTime = performance.now();
          executionTime = endTime - startTime;

          this.setState({ executionTime });
          console.log("executionTime", executionTime);
          break;
        case "ASTAR":
          visitedNodesInOrder = AStar(grid, startNode, finishNode);
          endTime = performance.now();
          executionTime = endTime - startTime;

          this.setState({ executionTime });
          console.log("executionTime", executionTime);
          break;
        case "GREEDY":
          visitedNodesInOrder = greedySearch(grid, startNode, finishNode);
          endTime = performance.now();
          executionTime = endTime - startTime;

          this.setState({ executionTime });
          console.log("executionTime", executionTime);
          break;
        default:
          break;
      }
      const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
      nodesInShortestPathOrder.push("end");

      this.setState({ shortestPath: nodesInShortestPathOrder });

      this.animate(visitedNodesInOrder, nodesInShortestPathOrder);

      this.setState({ isRunning: !this.state.isRunning, algo: algo });
    }
  }

  animate(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        const nodeClassName = document.getElementById(
          `node-${node.row}-${node.col}`
        ).className;
        if (
          nodeClassName !== "node node-start" &&
          nodeClassName !== "node node-finish"
        ) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-visited";
        }
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      if (nodesInShortestPathOrder[i] === "end") {
        setTimeout(() => {
          this.toggleIsRunning();
        }, i * 50);
      } else {
        setTimeout(() => {
          const node = nodesInShortestPathOrder[i];
          const nodeClassName = document.getElementById(
            `node-${node.row}-${node.col}`
          ).className;
          if (
            nodeClassName !== "node node-start" &&
            nodeClassName !== "node node-finish"
          ) {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              "node node-shortest-path";
          }
        }, i * 40);
      }
    }
  }

  render() {
    const { grid, mouseIsPressed } = this.state;
    return (
      <Stack spacing="20px" direction="row">
        <table
          className="grid-container"
          onMouseLeave={() => this.handleMouseLeave()}
        >
          <tbody className="grid">
            {grid.map((row, rowIdx) => {
              return (
                <tr key={rowIdx}>
                  {row.map((node, nodeIdx) => {
                    const { row, col, isFinish, isStart, isWall } = node;
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={isWall}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp(row, col)}
                        row={row}
                      ></Node>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="dashboard">
          <Stack direction="column" spacing="10px">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.clearGrid()}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => this.clearWalls()}
            >
              Xóa tường
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.visualize("BFS")}
            >
              Tìm theo BFS
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.visualize("DFS")}
            >
              Tìm theo DFS
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.visualize("ASTAR")}
            >
              Tìm theo A*
            </button>
          </Stack>

          <div className="result-info">
            <h4>Kết quả tìm kiếm</h4>
            {this.state.isRunning ? (
              <div className="loading-view">
                <CircularProgress color="inherit" />
                <audio style={{ visibility: "hidden" }} controls loop autoPlay>
                  {" "}
                  <source src={sound} type="audio/mpeg" />
                </audio>
              </div>
            ) : (
              !_.isEmpty(this.state.shortestPath) && (
                <div>
                  <p>
                    Thuận toán: <span>{this.state.algo}</span>
                  </p>
                  <p>
                    Thời gian thực thi:{" "}
                    <span>{this.state.executionTime.toFixed(10)} s</span>
                  </p>
                  <p>
                    Đường đi: <span>{this.state.shortestPath.length - 2}</span>
                  </p>
                  <button
                    onClick={() =>
                      this.setState({ showDetail: !this.state.showDetail })
                    }
                    className="btn btn-primary"
                  >
                    {!this.state.showDetail ? "Xem" : "Ẩn"} chi tiết đường đi
                  </button>
                  <div class="scroll-view">
                    <div class="content">
                      {this.state.showDetail &&
                        _.map(
                          this.state.shortestPath,
                          ({ col, row }, index) => {
                            if (col === undefined && row === undefined) {
                              return <p>Kết thúc</p>;
                            }
                            return (
                              <p className="node-path">
                                {index}: [{col}, {row}]
                              </p>
                            );
                          }
                        )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Stack>
    );
  }
}

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  if (!node.isStart && !node.isFinish && node.isNode) {
    const newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
  }
  return newGrid;
};

function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
