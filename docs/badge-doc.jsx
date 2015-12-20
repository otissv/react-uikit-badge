'use strict';


import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
import Table from '../../react-uikit-table/lib/table';
import Note from '../../react-uikit-note/lib/note';

const BadgeDoc = (props) => (
  <div>

    <section>
      <h1>Badge</h1>
        <p>
          Easlily create nicely looking badges to label and highlight your content.
        </p>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          <code>npm install react-uikit-badge --save;</code>
        </p>
      <p>
        ES6 <br />
      <code>import Badge from 'react-uikit-badge';</code><br />
      </p>

      <p>
        ES5 <br />
      <code>var Badge = require&#40;'react-uikit-badge'&#41;;</code>
      </p>

      <Note badge={{context: 'danger', body: 'Note:'}}>
        UIkit css is not included. You can get it from <a href='http://getuikit.com/'>getuikit.com</a>.
        This has been tested with UIKit version 2.24.2.
      </Note>

      <p>
        See <a href='http://otissv.github.io/react-uikit-components'>React UIKit Componets</a> for examples and full documentation.
      </p>

      <hr/>

      <p>
        Badges can be either <code>&lt;span&gt;</code> or <code>&lt;div&gt;</code>.
        They are inline <code>&lt;span&gt;</code> by default.
      </p>
      <p>
        Add the <code>block</code> prop to create a <code>&lt;div&gt;</code>
        instead of a <code>&lt;span&gt;</code>.
      </p>

      <p>
        Text can be added either as children, <code>&lt;Badge&gt;Awesome&lt;/Badge&gt;</code> or
        by setting the <code>body</code> prop, <code>&lt;Badge body='Awesome'/&gt;</code>.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Badge>Info</Badge>
<Badge>New</Badge>
<Badge>Free</Badge>`}
      </Codeblock>
    </section>


    <section>
      <h2>Badge notifications</h2>
      <p>
        Add the <code>notification</code> prop to indicate a notification.
        Typically it is used with numbers.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Badge notification>3</Badge>
<Badge notification>20</Badge>
<Badge notification>100</Badge>`}
      </Codeblock>
    </section>


    <section>
      <h2>Badge contexts</h2>
      <p>
        Add the <code>context='success'</code> or <code>context='warning'</code> or
        <code>context='danger'</code> prop for additional contexts.
      </p>

      <h3>Example</h3>

      <Codeblock>
{`<Badge context='success'>success</Badge>
<Badge context='warning'>warning</Badge>
<Badge context='danger'>danger</Badge><br />

<Badge notification context='success'>1</Badge>
<Badge notification context='warning'>10</Badge>
<Badge notification context='danger'>99+</Badge>`}
      </Codeblock>
    </section>


    <section>
      <h2>Badge Props</h2>
      <p>
        <code>&lt;Badge&gt;</code> props and their types.
      </p>

      <p>
        See <a href='https://github.com/otissv/react-uikit-base'>base</a> for additional props.
      </p>

      <Table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>context</code>
            </td>
            <td>oneOf<br />success, warning, danger</td>
          </tr>
          <tr>
            <td>
              <code>block</code>
            </td>
            <td>bool</td>
          </tr>
          <tr>
            <td>
              <code>body</code>
            </td>
            <td>string</td>
          </tr>
          <tr>
            <td>
              <code>notification</code>
            </td>
            <td>bool</td>
          </tr>
        </tbody>
      </Table>
    </section>


    <section>
        <h2>Tests</h2>
        <p>
          <code>npm run test</code> to run tests with minimal output.<br />
          <code>npm run test:spec</code> to run tests with detailed output.<br />
          <code>npm run test:watch</code>watches all directories and run tests with minimal output on file changes.<br />
        </p>
      </section>

      <section>
        <h2>Build</h2>
        <p>
          <code>npm run build</code> to build files fro distribution.<br />
          <code>npm run build:watch</code> watches src directory and builds files on changes.<br />
        </p>
      </section>


      <section>
        <h2>Lint</h2>
        <p>
          <code>npm run lint</code> lints scripts in src directory.<br />
          <code>npm run lint:watch</code> watches src directory and lints scripts in src directory.<br />
        </p>
      </section>

      <section>
        <h2>License</h2>
          <p>MIT</p>
      </section>

  </div>
);

export default BadgeDoc;