import * as React from 'react';

interface CounterProps {
  startNumber: number;
}

class Counter extends React.Component<CounterProps> {
  public render() {
    return (
      <div>
        <h1>{this.props.startNumber}</h1>
        <button />
      </div>
    );
  }
}

export default Counter;