import React, { DetailedHTMLProps } from 'react';
import classNames from 'classnames';

import './index.scss';

export type ButtonStyleMode = 'border';

interface Props extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    height?: number;
    styleMode?: ButtonStyleMode;
    loading?: boolean;
    small?: boolean;
}

export const AppButton: React.FC<Props> = ({
    children,
    height,
    styleMode,
    loading,
    className,
    disabled,
    small,
    ...rest
}) => {
    return (
        <button
            style={{ height }}
            className={classNames(className, 'app-button', {
                'app-button--small': small,
                'app-button--border': styleMode === 'border',
                'app-button--loading': loading,
            })}
            disabled={loading || disabled}
            {...rest}>
            <div className="app-button__content">{children}</div>
        </button>
    );
};
