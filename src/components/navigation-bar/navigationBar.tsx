import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import Image from "next/image";
import github from "../../assets/images/svg/github-logo.svg";
import discord from "../../assets/images/svg/discord-logo.svg";
import email from "../../assets/images/svg/email-logo.svg";

function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="bg-header">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-header font-semibold">
            o que é?
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md flex justify-center">
                    <div className="mb-2 mt-4 text-lg font-medium">
                      ufba/enhacer
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      O ufba/enhacer surgiu com o intuito de transparecer para a
                      comunidade UFBA tudo aquilo que fica escondido pela
                      péssima UX/UI dos sistemas internos
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem title="Disciplinas" badge={"live"}>
                Carga horária, ementa, bibliografia e muito mais.
              </ListItem>
              <ListItem title="Cursos" badge={"soon"}>
                CH, disciplinas obrigatórias e optativas, professores, duração e
                muito mais.
              </ListItem>
              <ListItem title="Turmas" badge={"soon"}>
                Professor, local, feedback de outros alunos e muito mais.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-header font-semibold">
            contribuição
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md flex justify-center">
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Da: comunidade Para: comunidade
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      A ideia é que o ufba/enhacer possa, ao longo do tempo, se
                      retroalimentar, contando com a participação de qualquer um
                      que deseje contribuir. Entre em contato através dos canais
                      ao lado!
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListIconItem title="Github" icon={github}>
                Pull Requests, bug fixes, issues e etc.
              </ListIconItem>
              <ListIconItem title="Discord" icon={discord}>
                Feedbacks, sugestões e interação com a comunidade.
              </ListIconItem>
              <ListIconItem title="Email" icon={email}>
                Para contatos mais formais.
              </ListIconItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    badge?: React.ReactNode;
  }
>(({ className, title, badge, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium leading-none">{title}</div>
            {badge && <Badge variant={"secondary"}>{badge}</Badge>}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const ListIconItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    icon?: string;
  }
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && (
              <div>
                <Image src={icon} alt="UFBA Enhacer" width={20} height={20} />
              </div>
            )}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListIconItem.displayName = "ListIconItem";

export default NavigationBar;
