import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="">
      <header className="max-w-2xl">
        {/* <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
          {title}
        </h1> */}
        {/* <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p> */}
      </header>
      {children && <div className="mt-2 sm:mt-4">{children}</div>}
    </Container>
  )
}
