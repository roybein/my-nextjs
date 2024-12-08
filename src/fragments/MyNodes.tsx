'use client';

import { useStoreNodes, fetchNodes } from "@/store/nodes"
import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const MyNodes = () => {
  const storeNodes = useStoreNodes()

  useEffect(() => {
    fetchNodes();
  }, [])

  const { nodeList } = storeNodes.get()

  console.log(nodeList)

  return (
    <div className="flex flex-wrap gap-4">
      {
        nodeList.map((node, index) => (
          <Card key={node.id} >
            <CardHeader>
              <CardTitle>{node.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div>
                  {node.id}
                </div>
                <div>
                  {node.key}
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      }
    </div>
  )
}

export default MyNodes;
