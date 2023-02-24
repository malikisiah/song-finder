export default function Header() {
  return (
    <div className='hero   h-96 bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img
          src='https://w.wallhaven.cc/full/43/wallhaven-43mgyn.jpg'
          className='max-w-sm rounded-lg shadow-2xl ml-16'
        />
        <div>
          <h1 className='text-5xl font-bold'>Song Search</h1>
          <p className='py-6'>Select a genre below to be reccomended a song!</p>
        </div>
      </div>
    </div>
  );
}
