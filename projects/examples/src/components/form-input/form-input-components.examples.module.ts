/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { NgModule } from '@angular/core';
import {
    FormCheckboxComponent,
    FormInputComponent,
    FormSelectComponent,
    NumberWithUnitFormInputComponent,
} from '@vcd/ui-components';
import { Documentation } from '@vmw/ng-live-docs';
import { FormCheckboxExampleComponent } from './form-checkbox.example.component';
import { FormCheckboxExampleModule } from './form-checkbox.example.module';
import { FormInputExampleComponent } from './form-input.example.component';
import { FormInputExampleModule } from './form-input.example.module';
import { FormSelectExampleComponent } from './form-select.example.component';
import { FormSelectExampleModule } from './form-select.example.module';
import { NumberWithUnitFormInputExampleComponent } from './number-with-unit-form-input.example.component';
import { NumberWithUnitFormInputExampleModule } from './number-with-unit-form-input.example.module';

Documentation.registerDocumentationEntry({
    component: FormInputComponent,
    displayName: 'Inputs',
    urlSegment: 'formInputs',
    examples: [
        {
            component: FormInputExampleComponent,
            forComponent: null,
            title: 'String, Number and Date form inputs',
        },
    ],
});

Documentation.registerDocumentationEntry({
    component: FormSelectComponent,
    displayName: 'Select',
    urlSegment: 'formSelect',
    examples: [
        {
            component: FormSelectExampleComponent,
            forComponent: null,
            title: 'Select form input',
        },
    ],
});

Documentation.registerDocumentationEntry({
    component: FormCheckboxComponent,
    displayName: 'Checkbox',
    urlSegment: 'formCheckbox',
    examples: [
        {
            component: FormCheckboxExampleComponent,
            forComponent: null,
            title: 'Checkbox form input',
        },
    ],
});

Documentation.registerDocumentationEntry({
    component: NumberWithUnitFormInputComponent,
    displayName: 'Number with unit input',
    urlSegment: 'numberWithUnitFormInput',
    examples: [
        {
            component: NumberWithUnitFormInputExampleComponent,
            forComponent: null,
            title: 'Number with unit form input',
        },
    ],
});

/**
 * A module that imports all error banner examples.
 */
@NgModule({
    imports: [
        FormInputExampleModule,
        FormSelectExampleModule,
        FormCheckboxExampleModule,
        NumberWithUnitFormInputExampleModule,
    ],
})
export class FormInputComponentsExamplesModule {}
