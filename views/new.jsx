import DefaultLayout from "./layout/layout";

const React = require("react");

const New = ({ logs }) => {
  return (
    <DefaultLayout>
      <h1 className='font-bold text-3xl p-4'>Create New Log</h1>
      <form
        action='/api/logs'
        method='post'
        className='border-2 p-4 rounded w-[600px]'
      >
        <section className='mb-4'>
          <h2 className='font-bold text-xl'>Title</h2>
          <input
            name='title'
            className='border-2 border-gray-300 focus:border-gray-500 outline-none rounded w-full p-2'
            type='text'
          />
        </section>

        <section className='mb-4'>
          <h2 className='font-bold text-xl'>Entry</h2>
          <input
            name='entry'
            className='border-2 border-gray-300 focus:border-gray-500 outline-none rounded w-full p-2'
            type='text'
          />
        </section>

        <section className='flex gap-2'>
          <input
            name='submit'
            value='Submit'
            className='border-2 border-gray-300 focus:border-gray-500 cursor-pointer outline-none hover:bg-black hover:text-white font-bold rounded p-2'
            type='submit'
          />

          <a href='/logs'>
            <input
              type='button'
              value='Back'
              className='border-2 border-gray-300 cursor-pointer outline-none hover:bg-black hover:text-white font-bold rounded p-2'
            />
          </a>
        </section>
      </form>
    </DefaultLayout>
  );
};

export default New;
