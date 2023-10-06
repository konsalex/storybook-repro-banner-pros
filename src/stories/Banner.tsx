/**
 *
 *  Copyright (c) "Neo4j"
 *  Neo4j Sweden AB [http://neo4j.com]
 *
 *  This file is part of Neo4j.
 *
 *  Neo4j is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';

export type ElementBase<T = HTMLElement> = Omit<
    React.HTMLProps<T>,
    'as' | 'selected' | 'size' | 'onChange' | 'ref'
> & {
    /** Override the root element rendered for the component */
    as?: string | React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
};

/**
 *
 *
 * Types
 *
 *
 */

export interface BannerActionsProps extends React.HTMLProps<HTMLAnchorElement> {
    /** Label of the action item */
    label: string;
    /** Event handler when the action button is clicked. If set, the element is rendered as `button` */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    /** Link to redirect to when the action button is clicked. If set, the element is rendered as `a`. Ignored if `onClose` prop is passed */
    href?: string;
    /** Sets how to open the link. Only applicable when `href` is passed */
    target?: '_blank' | '_self' | '_parent' | '_top';
}

export interface BannerCommonProps extends Omit<ElementBase, 'title'> {
    /** Type of the banner   */
    type?: BannerType;

    /** Title of the banner */
    title?: string | React.ReactNode;

    /**
     * The banner name or label. Used for accessibility only.
     * Required if title is not a string or if title is not set.
     */
    name?: string;

    /** Description of the banner. Will be ignored if `children` is passed */
    description?: string | React.ReactNode;

    /** Alternative for `description` */
    children?: React.ReactNode;

    /** Shows status icon. Icon is automatically picked based on `type` value   */
    icon?: boolean;

    /** Shows Action buttons in the footer */
    actions?: BannerActionsProps[];

    /** Adds shadow */
    floating?: boolean;
}

type CloseableBannerProps = {
    /** Shows close icon. Expects onClose to be passed */
    closeable: true;

    /** Event handler when close icon is clicked */
    onClose: (
        e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
    ) => void;
};

type NonCloseableBannerProps = {
    closeable?: false;
    onClose?: never;
};

type BannerCloseProps = CloseableBannerProps | NonCloseableBannerProps;

export type BannerProps = BannerCommonProps & BannerCloseProps;
export type BannerType = 'info' | 'success' | 'warning' | 'danger';


const BannerActions = ({label, ...restProps}: BannerActionsProps) => {
    return <a {...restProps}>{label}</a>;
};
BannerActions.displayName = 'Banner.Actions';

const Banner = React.forwardRef(function Banner2(
    {
        type = 'info',
        icon = false,
        title,
        name,
        actions = [],
        floating = false,
        description = null,
        onClose,
        className = '',
        children = null,
        closeable = false,
        ...rest
    }: BannerProps,
    ref: React.ForwardedRef<HTMLDivElement>
) {
    console.log(type);
    console.log(icon);
    return (
        <div>
            Random Title
        </div>
    );
});

// Issue with TypeScript forwardRef and subcomponents: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-894053907
// const Banner = Object.assign(BannerComponent, {Actions: BannerActions});

export default Banner;
