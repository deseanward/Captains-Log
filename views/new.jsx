import DefaultLayout from "./layout/layout";

const React = require("react");

const New = ({ logs }) => {
  return (
    <DefaultLayout>
      <div className='w-fit m-auto flex flex-col items-center shadow-lg shadow-[#09507C] p-4'>
        <h2 className='font-bold text-2xl self-start pb-4'>Create New Log</h2>
        <form
          action='/api/logs'
          method='post'
          className='p-4 rounded w-[600px]'
        >
          <section className='mb-4'>
            <h2 className='font-bold'>Title</h2>
            <input
              name='title'
              className='border-2 border-gray-300 focus:border-gray-500 outline-none rounded w-full p-2'
              type='text'
            />
          </section>

          <section className='mb-8'>
            <h2 className='font-bold'>Entry</h2>
            <textarea
              name='entry'
              rows={5}
              className='resize-none border-2 border-gray-300 focus:border-gray-500 outline-none rounded w-full p-2'
              type='text'
            />
          </section>

          <section className='flex gap-2 border-t-2 pt-4'>
            <input
              name='submit'
              value='Create'
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
      </div>
    </DefaultLayout>
  );
};

export default New;
