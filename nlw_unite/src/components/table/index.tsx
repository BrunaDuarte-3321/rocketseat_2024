import { ComponentProps } from 'react'

interface ITable extends ComponentProps<'table'> {}
export function Table({ ...props }: ITable) {
  return (
    <div className="border border-white/10 rounded-lg">
      <table className="w-full" {...props} />
    </div>
  )
}
