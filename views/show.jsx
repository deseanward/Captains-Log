import DefaultLayout from "./layout/layout";

const React = require("react");

const Show = ({ log }) => {
  console.log(log);
  return (
    <DefaultLayout>
      <div>
        <h2 className='font-bold text-2xl mb-4'>Title</h2>
        <section className='flex gap-8'>
          {log ? (
            <div className=' w-[20em] border-2 border-grey-500 rounded-lg p-4'>
              <p className='mb-4'>{log.title}</p>
              <p className='mb-4'>{log.entry}</p>
              <p>Ship Broken? {log.shipIsBroken ? "Yes" : "No"}</p>

              <section>
                <a href={`/logs/${log._id}/edit`}>
                  <input
                    type='button'
                    value='Edit'
                    className='border-2 border-gray-300 focus:border-gray-500 cursor-pointer outline-none hover:bg-black hover:text-white font-bold rounded p-2 mr-2'

                  />
                </a>

                <a href='/logs'>
                  <input
                    type='button'
                    value='Back'
                    className='border-2 border-gray-300 focus:border-gray-500 cursor-pointer outline-none hover:bg-black hover:text-white font-bold rounded p-2'

                  />
                </a>
              </section>
            </div>
          ) : (
            <h3 className='font-bold text-xl'>No log to display</h3>
          )}
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Show;
