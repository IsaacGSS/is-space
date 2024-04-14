import Link from 'next/link'

export default function NodtionTiptap() {
  return (
    <>
      <section className='w-full max-h-screen flex flex-col bg-zinc-950 gap-2'>
        <section className='h-20 w-full text-neutral-50 inline-flex items-center pl-5'>
          <span className='text-2xl font-inter'>Project Kabum</span>
        </section>

        <section className='h-4/5 pl-5 pt-5 bg-neutral-100 w-full  overflow-hidden'>
          <div className='h-10 md:w-2/3 w-full md:p-0 px-5  rounded-full shadow-xl drop-shadow-md shadow-zinc-950/10  border border-zinc-950 '></div>
          <section className='h-full mt-2 p-5 pb-14 flex flex-wrap items-end gap-10 overflow-y-scroll'>
            {Array.from({ length: 20 }).map((value, index) => (
              <Link key={index} href={'/notion/edit'}>
                <div className='size-56 border border-zinc-900 rounded-md shadow-md shadow-black/20 overflow-hidden p-3 text-justify '>
                  <span className='text-lg font-medium capitalize'>Title</span>
                  <br />
                  <span className='text-sm align-middle indent-3'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione asperiores repudiandae earum autem nesciunt
                    exercitationem! Molestiae, harum quia iste eaque neque nisi
                    alias voluptate, obcaecati pariatur corporis soluta,
                    distinctio iusto. Neque ut corrupti iure in, dignissimos id
                    quia vitae. Dolorum ex ipsam sit in nemo ad magnam quasi
                    incidunt consequuntur neque. Veniam hic accusamus mollitia
                    at. Odit eum possimus dolorem.
                  </span>
                </div>
              </Link>
            ))}
          </section>
        </section>
      </section>
    </>
  )
}
