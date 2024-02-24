"use client";

import {
  ArrowRightIcon,
  BookmarkIcon,
  CalendarIcon,
  CheckIcon,
  HomeIcon,
  LapTimerIcon,
  LetterCaseCapitalizeIcon,
  Link2Icon,
  PersonIcon,
  QuestionMarkIcon,
  ReaderIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { Badge } from "../ui/badge";

function HomeCards() {
  return (
    <div className="w-full h-full items-center justify-center grid md:grid-cols-3 gap-4 px-[3vw] pb-[3vw]">
      <Card className="flex-col transition-all ease-in-out duration-200 hover:bg-header">
        <a href="/" className="w-full h-full p-3">
          <CardHeader>
            <div className="flex items-center gap-5">
              <CardTitle>Disciplinas</CardTitle>
              <Badge className="bg-green-700">Live</Badge>
            </div>
            <CardDescription>
              Todas as informações de todas as disciplinas cadastradas no SIAC.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <ListIconItem
              title={"Código"}
              text={"O que é ADM202? E MATA45?"}
              icon={LetterCaseCapitalizeIcon}
            ></ListIconItem>
            <ListIconItem
              title={"Carga Horária"}
              text={"Quantas horas são necessárias?"}
              icon={LapTimerIcon}
            ></ListIconItem>
            <ListIconItem
              title={"Ementa e Conteúdo"}
              text={"O que vou aprender?"}
              icon={ReaderIcon}
            ></ListIconItem>
            <ListIconItem
              title={"Bibliografia"}
              text={"Onde encontro o que vou aprender?"}
              icon={BookmarkIcon}
            ></ListIconItem>
            <ListIconItem
              title={"Departamento"}
              text={"Quem é o responsável pela matéria?"}
              icon={HomeIcon}
            ></ListIconItem>
            <div></div>
          </CardContent>
        </a>
      </Card>
      <Card className="flex-col transition-all ease-in-out duration-200 hover:bg-header">
        <a href="/" className="w-full h-full p-3">
          <CardHeader>
            <div className="flex items-center gap-5">
              <CardTitle>Cursos</CardTitle>
              <Badge className="bg-red-400">Em breve</Badge>
            </div>
            <CardDescription>
              Dúvida sobre algum curso da UFBA? Tudo sobre seu atual ou futuro
              curso aqui.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <ListIconItem
              title={"Disciplinas"}
              text={"Tanto obrigatórias e optativas!"}
              icon={LetterCaseCapitalizeIcon}
            ></ListIconItem>
            <ListIconItem
              title={"Carga Horária"}
              text={"Quantas horas são necessárias?"}
              icon={LapTimerIcon}
            ></ListIconItem>
            <ListIconItem
              title={"Duração"}
              text={"Quantos semestres leva?"}
              icon={CalendarIcon}
            ></ListIconItem>
            <ListIconItem
              title={"Descrição profissional"}
              text={"O que serei quando formar?"}
              icon={PersonIcon}
            ></ListIconItem>
            <ListIconItem
              title={"Departamento"}
              text={"Endereço, coordenador e links úteis..."}
              icon={HomeIcon}
            ></ListIconItem>
            <div></div>
          </CardContent>
        </a>
      </Card>
      <Card className="flex-col transition-all ease-in-out duration-200 hover:bg-header">
        <a href="/" className="w-full h-full p-3">
          <CardHeader>
            <div className="flex items-center gap-5">
              <CardTitle>Comunidade</CardTitle>
              <Badge className="bg-red-400">Em breve</Badge>
            </div>
            <CardDescription>
              Que tal um upgrade no famoso grupo {'"'}Não vá que é barril{'"'}?
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <ListIconItem
              title={"Avaliações"}
              text={"O que os alunos acham?"}
              icon={StarIcon}
            ></ListIconItem>
            <ListIconItem
              title={"Materiais de estudo"}
              text={"Compartilhe o que você aprendeu!"}
              icon={LapTimerIcon}
            ></ListIconItem>
            <ListIconItem
              title={"Suporte aos calouros"}
              text={"Todas as manhas da universidade"}
              icon={ReaderIcon}
            ></ListIconItem>
            <ListIconItem
              title={"FAQ e dúvidas gerais"}
              text={"Pergunte a quem sabe."}
              icon={QuestionMarkIcon}
            ></ListIconItem>
            <ListIconItem
              title={"Crie network"}
              text={"A UFBA é melhor em grupo!"}
              icon={Link2Icon}
            ></ListIconItem>
            <div></div>
          </CardContent>
        </a>
      </Card>
    </div>
  );
}

const ListIconItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    text: string;
    icon?: React.ForwardRefExoticComponent<
      IconProps & React.RefAttributes<SVGSVGElement>
    >;
  }
>(({ className, title, text, icon: Icon, children, ...props }, ref) => {
  return (
    <div className=" flex items-center space-x-4 rounded-md border-2 p-2">
      {Icon && <Icon />}
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
});
ListIconItem.displayName = "ListIconItem";

export default HomeCards;
