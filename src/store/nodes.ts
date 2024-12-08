import { create } from 'zustand'

type Node = {
  id: string,
  name: string,
  key: string,
}

type StoreNodes = {
  nodeList: Array<Node>,
  get: () => StoreNodes
  set: (state: StoreNodes) => void
}

const nodes = [
  { id: '1', name: 'Node 1', key: '192.168.0.1' },
  { id: '2', name: 'Node 2', key: '192.168.0.2' },
  { id: '3', name: 'Node 3', key: '192.168.0.3' },
]

const useStoreNodes = create<StoreNodes>((set, get) => ({
  nodeList: nodes,
  get,
  set,
}))

async function fetchNodes() {
  // const response = await fetch('/api/nodes')
  // const data = await response.json()

  const data = {
    nodeList: JSON.parse(JSON.stringify(nodes)),
  }

  useStoreNodes.setState({
    nodeList: data.nodeList
  })
}

async function addNode(node: Node) {
  // TODO: Add node to API
  nodes.push(node)

  const nodeList = [
    ...useStoreNodes.getState().nodeList,
    node,
  ]

  useStoreNodes.setState({
    nodeList
  })
}

export {
  useStoreNodes,
  fetchNodes,
  addNode,
}
