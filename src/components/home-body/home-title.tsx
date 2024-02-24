"use client";

function HomeTitle() {
  return (
    <div className="flex justify-center flex-col gap-3 py-[3vw] px-[3vw] items-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl items-center flex justify-center">
        Experimente agora mesmo!
      </h1>
      <p className="text-l text-muted-foreground items-center flex justify-center">
        Escolha uma das opções abaixo e veja tudo que a UFBA pode te oferecer,
        com transparência e sem burocracia.
      </p>
    </div>
  );
}

export default HomeTitle;
