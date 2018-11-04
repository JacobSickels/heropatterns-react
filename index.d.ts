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

export interface FormalInvitationProps extends React.Props<HeroPatternProps> {}
declare class FormalInvitation extends React.Component<
    FormalInvitationProps,
    any
> {}

declare module 'heropatterns-react' {

}

export { Jigsaw, Overcast, FormalInvitation };
