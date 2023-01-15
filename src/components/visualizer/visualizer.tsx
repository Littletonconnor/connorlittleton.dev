import clsx from 'clsx'
import GridPattern from '../grid_pattern/grid_pattern'

function Visualizer({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        'relative w-full overflow-hidden rounded-md border border-black/10 bg-zinc-50',
        className
      )}
    >
      {children}
    </div>
  )
}

Visualizer.Controls = function Controls({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        className,
        'justify-space-between flex border-t border-black/10 bg-zinc-50 p-2'
      )}
    >
      {children}
    </div>
  )
}

Visualizer.Content = function Content({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={clsx('relative w-full rounded-none border-none', className)}
    >
      <Pattern />
      {children}
    </div>
  )
}

function Pattern() {
  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 [mask-image:linear-gradient(45deg,white,70%,transparent)]">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full fill-black/[0.04] stroke-black/10"
        />
      </div>
    </div>
  )
}

export default Visualizer
