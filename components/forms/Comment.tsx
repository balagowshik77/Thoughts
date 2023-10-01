"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,

} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentValidation } from "@/lib/validations/thread";
import * as z from "zod";
import { Input } from "../ui/input";
import { useRouter, usePathname } from "next/navigation";
import { addCommentToThread } from "@/lib/actions/thread.actions";
import Image from "next/image";

interface props{
    threadId:string,
    currentUserImg:string,
    currentUserId:string
}
const Comment = ({threadId,currentUserImg,currentUserId}:props) => {
    const pathname = usePathname();
  const router = useRouter();
  const form = useForm<z.infer<typeof CommentValidation>>({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread: "",
      
    },
  });

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    await addCommentToThread(threadId,values.thread, JSON.parse(currentUserId), pathname);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="comment-form"
      >
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex w-full items-center gap-3">
              <FormLabel>
                <Image src={currentUserImg} alt="profile-img" width={48} height={48} className="rounded-full object-cover"/>
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input
                  placeholder="comment..."
                  className="no-focus outlilne-none text-light-1"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="comment-form_btn">
          Reply
        </Button>
      </form>
    </Form>
  )
}

export default Comment