import React from 'react';

const AnimatedCursor = () => {
    return (
        <AnimatedCursor
            color="31, 97, 141"
            innerSize={15}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={0}
            outerStyle={{
                border: '3px solid #fff'
            }}
        ></AnimatedCursor>
    );
};

export default AnimatedCursor;