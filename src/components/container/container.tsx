import cx from 'clsx'
import { forwardRef } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

const OuterContainer = forwardRef<HTMLDivElement, Props>(
  function OuterContainer({ className, children, ...props }: Props, ref) {
    return (
      <div ref={ref} className={cx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    )
  }
)

const InnerContainer = forwardRef<HTMLDivElement, Props>(
  function InnerContainer({ className, children, ...props }: Props, ref) {
    return (
      <div
        ref={ref}
        className={cx('relative px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    )
  }
)

const Container = forwardRef<HTMLDivElement, Props>(function Container(
  { children, ...props }: Props,
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

export { OuterContainer, InnerContainer, Container }
