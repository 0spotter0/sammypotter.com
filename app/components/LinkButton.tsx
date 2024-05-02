export default function LinkButton(props: { children: React.ReactNode }) {
  return (
    <div className='text-highlight text-highlight flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-neutral-700 px-4 py-2 text-lg font-medium transition-transform duration-200 hover:scale-[103%]'>
      {props.children}
    </div>
  )
}
