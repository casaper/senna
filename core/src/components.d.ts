/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AutocompleteTypes, Color, InputChangeEventDetail, MenuItem, OptionSelectedEvent, TableHeaders, TextFieldTypes, TextKind, TypeaheadOption } from "./interface";
export namespace Components {
    interface SenAlert {
        /**
          * Button variant
         */
        "color"?: Color;
    }
    interface SenApp {
    }
    interface SenButton {
        /**
          * Button type
         */
        "buttonType": "button" | "submit" | "reset";
        /**
          * Button variant
         */
        "color"?: Color;
        /**
          * Disables the button
         */
        "disabled": boolean;
    }
    interface SenButtonGroup {
    }
    interface SenCard {
    }
    interface SenCardActions {
    }
    interface SenCardBody {
    }
    interface SenCardTitle {
    }
    interface SenCol {
        /**
          * The amount to offset the column, in terms of how many columns it should shift to the end of the total available.
         */
        "offset"?: string;
        /**
          * The amount to offset the column for lg screens, in terms of how many columns it should shift to the end of the total available.
         */
        "offsetLg"?: string;
        /**
          * The amount to offset the column for md screens, in terms of how many columns it should shift to the end of the total available.
         */
        "offsetMd"?: string;
        /**
          * The amount to offset the column for sm screens, in terms of how many columns it should shift to the end of the total available.
         */
        "offsetSm"?: string;
        /**
          * The amount to offset the column for xl screens, in terms of how many columns it should shift to the end of the total available.
         */
        "offsetXl"?: string;
        /**
          * The amount to offset the column for xs screens, in terms of how many columns it should shift to the end of the total available.
         */
        "offsetXs"?: string;
        /**
          * The amount to pull the column, in terms of how many columns it should shift to the start of the total available.
         */
        "pull"?: string;
        /**
          * The amount to pull the column for lg screens, in terms of how many columns it should shift to the start of the total available.
         */
        "pullLg"?: string;
        /**
          * The amount to pull the column for md screens, in terms of how many columns it should shift to the start of the total available.
         */
        "pullMd"?: string;
        /**
          * The amount to pull the column for sm screens, in terms of how many columns it should shift to the start of the total available.
         */
        "pullSm"?: string;
        /**
          * The amount to pull the column for xl screens, in terms of how many columns it should shift to the start of the total available.
         */
        "pullXl"?: string;
        /**
          * The amount to pull the column for xs screens, in terms of how many columns it should shift to the start of the total available.
         */
        "pullXs"?: string;
        /**
          * The amount to push the column, in terms of how many columns it should shift to the end of the total available.
         */
        "push"?: string;
        /**
          * The amount to push the column for lg screens, in terms of how many columns it should shift to the end of the total available.
         */
        "pushLg"?: string;
        /**
          * The amount to push the column for md screens, in terms of how many columns it should shift to the end of the total available.
         */
        "pushMd"?: string;
        /**
          * The amount to push the column for sm screens, in terms of how many columns it should shift to the end of the total available.
         */
        "pushSm"?: string;
        /**
          * The amount to push the column for xl screens, in terms of how many columns it should shift to the end of the total available.
         */
        "pushXl"?: string;
        /**
          * The amount to push the column for xs screens, in terms of how many columns it should shift to the end of the total available.
         */
        "pushXs"?: string;
        /**
          * The size of the column, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
         */
        "size"?: string;
        /**
          * The size of the column for lg screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
         */
        "sizeLg"?: string;
        /**
          * The size of the column for md screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
         */
        "sizeMd"?: string;
        /**
          * The size of the column for sm screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
         */
        "sizeSm"?: string;
        /**
          * The size of the column for xl screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
         */
        "sizeXl"?: string;
        /**
          * The size of the column for xs screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
         */
        "sizeXs"?: string;
    }
    interface SenFieldset {
        /**
          * Legend describing the fieldset
         */
        "legend"?: string;
    }
    interface SenFormField {
        /**
          * Label of the form field
         */
        "label": string;
    }
    interface SenGrid {
        /**
          * If `true`, the grid will have a fixed width based on the screen size.
         */
        "fixed": boolean;
    }
    interface SenInput {
        /**
          * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
         */
        "accept"?: string;
        /**
          * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
         */
        "autocapitalize": string;
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete": AutocompleteTypes;
        /**
          * Whether auto correction should be enabled when the user is entering/editing the text value.
         */
        "autocorrect": "on" | "off";
        /**
          * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        "autofocus": boolean;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput": boolean;
        /**
          * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
         */
        "clearOnEdit"?: boolean;
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         */
        "debounce": number;
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled": boolean;
        /**
          * A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.
         */
        "enterkeyhint"?: | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send";
        /**
          * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputmode"?: | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
        /**
          * The maximum value, which must not be less than its minimum (min attribute) value.
         */
        "max"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
         */
        "maxlength"?: number;
        /**
          * The minimum value, which must not be greater than its maximum (max attribute) value.
         */
        "min"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        "minlength"?: number;
        /**
          * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
         */
        "multiple"?: boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored. When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.
         */
        "pattern"?: string;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly": boolean;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required": boolean;
        /**
          * Sets focus on the specified `ion-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
         */
        "size"?: number;
        /**
          * If `true`, the element will have its spelling and grammar checked.
         */
        "spellcheck": boolean;
        /**
          * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
         */
        "step"?: string;
        /**
          * The type of control to display. The default type is text.
         */
        "type": TextFieldTypes;
        /**
          * The value of the input.
         */
        "value"?: string | number | null;
    }
    interface SenMenu {
        /**
          * Menu items
         */
        "items": MenuItem[];
    }
    interface SenMenuItem {
        /**
          * Active state
         */
        "active": boolean;
        /**
          * Value to emit when clicked
         */
        "value": any;
    }
    interface SenRow {
    }
    interface SenTable {
        /**
          * Table data, array of table rows
         */
        "data": any[];
        /**
          * Table headers
         */
        "headers": TableHeaders;
    }
    interface SenText {
        /**
          * The text alignment  Default is left
         */
        "align": "left" | "right" | "center" | "justify";
        /**
          * The text block type  One of `p`, `h1`, `h2`, `h3`, `h4`, `h5`
         */
        "kind": TextKind;
        /**
          * Leter spacing in any html unit (px, rem, ex, etc.)  Default is normal
         */
        "letterSpacing": string;
        /**
          * The font weight  One of `regular`, `bold`, `light`
         */
        "weight": "regular" | "bold" | "light";
    }
    interface SenTypeahead {
        /**
          * Options to display in typeahead
         */
        "options": TypeaheadOption[];
        /**
          * The value of the input.
         */
        "value": string;
    }
}
declare global {
    interface HTMLSenAlertElement extends Components.SenAlert, HTMLStencilElement {
    }
    var HTMLSenAlertElement: {
        prototype: HTMLSenAlertElement;
        new (): HTMLSenAlertElement;
    };
    interface HTMLSenAppElement extends Components.SenApp, HTMLStencilElement {
    }
    var HTMLSenAppElement: {
        prototype: HTMLSenAppElement;
        new (): HTMLSenAppElement;
    };
    interface HTMLSenButtonElement extends Components.SenButton, HTMLStencilElement {
    }
    var HTMLSenButtonElement: {
        prototype: HTMLSenButtonElement;
        new (): HTMLSenButtonElement;
    };
    interface HTMLSenButtonGroupElement extends Components.SenButtonGroup, HTMLStencilElement {
    }
    var HTMLSenButtonGroupElement: {
        prototype: HTMLSenButtonGroupElement;
        new (): HTMLSenButtonGroupElement;
    };
    interface HTMLSenCardElement extends Components.SenCard, HTMLStencilElement {
    }
    var HTMLSenCardElement: {
        prototype: HTMLSenCardElement;
        new (): HTMLSenCardElement;
    };
    interface HTMLSenCardActionsElement extends Components.SenCardActions, HTMLStencilElement {
    }
    var HTMLSenCardActionsElement: {
        prototype: HTMLSenCardActionsElement;
        new (): HTMLSenCardActionsElement;
    };
    interface HTMLSenCardBodyElement extends Components.SenCardBody, HTMLStencilElement {
    }
    var HTMLSenCardBodyElement: {
        prototype: HTMLSenCardBodyElement;
        new (): HTMLSenCardBodyElement;
    };
    interface HTMLSenCardTitleElement extends Components.SenCardTitle, HTMLStencilElement {
    }
    var HTMLSenCardTitleElement: {
        prototype: HTMLSenCardTitleElement;
        new (): HTMLSenCardTitleElement;
    };
    interface HTMLSenColElement extends Components.SenCol, HTMLStencilElement {
    }
    var HTMLSenColElement: {
        prototype: HTMLSenColElement;
        new (): HTMLSenColElement;
    };
    interface HTMLSenFieldsetElement extends Components.SenFieldset, HTMLStencilElement {
    }
    var HTMLSenFieldsetElement: {
        prototype: HTMLSenFieldsetElement;
        new (): HTMLSenFieldsetElement;
    };
    interface HTMLSenFormFieldElement extends Components.SenFormField, HTMLStencilElement {
    }
    var HTMLSenFormFieldElement: {
        prototype: HTMLSenFormFieldElement;
        new (): HTMLSenFormFieldElement;
    };
    interface HTMLSenGridElement extends Components.SenGrid, HTMLStencilElement {
    }
    var HTMLSenGridElement: {
        prototype: HTMLSenGridElement;
        new (): HTMLSenGridElement;
    };
    interface HTMLSenInputElement extends Components.SenInput, HTMLStencilElement {
    }
    var HTMLSenInputElement: {
        prototype: HTMLSenInputElement;
        new (): HTMLSenInputElement;
    };
    interface HTMLSenMenuElement extends Components.SenMenu, HTMLStencilElement {
    }
    var HTMLSenMenuElement: {
        prototype: HTMLSenMenuElement;
        new (): HTMLSenMenuElement;
    };
    interface HTMLSenMenuItemElement extends Components.SenMenuItem, HTMLStencilElement {
    }
    var HTMLSenMenuItemElement: {
        prototype: HTMLSenMenuItemElement;
        new (): HTMLSenMenuItemElement;
    };
    interface HTMLSenRowElement extends Components.SenRow, HTMLStencilElement {
    }
    var HTMLSenRowElement: {
        prototype: HTMLSenRowElement;
        new (): HTMLSenRowElement;
    };
    interface HTMLSenTableElement extends Components.SenTable, HTMLStencilElement {
    }
    var HTMLSenTableElement: {
        prototype: HTMLSenTableElement;
        new (): HTMLSenTableElement;
    };
    interface HTMLSenTextElement extends Components.SenText, HTMLStencilElement {
    }
    var HTMLSenTextElement: {
        prototype: HTMLSenTextElement;
        new (): HTMLSenTextElement;
    };
    interface HTMLSenTypeaheadElement extends Components.SenTypeahead, HTMLStencilElement {
    }
    var HTMLSenTypeaheadElement: {
        prototype: HTMLSenTypeaheadElement;
        new (): HTMLSenTypeaheadElement;
    };
    interface HTMLElementTagNameMap {
        "sen-alert": HTMLSenAlertElement;
        "sen-app": HTMLSenAppElement;
        "sen-button": HTMLSenButtonElement;
        "sen-button-group": HTMLSenButtonGroupElement;
        "sen-card": HTMLSenCardElement;
        "sen-card-actions": HTMLSenCardActionsElement;
        "sen-card-body": HTMLSenCardBodyElement;
        "sen-card-title": HTMLSenCardTitleElement;
        "sen-col": HTMLSenColElement;
        "sen-fieldset": HTMLSenFieldsetElement;
        "sen-form-field": HTMLSenFormFieldElement;
        "sen-grid": HTMLSenGridElement;
        "sen-input": HTMLSenInputElement;
        "sen-menu": HTMLSenMenuElement;
        "sen-menu-item": HTMLSenMenuItemElement;
        "sen-row": HTMLSenRowElement;
        "sen-table": HTMLSenTableElement;
        "sen-text": HTMLSenTextElement;
        "sen-typeahead": HTMLSenTypeaheadElement;
    }
}
declare namespace LocalJSX {
    interface SenAlert {
        /**
          * Button variant
         */
        "color"?: Color;
    }
    interface SenApp {
    }
    interface SenButton {
        /**
          * Button type
         */
        "buttonType"?: "button" | "submit" | "reset";
        /**
          * Button variant
         */
        "color"?: Color;
        /**
          * Disables the button
         */
        "disabled"?: boolean;
    }
    interface SenButtonGroup {
    }
    interface SenCard {
    }
    interface SenCardActions {
    }
    interface SenCardBody {
    }
    interface SenCardTitle {
    }
    interface SenCol {
        /**
          * The amount to offset the column, in terms of how many columns it should shift to the end of the total available.
         */
        "offset"?: string;
        /**
          * The amount to offset the column for lg screens, in terms of how many columns it should shift to the end of the total available.
         */
        "offsetLg"?: string;
        /**
          * The amount to offset the column for md screens, in terms of how many columns it should shift to the end of the total available.
         */
        "offsetMd"?: string;
        /**
          * The amount to offset the column for sm screens, in terms of how many columns it should shift to the end of the total available.
         */
        "offsetSm"?: string;
        /**
          * The amount to offset the column for xl screens, in terms of how many columns it should shift to the end of the total available.
         */
        "offsetXl"?: string;
        /**
          * The amount to offset the column for xs screens, in terms of how many columns it should shift to the end of the total available.
         */
        "offsetXs"?: string;
        /**
          * The amount to pull the column, in terms of how many columns it should shift to the start of the total available.
         */
        "pull"?: string;
        /**
          * The amount to pull the column for lg screens, in terms of how many columns it should shift to the start of the total available.
         */
        "pullLg"?: string;
        /**
          * The amount to pull the column for md screens, in terms of how many columns it should shift to the start of the total available.
         */
        "pullMd"?: string;
        /**
          * The amount to pull the column for sm screens, in terms of how many columns it should shift to the start of the total available.
         */
        "pullSm"?: string;
        /**
          * The amount to pull the column for xl screens, in terms of how many columns it should shift to the start of the total available.
         */
        "pullXl"?: string;
        /**
          * The amount to pull the column for xs screens, in terms of how many columns it should shift to the start of the total available.
         */
        "pullXs"?: string;
        /**
          * The amount to push the column, in terms of how many columns it should shift to the end of the total available.
         */
        "push"?: string;
        /**
          * The amount to push the column for lg screens, in terms of how many columns it should shift to the end of the total available.
         */
        "pushLg"?: string;
        /**
          * The amount to push the column for md screens, in terms of how many columns it should shift to the end of the total available.
         */
        "pushMd"?: string;
        /**
          * The amount to push the column for sm screens, in terms of how many columns it should shift to the end of the total available.
         */
        "pushSm"?: string;
        /**
          * The amount to push the column for xl screens, in terms of how many columns it should shift to the end of the total available.
         */
        "pushXl"?: string;
        /**
          * The amount to push the column for xs screens, in terms of how many columns it should shift to the end of the total available.
         */
        "pushXs"?: string;
        /**
          * The size of the column, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
         */
        "size"?: string;
        /**
          * The size of the column for lg screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
         */
        "sizeLg"?: string;
        /**
          * The size of the column for md screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
         */
        "sizeMd"?: string;
        /**
          * The size of the column for sm screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
         */
        "sizeSm"?: string;
        /**
          * The size of the column for xl screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
         */
        "sizeXl"?: string;
        /**
          * The size of the column for xs screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
         */
        "sizeXs"?: string;
    }
    interface SenFieldset {
        /**
          * Legend describing the fieldset
         */
        "legend"?: string;
    }
    interface SenFormField {
        /**
          * Label of the form field
         */
        "label"?: string;
    }
    interface SenGrid {
        /**
          * If `true`, the grid will have a fixed width based on the screen size.
         */
        "fixed"?: boolean;
    }
    interface SenInput {
        /**
          * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
         */
        "accept"?: string;
        /**
          * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
         */
        "autocapitalize"?: string;
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete"?: AutocompleteTypes;
        /**
          * Whether auto correction should be enabled when the user is entering/editing the text value.
         */
        "autocorrect"?: "on" | "off";
        /**
          * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        "autofocus"?: boolean;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput"?: boolean;
        /**
          * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
         */
        "clearOnEdit"?: boolean;
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         */
        "debounce"?: number;
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled"?: boolean;
        /**
          * A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.
         */
        "enterkeyhint"?: | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send";
        /**
          * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputmode"?: | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
        /**
          * The maximum value, which must not be less than its minimum (min attribute) value.
         */
        "max"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
         */
        "maxlength"?: number;
        /**
          * The minimum value, which must not be greater than its maximum (max attribute) value.
         */
        "min"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        "minlength"?: number;
        /**
          * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
         */
        "multiple"?: boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Emitted when input is changed
         */
        "onSenChange"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onSenInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored. When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.
         */
        "pattern"?: string;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly"?: boolean;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required"?: boolean;
        /**
          * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
         */
        "size"?: number;
        /**
          * If `true`, the element will have its spelling and grammar checked.
         */
        "spellcheck"?: boolean;
        /**
          * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
         */
        "step"?: string;
        /**
          * The type of control to display. The default type is text.
         */
        "type"?: TextFieldTypes;
        /**
          * The value of the input.
         */
        "value"?: string | number | null;
    }
    interface SenMenu {
        /**
          * Menu items
         */
        "items"?: MenuItem[];
    }
    interface SenMenuItem {
        /**
          * Active state
         */
        "active"?: boolean;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onSenInput"?: (event: CustomEvent<any>) => void;
        /**
          * Value to emit when clicked
         */
        "value"?: any;
    }
    interface SenRow {
    }
    interface SenTable {
        /**
          * Table data, array of table rows
         */
        "data"?: any[];
        /**
          * Table headers
         */
        "headers"?: TableHeaders;
    }
    interface SenText {
        /**
          * The text alignment  Default is left
         */
        "align"?: "left" | "right" | "center" | "justify";
        /**
          * The text block type  One of `p`, `h1`, `h2`, `h3`, `h4`, `h5`
         */
        "kind"?: TextKind;
        /**
          * Leter spacing in any html unit (px, rem, ex, etc.)  Default is normal
         */
        "letterSpacing"?: string;
        /**
          * The font weight  One of `regular`, `bold`, `light`
         */
        "weight"?: "regular" | "bold" | "light";
    }
    interface SenTypeahead {
        /**
          * Emitted when input is changed
         */
        "onSenChange"?: (event: CustomEvent<OptionSelectedEvent>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onSenInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * Options to display in typeahead
         */
        "options"?: TypeaheadOption[];
        /**
          * The value of the input.
         */
        "value"?: string;
    }
    interface IntrinsicElements {
        "sen-alert": SenAlert;
        "sen-app": SenApp;
        "sen-button": SenButton;
        "sen-button-group": SenButtonGroup;
        "sen-card": SenCard;
        "sen-card-actions": SenCardActions;
        "sen-card-body": SenCardBody;
        "sen-card-title": SenCardTitle;
        "sen-col": SenCol;
        "sen-fieldset": SenFieldset;
        "sen-form-field": SenFormField;
        "sen-grid": SenGrid;
        "sen-input": SenInput;
        "sen-menu": SenMenu;
        "sen-menu-item": SenMenuItem;
        "sen-row": SenRow;
        "sen-table": SenTable;
        "sen-text": SenText;
        "sen-typeahead": SenTypeahead;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sen-alert": LocalJSX.SenAlert & JSXBase.HTMLAttributes<HTMLSenAlertElement>;
            "sen-app": LocalJSX.SenApp & JSXBase.HTMLAttributes<HTMLSenAppElement>;
            "sen-button": LocalJSX.SenButton & JSXBase.HTMLAttributes<HTMLSenButtonElement>;
            "sen-button-group": LocalJSX.SenButtonGroup & JSXBase.HTMLAttributes<HTMLSenButtonGroupElement>;
            "sen-card": LocalJSX.SenCard & JSXBase.HTMLAttributes<HTMLSenCardElement>;
            "sen-card-actions": LocalJSX.SenCardActions & JSXBase.HTMLAttributes<HTMLSenCardActionsElement>;
            "sen-card-body": LocalJSX.SenCardBody & JSXBase.HTMLAttributes<HTMLSenCardBodyElement>;
            "sen-card-title": LocalJSX.SenCardTitle & JSXBase.HTMLAttributes<HTMLSenCardTitleElement>;
            "sen-col": LocalJSX.SenCol & JSXBase.HTMLAttributes<HTMLSenColElement>;
            "sen-fieldset": LocalJSX.SenFieldset & JSXBase.HTMLAttributes<HTMLSenFieldsetElement>;
            "sen-form-field": LocalJSX.SenFormField & JSXBase.HTMLAttributes<HTMLSenFormFieldElement>;
            "sen-grid": LocalJSX.SenGrid & JSXBase.HTMLAttributes<HTMLSenGridElement>;
            "sen-input": LocalJSX.SenInput & JSXBase.HTMLAttributes<HTMLSenInputElement>;
            "sen-menu": LocalJSX.SenMenu & JSXBase.HTMLAttributes<HTMLSenMenuElement>;
            "sen-menu-item": LocalJSX.SenMenuItem & JSXBase.HTMLAttributes<HTMLSenMenuItemElement>;
            "sen-row": LocalJSX.SenRow & JSXBase.HTMLAttributes<HTMLSenRowElement>;
            "sen-table": LocalJSX.SenTable & JSXBase.HTMLAttributes<HTMLSenTableElement>;
            "sen-text": LocalJSX.SenText & JSXBase.HTMLAttributes<HTMLSenTextElement>;
            "sen-typeahead": LocalJSX.SenTypeahead & JSXBase.HTMLAttributes<HTMLSenTypeaheadElement>;
        }
    }
}
