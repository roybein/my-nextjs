"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addNode } from "@/store/nodes"

const AddNode = () => {
  return (
    <div className="flex flex-col items-center justify-center"> 
      <AddNodeForm />
    </div>
  )
}

const FormSchema = z.object({
  id: z.string().describe("The id of the node."),
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  key: z.string(),
})

const AddNodeForm = () => {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: "",
      name: "",
      key: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('onSubmit', data)

    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })

   addNode(data) 
  }

  return (
    <Form {...form}>
      <form
        className="w-2/3 space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {
          FormSchema.keyof().options.map((key) => {
            const { description} = FormSchema.shape[key]

            return (
              <FormField
                key={key}
                control={form.control}
                name={key}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{key}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      {description}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )
          })
        }
        {/* <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="input node name" {...field} />
              </FormControl>
              <FormDescription>
                This is the name of the node.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default AddNode;
