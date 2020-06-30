import Link from 'next/link';

export default () => (
  <div>
    Welcome to next.js!
    <div>
      <Link href="/playground">
        <a>Go playground</a>
      </Link>
    </div>

    <div>
        <a href="/playground">Go playground (without Link)</a>
    </div>
  </div>
)