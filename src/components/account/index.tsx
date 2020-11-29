import React from 'react';
import './index.scss';

import { ReactComponent as AccountIcon } from '../../assets/icons/account.svg';

export const Account: React.FC = () => {

    return (
        <div className="account">
            juli.osadcha@gmail.com
            <AccountIcon className="account-icon" />
        </div>
    );
};
