import React, { Component } from 'react';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export default WrappedComponent => {
  return class DebounceInput extends Component {
    constructor(props) {
      super(props);

      this.props$ = new Subject();
    }

    componentDidMount() {
      this.subscription = this.props$
        .pipe(
          debounceTime(500),
          distinctUntilChanged()
        ).subscribe(value => this.props.onChange(value)); // FIXME: pass function prop
    }

    componentWillUnmount() {
      this.subscription.unsubscribe();
    }

    render() {
      return <WrappedComponent {...this.props} props$={this.props$} />
    }
  }
}
