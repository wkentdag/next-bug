import React from 'react';
import Link from 'next/link';

export default class IndexPage extends React.Component {
  static async getInitialProps({ query }) {
    let activeSection = '/';
    if (query && query.activeSection) {
      activeSection = query.activeSection; //  eslint-disable-line prefer-destructuring
    }

    return {
      activeSection,
    };
  }

  render() {
    const { activeSection } = this.props;
    return (
      <div>
        active section is {activeSection}
        <div>
          <Link href="/?activeSection=about" as="/about">
            <a href="/about">About</a>
          </Link>
        </div>
        <div>
          <Link href="/?activeSection=store" as="/store">
            <a href="/store">store</a>
          </Link>
        </div>
        <div>
          <Link href="/?activeSection=shows" as="/shows">
            <a href="/shows">shows</a>
          </Link>
        </div>
        <div>
          <Link href="/?activeSection=gallery" as="/gallery">
            <a href="/gallery">gallery</a>
          </Link>
        </div>
      </div>
    )
  }
}
