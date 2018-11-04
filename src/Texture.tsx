import * as React from 'react';
import { HeroPatternProps } from '../index';

export const Texture = ({
    width = 4,
    height = 4,
    backgroundColor = 'white',
    foregroundColor = 'black',
    foregroundOpacity = 1,
}: HeroPatternProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <defs>
            <pattern
                id="texturePattern"
                x="0"
                y="0"
                width="4"
                height="4"
                patternUnits="userSpaceOnUse"
            >
                <rect x="0" y="0" width={4} height={4} fill={backgroundColor} />
                <path fill={foregroundColor} d="M1 3h1v1H1V3zm2-2h1v1H3V1z" />
            </pattern>
        </defs>
        <rect
            x="0"
            y="0"
            width={width}
            height={height}
            fill="url(#texturePattern)"
        />
    </svg>
);
