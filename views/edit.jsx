const React = require("react");

import moment from "moment";
import DefaultLayout from "./layout/layout";

const Edit = ({ log }) => {
  return (
    <DefaultLayout>
      <div className='w-fit m-auto flex flex-col items-center shadow-lg shadow-[#09507C] p-4'>
        <h2 className='font-bold text-2xl self-start pb-4'>
          Edit Log{" "}
          <span className='text-sm font-normal text-[maroon]'>
            {" "}
            (updating - {moment().format("MMMM Do YYYY, h:mm:ss a")})
          </span>
        </h2>
        <form
          action={`/api/logs/${log._id}?_method=PUT`}
          method='post'
          className='p-4 rounded w-[600px]'
        >
          <section className='mb-4'>
            <h2 className='font-bold'>Title</h2>
            <input
              name='title'
              className='border-2 border-gray-300 focus:border-gray-500 outline-none rounded w-full p-2'
              type='text'
              value={log.title}
            />
          </section>

          <section className='mb-4'>
            <h2 className='font-bold'>Entry</h2>
            <textarea
              name='entry'
              className='resize-none border-2 border-gray-300 focus:border-gray-500 outline-none rounded w-full p-2'
              rows={5}
              value={log.entry}
            />
          </section>

          <section className='flex items-center gap-2 mb-4'>
            <h2 className='font-bold'>Ship Broken?</h2>
            <input
              name='shipIsBroken'
              className='border-2 border-gray-300 focus:border-gray-500 outline-none rounded w-4 p-2 cursor-pointer'
              type='checkbox'
              defaultChecked={log.shipIsBroken}
            />
          </section>

          <section className='flex gap-2 border-t-2 pt-4'>
            <input
              name='submit'
              value='Update'
              className='shadow shadow-[#09507C]  focus:border-gray-500 cursor-pointer outline-none hover:bg-black hover:text-white font-bold rounded p-2'
              type='submit'
            />

            <a href={`/logs/${log._id}`}>
              <input
                type='button'
                value='Back'
                className='shadow shadow-[#09507C]  cursor-pointer outline-none hover:bg-black hover:text-white font-bold rounded p-2'
              />
            </a>
          </section>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default Edit;
