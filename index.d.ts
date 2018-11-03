import * as React from 'react';

export interface HeroPatternProps {
    width?: number;
    height?: number;
    foregroundColor?: string;
    foregroundOpacity?: number;
    backgroundColor?: string;
}

export interface JigsawProps extends React.Props<HeroPatternProps> {}
declare class Jigsaw extends React.Component<JigsawProps, any> {}

export interface OvercastProps extends React.Props<HeroPatternProps> {}
declare class Overcast extends React.Component<OvercastProps, any> {}

declare module 'heropatterns-react' {

}

export { Jigsaw, Overcast };
