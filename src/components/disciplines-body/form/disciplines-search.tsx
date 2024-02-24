"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";

const formSchema = z.object({
  type: z.string({
    required_error: "Selecione um tipo de busca!",
  }),
  search: z.string().min(3, {
    message: "A busca deve ter ao menos 3 caracteres.",
  }),
});

export default function DisciplinesSearch() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "name",
      search: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-top flex-row justify-center px-[4vw] py-[4vw] gap-5 "
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="w-full gap-1 flex flex-col max-w-[15vw]">
              <Select
                defaultValue={field.value}
                onValueChange={field.onChange}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="flex items-center justify-between pl-[2vw] border-sm border-black bg-white font-semibold">
                    <SelectValue placeholder={field.value} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="name">Nome</SelectItem>
                  <SelectItem value="code">Código</SelectItem>
                  <SelectItem value="department">Departamento</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full gap-1 flex flex-col">
              <FormControl>
                <Input
                  className={`flex items-center justify-between pl-[2vw] border-sm bg-white ${
                    form.formState.errors.search
                      ? "border-red-500"
                      : "border-black"
                  }`}
                  placeholder="Ex: Cálculo I, MATA37, Administração..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button type="submit">
          Procurar
          <MagnifyingGlassIcon className="ml-2"></MagnifyingGlassIcon>
        </Button>
        <Button
          type="button"
          onClick={() => {
            form.reset();
            form.clearErrors();
          }}
          className="bg-slate-600"
        >
          Limpar
        </Button>
      </form>
    </Form>
  );
}
