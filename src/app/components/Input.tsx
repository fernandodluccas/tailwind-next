import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

function InputPrefix(props: InputPrefixProps) {
  return <div {...props}></div>
}

function InputControl(props: ComponentProps<'input'>) {
  return (
    <input
      className="min-w-0 border-0 bg-transparent p-0 text-zinc-900"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

function InputRoot(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    ></div>
  )
}

const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
}

export { Input }
