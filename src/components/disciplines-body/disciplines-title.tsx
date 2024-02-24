"use client";

function DisciplinesTitle() {
  return (
    <div className="flex justify-center flex-col gap-3 py-[1vw] px-[1vw] items-center">
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl items-center flex justify-center">
        Todas as disciplinas cadastradas na UFBA disponíveis!
      </h1>
      <p className="text-l text-muted-foreground items-center flex justify-center">
        {
          "Escolha uma das opções (código, nome ou departamento) e busque todas as informações publicamente!"
        }
      </p>
    </div>
  );
}

export default DisciplinesTitle;
