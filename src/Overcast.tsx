import * as React from 'react';
import { HeroPatternProps } from '../index';

export const Overcast = ({
    width = 192,
    height = 192,
    backgroundColor = 'white',
    foregroundColor = 'black',
    foregroundOpacity = 0.5,
}: HeroPatternProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width}>
        <defs>
            <pattern
                id="overcastPattern"
                x="0"
                y="0"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
            >
                <g fill={backgroundColor}>
                    <path
                        d="M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z"
                        fill={foregroundColor}
                        opacity={foregroundOpacity}
                    />
                    <path d="M15 15h50l-5 5H20v40l-5 5V15zm0 50h50V15L80 0v80H0l15-15zm32.07-32.07l3.54-3.54A15 15 0 0 1 29.4 50.6l3.53-3.53a10 10 0 1 0 14.14-14.14zM32.93 47.07a10 10 0 1 1 14.14-14.14L32.93 47.07z" />
                </g>
            </pattern>
        </defs>
        <rect
            x="0"
            y="0"
            width={width}
            height={height}
            fill="url(#overcastPattern)"
        />
    </svg>
);
