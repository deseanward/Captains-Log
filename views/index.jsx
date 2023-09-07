import DefaultLayout from "./layout/layout";

const React = require("react");

const Index = ({ logs }) => {
  return (
    <DefaultLayout>
      <div>
        <section>
          <h2 className='font-bold text-2xl mb-4'>Title</h2>
          {logs.length ? (
            logs.map((log) => {
              return (
                <div key={log._id}>
                  <p className='mb-4'>{log.title}</p>
                  <p className='mb-4'>{log.entry}</p>
                  <p>Ship Broken? {log.shipIsBroken ? "Yes" : "No"}</p>
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
