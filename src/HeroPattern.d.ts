import * as React from 'react';

export interface HeroPatternProps {
    width?: number;
    height?: number;
    foregroundColor?: string;
    foregroundOpacity?: number;
    backgroundColor?: string;
}

declare class Jigsaw extends React.Component<HeroPatternProps, any> {}

declare module 'hero-pattern' {

}

export { Jigsaw };
