import React from 'react';
import { CopyBlock, railscast as theme } from 'react-code-blocks';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';

import { simple, fifo, advanced } from './snippets';

const Simple = (props = {}) => {
  const { add } = props;

  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-12">
          <div className="card bg-secondary text-white">
            <div className="card-body">
              <h2 className="card-title display-4">Simple</h2>
              <p className="card-text">
                Clicking the button below will add a single notfication job to
                the queue.
              </p>
              <p className="card-text">
                The behaviour of the queue system is demonstrated by the 5
                second timeout within the Promise. In practice, this could be
                web request or some other long-running task.
              </p>
              <button
                className="btn btn-dark"
                onClick={() =>
                  add('addToQueue', async ({ job }) => {
                    const { id, name } = job;

                    console.log('About to wait');
                    console.log(id, name);
                    await new Promise(resolve =>
                      setTimeout(() => {
                        console.log('Waited 5000ms');
                        toastr.success('Success', 'Well done for waiting.');
                        resolve();
                      }, 5000)
                    );
                  })
                }
              >
                Enqueue
              </button>
              <hr className="my-4" />
              <CopyBlock
                text={simple}
                language="jsx"
                showLineNumbers="true"
                theme={theme}
                wrapLines
                codeBlock
              />
            </div>
            <hr className="my-4" />
            <div className="card-body">
              <h2 className="card-title display-4">
                FIFO FIFO, {`It's`} Off To Work We Go
              </h2>
              <p className="card-text">
                While you can use Reducks as a synchronous queue dispatcher,
                {` it's`} true purpose is to provide a strict First In, First
                Out (FIFO) so the execution order is consistent and
                predictable.
              </p>
              <p className="card-text">
                Click below to add 5 promisified timeout jobs and watch them
                execute in order.
              </p>
              <button
                className="btn btn-dark"
                onClick={() => {
                  const array = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

                  array.map(item => {
                    return add('pushJob', async () => {
                      await new Promise(resolve =>
                        setTimeout(() => {
                          toastr.success(`Job The ${item}`, 'Hi there!');
                          resolve();
                        }, 1000)
                      );
                    });
                  });
                }}
              >
                Enqueue
              </button>
              <hr className="my-4" />
              <CopyBlock
                text={fifo}
                language="jsx"
                showLineNumbers="true"
                theme={theme}
                wrapLines
                codeBlock
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Simple.displayName = 'Simple';
Simple.propTypes = {
  add: PropTypes.func.isRequired
};

const Advanced = (props = {}) => {
  const { add } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card bg-secondary text-white">
            <div className="card-body">
              <h2 className="card-title display-4">Advanced</h2>
              <p className="card-text">
                Reducks can fire optional methods when a queue starts running
                and again when it finishes. This is useful for things like
                progress bars or notifications.
              </p>
              <button
                className="btn btn-dark"
                onClick={() => {
                  const array = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

                  array.map(item => {
                    return add('pushJob', async () => {
                      await new Promise(resolve =>
                        setTimeout(() => {
                          toastr.success(`Job The ${item}`, 'Hi there!');
                          resolve();
                        }, 1000)
                      );
                    });
                  });
                }}
              >
                Enqueue
              </button>
              <hr className="my-4" />
              <CopyBlock
                text={advanced}
                language="jsx"
                showLineNumbers="true"
                theme={theme}
                wrapLines
                codeBlock
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Advanced.displayName = 'Advanced';
Advanced.propTypes = {
  add: PropTypes.func.isRequired
};

export { Simple, Advanced };
