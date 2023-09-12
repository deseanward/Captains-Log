const React = require("react");

const moment = require("moment");

import DefaultLayout from "./layout/layout";

const Show = ({ log }) => {
  return (
    <DefaultLayout>
      <div className='flex flex-wrap flex-col items-center'>
        <div className='w-[600px] shadow-lg shadow-[#09507C] p-4'>
          <section className='self-start'>
            <h2 className='font-bold text-2xl'>
              {log.title}{" "}
              <span className='text-sm font-normal text-[maroon]'>
                {" "}
                {log.createdAt < log.updatedAt ? "- (updated)" : null}
              </span>
            </h2>
            <p className='text-sm mb-4'>
              {moment(log.updatedAt.toUTCString()).format(
                "MMMM Do YYYY, h:mm:ss a"
              )}
            </p>
          </section>
          <section className='flex gap-8'>
            {log ? (
              <div className='w-full flex flex-col gap-8 w-[20em] border-t-2 border-grey-500 p-4'>
                <section>
                  <p className='mb-4'>{log.entry}</p>
                  <p>Ship Broken? {log.shipIsBroken ? "Yes" : "No"}</p>
                </section>

                <section className='flex gap-2 border-t-2 pt-4'>
                  <a href='/logs'>
                    <input
                      type='button'
                      value='Back'
                      className='shadow shadow-[#09507C] 
                      cursor-pointer outline-none hover:bg-black hover:text-white font-bold rounded p-2'
                    />
                  </a>

                  <a href={`/logs/${log._id}/edit`}>
                    <input
                      type='button'
                      value='Edit'
                      className='shadow shadow-[#09507C]  cursor-pointer outline-none hover:bg-green-900 hover:text-white font-bold rounded p-2 mr-2'
                    />
                  </a>

                  <form
                    action={`/api/logs/${log._id}?_method=DELETE`}
                    method='post'
                  >
                    <input
                      type='submit'
                      value='Delete'
                      className='shadow shadow-[#09507C]  cursor-pointer outline-none hover:bg-red-800 hover:text-white font-bold rounded p-2 mr-2'
                    />
                  </form>
                </section>
              </div>
            ) : (
              <h3 className='font-bold text-xl'>No log to display</h3>
            )}
          </section>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Show;
