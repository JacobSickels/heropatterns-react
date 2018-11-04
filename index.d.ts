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

export interface TopographyProps extends React.Props<HeroPatternProps> {}
declare class Topography extends React.Component<TopographyProps, any> {}

export interface TextureProps extends React.Props<HeroPatternProps> {}
declare class Texture extends React.Component<TextureProps, any> {}

export interface JupiterProps extends React.Props<HeroPatternProps> {}
declare class Jupiter extends React.Component<JupiterProps, any> {}

declare module 'heropatterns-react' {

}

export { Jigsaw, Overcast, FormalInvitation };
