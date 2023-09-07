import DefaultLayout from "./layout/layout";

const React = require("react");

const Index = ({ logs }) => {
  return (
    <DefaultLayout>
      <div>
        <h2 className='font-bold text-2xl mb-4'>Title</h2>
        <section className='flex gap-8'>
          {logs.length ? (
            logs.map((log) => {
              return (
                <div
                  key={log._id}
                  className=' w-[20em] border-2 border-grey-500 rounded-lg p-4'
                >
                  <p className='mb-4'>
                    <a href={`/logs/${log._id}`}>{log.title}</a>
                  </p>
                  <p className='mb-4'>{log.entry}</p>
                  <p>Ship Broken? {log.shipIsBroken ? "Yes" : "No"}</p>

                  <a href={`/logs/${log._id}`}>
                    <input
                      type='button'
                      value='View'
                      className='border-2 border-gray-300 focus:border-gray-500 cursor-pointer outline-none hover:bg-black hover:text-white font-bold rounded p-2'
                    />
                  </a>
                </div>
              );
            })
          ) : (
            <h3 className='font-bold text-xl'>No logs created</h3>
          )}
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Index;
