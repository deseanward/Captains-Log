import DefaultLayout from "./layout/Layout";

const React = require("react");

const Index = ({ logs }) => {
  return (
    <DefaultLayout>
      <div>
        <h2 className='font-bold text-2xl mb-4'>Logs</h2>
        <section className='flex flex-wrap gap-8'>
          {logs.length ? (
            logs.map((log) => {
              return (
                <div
                  key={log._id}
                  className='shadow-md shadow-[#09507C] flex flex-col w-[20em] rounded-lg p-4'
                >
                  <p className='border-b-2 pb-2 mb-4 font-bold'>
                    <a href={`/logs/${log._id}`}>{log.title}</a>
                    <span className='text-sm font-normal text-[maroon]'>
                      {" "}
                      {log.createdAt < log.updatedAt ? "- (updated)" : null}
                    </span>
                  </p>
                  <p className='mb-4'>{log.entry}</p>
                  <p className='mb-4'>
                    Ship Broken? {log.shipIsBroken ? "Yes" : "No"}
                  </p>

                  <a
                    href={`/logs/${log._id}`}
                    className='mt-auto  border-t-2 pt-2'
                  >
                    <input
                      type='button'
                      value='View'
                      className='shadow shadow-[#09507C]  focus:border-gray-500 cursor-pointer outline-none hover:bg-black hover:text-white font-bold rounded p-2'
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
