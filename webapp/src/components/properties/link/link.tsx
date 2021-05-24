// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {ReactNode} from 'react'

import Editable from '../../../widgets/editable'

import './link.scss'
import {Utils} from '../../../utils'

type Props = {
    value: string
    onChange: (value: string) => void
    onSave: () => void
    onCancel: () => void
    validator: (newValue: string) => boolean
}

const URLProperty = (props: Props): JSX.Element => {
    let link: ReactNode = null
    if (props.value?.trim()) {
        link = (
            <a
                className='icon-link-variant'
                href={Utils.ensureProtocol(props.value.trim())}
                target='_blank'
                rel='noreferrer'
            />
        )
    }

    return (
        <div className='property-link url'>
            <Editable
                className='octo-propertyvalue'
                placeholderText='Empty'
                value={props.value}
                onChange={props.onChange}
                onSave={props.onSave}
                onCancel={props.onCancel}
                validator={props.validator}
            />
            {link}
        </div>
    )
}

export default URLProperty
