import * as React from 'react';

export interface HeroPatternProps {
    test: string;
}

declare class HeroPattern extends React.Component<HeroPatternProps, any> {}

declare module 'hero-pattern' {

}

export default HeroPattern;
