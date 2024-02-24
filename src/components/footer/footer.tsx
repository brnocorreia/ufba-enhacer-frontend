"use client";

function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-header">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-20 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Desenvolvido por{" "}
          <a
            href="https://github.com/brnocorreia"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Bruno Correia
          </a>
          . Open source, disponível no{" "}
          <a
            href="https://github.com/shadcn-ui/ui"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
