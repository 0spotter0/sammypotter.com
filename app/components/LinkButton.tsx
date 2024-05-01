export default function LinkButton(props: { children: React.ReactNode }) {
  return (
    <div className='text-light flex w-fit items-center gap-4 rounded-lg bg-neutral-700 px-6 py-3 text-lg font-medium transition-transform duration-200 hover:scale-[103%]'>
      {props.children}
    </div>
  )
}
