import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from './Link';

const LinkWrapper = (props) => <a {...props} />; //eslint-disable-line jsx-a11y/anchor-has-content

it('has a href attribute when rendering with linkWrapper', () =>{
    const div = document.createElement('div');
    ReactDOM.render(
        <Link href="https://storybook.js.org/tutorials/" LinkWrapper={LinkWrapper}>
            Link Text
        </Link>,
        div
    );

    expect(div.querySelector('a[href="https://storybook.js.org/tutorials/"]')).not.toBeNull();
    expect(div.textContent).toEqual('Link Text');

    ReactDOM.unmountComponentAtNode(div);
});