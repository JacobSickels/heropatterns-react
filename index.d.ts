import * as React from 'react';

export interface HeroPatternProps extends React.Props<Jigsaw> {
    width?: number;
    height?: number;
    foregroundColor?: string;
    foregroundOpacity?: number;
    backgroundColor?: string;
}

declare class Jigsaw extends React.Component<HeroPatternProps, any> {}

declare module 'heropatterns-react' {

}

export default Jigsaw;
