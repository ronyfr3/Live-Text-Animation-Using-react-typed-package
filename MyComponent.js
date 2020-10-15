import React,{ Component } from 'react';
import 'react-typed/dist/animatedCursor.css';
import Typed from 'react-typed';
 
export default class MyComponent extends Component {
    render() {
        return (
            <div>
                <Typed
                    strings={[
                        'Welcome to our Websites'
                        ]}
                    typeSpeed={205}
                    backSpeed={205}
                    className='website'
                />
                <div>
                <Typed
                    strings={[

                        '<strong>Search for</strong> products',
                        '<strong>Search for</strong> brands',
                        '<strong>Search for</strong> categories',
                        // space deya lagbe strong er por products er age na hle search for er pore gayer sathe lege thakbe porer word 
                        ]}
                    typeSpeed={125}
                    backSpeed={125}
                    loop
                    className='search'
                />
                </div>
            </div>
        );
    }
}