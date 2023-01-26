var of=Object.defineProperty;var sf=(e,t)=>{for(var n in t)of(e,n,{get:t[n],enumerable:!0})};var T={BUILD_TIME:"2023-01-26T21:41:33.409Z",VERSION:"0.2.25",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
  white-space: pre-wrap !important;
}

.immersive-translate-pdf-target-container {
  position: absolute;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    sans-serif;
  top: 0;
  width: 600px;
  height: 100%;
  z-index: 2;
  line-height: 1.3;
  font-size: 16px;
}
.immersive-translate-pdf-target-container
  span.immersive-translate-target-wrapper {
  color: rgb(0, 0, 0);
  white-space: normal;
  position: absolute;
}

.immersive-translate-pdf-target-container
  span.immersive-translate-target-wrapper
  span {
  color: inherit;
  white-space: inherit;
  position: unset;
}

.immersive-translate-target-translation-block-wrapper {
  margin: 8px 0 !important;
  display: block;
}
.immersive-translate-target-translation-pdf-block-wrapper {
  margin: 0 !important;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper {
}
.immersive-translate-target-translation-theme-underline-inner {
  border-bottom: 1px solid #72ece9 !important;
}

.immersive-translate-target-translation-block-wrapper-theme-dashedBorder {
  border: 1px dashed rgb(148 163 184) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed rgb(148 163 184) !important;
  padding: 2px;
}

.immersive-translate-target-translation-theme-thinDashed-inner {
  border-bottom: 1px dashed #ff374f !important;
}

.immersive-translate-target-translation-theme-dotted-inner {
  background-repeat: repeat-x;
  background-image: linear-gradient(
    to right,
    currentColor 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  padding-bottom: 3px;
}

.immersive-translate-target-translation-theme-dashed-inner {
  background-repeat: repeat-x !important;
  background: linear-gradient(
      to right,
      #59c1bd 0%,
      #59c1bd 50%,
      transparent 50%,
      transparent 100%
    )
    repeat-x left bottom;
  background-size: 8px 2px;
  padding-bottom: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-dividingLine::before {
  content: "";
  display: block;
  max-width: 80px;
  width: 10%;
  border-top: 1px dashed currentColor;
  padding-top: 0.5em;
}

.immersive-translate-target-translation-theme-highlight-inner {
  background: rgb(255, 255, 0);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
.immersive-translate-target-translation-block-wrapper-theme-marker {
  line-height: 1.5em;
}

.immersive-translate-target-translation-theme-marker-inner {
  /* TODO: add more texture */
  background: linear-gradient(
    to right,
    rgba(255, 225, 0, 0.1),
    rgba(251, 218, 65, 0.9) 3%,
    rgba(252, 210, 23, 0.9) 35%,
    rgba(251, 218, 65, 0.9) 70%,
    rgba(251, 218, 65, 0.8) 95%,
    rgba(255, 225, 0, 0.3)
  );
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.immersive-translate-target-translation-theme-weakening {
  opacity: 0.4 !important;
}

.immersive-translate-target-translation-theme-italic {
  font-style: italic !important;
}

.immersive-translate-target-translation-theme-bold {
  font-weight: bold !important;
}

.immersive-translate-target-translation-block-wrapper-theme-paper {
  margin: 8px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px 32px;
  display: block;
}

.immersive-translate-target-translation-block-wrapper-theme-blockquote {
  border-left: 4px solid #cc3355 !important;
  padding-left: 12px !important;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  display: block;
}

.immersive-translate-target-translation-theme-mask-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}
.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}
.immersive-translate-text {
  font-size: 15px !important;
}

.immersive-translate-error {
  color: red;
}
.immersive-translate-clickable-button {
  align-items: normal;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(0, 0, 238);
  border-style: none;
  box-sizing: content-box;
  color: rgb(0, 0, 238);
  cursor: pointer;
  display: inline;
  font: inherit;
  height: auto;
  padding: 0;
  perspective-origin: 0 0;
  text-align: start;
  transform-origin: 0 0;
  width: auto;
  -moz-appearance: none;
  appearance: none;
  -webkit-logical-height: 1em; /* Chrome ignores auto, so we have to use this hack to set the correct height  */
  -webkit-logical-width: auto; /* Chrome ignores auto, but here for completeness */
}

.immersive-translate-loading {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(0, 0, 0, 0.25) solid !important;
  border-top: 2px rgba(0, 0, 0, 1) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
}
/* dark mode for loading */

@media only screen and (prefers-color-scheme: dark) {
  .immersive-translate-loading {
    border: 2px rgba(255, 255, 255, 0.25) solid !important;
    border-top: 2px rgba(255, 255, 255, 1) solid !important;
  }

  .immersive-translate-target-translation-theme-marker-inner {
    background: linear-gradient(
      to right,
      rgba(255, 225, 0, 0.1),
      rgba(102, 99, 78, 0.9) 3%,
      rgba(102, 99, 78, 0.8) 97%,
      rgba(255, 225, 0, 0.3)
    );
  }
}

.immersive-translate-tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dashed #000; /* little indicater to indicate it's hoverable */
}
.immersive-translate-tooltip:before {
  content: attr(data-immersive-translate-tooltip-text); /* here's the magic */
  position: absolute;
  z-index: 100000000000;

  /* vertically center */
  top: 50%;
  transform: translateY(-50%);

  /* move to right */
  left: 100%;
  margin-left: 15px; /* and add a small left margin */

  /* basic styles */
  width: max-content;
  max-width: 250px;
  word-wrap: break-word;
  white-space: pre-line;
  padding: 10px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  text-align: center;

  display: none; /* hide by default */
}
.immersive-translate-tooltip:hover:before {
  display: block;
}

@-webkit-keyframes immersive-translate-loading-animation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
@keyframes immersive-translate-loading-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`,IMMERSIVE_TRANSLATE_PICO_CSS:`@charset "UTF-8";
/*!
 * Pico.css v1.5.6 (https://picocss.com)
 * Copyright 2019-2022 - Licensed under MIT
 */
/**
 * Theme: default
 */
#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 0.25rem;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 1rem;
  --typography-spacing-vertical: 1.5rem;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 0.75rem;
  --form-element-spacing-horizontal: 1rem;
  --nav-element-spacing-vertical: 1rem;
  --nav-element-spacing-horizontal: 0.5rem;
  --nav-link-spacing-vertical: 0.5rem;
  --nav-link-spacing-horizontal: 0.5rem;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(0.25rem);
}
@media (min-width: 576px) {
  #mount {
    --font-size: 17px;
  }
}
@media (min-width: 768px) {
  #mount {
    --font-size: 18px;
  }
}
@media (min-width: 992px) {
  #mount {
    --font-size: 19px;
  }
}
@media (min-width: 1200px) {
  #mount {
    --font-size: 20px;
  }
}

@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3);
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3.5);
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 4);
  }
}

@media (min-width: 576px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}
@media (min-width: 992px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.75);
  }
}
@media (min-width: 1200px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 2);
  }
}

dialog > article {
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
}
@media (min-width: 576px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 3);
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}

a {
  --text-decoration: none;
}
a.secondary,
a.contrast {
  --text-decoration: underline;
}

small {
  --font-size: 0.875em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  --font-weight: 700;
}

h1 {
  --font-size: 2rem;
  --typography-spacing-vertical: 3rem;
}

h2 {
  --font-size: 1.75rem;
  --typography-spacing-vertical: 2.625rem;
}

h3 {
  --font-size: 1.5rem;
  --typography-spacing-vertical: 2.25rem;
}

h4 {
  --font-size: 1.25rem;
  --typography-spacing-vertical: 1.874rem;
}

h5 {
  --font-size: 1.125rem;
  --typography-spacing-vertical: 1.6875rem;
}

[type="checkbox"],
[type="radio"] {
  --border-width: 2px;
}

[type="checkbox"][role="switch"] {
  --border-width: 3px;
}

thead th,
thead td,
tfoot th,
tfoot td {
  --border-width: 3px;
}

:not(thead, tfoot) > * > td {
  --font-size: 0.875em;
}

pre,
code,
kbd,
samp {
  --font-family: "Menlo", "Consolas", "Roboto Mono", "Ubuntu Monospace",
    "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

kbd {
  --font-weight: bolder;
}

[data-theme="light"],
#mount:not([data-theme="dark"]) {
  --background-color: #fff;
  --color: hsl(205deg, 20%, 32%);
  --h1-color: hsl(205deg, 30%, 15%);
  --h2-color: #24333e;
  --h3-color: hsl(205deg, 25%, 23%);
  --h4-color: #374956;
  --h5-color: hsl(205deg, 20%, 32%);
  --h6-color: #4d606d;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: hsl(205deg, 20%, 94%);
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 90%, 32%);
  --primary-focus: rgba(16, 149, 193, 0.125);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 20%, 32%);
  --secondary-focus: rgba(89, 107, 120, 0.125);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 30%, 15%);
  --contrast-hover: #000;
  --contrast-focus: rgba(89, 107, 120, 0.125);
  --contrast-inverse: #fff;
  --mark-background-color: #fff2ca;
  --mark-color: #543a26;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: transparent;
  --form-element-border-color: hsl(205deg, 14%, 68%);
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: transparent;
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 18%, 86%);
  --form-element-disabled-border-color: hsl(205deg, 14%, 68%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #c62828;
  --form-element-invalid-active-border-color: #d32f2f;
  --form-element-invalid-focus-color: rgba(211, 47, 47, 0.125);
  --form-element-valid-border-color: #388e3c;
  --form-element-valid-active-border-color: #43a047;
  --form-element-valid-focus-color: rgba(67, 160, 71, 0.125);
  --switch-background-color: hsl(205deg, 16%, 77%);
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: hsl(205deg, 18%, 86%);
  --range-active-border-color: hsl(205deg, 16%, 77%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: #f6f8f9;
  --code-background-color: hsl(205deg, 20%, 94%);
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 40%, 50%);
  --code-property-color: hsl(185deg, 40%, 40%);
  --code-value-color: hsl(40deg, 20%, 50%);
  --code-comment-color: hsl(205deg, 14%, 68%);
  --accordion-border-color: var(--muted-border-color);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: var(--background-color);
  --card-border-color: var(--muted-border-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(27, 40, 50, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(27, 40, 50, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(27, 40, 50, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(27, 40, 50, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(27, 40, 50, 0.04302),
    0.5rem 1rem 6rem rgba(27, 40, 50, 0.06),
    0 0 0 0.0625rem rgba(27, 40, 50, 0.015);
  --card-sectionning-background-color: #fbfbfc;
  --dropdown-background-color: #fbfbfc;
  --dropdown-border-color: #e1e6eb;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: hsl(205deg, 20%, 94%);
  --modal-overlay-background-color: rgba(213, 220, 226, 0.7);
  --progress-background-color: hsl(205deg, 18%, 86%);
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(198, 40, 40)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(56, 142, 60)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: light;
}

@media only screen and (prefers-color-scheme: dark) {
  #mount:not([data-theme="light"]) {
    --background-color: #11191f;
    --color: hsl(205deg, 16%, 77%);
    --h1-color: hsl(205deg, 20%, 94%);
    --h2-color: #e1e6eb;
    --h3-color: hsl(205deg, 18%, 86%);
    --h4-color: #c8d1d8;
    --h5-color: hsl(205deg, 16%, 77%);
    --h6-color: #afbbc4;
    --muted-color: hsl(205deg, 10%, 50%);
    --muted-border-color: #1f2d38;
    --primary: hsl(195deg, 85%, 41%);
    --primary-hover: hsl(195deg, 80%, 50%);
    --primary-focus: rgba(16, 149, 193, 0.25);
    --primary-inverse: #fff;
    --secondary: hsl(205deg, 15%, 41%);
    --secondary-hover: hsl(205deg, 10%, 50%);
    --secondary-focus: rgba(115, 130, 140, 0.25);
    --secondary-inverse: #fff;
    --contrast: hsl(205deg, 20%, 94%);
    --contrast-hover: #fff;
    --contrast-focus: rgba(115, 130, 140, 0.25);
    --contrast-inverse: #000;
    --mark-background-color: #d1c284;
    --mark-color: #11191f;
    --ins-color: #388e3c;
    --del-color: #c62828;
    --blockquote-border-color: var(--muted-border-color);
    --blockquote-footer-color: var(--muted-color);
    --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --form-element-background-color: #11191f;
    --form-element-border-color: #374956;
    --form-element-color: var(--color);
    --form-element-placeholder-color: var(--muted-color);
    --form-element-active-background-color: var(
      --form-element-background-color
    );
    --form-element-active-border-color: var(--primary);
    --form-element-focus-color: var(--primary-focus);
    --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
    --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
    --form-element-disabled-opacity: 0.5;
    --form-element-invalid-border-color: #b71c1c;
    --form-element-invalid-active-border-color: #c62828;
    --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
    --form-element-valid-border-color: #2e7d32;
    --form-element-valid-active-border-color: #388e3c;
    --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
    --switch-background-color: #374956;
    --switch-color: var(--primary-inverse);
    --switch-checked-background-color: var(--primary);
    --range-border-color: #24333e;
    --range-active-border-color: hsl(205deg, 25%, 23%);
    --range-thumb-border-color: var(--background-color);
    --range-thumb-color: var(--secondary);
    --range-thumb-hover-color: var(--secondary-hover);
    --range-thumb-active-color: var(--primary);
    --table-border-color: var(--muted-border-color);
    --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
    --code-background-color: #18232c;
    --code-color: var(--muted-color);
    --code-kbd-background-color: var(--contrast);
    --code-kbd-color: var(--contrast-inverse);
    --code-tag-color: hsl(330deg, 30%, 50%);
    --code-property-color: hsl(185deg, 30%, 50%);
    --code-value-color: hsl(40deg, 10%, 50%);
    --code-comment-color: #4d606d;
    --accordion-border-color: var(--muted-border-color);
    --accordion-active-summary-color: var(--primary);
    --accordion-close-summary-color: var(--color);
    --accordion-open-summary-color: var(--muted-color);
    --card-background-color: #141e26;
    --card-border-color: var(--card-background-color);
    --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
      0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
      0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
      0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
      0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
      0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
    --card-sectionning-background-color: #18232c;
    --dropdown-background-color: hsl(205deg, 30%, 15%);
    --dropdown-border-color: #24333e;
    --dropdown-box-shadow: var(--card-box-shadow);
    --dropdown-color: var(--color);
    --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
    --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
    --progress-background-color: #24333e;
    --progress-color: var(--primary);
    --loading-spinner-opacity: 0.5;
    --tooltip-background-color: var(--contrast);
    --tooltip-color: var(--contrast-inverse);
    --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
    --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
    --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
    --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
    --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
    --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    color-scheme: dark;
  }
}
[data-theme="dark"] {
  --background-color: #11191f;
  --color: hsl(205deg, 16%, 77%);
  --h1-color: hsl(205deg, 20%, 94%);
  --h2-color: #e1e6eb;
  --h3-color: hsl(205deg, 18%, 86%);
  --h4-color: #c8d1d8;
  --h5-color: hsl(205deg, 16%, 77%);
  --h6-color: #afbbc4;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: #1f2d38;
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 80%, 50%);
  --primary-focus: rgba(16, 149, 193, 0.25);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 10%, 50%);
  --secondary-focus: rgba(115, 130, 140, 0.25);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 20%, 94%);
  --contrast-hover: #fff;
  --contrast-focus: rgba(115, 130, 140, 0.25);
  --contrast-inverse: #000;
  --mark-background-color: #d1c284;
  --mark-color: #11191f;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: #11191f;
  --form-element-border-color: #374956;
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: var(--form-element-background-color);
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
  --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #b71c1c;
  --form-element-invalid-active-border-color: #c62828;
  --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
  --form-element-valid-border-color: #2e7d32;
  --form-element-valid-active-border-color: #388e3c;
  --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
  --switch-background-color: #374956;
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: #24333e;
  --range-active-border-color: hsl(205deg, 25%, 23%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
  --code-background-color: #18232c;
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 30%, 50%);
  --code-property-color: hsl(185deg, 30%, 50%);
  --code-value-color: hsl(40deg, 10%, 50%);
  --code-comment-color: #4d606d;
  --accordion-border-color: var(--muted-border-color);
  --accordion-active-summary-color: var(--primary);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: #141e26;
  --card-border-color: var(--card-background-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
    0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
  --card-sectionning-background-color: #18232c;
  --dropdown-background-color: hsl(205deg, 30%, 15%);
  --dropdown-border-color: #24333e;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
  --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
  --progress-background-color: #24333e;
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: dark;
}

progress,
[type="checkbox"],
[type="radio"],
[type="range"] {
  accent-color: var(--primary);
}

/**
 * Document
 * Content-box & Responsive typography
 */
*,
*::before,
*::after {
  box-sizing: border-box;
  background-repeat: no-repeat;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

:where(#mount) {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  background-color: var(--background-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-family: var(--font-family);
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
  cursor: default;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}

/**
 * Sectioning
 * Container and responsive spacings for header, main, footer
 */
main {
  display: block;
}

#mount {
  width: 100%;
  margin: 0;
}
#mount > header,
#mount > main,
#mount > footer {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
}
@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 1130px;
  }
}

/**
* Container
*/
.container,
.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--spacing);
  padding-left: var(--spacing);
}

@media (min-width: 576px) {
  .container {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1130px;
  }
}

/**
 * Section
 * Responsive spacings for section
 */
section {
  margin-bottom: var(--block-spacing-vertical);
}

/**
* Grid
* Minimal grid system with auto-layout columns
*/
.grid {
  grid-column-gap: var(--grid-spacing-horizontal);
  grid-row-gap: var(--grid-spacing-vertical);
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
}
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(0%, 1fr));
  }
}
.grid > * {
  min-width: 0;
}

/**
 * Horizontal scroller (<figure>)
 */
figure {
  display: block;
  margin: 0;
  padding: 0;
  overflow-x: auto;
}
figure figcaption {
  padding: calc(var(--spacing) * 0.5) 0;
  color: var(--muted-color);
}

/**
 * Typography
 */
b,
strong {
  font-weight: bolder;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

address,
blockquote,
dl,
figure,
form,
ol,
p,
pre,
table,
ul {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: var(--font-size);
}

a,
[role="link"] {
  --color: var(--primary);
  --background-color: transparent;
  outline: none;
  background-color: var(--background-color);
  color: var(--color);
  -webkit-text-decoration: var(--text-decoration);
  text-decoration: var(--text-decoration);
  transition: background-color var(--transition), color var(--transition),
    box-shadow var(--transition), -webkit-text-decoration var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition),
    -webkit-text-decoration var(--transition);
}
a:is([aria-current], :hover, :active, :focus),
[role="link"]:is([aria-current], :hover, :active, :focus) {
  --color: var(--primary-hover);
  --text-decoration: underline;
}
a:focus,
[role="link"]:focus {
  --background-color: var(--primary-focus);
}
a.secondary,
[role="link"].secondary {
  --color: var(--secondary);
}
a.secondary:is([aria-current], :hover, :active, :focus),
[role="link"].secondary:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}
a.secondary:focus,
[role="link"].secondary:focus {
  --background-color: var(--secondary-focus);
}
a.contrast,
[role="link"].contrast {
  --color: var(--contrast);
}
a.contrast:is([aria-current], :hover, :active, :focus),
[role="link"].contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}
a.contrast:focus,
[role="link"].contrast:focus {
  --background-color: var(--contrast-focus);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  font-family: var(--font-family);
}

h1 {
  --color: var(--h1-color);
}

h2 {
  --color: var(--h2-color);
}

h3 {
  --color: var(--h3-color);
}

h4 {
  --color: var(--h4-color);
}

h5 {
  --color: var(--h5-color);
}

h6 {
  --color: var(--h6-color);
}

:where(address, blockquote, dl, figure, form, ol, p, pre, table, ul)
  ~ :is(h1, h2, h3, h4, h5, h6) {
  margin-top: var(--typography-spacing-vertical);
}

hgroup,
.headings {
  margin-bottom: var(--typography-spacing-vertical);
}
hgroup > *,
.headings > * {
  margin-bottom: 0;
}
hgroup > *:last-child,
.headings > *:last-child {
  --color: var(--muted-color);
  --font-weight: unset;
  font-size: 1rem;
  font-family: unset;
}

p {
  margin-bottom: var(--typography-spacing-vertical);
}

small {
  font-size: var(--font-size);
}

:where(dl, ol, ul) {
  padding-right: 0;
  padding-left: var(--spacing);
  -webkit-padding-start: var(--spacing);
  padding-inline-start: var(--spacing);
  -webkit-padding-end: 0;
  padding-inline-end: 0;
}
:where(dl, ol, ul) li {
  margin-bottom: calc(var(--typography-spacing-vertical) * 0.25);
}

:where(dl, ol, ul) :is(dl, ol, ul) {
  margin: 0;
  margin-top: calc(var(--typography-spacing-vertical) * 0.25);
}

ul li {
  list-style: square;
}

mark {
  padding: 0.125rem 0.25rem;
  background-color: var(--mark-background-color);
  color: var(--mark-color);
  vertical-align: baseline;
}

blockquote {
  display: block;
  margin: var(--typography-spacing-vertical) 0;
  padding: var(--spacing);
  border-right: none;
  border-left: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-start: 0.25rem solid var(--blockquote-border-color);
  border-inline-start: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-end: none;
  border-inline-end: none;
}
blockquote footer {
  margin-top: calc(var(--typography-spacing-vertical) * 0.5);
  color: var(--blockquote-footer-color);
}

abbr[title] {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}

ins {
  color: var(--ins-color);
  text-decoration: none;
}

del {
  color: var(--del-color);
}

::-moz-selection {
  background-color: var(--primary-focus);
}

::selection {
  background-color: var(--primary-focus);
}

/**
 * Embedded content
 */
:where(audio, canvas, iframe, img, svg, video) {
  vertical-align: middle;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

:where(iframe) {
  border-style: none;
}

img {
  max-width: 100%;
  height: auto;
  border-style: none;
}

:where(svg:not([fill])) {
  fill: currentColor;
}

svg:not(#mount) {
  overflow: hidden;
}

/**
 * Button
 */
button {
  margin: 0;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
  display: block;
  width: 100%;
  margin-bottom: var(--spacing);
}

[role="button"] {
  display: inline-block;
  text-decoration: none;
}

button,
input[type="submit"],
input[type="button"],
input[type="reset"],
[role="button"] {
  --background-color: var(--primary);
  --border-color: var(--primary);
  --color: var(--primary-inverse);
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
button:is([aria-current], :hover, :active, :focus),
input[type="submit"]:is([aria-current], :hover, :active, :focus),
input[type="button"]:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus),
[role="button"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--primary-hover);
  --border-color: var(--primary-hover);
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  --color: var(--primary-inverse);
}
button:focus,
input[type="submit"]:focus,
input[type="button"]:focus,
input[type="reset"]:focus,
[role="button"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--primary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary,
input[type="reset"] {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:focus,
input[type="reset"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--secondary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast {
  --background-color: var(--contrast);
  --border-color: var(--contrast);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--contrast-hover);
  --border-color: var(--contrast-hover);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--contrast-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline,
input[type="reset"].outline {
  --background-color: transparent;
  --color: var(--primary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --background-color: transparent;
  --color: var(--primary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary,
input[type="reset"].outline {
  --color: var(--secondary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast {
  --color: var(--contrast);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}

:where(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  )[disabled],
:where(fieldset[disabled])
  :is(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  ),
a[role="button"]:not([href]) {
  opacity: 0.5;
  pointer-events: none;
}

/**
 * Form elements
 */
input,
optgroup,
select,
textarea {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height);
  font-family: inherit;
  letter-spacing: inherit;
}

input {
  overflow: visible;
}

select {
  text-transform: none;
}

legend {
  max-width: 100%;
  padding: 0;
  color: inherit;
  white-space: normal;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  padding: 0;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

:-moz-focusring {
  outline: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}

::-ms-expand {
  display: none;
}

[type="file"],
[type="range"] {
  padding: 0;
  border-width: 0;
}

input:not([type="checkbox"], [type="radio"], [type="range"]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
}

fieldset {
  margin: 0;
  margin-bottom: var(--spacing);
  padding: 0;
  border: 0;
}

label,
fieldset legend {
  display: block;
  margin-bottom: calc(var(--spacing) * 0.25);
  font-weight: var(--form-label-font-weight, var(--font-weight));
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  width: 100%;
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]),
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
}

input,
select,
textarea {
  --background-color: var(--form-element-background-color);
  --border-color: var(--form-element-border-color);
  --color: var(--form-element-color);
  --box-shadow: none;
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="checkbox"],
    [type="radio"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --background-color: var(--form-element-active-background-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="switch"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --border-color: var(--form-element-active-border-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="range"],
    [type="file"],
    [readonly]
  ):focus,
select:focus,
textarea:focus {
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}

input:not([type="submit"], [type="button"], [type="reset"])[disabled],
select[disabled],
textarea[disabled],
:where(fieldset[disabled])
  :is(
    input:not([type="submit"], [type="button"], [type="reset"]),
    select,
    textarea
  ) {
  --background-color: var(--form-element-disabled-background-color);
  --border-color: var(--form-element-disabled-border-color);
  opacity: var(--form-element-disabled-opacity);
  pointer-events: none;
}

:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid] {
  padding-right: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal) !important;
  padding-inline-start: var(--form-element-spacing-horizontal) !important;
  -webkit-padding-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-inline-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="false"] {
  background-image: var(--icon-valid);
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="true"] {
  background-image: var(--icon-invalid);
}
:where(input, select, textarea)[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
:where(input, select, textarea)[aria-invalid="false"]:is(:active, :focus) {
  --border-color: var(--form-element-valid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-valid-focus-color) !important;
}
:where(input, select, textarea)[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}
:where(input, select, textarea)[aria-invalid="true"]:is(:active, :focus) {
  --border-color: var(--form-element-invalid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width)
    var(--form-element-invalid-focus-color) !important;
}

[dir="rtl"]
  :where(input, select, textarea):not([type="checkbox"], [type="radio"]):is(
    [aria-invalid],
    [aria-invalid="true"],
    [aria-invalid="false"]
  ) {
  background-position: center left 0.75rem;
}

input::placeholder,
input::-webkit-input-placeholder,
textarea::placeholder,
textarea::-webkit-input-placeholder,
select:invalid {
  color: var(--form-element-placeholder-color);
  opacity: 1;
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  margin-bottom: var(--spacing);
}

select::-ms-expand {
  border: 0;
  background-color: transparent;
}
select:not([multiple], [size]) {
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal);
  padding-inline-start: var(--form-element-spacing-horizontal);
  -webkit-padding-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  background-image: var(--icon-chevron);
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}

[dir="rtl"] select:not([multiple], [size]) {
  background-position: center left 0.75rem;
}

:where(input, select, textarea) + small {
  display: block;
  width: 100%;
  margin-top: calc(var(--spacing) * -0.75);
  margin-bottom: var(--spacing);
  color: var(--muted-color);
}

label > :where(input, select, textarea) {
  margin-top: calc(var(--spacing) * 0.25);
}

/**
 * Form elements
 * Checkboxes & Radios
 */
[type="checkbox"],
[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  margin-top: -0.125em;
  margin-right: 0.375em;
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: 0.375em;
  margin-inline-end: 0.375em;
  border-width: var(--border-width);
  font-size: inherit;
  vertical-align: middle;
  cursor: pointer;
}
[type="checkbox"]::-ms-check,
[type="radio"]::-ms-check {
  display: none;
}
[type="checkbox"]:checked,
[type="checkbox"]:checked:active,
[type="checkbox"]:checked:focus,
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-checkbox);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}
[type="checkbox"] ~ label,
[type="radio"] ~ label {
  display: inline-block;
  margin-right: 0.375em;
  margin-bottom: 0;
  cursor: pointer;
}

[type="checkbox"]:indeterminate {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-minus);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}

[type="radio"] {
  border-radius: 50%;
}
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary-inverse);
  border-width: 0.35em;
  background-image: none;
}

[type="checkbox"][role="switch"] {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
  --color: var(--switch-color);
  width: 2.25em;
  height: 1.25em;
  border: var(--border-width) solid var(--border-color);
  border-radius: 1.25em;
  background-color: var(--background-color);
  line-height: 1.25em;
}
[type="checkbox"][role="switch"]:focus {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
}
[type="checkbox"][role="switch"]:checked {
  --background-color: var(--switch-checked-background-color);
  --border-color: var(--switch-checked-background-color);
}
[type="checkbox"][role="switch"]:before {
  display: block;
  width: calc(1.25em - (var(--border-width) * 2));
  height: 100%;
  border-radius: 50%;
  background-color: var(--color);
  content: "";
  transition: margin 0.1s ease-in-out;
}
[type="checkbox"][role="switch"]:checked {
  background-image: none;
}
[type="checkbox"][role="switch"]:checked::before {
  margin-left: calc(1.125em - var(--border-width));
  -webkit-margin-start: calc(1.125em - var(--border-width));
  margin-inline-start: calc(1.125em - var(--border-width));
}

[type="checkbox"][aria-invalid="false"],
[type="checkbox"]:checked[aria-invalid="false"],
[type="radio"][aria-invalid="false"],
[type="radio"]:checked[aria-invalid="false"],
[type="checkbox"][role="switch"][aria-invalid="false"],
[type="checkbox"][role="switch"]:checked[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
[type="checkbox"][aria-invalid="true"],
[type="checkbox"]:checked[aria-invalid="true"],
[type="radio"][aria-invalid="true"],
[type="radio"]:checked[aria-invalid="true"],
[type="checkbox"][role="switch"][aria-invalid="true"],
[type="checkbox"][role="switch"]:checked[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}

/**
 * Form elements
 * Alternatives input types (Not Checkboxes & Radios)
 */
[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
[type="color"]::-moz-focus-inner {
  padding: 0;
}
[type="color"]::-webkit-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}
[type="color"]::-moz-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]):is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  --icon-position: 0.75rem;
  --icon-width: 1rem;
  padding-right: calc(var(--icon-width) + var(--icon-position));
  background-image: var(--icon-date);
  background-position: center right var(--icon-position);
  background-size: var(--icon-width) auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="time"] {
  background-image: var(--icon-time);
}

[type="date"]::-webkit-calendar-picker-indicator,
[type="datetime-local"]::-webkit-calendar-picker-indicator,
[type="month"]::-webkit-calendar-picker-indicator,
[type="time"]::-webkit-calendar-picker-indicator,
[type="week"]::-webkit-calendar-picker-indicator {
  width: var(--icon-width);
  margin-right: calc(var(--icon-width) * -1);
  margin-left: var(--icon-position);
  opacity: 0;
}

[dir="rtl"]
  :is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  text-align: right;
}

[type="file"] {
  --color: var(--muted-color);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) 0;
  border: 0;
  border-radius: 0;
  background: none;
}
[type="file"]::file-selector-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::file-selector-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-webkit-file-upload-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-webkit-file-upload-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-ms-browse {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-ms-browse:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}

[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.25rem;
  background: none;
}
[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -webkit-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-moz-range-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -moz-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-ms-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -ms-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -moz-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]:hover,
[type="range"]:focus {
  --range-border-color: var(--range-active-border-color);
  --range-thumb-color: var(--range-thumb-hover-color);
}
[type="range"]:active {
  --range-thumb-color: var(--range-thumb-active-color);
}
[type="range"]:active::-webkit-slider-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-moz-range-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-ms-thumb {
  transform: scale(1.25);
}

input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  -webkit-padding-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  padding-inline-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  border-radius: 5rem;
  background-image: var(--icon-search);
  background-position: center left 1.125rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  -webkit-padding-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  padding-inline-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  background-position: center left 1.125rem, center right 0.75rem;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="false"] {
  background-image: var(--icon-search), var(--icon-valid);
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="true"] {
  background-image: var(--icon-search), var(--icon-invalid);
}

[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}

[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  background-position: center right 1.125rem;
}
[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  background-position: center right 1.125rem, center left 0.75rem;
}

/**
 * Table
 */
:where(table) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}

th,
td {
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-bottom: var(--border-width) solid var(--table-border-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  text-align: left;
  text-align: start;
}

tfoot th,
tfoot td {
  border-top: var(--border-width) solid var(--table-border-color);
  border-bottom: 0;
}

table[role="grid"] tbody tr:nth-child(odd) {
  background-color: var(--table-row-stripped-background-color);
}

/**
 * Code
 */
pre,
code,
kbd,
samp {
  font-size: 0.875em;
  font-family: var(--font-family);
}

pre {
  -ms-overflow-style: scrollbar;
  overflow: auto;
}

pre,
code,
kbd {
  border-radius: var(--border-radius);
  background: var(--code-background-color);
  color: var(--code-color);
  font-weight: var(--font-weight);
  line-height: initial;
}

code,
kbd {
  display: inline-block;
  padding: 0.375rem 0.5rem;
}

pre {
  display: block;
  margin-bottom: var(--spacing);
  overflow-x: auto;
}
pre > code {
  display: block;
  padding: var(--spacing);
  background: none;
  font-size: 14px;
  line-height: var(--line-height);
}

code b {
  color: var(--code-tag-color);
  font-weight: var(--font-weight);
}
code i {
  color: var(--code-property-color);
  font-style: normal;
}
code u {
  color: var(--code-value-color);
  text-decoration: none;
}
code em {
  color: var(--code-comment-color);
  font-style: normal;
}

kbd {
  background-color: var(--code-kbd-background-color);
  color: var(--code-kbd-color);
  vertical-align: baseline;
}

/**
 * Miscs
 */
hr {
  height: 0;
  border: 0;
  border-top: 1px solid var(--muted-border-color);
  color: inherit;
}

[hidden],
template {
  display: none !important;
}

canvas {
  display: inline-block;
}

/**
 * Accordion (<details>)
 */
details {
  display: block;
  margin-bottom: var(--spacing);
  padding-bottom: var(--spacing);
  border-bottom: var(--border-width) solid var(--accordion-border-color);
}
details summary {
  line-height: 1rem;
  list-style-type: none;
  cursor: pointer;
  transition: color var(--transition);
}
details summary:not([role]) {
  color: var(--accordion-close-summary-color);
}
details summary::-webkit-details-marker {
  display: none;
}
details summary::marker {
  display: none;
}
details summary::-moz-list-bullet {
  list-style-type: none;
}
details summary::after {
  display: block;
  width: 1rem;
  height: 1rem;
  -webkit-margin-start: calc(var(--spacing, 1rem) * 0.5);
  margin-inline-start: calc(var(--spacing, 1rem) * 0.5);
  float: right;
  transform: rotate(-90deg);
  background-image: var(--icon-chevron);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
  transition: transform var(--transition);
}
details summary:focus {
  outline: none;
}
details summary:focus:not([role="button"]) {
  color: var(--accordion-active-summary-color);
}
details summary[role="button"] {
  width: 100%;
  text-align: left;
}
details summary[role="button"]::after {
  height: calc(1rem * var(--line-height, 1.5));
  background-image: var(--icon-chevron-button);
}
details summary[role="button"]:not(.outline).contrast::after {
  background-image: var(--icon-chevron-button-inverse);
}
details[open] > summary {
  margin-bottom: calc(var(--spacing));
}
details[open] > summary:not([role]):not(:focus) {
  color: var(--accordion-open-summary-color);
}
details[open] > summary::after {
  transform: rotate(0);
}

[dir="rtl"] details summary {
  text-align: right;
}
[dir="rtl"] details summary::after {
  float: left;
  background-position: left center;
}

/**
 * Card (<article>)
 */
article {
  margin: var(--block-spacing-vertical) 0;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
  border-radius: var(--border-radius);
  background: var(--card-background-color);
  box-shadow: var(--card-box-shadow);
}
article > header,
article > footer {
  margin-right: calc(var(--block-spacing-horizontal) * -1);
  margin-left: calc(var(--block-spacing-horizontal) * -1);
  padding: calc(var(--block-spacing-vertical) * 0.66)
    var(--block-spacing-horizontal);
  background-color: var(--card-sectionning-background-color);
}
article > header {
  margin-top: calc(var(--block-spacing-vertical) * -1);
  margin-bottom: var(--block-spacing-vertical);
  border-bottom: var(--border-width) solid var(--card-border-color);
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
}
article > footer {
  margin-top: var(--block-spacing-vertical);
  margin-bottom: calc(var(--block-spacing-vertical) * -1);
  border-top: var(--border-width) solid var(--card-border-color);
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}

/**
 * Modal (<dialog>)
 */
#mount {
  --scrollbar-width: 0px;
}

dialog {
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: inherit;
  min-width: 100%;
  height: inherit;
  min-height: 100%;
  padding: var(--spacing);
  border: 0;
  -webkit-backdrop-filter: var(--modal-overlay-backdrop-filter);
  backdrop-filter: var(--modal-overlay-backdrop-filter);
  background-color: var(--modal-overlay-background-color);
  color: var(--color);
}
dialog article {
  max-height: calc(100vh - var(--spacing) * 2);
  overflow: auto;
}
@media (min-width: 576px) {
  dialog article {
    max-width: 510px;
  }
}
@media (min-width: 768px) {
  dialog article {
    max-width: 700px;
  }
}
dialog article > header,
dialog article > footer {
  padding: calc(var(--block-spacing-vertical) * 0.5)
    var(--block-spacing-horizontal);
}
dialog article > header .close {
  margin: 0;
  margin-left: var(--spacing);
  float: right;
}
dialog article > footer {
  text-align: right;
}
dialog article > footer [role="button"] {
  margin-bottom: 0;
}
dialog article > footer [role="button"]:not(:first-of-type) {
  margin-left: calc(var(--spacing) * 0.5);
}
dialog article p:last-of-type {
  margin: 0;
}
dialog article .close {
  display: block;
  width: 1rem;
  height: 1rem;
  margin-top: calc(var(--block-spacing-vertical) * -0.5);
  margin-bottom: var(--typography-spacing-vertical);
  margin-left: auto;
  background-image: var(--icon-close);
  background-position: center;
  background-size: auto 1rem;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity var(--transition);
}
dialog article .close:is([aria-current], :hover, :active, :focus) {
  opacity: 1;
}
dialog:not([open]),
dialog[open="false"] {
  display: none;
}

.modal-is-open {
  padding-right: var(--scrollbar-width, 0px);
  overflow: hidden;
  pointer-events: none;
}
.modal-is-open dialog {
  pointer-events: auto;
}

:where(.modal-is-opening, .modal-is-closing) dialog,
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
}
:where(.modal-is-opening, .modal-is-closing) dialog {
  animation-duration: 0.8s;
  animation-name: modal-overlay;
}
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-delay: 0.2s;
  animation-name: modal;
}

.modal-is-closing dialog,
.modal-is-closing dialog > article {
  animation-delay: 0s;
  animation-direction: reverse;
}

@keyframes modal-overlay {
  from {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent;
  }
}
@keyframes modal {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
}
/**
 * Nav
 */
:where(nav li)::before {
  float: left;
  content: "\u200B";
}

nav,
nav ul {
  display: flex;
}

nav {
  justify-content: space-between;
}
nav ol,
nav ul {
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
nav ol:first-of-type,
nav ul:first-of-type {
  margin-left: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav ol:last-of-type,
nav ul:last-of-type {
  margin-right: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav li {
  display: inline-block;
  margin: 0;
  padding: var(--nav-element-spacing-vertical)
    var(--nav-element-spacing-horizontal);
}
nav li > * {
  --spacing: 0;
}
nav :where(a, [role="link"]) {
  display: inline-block;
  margin: calc(var(--nav-link-spacing-vertical) * -1)
    calc(var(--nav-link-spacing-horizontal) * -1);
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
  border-radius: var(--border-radius);
  text-decoration: none;
}
nav :where(a, [role="link"]):is([aria-current], :hover, :active, :focus) {
  text-decoration: none;
}
nav[aria-label="breadcrumb"] {
  align-items: center;
  justify-content: start;
}
nav[aria-label="breadcrumb"] ul li:not(:first-child) {
  -webkit-margin-start: var(--nav-link-spacing-horizontal);
  margin-inline-start: var(--nav-link-spacing-horizontal);
}
nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  position: absolute;
  width: calc(var(--nav-link-spacing-horizontal) * 2);
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) / 2);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) / 2);
  content: "/";
  color: var(--muted-color);
  text-align: center;
}
nav[aria-label="breadcrumb"] a[aria-current] {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  pointer-events: none;
}
nav [role="button"] {
  margin-right: inherit;
  margin-left: inherit;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}

aside nav,
aside ol,
aside ul,
aside li {
  display: block;
}
aside li {
  padding: calc(var(--nav-element-spacing-vertical) * 0.5)
    var(--nav-element-spacing-horizontal);
}
aside li a {
  display: block;
}
aside li [role="button"] {
  margin: inherit;
}

[dir="rtl"] nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  content: "\\\\";
}

/**
 * Progress
 */
progress {
  display: inline-block;
  vertical-align: baseline;
}

progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  appearance: none;
  width: 100%;
  height: 0.5rem;
  margin-bottom: calc(var(--spacing) * 0.5);
  overflow: hidden;
  border: 0;
  border-radius: var(--border-radius);
  background-color: var(--progress-background-color);
  color: var(--progress-color);
}
progress::-webkit-progress-bar {
  border-radius: var(--border-radius);
  background: none;
}
progress[value]::-webkit-progress-value {
  background-color: var(--progress-color);
}
progress::-moz-progress-bar {
  background-color: var(--progress-color);
}
@media (prefers-reduced-motion: no-preference) {
  progress:indeterminate {
    background: var(--progress-background-color)
      linear-gradient(
        to right,
        var(--progress-color) 30%,
        var(--progress-background-color) 30%
      )
      top left/150% 150% no-repeat;
    animation: progress-indeterminate 1s linear infinite;
  }
  progress:indeterminate[value]::-webkit-progress-value {
    background-color: transparent;
  }
  progress:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }
}

@media (prefers-reduced-motion: no-preference) {
  [dir="rtl"] progress:indeterminate {
    animation-direction: reverse;
  }
}

@keyframes progress-indeterminate {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
/**
 * Dropdown ([role="list"])
 */
details[role="list"],
li[role="list"] {
  position: relative;
}

details[role="list"] summary + ul,
li[role="list"] > ul {
  display: flex;
  z-index: 99;
  position: absolute;
  top: auto;
  right: 0;
  left: 0;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: var(--border-width) solid var(--dropdown-border-color);
  border-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  background-color: var(--dropdown-background-color);
  box-shadow: var(--card-box-shadow);
  color: var(--dropdown-color);
  white-space: nowrap;
}
details[role="list"] summary + ul li,
li[role="list"] > ul li {
  width: 100%;
  margin-bottom: 0;
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  list-style: none;
}
details[role="list"] summary + ul li:first-of-type,
li[role="list"] > ul li:first-of-type {
  margin-top: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li:last-of-type,
li[role="list"] > ul li:last-of-type {
  margin-bottom: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li a,
li[role="list"] > ul li a {
  display: block;
  margin: calc(var(--form-element-spacing-vertical) * -0.5)
    calc(var(--form-element-spacing-horizontal) * -1);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  overflow: hidden;
  color: var(--dropdown-color);
  text-decoration: none;
  text-overflow: ellipsis;
}
details[role="list"] summary + ul li a:hover,
li[role="list"] > ul li a:hover {
  background-color: var(--dropdown-hover-background-color);
}

details[role="list"] summary::after,
li[role="list"] > a::after {
  display: block;
  width: 1rem;
  height: calc(1rem * var(--line-height, 1.5));
  -webkit-margin-start: 0.5rem;
  margin-inline-start: 0.5rem;
  float: right;
  transform: rotate(0deg);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
}

details[role="list"] {
  padding: 0;
  border-bottom: none;
}
details[role="list"] summary {
  margin-bottom: 0;
}
details[role="list"] summary:not([role]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--form-element-border-color);
  border-radius: var(--border-radius);
  background-color: var(--form-element-background-color);
  color: var(--form-element-placeholder-color);
  line-height: inherit;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
details[role="list"] summary:not([role]):active,
details[role="list"] summary:not([role]):focus {
  border-color: var(--form-element-active-border-color);
  background-color: var(--form-element-active-background-color);
}
details[role="list"] summary:not([role]):focus {
  box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}
details[role="list"][open] summary {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
details[role="list"][open] summary::before {
  display: block;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  content: "";
  cursor: default;
}

nav details[role="list"] summary,
nav li[role="list"] a {
  display: flex;
  direction: ltr;
}

nav details[role="list"] summary + ul,
nav li[role="list"] > ul {
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul li a,
nav li[role="list"] > ul li a {
  border-radius: 0;
}

nav details[role="list"] summary,
nav details[role="list"] summary:not([role]) {
  height: auto;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}
nav details[role="list"][open] summary {
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul {
  margin-top: var(--outline-width);
  -webkit-margin-start: 0;
  margin-inline-start: 0;
}
nav details[role="list"] summary[role="link"] {
  margin-bottom: calc(var(--nav-link-spacing-vertical) * -1);
  line-height: var(--line-height);
}
nav details[role="list"] summary[role="link"] + ul {
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) * -1);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) * -1);
}

li[role="list"]:hover > ul,
li[role="list"] a:active ~ ul,
li[role="list"] a:focus ~ ul {
  display: flex;
}
li[role="list"] > ul {
  display: none;
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
  margin-inline-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
}
li[role="list"] > a::after {
  background-image: var(--icon-chevron);
}

/**
 * Loading ([aria-busy=true])
 */
[aria-busy="true"] {
  cursor: progress;
}

[aria-busy="true"]:not(input, select, textarea)::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 0.1875em solid currentColor;
  border-radius: 1em;
  border-right-color: transparent;
  content: "";
  vertical-align: text-bottom;
  vertical-align: -0.125em;
  animation: spinner 0.75s linear infinite;
  opacity: var(--loading-spinner-opacity);
}
[aria-busy="true"]:not(input, select, textarea):not(:empty)::before {
  margin-right: calc(var(--spacing) * 0.5);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) * 0.5);
  margin-inline-end: calc(var(--spacing) * 0.5);
}
[aria-busy="true"]:not(input, select, textarea):empty {
  text-align: center;
}

button[aria-busy="true"],
input[type="submit"][aria-busy="true"],
input[type="button"][aria-busy="true"],
input[type="reset"][aria-busy="true"],
a[aria-busy="true"] {
  pointer-events: none;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
/**
 * Tooltip ([data-tooltip])
 */
[data-tooltip] {
  position: relative;
}
[data-tooltip]:not(a, button, input) {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}
[data-tooltip][data-placement="top"]::before,
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::before,
[data-tooltip]::after {
  display: block;
  z-index: 99;
  position: absolute;
  bottom: 100%;
  left: 50%;
  padding: 0.25rem 0.5rem;
  overflow: hidden;
  transform: translate(-50%, -0.25rem);
  border-radius: var(--border-radius);
  background: var(--tooltip-background-color);
  content: attr(data-tooltip);
  color: var(--tooltip-color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: 0.875rem;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::after {
  padding: 0;
  transform: translate(-50%, 0rem);
  border-top: 0.3rem solid;
  border-right: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;
  border-radius: 0;
  background-color: transparent;
  content: "";
  color: var(--tooltip-background-color);
}
[data-tooltip][data-placement="bottom"]::before,
[data-tooltip][data-placement="bottom"]::after {
  top: 100%;
  bottom: auto;
  transform: translate(-50%, 0.25rem);
}
[data-tooltip][data-placement="bottom"]:after {
  transform: translate(-50%, -0.3rem);
  border: 0.3rem solid transparent;
  border-bottom: 0.3rem solid;
}
[data-tooltip][data-placement="left"]::before,
[data-tooltip][data-placement="left"]::after {
  top: 50%;
  right: 100%;
  bottom: auto;
  left: auto;
  transform: translate(-0.25rem, -50%);
}
[data-tooltip][data-placement="left"]:after {
  transform: translate(0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-left: 0.3rem solid;
}
[data-tooltip][data-placement="right"]::before,
[data-tooltip][data-placement="right"]::after {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 100%;
  transform: translate(0.25rem, -50%);
}
[data-tooltip][data-placement="right"]:after {
  transform: translate(-0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-right: 0.3rem solid;
}
[data-tooltip]:focus::before,
[data-tooltip]:focus::after,
[data-tooltip]:hover::before,
[data-tooltip]:hover::after {
  opacity: 1;
}
@media (hover: hover) and (pointer: fine) {
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::before,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::before,
  [data-tooltip]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::after {
    animation-name: tooltip-caret-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::before,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-bottom;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-name: tooltip-caret-slide-bottom;
  }
  [data-tooltip][data-placement="left"]:focus::before,
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::before,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-left;
  }
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-name: tooltip-caret-slide-left;
  }
  [data-tooltip][data-placement="right"]:focus::before,
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::before,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-right;
  }
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-name: tooltip-caret-slide-right;
  }
}
@keyframes tooltip-slide-top {
  from {
    transform: translate(-50%, 0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-top {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.25rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-bottom {
  from {
    transform: translate(-50%, -0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-bottom {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.5rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.3rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-left {
  from {
    transform: translate(0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-left {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.3rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-slide-right {
  from {
    transform: translate(-0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-right {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.3rem, -50%);
    opacity: 1;
  }
}

/**
 * Accessibility & User interaction
 */
[aria-controls] {
  cursor: pointer;
}

[aria-disabled="true"],
[disabled] {
  cursor: not-allowed;
}

[aria-hidden="false"][hidden] {
  display: initial;
}

[aria-hidden="false"][hidden]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}

a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
  -ms-touch-action: manipulation;
}

[dir="rtl"] {
  direction: rtl;
}

/**
* Reduce Motion Features
*/
@media (prefers-reduced-motion: reduce) {
  *:not([aria-busy="true"]),
  :not([aria-busy="true"])::before,
  :not([aria-busy="true"])::after {
    background-attachment: initial !important;
    animation-duration: 1ms !important;
    animation-delay: -1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}

/*# sourceMappingURL=custom.css.map */
`,IMMERSIVE_TRANSLATE_COMMON_CSS:`#mount#mount {
  /* --primary: rgb(227, 59, 126); */
  --primary: #ea4c89;
  --primary-hover: #f082ac;
}

li.select-link.select-link:hover > ul {
  display: none;
}
li.select-link.select-link > ul {
  display: none;
}
li.select-link.select-link a:focus ~ ul {
  display: none;
}

li.select-link.select-link a:active ~ ul {
  display: none;
}
li.select-link-active.select-link-active > ul {
  display: flex;
}
li.select-link-active.select-link-active:hover > ul {
  display: flex;
}

li.select-link-active.select-link-active a:focus ~ ul {
  display: flex;
}

li.select-link-active.select-link-active a:active ~ ul {
  display: flex;
}
ul.select-link-ul.select-link-ul {
  right: 0px;
  left: auto;
}

a.select-link-selected {
  background-color: var(--primary-focus);
}
.immersive-translate-no-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* li[role="list"].no-arrow > a::after { */
/*   background-image: none; */
/*   width: 0; */
/*   color: var(--color); */
/* } */
li[role="list"].no-arrow {
  margin-left: 8px;
  padding-right: 0;
}
li[role="list"] > a::after {
  -webkit-margin-start: 0.2rem;
  margin-inline-start: 0.2rem;
}

li[role="list"].no-arrow > a,
li[role="list"].no-arrow > a:link,
li[role="list"].no-arrow > a:visited {
  color: var(--secondary);
}

select.min-select {
  --form-element-spacing-horizontal: 0;
  margin-bottom: 0;
  max-width: 128px;
  color: var(--primary);
  font-size: 14px;
  border: none;
  padding: 0;
  padding-right: 20px;
  background-position: center right 0;
  background-size: 16px auto;
  text-overflow: ellipsis;
  text-align: right;
  color: var(--color);
}
select.min-select-secondary {
  color: var(--color);
}
select.min-select:focus {
  outline: none;
  border: none;
  --box-shadow: none;
}
select.min-select-no-arrow {
  background-image: none;
  padding-right: 0;
}

select.min-select-left {
  padding-right: 0px;
  /* padding-left: 24px; */
  /* background-position: center left 0; */
  text-overflow: ellipsis;
  text-align: left;
}

.muted {
  color: var(--muted-color);
}

.select.button-select {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
  cursor: pointer;
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 16px;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
  -webkit-appearance: button;
  margin: 0;
  margin-bottom: 0px;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}
`,IMMERSIVE_TRANSLATE_POPUP_CSS:`html {
  font-size: 17px;
  --font-size: 17px;
}

body {
  max-width: 100%;
  padding: 0;
  margin: 0;
  min-width: 250px;
  border-radius: 10px;
}
.immersive-translate-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  touch-action: none;
}
.immersive-translate-popup-wrapper {
  background: var(--background-color);
  border-radius: 10px;
  border: 1px solid var(--muted-border-color);
}

#mount#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 4px;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 16px;
  --typography-spacing-vertical: 24px;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 12px;
  --form-element-spacing-horizontal: 16px;
  --nav-element-spacing-vertical: 16px;
  --nav-element-spacing-horizontal: 8px;
  --nav-link-spacing-vertical: 8px;
  --nav-link-spacing-horizontal: 8px;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(4px);
}
#mount {
  min-width: 250px;
}
.main-button {
  font-size: 14px;
  vertical-align: middle;
}

.pt-4 {
  padding-top: 24px;
}
.p-2 {
  padding: 8px;
}
.pl-5 {
  padding-left: 48px;
}
.p-0 {
  padding: 0;
}
.pl-2 {
  padding-left: 8px;
}
.pl-4 {
  padding-left: 24px;
}
.pt-2 {
  padding-top: 8px;
}

.pb-2 {
  padding-bottom: 8px;
}

.pr-5 {
  padding-right: 48px;
}
.text-sm {
  font-size: 14px;
}

.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}

.mb-2 {
  margin-bottom: 8px;
}
.inline-block {
  display: inline-block;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.mt-2 {
  margin-top: 8px;
}
.mt-0 {
  margin-top: 0;
}

.mb-1 {
  margin-bottom: 4px;
}
.ml-4 {
  margin-left: 24px;
}
.ml-3 {
  margin-left: 16px;
}
.ml-2 {
  margin-left: 8px;
}
.mr-1 {
  margin-right: 4px;
}
.pl-3 {
  padding-left: 12px;
}
.pr-3 {
  padding-right: 12px;
}
.p-3 {
  padding: 12px;
}
.mt-4 {
  margin-top: 24px;
}
.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.left-auto {
  left: auto !important;
}

.max-h-28 {
  max-height: 112px;
}
.max-h-30 {
  max-height: 120px;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.text-xs {
  font-size: 12px;
}

.flex-1 {
  flex: 1;
}
.flex-3 {
  flex: 3;
}
.flex-4 {
  flex: 4;
}
.flex-2 {
  flex: 2;
}
.mt-3 {
  margin-top: 16px;
}
.items-center {
  align-items: center;
}
.items-end {
  align-items: flex-end;
}
.items-baseline {
  align-items: baseline;
}

.my-5 {
  margin-top: 48px;
  margin-bottom: 48px;
}
.my-4 {
  margin-top: 24px;
  margin-bottom: 24px;
}
.my-3 {
  margin-top: 16px;
  margin-bottom: 16px;
}
.pt-3 {
  padding-top: 12px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.pt-2 {
  padding-top: 8px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.pt-1 {
  padding-top: 4px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.pb-2 {
  padding-bottom: 8px;
}
.justify-end {
  justify-content: flex-end;
}
.w-auto {
  width: auto;
}
`,IMMERSIVE_TRANSLATE_POPUP_HTML:`<style>
  html {
    font-size: 17px;
  }
  .immersive-translate-popup-container {
    position: fixed;
    padding: 0;
    z-index: 999999;
  }
  .immersive-translate-popup-btn {
    background-color: #ea4c89;
    font-size: 18px;
    opacity: 0.5;
    width: 36px;
    height: 36px;
    border-radius: 9999999px;
  }
  .immersive-translate-popup-btn > svg {
  }
  #mount#mount {
    position: absolute;
    display: none;
    min-width: 250px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    --font-size: 17px;
    font-size: 17px;
  }
</style>

<div
  id="immersive-translate-popup-container"
  class="immersive-translate-popup-container"
>
  <button
    id="immersive-translate-popup-btn"
    class="immersive-translate-popup-btn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M5 15v2a2 2 0 0 0 1.85 1.995L7 19h3v2H7a4 4 0 0 1-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM8 2v2h4v7H8v3H6v-3H2V4h4V2h2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3zM6 6H4v3h2V6zm4 0H8v3h2V6z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  </button>
  <div class="immersive-translate-popup-mount" id="mount"></div>
</div>
`,MOCK:"0",DEBUG:"0"};var cf=Object.create,Ti=Object.defineProperty,uf=Object.getOwnPropertyDescriptor,vi=Object.getOwnPropertyNames,gf=Object.getPrototypeOf,ff=Object.prototype.hasOwnProperty,df=(e,t)=>function(){return t||(0,e[vi(e)[0]])((t={exports:{}}).exports,t),t.exports},mf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of vi(t))!ff.call(e,a)&&a!==n&&Ti(e,a,{get:()=>t[a],enumerable:!(r=uf(t,a))||r.enumerable});return e},pf=(e,t,n)=>(n=e!=null?cf(gf(e)):{},mf(t||!e||!e.__esModule?Ti(n,"default",{value:e,enumerable:!0}):n,e)),hf=df({"esm-build-dd657b4e6dab36bb0fd61c19cb6f770fbc7804f6-18dd0343/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(n,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof e<"u")r(t);else{var a={exports:{}};r(a),n.browser=a.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(n){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",a=o=>{let s={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(s).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class i extends WeakMap{constructor(L,O=void 0){super(O),this.createItem=L}get(L){return this.has(L)||this.set(L,this.createItem(L)),super.get(L)}}let c=v=>v&&typeof v=="object"&&typeof v.then=="function",u=(v,L)=>(...O)=>{o.runtime.lastError?v.reject(new Error(o.runtime.lastError.message)):L.singleCallbackArg||O.length<=1&&L.singleCallbackArg!==!1?v.resolve(O[0]):v.resolve(O)},l=v=>v==1?"argument":"arguments",g=(v,L)=>function(S,...D){if(D.length<L.minArgs)throw new Error(`Expected at least ${L.minArgs} ${l(L.minArgs)} for ${v}(), got ${D.length}`);if(D.length>L.maxArgs)throw new Error(`Expected at most ${L.maxArgs} ${l(L.maxArgs)} for ${v}(), got ${D.length}`);return new Promise((U,P)=>{if(L.fallbackToNoCallback)try{S[v](...D,u({resolve:U,reject:P},L))}catch(_){console.warn(`${v} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,_),S[v](...D),L.fallbackToNoCallback=!1,L.noCallback=!0,U()}else L.noCallback?(S[v](...D),U()):S[v](...D,u({resolve:U,reject:P},L))})},d=(v,L,O)=>new Proxy(L,{apply(S,D,U){return O.call(D,v,...U)}}),m=Function.call.bind(Object.prototype.hasOwnProperty),p=(v,L={},O={})=>{let S=Object.create(null),D={has(P,_){return _ in v||_ in S},get(P,_,H){if(_ in S)return S[_];if(!(_ in v))return;let $=v[_];if(typeof $=="function")if(typeof L[_]=="function")$=d(v,v[_],L[_]);else if(m(O,_)){let j=g(_,O[_]);$=d(v,v[_],j)}else $=$.bind(v);else if(typeof $=="object"&&$!==null&&(m(L,_)||m(O,_)))$=p($,L[_],O[_]);else if(m(O,"*"))$=p($,L[_],O["*"]);else return Object.defineProperty(S,_,{configurable:!0,enumerable:!0,get(){return v[_]},set(j){v[_]=j}}),$;return S[_]=$,$},set(P,_,H,$){return _ in S?S[_]=H:v[_]=H,!0},defineProperty(P,_,H){return Reflect.defineProperty(S,_,H)},deleteProperty(P,_){return Reflect.deleteProperty(S,_)}},U=Object.create(v);return new Proxy(U,D)},b=v=>({addListener(L,O,...S){L.addListener(v.get(O),...S)},hasListener(L,O){return L.hasListener(v.get(O))},removeListener(L,O){L.removeListener(v.get(O))}}),x=new i(v=>typeof v!="function"?v:function(O){let S=p(O,{},{getContent:{minArgs:0,maxArgs:0}});v(S)}),h=new i(v=>typeof v!="function"?v:function(O,S,D){let U=!1,P,_=new Promise(Z=>{P=function(ee){U=!0,Z(ee)}}),H;try{H=v(O,S,P)}catch(Z){H=Promise.reject(Z)}let $=H!==!0&&c(H);if(H!==!0&&!$&&!U)return!1;let j=Z=>{Z.then(ee=>{D(ee)},ee=>{let C;ee&&(ee instanceof Error||typeof ee.message=="string")?C=ee.message:C="An unexpected error occurred",D({__mozWebExtensionPolyfillReject__:!0,message:C})}).catch(ee=>{console.error("Failed to send onMessage rejected reply",ee)})};return j($?H:_),!0}),y=({reject:v,resolve:L},O)=>{o.runtime.lastError?o.runtime.lastError.message===r?L():v(new Error(o.runtime.lastError.message)):O&&O.__mozWebExtensionPolyfillReject__?v(new Error(O.message)):L(O)},w=(v,L,O,...S)=>{if(S.length<L.minArgs)throw new Error(`Expected at least ${L.minArgs} ${l(L.minArgs)} for ${v}(), got ${S.length}`);if(S.length>L.maxArgs)throw new Error(`Expected at most ${L.maxArgs} ${l(L.maxArgs)} for ${v}(), got ${S.length}`);return new Promise((D,U)=>{let P=y.bind(null,{resolve:D,reject:U});S.push(P),O.sendMessage(...S)})},A={devtools:{network:{onRequestFinished:b(x)}},runtime:{onMessage:b(h),onMessageExternal:b(h),sendMessage:w.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:w.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},I={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return s.privacy={network:{"*":I},services:{"*":I},websites:{"*":I}},p(o,A,s)};n.exports=a(chrome)}else n.exports=globalThis.browser})}}),bf=pf(hf()),{default:xi,...yf}=bf,Ha=xi!==void 0?xi:yf;globalThis.immersiveTranslateBrowserAPI=Ha;function cn(){let e,t="pending",n=new Promise((r,a)=>{e={async resolve(o){await o,t="fulfilled",r(o)},reject(o){t="rejected",a(o)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var Ua=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function _r(e,t){let n=cn(),r=setTimeout(()=>n.reject(new Ua),t);return Promise.race([e,n]).finally(()=>clearTimeout(r))}function un(e,t={}){let{signal:n,persistent:r}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((a,o)=>{let s=()=>{clearTimeout(c),o(new DOMException("Delay was aborted.","AbortError"))},c=setTimeout(()=>{n?.removeEventListener("abort",s),a()},e);if(n?.addEventListener("abort",s,{once:!0}),r===!1)try{Deno.unrefTimer(c)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var wi=class{#e=0;#t=[];#n=[];#r=cn();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=cn()}}[Symbol.asyncIterator](){return this.iterate()}};var Qe={};sf(Qe,{bgBlack:()=>qf,bgBlue:()=>Jf,bgBrightBlack:()=>Zf,bgBrightBlue:()=>rd,bgBrightCyan:()=>od,bgBrightGreen:()=>td,bgBrightMagenta:()=>ad,bgBrightRed:()=>ed,bgBrightWhite:()=>sd,bgBrightYellow:()=>nd,bgCyan:()=>Xf,bgGreen:()=>Kf,bgMagenta:()=>Yf,bgRed:()=>Vf,bgRgb24:()=>ud,bgRgb8:()=>ld,bgWhite:()=>Qf,bgYellow:()=>Gf,black:()=>_f,blue:()=>Nf,bold:()=>wf,brightBlack:()=>Ci,brightBlue:()=>Bf,brightCyan:()=>zf,brightGreen:()=>Uf,brightMagenta:()=>jf,brightRed:()=>Hf,brightWhite:()=>Wf,brightYellow:()=>$f,cyan:()=>If,dim:()=>Sf,getColorEnabled:()=>Tf,gray:()=>Ff,green:()=>Pf,hidden:()=>Af,inverse:()=>Lf,italic:()=>Ef,magenta:()=>Df,red:()=>Mf,reset:()=>vf,rgb24:()=>cd,rgb8:()=>id,setColorEnabled:()=>xf,strikethrough:()=>kf,stripColor:()=>fd,underline:()=>Cf,white:()=>Of,yellow:()=>Rf});var{Deno:Si}=globalThis,Ei=typeof Si?.noColor=="boolean"?Si.noColor:!0,$a=!Ei;function xf(e){Ei||($a=e)}function Tf(){return $a}function W(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function q(e,t){return $a?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function vf(e){return q(e,W([0],0))}function wf(e){return q(e,W([1],22))}function Sf(e){return q(e,W([2],22))}function Ef(e){return q(e,W([3],23))}function Cf(e){return q(e,W([4],24))}function Lf(e){return q(e,W([7],27))}function Af(e){return q(e,W([8],28))}function kf(e){return q(e,W([9],29))}function _f(e){return q(e,W([30],39))}function Mf(e){return q(e,W([31],39))}function Pf(e){return q(e,W([32],39))}function Rf(e){return q(e,W([33],39))}function Nf(e){return q(e,W([34],39))}function Df(e){return q(e,W([35],39))}function If(e){return q(e,W([36],39))}function Of(e){return q(e,W([37],39))}function Ff(e){return Ci(e)}function Ci(e){return q(e,W([90],39))}function Hf(e){return q(e,W([91],39))}function Uf(e){return q(e,W([92],39))}function $f(e){return q(e,W([93],39))}function Bf(e){return q(e,W([94],39))}function jf(e){return q(e,W([95],39))}function zf(e){return q(e,W([96],39))}function Wf(e){return q(e,W([97],39))}function qf(e){return q(e,W([40],49))}function Vf(e){return q(e,W([41],49))}function Kf(e){return q(e,W([42],49))}function Gf(e){return q(e,W([43],49))}function Jf(e){return q(e,W([44],49))}function Yf(e){return q(e,W([45],49))}function Xf(e){return q(e,W([46],49))}function Qf(e){return q(e,W([47],49))}function Zf(e){return q(e,W([100],49))}function ed(e){return q(e,W([101],49))}function td(e){return q(e,W([102],49))}function nd(e){return q(e,W([103],49))}function rd(e){return q(e,W([104],49))}function ad(e){return q(e,W([105],49))}function od(e){return q(e,W([106],49))}function sd(e){return q(e,W([107],49))}function kt(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function id(e,t){return q(e,W([38,5,kt(t)],39))}function ld(e,t){return q(e,W([48,5,kt(t)],49))}function cd(e,t){return typeof t=="number"?q(e,W([38,2,t>>16&255,t>>8&255,t&255],39)):q(e,W([38,2,kt(t.r),kt(t.g),kt(t.b)],39))}function ud(e,t){return typeof t=="number"?q(e,W([48,2,t>>16&255,t>>8&255,t&255],49)):q(e,W([48,2,kt(t.r),kt(t.g),kt(t.b)],49))}var gd=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function fd(e){return e.replace(gd,"")}function Mr(e,t){let n=null,r=null,a=(...o)=>{a.clear(),r=()=>{a.clear(),e.call(a,...o)},n=setTimeout(r,t)};return a.clear=()=>{typeof n=="number"&&(clearTimeout(n),n=null,r=null)},a.flush=()=>{r?.()},Object.defineProperty(a,"pending",{get:()=>typeof n=="number"}),a}var Or,J,Mi,dd,qn,Li,Pi,Nr={},Ri=[],md=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function _t(e,t){for(var n in t)e[n]=t[n];return e}function Ni(e){var t=e.parentNode;t&&t.removeChild(e)}function Di(e,t,n){var r,a,o,s={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?Or.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return Pr(e,s,r,a,null)}function Pr(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++Mi};return a==null&&J.vnode!=null&&J.vnode(o),o}function Ze(e){return e.children}function Rr(e,t){this.props=e,this.context=t}function gn(e,t){if(t==null)return e.__?gn(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?gn(e):null}function Ii(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ii(e)}}function Ba(e){(!e.__d&&(e.__d=!0)&&qn.push(e)&&!Dr.__r++||Li!==J.debounceRendering)&&((Li=J.debounceRendering)||setTimeout)(Dr)}function Dr(){for(var e;Dr.__r=qn.length;)e=qn.sort(function(t,n){return t.__v.__b-n.__v.__b}),qn=[],e.some(function(t){var n,r,a,o,s,i;t.__d&&(s=(o=(n=t).__v).__e,(i=n.__P)&&(r=[],(a=_t({},o)).__v=o.__v+1,ja(i,o,a,n.__n,i.ownerSVGElement!==void 0,o.__h!=null?[s]:null,r,s??gn(o),o.__h),Ui(r,o),o.__e!=s&&Ii(o)))})}function Oi(e,t,n,r,a,o,s,i,c,u){var l,g,d,m,p,b,x,h=r&&r.__k||Ri,y=h.length;for(n.__k=[],l=0;l<t.length;l++)if((m=n.__k[l]=(m=t[l])==null||typeof m=="boolean"?null:typeof m=="string"||typeof m=="number"||typeof m=="bigint"?Pr(null,m,null,null,m):Array.isArray(m)?Pr(Ze,{children:m},null,null,null):m.__b>0?Pr(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)!=null){if(m.__=n,m.__b=n.__b+1,(d=h[l])===null||d&&m.key==d.key&&m.type===d.type)h[l]=void 0;else for(g=0;g<y;g++){if((d=h[g])&&m.key==d.key&&m.type===d.type){h[g]=void 0;break}d=null}ja(e,m,d=d||Nr,a,o,s,i,c,u),p=m.__e,(g=m.ref)&&d.ref!=g&&(x||(x=[]),d.ref&&x.push(d.ref,null,m),x.push(g,m.__c||p,m)),p!=null?(b==null&&(b=p),typeof m.type=="function"&&m.__k===d.__k?m.__d=c=Fi(m,c,e):c=Hi(e,m,d,h,p,c),typeof n.type=="function"&&(n.__d=c)):c&&d.__e==c&&c.parentNode!=e&&(c=gn(d))}for(n.__e=b,l=y;l--;)h[l]!=null&&(typeof n.type=="function"&&h[l].__e!=null&&h[l].__e==n.__d&&(n.__d=gn(r,l+1)),Bi(h[l],h[l]));if(x)for(l=0;l<x.length;l++)$i(x[l],x[++l],x[++l])}function Fi(e,t,n){for(var r,a=e.__k,o=0;a&&o<a.length;o++)(r=a[o])&&(r.__=e,t=typeof r.type=="function"?Fi(r,t,n):Hi(n,r,r,a,r.__e,t));return t}function Hi(e,t,n,r,a,o){var s,i,c;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(n==null||a!=o||a.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(a),s=null;else{for(i=o,c=0;(i=i.nextSibling)&&c<r.length;c+=2)if(i==a)break e;e.insertBefore(a,o),s=o}return s!==void 0?s:a.nextSibling}function pd(e,t,n,r,a){var o;for(o in n)o==="children"||o==="key"||o in t||Ir(e,o,null,n[o],r);for(o in t)a&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||Ir(e,o,t[o],n[o],r)}function Ai(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||md.test(t)?n:n+"px"}function Ir(e,t,n,r,a){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Ai(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Ai(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?_i:ki,o):e.removeEventListener(t,o?_i:ki,o);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function ki(e){this.l[e.type+!1](J.event?J.event(e):e)}function _i(e){this.l[e.type+!0](J.event?J.event(e):e)}function ja(e,t,n,r,a,o,s,i,c){var u,l,g,d,m,p,b,x,h,y,w,A,I,v=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,i=t.__e=n.__e,t.__h=null,o=[i]),(u=J.__b)&&u(t);try{e:if(typeof v=="function"){if(x=t.props,h=(u=v.contextType)&&r[u.__c],y=u?h?h.props.value:u.__:r,n.__c?b=(l=t.__c=n.__c).__=l.__E:("prototype"in v&&v.prototype.render?t.__c=l=new v(x,y):(t.__c=l=new Rr(x,y),l.constructor=v,l.render=bd),h&&h.sub(l),l.props=x,l.state||(l.state={}),l.context=y,l.__n=r,g=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),v.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=_t({},l.__s)),_t(l.__s,v.getDerivedStateFromProps(x,l.__s))),d=l.props,m=l.state,g)v.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(v.getDerivedStateFromProps==null&&x!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(x,y),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(x,l.__s,y)===!1||t.__v===n.__v){l.props=x,l.state=l.__s,t.__v!==n.__v&&(l.__d=!1),l.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(L){L&&(L.__=t)}),l.__h.length&&s.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(x,l.__s,y),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,m,p)})}if(l.context=y,l.props=x,l.__v=t,l.__P=e,w=J.__r,A=0,"prototype"in v&&v.prototype.render)l.state=l.__s,l.__d=!1,w&&w(t),u=l.render(l.props,l.state,l.context);else do l.__d=!1,w&&w(t),u=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++A<25);l.state=l.__s,l.getChildContext!=null&&(r=_t(_t({},r),l.getChildContext())),g||l.getSnapshotBeforeUpdate==null||(p=l.getSnapshotBeforeUpdate(d,m)),I=u!=null&&u.type===Ze&&u.key==null?u.props.children:u,Oi(e,Array.isArray(I)?I:[I],t,n,r,a,o,s,i,c),l.base=t.__e,t.__h=null,l.__h.length&&s.push(l),b&&(l.__E=l.__=null),l.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=hd(n.__e,t,n,r,a,o,s,c);(u=J.diffed)&&u(t)}catch(L){t.__v=null,(c||o!=null)&&(t.__e=i,t.__h=!!c,o[o.indexOf(i)]=null),J.__e(L,t,n)}}function Ui(e,t){J.__c&&J.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){J.__e(r,n.__v)}})}function hd(e,t,n,r,a,o,s,i){var c,u,l,g=n.props,d=t.props,m=t.type,p=0;if(m==="svg"&&(a=!0),o!=null){for(;p<o.length;p++)if((c=o[p])&&"setAttribute"in c==!!m&&(m?c.localName===m:c.nodeType===3)){e=c,o[p]=null;break}}if(e==null){if(m===null)return document.createTextNode(d);e=a?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,d.is&&d),o=null,i=!1}if(m===null)g===d||i&&e.data===d||(e.data=d);else{if(o=o&&Or.call(e.childNodes),u=(g=n.props||Nr).dangerouslySetInnerHTML,l=d.dangerouslySetInnerHTML,!i){if(o!=null)for(g={},p=0;p<e.attributes.length;p++)g[e.attributes[p].name]=e.attributes[p].value;(l||u)&&(l&&(u&&l.__html==u.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(pd(e,d,g,a,i),l)t.__k=[];else if(p=t.props.children,Oi(e,Array.isArray(p)?p:[p],t,n,r,a&&m!=="foreignObject",o,s,o?o[0]:n.__k&&gn(n,0),i),o!=null)for(p=o.length;p--;)o[p]!=null&&Ni(o[p]);i||("value"in d&&(p=d.value)!==void 0&&(p!==e.value||m==="progress"&&!p||m==="option"&&p!==g.value)&&Ir(e,"value",p,g.value,!1),"checked"in d&&(p=d.checked)!==void 0&&p!==e.checked&&Ir(e,"checked",p,g.checked,!1))}return e}function $i(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){J.__e(r,n)}}function Bi(e,t,n){var r,a;if(J.unmount&&J.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||$i(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){J.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&Bi(r[a],t,typeof e.type!="function");n||e.__e==null||Ni(e.__e),e.__=e.__e=e.__d=void 0}function bd(e,t,n){return this.constructor(e,n)}function za(e,t,n){var r,a,o;J.__&&J.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],ja(t,e=(!r&&n||t).__k=Di(Ze,null,[e]),a||Nr,Nr,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?Or.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r),Ui(o,e)}function Wa(e,t){var n={__c:t="__cC"+Pi++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,o;return this.getChildContext||(a=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&a.some(Ba)},this.sub=function(s){a.push(s);var i=s.componentWillUnmount;s.componentWillUnmount=function(){a.splice(a.indexOf(s),1),i&&i.call(s)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Or=Ri.slice,J={__e:function(e,t,n,r){for(var a,o,s;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),s=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),s=a.__d),s)return a.__E=a}catch(i){e=i}throw e}},Mi=0,dd=function(e){return e!=null&&e.constructor===void 0},Rr.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=_t({},this.state),typeof e=="function"&&(e=e(_t({},n),this.props)),e&&_t(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Ba(this))},Rr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ba(this))},Rr.prototype.render=Ze,qn=[],Dr.__r=0,Pi=0;var Kn,Ee,qa,ji,Vn=0,Ji=[],Fr=[],zi=J.__b,Wi=J.__r,qi=J.diffed,Vi=J.__c,Ki=J.unmount;function Ur(e,t){J.__h&&J.__h(Ee,e,Vn||t),Vn=0;var n=Ee.__H||(Ee.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Fr}),n.__[e]}function Y(e){return Vn=1,yd(Qi,e)}function yd(e,t,n){var r=Ur(Kn++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Qi(void 0,t),function(o){var s=r.__N?r.__N[0]:r.__[0],i=r.t(s,o);s!==i&&(r.__N=[i,r.__[1]],r.__c.setState({}))}],r.__c=Ee,!Ee.u)){Ee.u=!0;var a=Ee.shouldComponentUpdate;Ee.shouldComponentUpdate=function(o,s,i){if(!r.__c.__H)return!0;var c=r.__c.__H.__.filter(function(l){return l.__c});if(c.every(function(l){return!l.__N}))return!a||a.call(this,o,s,i);var u=!1;return c.forEach(function(l){if(l.__N){var g=l.__[0];l.__=l.__N,l.__N=void 0,g!==l.__[0]&&(u=!0)}}),!!u&&(!a||a.call(this,o,s,i))}}return r.__N||r.__}function ge(e,t){var n=Ur(Kn++,3);!J.__s&&Xi(n.__H,t)&&(n.__=e,n.i=t,Ee.__H.__h.push(n))}function fn(e){return Vn=5,Yi(function(){return{current:e}},[])}function Yi(e,t){var n=Ur(Kn++,7);return Xi(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Gn(e,t){return Vn=8,Yi(function(){return e},t)}function Ka(e){var t=Ee.context[e.__c],n=Ur(Kn++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(Ee)),t.props.value):e.__}function xd(){for(var e;e=Ji.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Hr),e.__H.__h.forEach(Va),e.__H.__h=[]}catch(t){e.__H.__h=[],J.__e(t,e.__v)}}J.__b=function(e){typeof e.type!="function"||e.o||e.type===Ze?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),Ee=null,zi&&zi(e)},J.__r=function(e){Wi&&Wi(e),Kn=0;var t=(Ee=e.__c).__H;t&&(qa===Ee?(t.__h=[],Ee.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Fr,n.__N=n.i=void 0})):(t.__h.forEach(Hr),t.__h.forEach(Va),t.__h=[])),qa=Ee},J.diffed=function(e){qi&&qi(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ji.push(t)!==1&&ji===J.requestAnimationFrame||((ji=J.requestAnimationFrame)||Td)(xd)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Fr&&(n.__=n.__V),n.i=void 0,n.__V=Fr})),qa=Ee=null},J.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Hr),n.__h=n.__h.filter(function(r){return!r.__||Va(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],J.__e(r,n.__v)}}),Vi&&Vi(e,t)},J.unmount=function(e){Ki&&Ki(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Hr(r)}catch(a){t=a}}),n.__H=void 0,t&&J.__e(t,n.__v))};var Gi=typeof requestAnimationFrame=="function";function Td(e){var t,n=function(){clearTimeout(r),Gi&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Gi&&(t=requestAnimationFrame(n))}function Hr(e){var t=Ee,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Ee=t}function Va(e){var t=Ee;e.__c=e.__(),Ee=t}function Xi(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Qi(e,t){return typeof t=="function"?t(e):t}var zb=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var wd=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function $r({limit:e,interval:t,strict:n}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(t))throw new TypeError("Expected `interval` to be a finite number");let r=new Map,a=0,o=0;function s(){let l=Date.now();return l-a>t?(o=1,a=l,0):(o<e?o++:(a+=t,o=1),a-l)}let i=[];function c(){let l=Date.now();if(i.length<e)return i.push(l),0;let g=i.shift()+t;return l>=g?(i.push(l),0):(i.push(g),g-l)}let u=n?c:s;return l=>{let g=function(...d){if(!g.isEnabled)return(async()=>l.apply(this,d))();let m;return new Promise((p,b)=>{m=setTimeout(()=>{p(l.apply(this,d)),r.delete(m)},u()),r.set(m,b)})};return g.abort=()=>{for(let d of r.keys())clearTimeout(d),r.get(d)(new wd);r.clear(),i.splice(0,i.length)},g.isEnabled=!0,g}}var Jn;function ro(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function il(e,t=","){return e.map(ro).join(t)}var ao=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function dn(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function ll(e,t="@media "){return t+Te(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function Te(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Sd(e){return e}function oo(){}var Ae={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function cl(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function Za(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(cl(e),15)<<18}var Ed=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function so({n:e,i:t,v:n=[]},r,a,o){for(let i of(e&&(e=ro({n:e,i:t,v:n})),o=[...Te(o)],n)){let c=r.theme("screens",i);for(let u of Te(c&&ll(c)||r.v(i))){var s;o.push(u),a|=c?67108864|Za(u):i=="dark"?1073741824:u[0]=="@"?Za(u):(s=u,1<<~(/:([a-z-]+)/.test(s)&&~Ed.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var io=new Map;function eo(e){if(e.d){let t=[],n=Ga(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?Ga(r,o=>Ga(a,s=>{let i=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(s);if(i){let c=o.indexOf(i[1]);return~c?o.slice(0,c)+i[0]+o.slice(c+i[1].length):Ja(o,s)}return Ja(s,o)})):r,"&"),r=>Ja(r,e.n?"."+ao(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function Ga(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function Ja(e,t){return e.replace(/&/g,t)}var Cd=new Intl.Collator("en",{numeric:!0});function ul(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=gl(e[a],t)?n=a+1:r=a}return r}function gl(e,t){let n=e.p&Ae.o;return n==(t.p&Ae.o)&&(n==Ae.b||n==Ae.o)?0:e.p-t.p||e.o-t.o||Cd.compare(e.n,t.n)}function Ya(e,t){return Math.round(parseInt(e,16)*t)}function fl(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,s=[17,1,.062272][o-1];return`rgba(${[Ya(e.substr(1,o),s),Ya(e.substr(1+o,o),s),Ya(e.substr(1+2*o,o),s),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function lo(e,t,n,r,a=[]){return function o(s,{n:i,p:c,r:u=[],i:l},g){let d=[],m="",p=0,b=0;for(let y in s||{}){var x,h;let w=s[y];if(y[0]=="@"){if(!w)continue;if(y[1]=="a"){d.push(...uo(i,c,Yn(""+w),g,c,u,l,!0));continue}if(y[1]=="l"){for(let A of Te(w))d.push(...o(A,{n:i,p:(x=Ae[y[7]],c&~Ae.o|x),r:u,i:l},g));continue}if(y[1]=="i"){d.push(...Te(w).map(A=>({p:-1,o:0,r:[],d:y+" "+A})));continue}if(y[1]=="k"){d.push({p:Ae.d,o:0,r:[y],d:o(w,{p:Ae.d},g).map(eo).join("")});continue}if(y[1]=="f"){d.push(...Te(w).map(A=>({p:Ae.d,o:0,r:[y],d:o(A,{p:Ae.d},g).map(eo).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))y=="label"&&w?i=w+dn(JSON.stringify([c,l,s])):(w||w===0)&&(y=y.replace(/[A-Z]/g,A=>"-"+A.toLowerCase()),b+=1,p=Math.max(p,(h=y)[0]=="-"?0:cl(h)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(h)?+!!RegExp.$1||-!!RegExp.$2:0)+1),m+=(m?";":"")+Te(w).map(A=>g.s(y,dl(""+A,g.theme)+(l?" !important":""))).join(";"));else if(y[0]=="@"||y.includes("&")){let A=c;y[0]=="@"&&(y=y.replace(/\bscreen\(([^)]+)\)/g,(I,v)=>{let L=g.theme("screens",v);return L?(A|=67108864,ll(L,"")):I}),A|=Za(y)),d.push(...o(w,{n:i,p:A,r:[...u,y],i:l},g))}else d.push(...o(w,{p:c,r:[...u,y]},g))}return d.unshift({n:i,p:c,o:Math.max(0,15-b)+1.5*Math.min(p||15,15),r:u,d:m}),d.sort(gl)}(e,so(t,n,r,a),n)}function dl(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,s)=>{let i=t(a,s);return typeof i=="function"&&/color|fill|stroke/i.test(a)?fl(i):""+i})}function co(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function Br(e,t,n=Ae.u,r,a){let o=[];for(let s of e)for(let i of function(c,u,l,g,d){var m;c={...c,i:c.i||d};let p=function(b,x){let h=io.get(b.n);return h?h(b,x):x.r(b.n,b.v[0]=="dark")}(c,u);return p?typeof p=="string"?({r:g,p:l}=so(c,u,l,g),co(Br(Yn(p),u,l,g,c.i),c.n)):Array.isArray(p)?p.map(b=>{var x,h;return{o:0,...b,r:[...Te(g),...Te(b.r)],p:(x=l,h=(m=b.p)!=null?m:l,x&~Ae.o|h)}}):lo(p,c,u,l,g):[{c:ro(c),p:0,o:0,r:[]}]}(s,t,n,r,a))o.splice(ul(o,i),0,i);return o}function uo(e,t,n,r,a,o,s,i){return co((i?n.flatMap(c=>Br([c],r,a,o,s)):Br(n,r,a,o,s)).map(c=>c.p&Ae.o&&(c.n||t==Ae.b)?{...c,p:c.p&~Ae.o|t,o:0}:c),e)}function Ld(e,t,n,r){var a;return a=(o,s)=>{let{n:i,p:c,r:u,i:l}=so(o,s,t);return n&&uo(i,t,n,s,c,u,l,r)},io.set(e,a),e}function Xa(e,t){if(e[e.length-1]!="("){let n=[],r=!1,a=!1,o="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),r=!r),s.endsWith(":")){n[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),a=!a),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(o+=(o&&"-")+s)}o&&(a&&(o="-"+o),t[0].push({n:o,v:n.filter(Ad),i:r}))}}function Ad(e,t,n){return n.indexOf(e)==t}var Zi=new Map;function Yn(e){let t=Zi.get(e);if(!t){let n=[],r=[[]],a=0,o=0,s=null,i=0,c=(u,l=0)=>{a!=i&&(n.push(e.slice(a,i+l)),u&&Xa(n,r)),a=i+1};for(;i<e.length;i++){let u=e[i];if(o)e[i-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(s)e[i-1]!="\\"&&s.test(e.slice(i))&&(s=null,a=i+RegExp.lastMatch.length);else if(u=="/"&&e[i-1]!="\\"&&(e[i+1]=="*"||e[i+1]=="/"))s=e[i+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),n.push(u);else if(u==":")e[i+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=n.lastIndexOf("(");if(u==")"){let g=n[l-1];if(/[~@]$/.test(g)){let d=r.shift();n.length=l,Xa([...n,"#"],r);let{v:m}=r[0].pop();for(let p of d)p.v.splice(+(p.v[0]=="dark")-+(m[0]=="dark"),m.length);Xa([...n,Ld(g.length>1?g.slice(0,-1)+dn(JSON.stringify([g,d])):g+"("+il(d)+")",Ae.a,d,/@$/.test(g))],r)}l=n.lastIndexOf("(",l-1)}n.length=l+1}else/[~@]/.test(u)&&e[i+1]=="("&&r.unshift([])}c(!0),Zi.set(e,t=r[0])}return t}function ml(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function pl(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?ml(e,t,n=>Qa(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Qa(r),e?Qa(e):"")}function Qa(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=pl(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var r0=hl("@"),a0=hl("~");function hl(e){return new Proxy(function(n,...r){return t("",n,r)},{get:(n,r)=>r in n?n[r]:function(a,...o){return t(r,a,o)}});function t(n,r,a){return il(Yn(n+e+"("+pl(r,a)+")"))}}function to(e,t){return Array.isArray(e)?el(ml(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?el(e):[e]}var kd=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function el(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=kd.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,s)=>({[s]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,s)=>({[s]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function bl(e,...t){var n,r;let a=to(e,t),o=(((n=a.find(s=>s.label))==null?void 0:n.label)||"css")+dn(JSON.stringify(a));return r=(s,i)=>co(a.flatMap(c=>lo(c,s,i,Ae.o)),o),io.set(o,r),o}var o0=new Proxy(function(e,t){return tl("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(n,r){return tl(t,n,r)}});function tl(e,t,n){return{toString:()=>bl({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}var s0=Symbol();function Xn({presets:e=[],...t}){let n={preflight:t.preflight!==!1&&[],darkMode:void 0,darkColor:void 0,theme:{},variants:Te(t.variants),rules:Te(t.rules),ignorelist:Te(t.ignorelist),hash:t.hash,stringify:t.stringify||_d};for(let r of Te([...e,{darkMode:t.darkMode,darkColor:t.darkColor,preflight:t.preflight!==!1&&Te(t.preflight),theme:t.theme,hash:t.hash,stringify:t.stringify}])){let{preflight:a,darkMode:o=n.darkMode,darkColor:s=n.darkColor,theme:i,variants:c,rules:u,ignorelist:l,hash:g=n.hash,stringify:d=n.stringify}=typeof r=="function"?r(n):r;n={preflight:n.preflight!==!1&&a!==!1&&[...n.preflight,...Te(a)],darkMode:o,darkColor:s,theme:{...n.theme,...i,extend:{...n.theme.extend,...i?.extend}},variants:[...n.variants,...Te(c)],rules:[...n.rules,...Te(u)],ignorelist:[...n.ignorelist,...Te(l)],hash:g,stringify:d}}return n}function _d(e,t){return e+":"+t}function nl(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):rl(n,1)}):n=>e||{[n[1]]:rl(n,2)}}function rl(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function al(e,t,n,r,a,o){for(let s of t){let i=n.get(s);i||n.set(s,i=r(s));let c=i(e,a,o);if(c)return c}}function Md(e){var t;return no(e[0],typeof(t=e[1])=="function"?t:()=>t)}function Pd(e){var t,n;return Array.isArray(e)?no(e[0],nl(e[1],e[2])):no(e,nl(t,n))}function no(e,t){return yl(e,(n,r,a,o)=>{let s=r.exec(n);if(s)return s.$$=n.slice(s[0].length),s.dark=o,t(s,a)})}function yl(e,t){let n=Te(e).map(Rd);return(r,a,o)=>{for(let s of n){let i=t(r,s,a,o);if(i)return i}}}function Rd(e){return typeof e=="string"?RegExp("^"+e+(e.includes("$")||e.slice(-1)=="-"?"":"$")):e}function ol(e,t){return e.replace(/--(tw(?:-[\w-]+)?)\b/g,(n,r)=>"--"+t(r).replace("#",""))}function Nd(e,t){let n=Xn(e),r=function({theme:c,darkMode:u,darkColor:l,variants:g,rules:d,hash:m,stringify:p,ignorelist:b}){let x=new Map,h=new Map,y=new Map,w=new Map,A=yl(b,(v,L)=>L.test(v));g.push(["dark",Array.isArray(u)||u=="class"?`${Te(u)[1]||".dark"} &`:typeof u=="string"&&u!="media"?u:"@media (prefers-color-scheme:dark)"]);let I=typeof m=="function"?v=>m(v,dn):m?dn:Sd;return{theme:function({extend:v={},...L}){let O={},S={get colors(){return D("colors")},theme:D,negative:()=>({}),breakpoints(P){let _={};for(let H in P)typeof P[H]=="string"&&(_["screen-"+H]=P[H]);return _}};return D;function D(P,_,H,$){if(P){var j;if({1:P,2:$}=/^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(P)||[,P],/[.[]/.test(P)){let B=[];P.replace(/\[([^\]]+)\]|([^.[]+)/g,(X,E,R=E)=>B.push(R)),P=B.shift(),H=_,_=B.join("-")}let ee=O[P]||Object.assign(Object.assign(O[P]={},U(L,P)),U(v,P));if(_==null)return ee;let C=(j=ee[_||"DEFAULT"])!=null?j:H;return $?fl(C,{opacityValue:dl($,D)}):C}let Z={};for(let ee of[...Object.keys(L),...Object.keys(v)])Z[ee]=D(ee);return Z}function U(P,_){let H=P[_];return typeof H=="function"&&(H=H(S)),H&&/color|fill|stroke/i.test(_)?function $(j,Z=[]){let ee={};for(let C in j){let B=j[C],X=[...Z,C];ee[X.join("-")]=B,C=="DEFAULT"&&(X=Z,ee[Z.join("-")]=B),typeof B=="object"&&Object.assign(ee,$(B,X))}return ee}(H):H}}(c),e:ao,h:I,s(v,L){return p(ol(v,I),ol(L,I),this)},d(v,L,O){return l?.(v,L,this,O)},v(v){return x.has(v)||x.set(v,al(v,g,h,Md,this)||"&:"+v),x.get(v)},r(v,L){let O=JSON.stringify([v,L]);return y.has(O)||y.set(O,!A(v,this)&&al(v,d,w,Pd,this,L)),y.get(O)}}}(n),a=new Map,o=[],s=new Set;function i(c){let u=c.n&&r.h(c.n),l=eo(u?{...c,n:u}:c);if(l&&!s.has(l)){s.add(l);let g=ul(o,c);t.insert(l,g,c),o.splice(g,0,c)}return u}return t.resume(c=>a.set(c,c),(c,u)=>{t.insert(c,o.length,u),o.push(u),s.add(c)}),Object.defineProperties(function(c){if(!a.size)for(let l of Te(n.preflight))typeof l=="function"&&(l=l(r)),l&&(typeof l=="string"?uo("",Ae.b,Yn(l),r,Ae.b,[],!1,!0):lo(l,{},r,Ae.b)).forEach(i);c=""+c;let u=a.get(c);if(!u){let l=new Set;for(let g of Br(Yn(c),r))l.add(g.c).add(i(g));u=[...l].filter(Boolean).join(" "),a.set(c,u).set(u,u)}return u},Object.getOwnPropertyDescriptors({get target(){return t.target},theme:r.theme,config:n,snapshot(){let c=t.snapshot(),u=new Set(s),l=new Map(a),g=[...o];return()=>{c(),s=u,a=l,o=g}},clear(){t.clear(),s=new Set,a=new Map,o=[]},destroy(){this.clear(),t.destroy()}}))}function Dd(e,t){return e!=t&&""+e.split(" ").sort()!=""+t.split(" ").sort()}function Id(e=go,t=document.documentElement){if(!t)return e;let n=new MutationObserver(a);n.observe(t,{attributeFilter:["class"],subtree:!0,childList:!0}),o(t),a([{target:t,type:""}]);let{destroy:r}=e;return e.destroy=()=>{n.disconnect(),r.call(e)},e;function a(s){for(let{type:i,target:c}of s)if(i[0]=="a")o(c);else for(let u of c.querySelectorAll("[class]"))o(u);n.takeRecords()}function o(s){let i,c=s.getAttribute("class");c&&Dd(c,i=e(c))&&s.setAttribute("class",i)}}function xl(e){let t=document.querySelector(e||"style[data-twind]");return t&&t.tagName=="STYLE"||((t=document.createElement("style")).dataset.twind="",document.head.prepend(t)),t}function Od(e){let t=e?.cssRules?e:(e&&typeof e!="string"?e:xl(e)).sheet;return{target:t,snapshot(){let n=Array.from(t.cssRules,r=>r.cssText);return()=>{this.clear(),n.forEach(this.insert)}},clear(){for(let n=t.cssRules.length;n--;)t.deleteRule(n)},destroy(){var n;(n=t.ownerNode)==null||n.remove()},insert(n,r){try{t.insertRule(n,r)}catch{t.insertRule(":root{}",r),/:-[mwo]/.test(n)}},resume:oo}}function Fd(e){let t=e&&typeof e!="string"?e:xl(e);return{target:t,snapshot(){let n=Array.from(t.childNodes,r=>r.textContent);return()=>{this.clear(),n.forEach(this.insert)}},clear(){t.textContent=""},destroy(){t.remove()},insert(n,r){t.insertBefore(document.createTextNode(n),t.childNodes[r]||null)},resume:oo}}function Tl(e,t){let n=e?Fd():Od();return t||(n.resume=Ud),n}function Hd(e){return(e.ownerNode||e).textContent||(e.cssRules?Array.from(e.cssRules,t=>t.cssText):Te(e)).join("")}function Ud(e,t){let n=Hd(this.target),r=/\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;if(r.test(n)){var a;let o;for(let s of(r.lastIndex=0,this.clear(),document.querySelectorAll("[class]")))e(s.getAttribute("class"));for(;a=r.exec(n),o&&t(n.slice(o.index+o[0].length,a?.index),{p:parseInt(o[1],36),o:parseInt(o[2],36)/2,n:o[3]}),o=a;);}}var go=new Proxy(oo,{apply:(e,t,n)=>Jn(n[0]),get(e,t){let n=Jn[t];return typeof n=="function"?function(){return n.apply(Jn,arguments)}:n}});function vl(e={},t=Tl,n){return Jn?.destroy(),Jn=Id(Nd(e,typeof t=="function"?t():t),n)}function fo(e,t=!0){var n;let r=Xn(e);return vl({...r,hash:(n=r.hash)!=null?n:t},()=>Tl(!t))}var i0=function e(t){return new Proxy(function(n,...r){return sl(t,"",n,r)},{get:(n,r)=>r==="bind"?e:r in n?n[r]:function(a,...o){return sl(t,r,a,o)}})}();function sl(e,t,n,r){return{toString(){let a=to(n,r),o=ao(t+dn(JSON.stringify([t,a])));return(typeof e=="function"?e:go)(bl({[`@keyframes ${o}`]:to(n,r)})),o}}}var $d=new Map([["align-self","-ms-grid-row-align"],["color-adjust","-webkit-print-color-adjust"],["column-gap","grid-column-gap"],["forced-color-adjust","-ms-high-contrast-adjust"],["gap","grid-gap"],["grid-template-columns","-ms-grid-columns"],["grid-template-rows","-ms-grid-rows"],["justify-self","-ms-grid-column-align"],["margin-inline-end","-webkit-margin-end"],["margin-inline-start","-webkit-margin-start"],["mask-border","-webkit-mask-box-image"],["mask-border-outset","-webkit-mask-box-image-outset"],["mask-border-slice","-webkit-mask-box-image-slice"],["mask-border-source","-webkit-mask-box-image-source"],["mask-border-repeat","-webkit-mask-box-image-repeat"],["mask-border-width","-webkit-mask-box-image-width"],["overflow-wrap","word-wrap"],["padding-inline-end","-webkit-padding-end"],["padding-inline-start","-webkit-padding-start"],["print-color-adjust","color-adjust"],["row-gap","grid-row-gap"],["scroll-margin-bottom","scroll-snap-margin-bottom"],["scroll-margin-left","scroll-snap-margin-left"],["scroll-margin-right","scroll-snap-margin-right"],["scroll-margin-top","scroll-snap-margin-top"],["scroll-margin","scroll-snap-margin"],["text-combine-upright","-ms-text-combine-horizontal"]]);function wl(e){return $d.get(e)}function Sl(e){var t=/^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(e);return t?t[1]?1:t[2]?2:t[3]?3:5:0}function El(e,t){var n=/^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(e);return n?n[1]?/^sti/i.test(t)?1:0:n[2]?/^pat/i.test(t)?1:0:n[3]?/^image-/i.test(t)?1:0:n[4]?t[3]==="-"?2:0:/^(?:inline-)?grid$/i.test(t)?4:0:0}var Bd=[["-webkit-",1],["-moz-",2],["-ms-",4]];function jr(){return({stringify:e})=>({stringify(t,n,r){let a="",o=wl(t);o&&(a+=e(o,n,r)+";");let s=Sl(t),i=El(t,n);for(let c of Bd)s&c[1]&&(a+=e(c[0]+t,n,r)+";"),i&c[1]&&(a+=e(t,c[0]+n,r)+";");return a+e(t,n,r)}})}var mo;function Eo(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Nl(e,t=","){return e.map(Eo).join(t)}var Dl=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function zr(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Wr(e,t="@media "){return t+et(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function et(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function jd(){}var Fe={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Il(e){return e.match(/[-=:;]/g)?.length||0}function To(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(Il(e),15)<<18}var zd=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Co({n:e,i:t,v:n=[]},r,a,o){e&&(e=Eo({n:e,i:t,v:n})),o=[...et(o)];for(let i of n){let c=r.theme("screens",i);for(let u of et(c&&Wr(c)||r.v(i))){var s;o.push(u),a|=c?67108864|To(u):i=="dark"?1073741824:u[0]=="@"?To(u):(s=u,1<<~(/:([a-z-]+)/.test(s)&&~zd.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var Lo=new Map;function Cl(e){if(e.d){let t=[],n=po(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?po(r,o=>po(a,s=>{let i=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(s);if(i){let c=o.indexOf(i[1]);return~c?o.slice(0,c)+i[0]+o.slice(c+i[1].length):ho(o,s)}return ho(s,o)})):r,"&"),r=>ho(r,e.n?"."+Dl(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function po(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function ho(e,t){return e.replace(/&/g,t)}var Ll=new Intl.Collator("en",{numeric:!0});function Wd(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=Ol(e[a],t)?n=a+1:r=a}return r}function Ol(e,t){let n=e.p&Fe.o;return n==(t.p&Fe.o)&&(n==Fe.b||n==Fe.o)?0:e.p-t.p||e.o-t.o||Ll.compare(Al(e.n),Al(t.n))||Ll.compare(kl(e.n),kl(t.n))}function Al(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function kl(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function bo(e,t){return Math.round(parseInt(e,16)*t)}function Mt(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,s=[17,1,.062272][o-1];return`rgba(${[bo(e.substr(1,o),s),bo(e.substr(1+o,o),s),bo(e.substr(1+2*o,o),s),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function Fl(e,t,n,r,a=[]){return function o(s,{n:i,p:c,r:u=[],i:l},g){let d=[],m="",p=0,b=0;for(let y in s||{}){var x,h;let w=s[y];if(y[0]=="@"){if(!w)continue;if(y[1]=="a"){d.push(...Ul(i,c,ko(""+w),g,c,u,l,!0));continue}if(y[1]=="l"){for(let A of et(w))d.push(...o(A,{n:i,p:(x=Fe[y[7]],c&~Fe.o|x),r:u,i:l},g));continue}if(y[1]=="i"){d.push(...et(w).map(A=>({p:-1,o:0,r:[],d:y+" "+A})));continue}if(y[1]=="k"){d.push({p:Fe.d,o:0,r:[y],d:o(w,{p:Fe.d},g).map(Cl).join("")});continue}if(y[1]=="f"){d.push(...et(w).map(A=>({p:Fe.d,o:0,r:[y],d:o(A,{p:Fe.d},g).map(Cl).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))y=="label"&&w?i=w+zr(JSON.stringify([c,l,s])):(w||w===0)&&(y=y.replace(/[A-Z]/g,A=>"-"+A.toLowerCase()),b+=1,p=Math.max(p,(h=y)[0]=="-"?0:Il(h)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(h)?+!!RegExp.$1||-!!RegExp.$2:0)+1),m+=(m?";":"")+et(w).map(A=>g.s(y,Hl(""+A,g.theme)+(l?" !important":""))).join(";"));else if(y[0]=="@"||y.includes("&")){let A=c;y[0]=="@"&&(y=y.replace(/\bscreen\(([^)]+)\)/g,(I,v)=>{let L=g.theme("screens",v);return L?(A|=67108864,Wr(L,"")):I}),A|=To(y)),d.push(...o(w,{n:i,p:A,r:[...u,y],i:l},g))}else d.push(...o(w,{p:c,r:[...u,y]},g))}return d.unshift({n:i,p:c,o:Math.max(0,15-b)+1.5*Math.min(p||15,15),r:u,d:m}),d.sort(Ol)}(e,Co(t,n,r,a),n)}function Hl(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,s="")=>{let i=t(a,s);return typeof i=="function"&&/color|fill|stroke/i.test(a)?Mt(i):""+et(i).filter(c=>Object(c)!==c)})}function Ao(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function vo(e,t,n=Fe.u,r,a){let o=[];for(let s of e)for(let i of function(c,u,l,g,d){c={...c,i:c.i||d};let m=function(p,b){let x=Lo.get(p.n);return x?x(p,b):b.r(p.n,p.v[0]=="dark")}(c,u);return m?typeof m=="string"?({r:g,p:l}=Co(c,u,l,g),Ao(vo(ko(m),u,l,g,c.i),c.n)):Array.isArray(m)?m.map(p=>{var b,x;return{o:0,...p,r:[...et(g),...et(p.r)],p:(b=l,x=p.p??l,b&~Fe.o|x)}}):Fl(m,c,u,l,g):[{c:Eo(c),p:0,o:0,r:[]}]}(s,t,n,r,a))o.splice(Wd(o,i),0,i);return o}function Ul(e,t,n,r,a,o,s,i){return Ao((i?n.flatMap(c=>vo([c],r,a,o,s)):vo(n,r,a,o,s)).map(c=>c.p&Fe.o&&(c.n||t==Fe.b)?{...c,p:c.p&~Fe.o|t,o:0}:c),e)}function qd(e,t,n,r){var a;return a=(o,s)=>{let{n:i,p:c,r:u,i:l}=Co(o,s,t);return n&&Ul(i,t,n,s,c,u,l,r)},Lo.set(e,a),e}function yo(e,t,n){if(e[e.length-1]!="("){let r=[],a=!1,o=!1,s="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),a=!a),i.endsWith(":")){r[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),o=!o),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(s+=(s&&"-")+i)}s&&(o&&(s="-"+s),t[0].push({n:s,v:r.filter(Vd),i:a}))}}function Vd(e,t,n){return n.indexOf(e)==t}var _l=new Map;function ko(e){let t=_l.get(e);if(!t){let n=[],r=[[]],a=0,o=0,s=null,i=0,c=(u,l=0)=>{a!=i&&(n.push(e.slice(a,i+l)),u&&yo(n,r)),a=i+1};for(;i<e.length;i++){let u=e[i];if(o)e[i-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(s)e[i-1]!="\\"&&s.test(e.slice(i))&&(s=null,a=i+RegExp.lastMatch.length);else if(u=="/"&&e[i-1]!="\\"&&(e[i+1]=="*"||e[i+1]=="/"))s=e[i+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),n.push(u);else if(u==":")e[i+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=n.lastIndexOf("(");if(u==")"){let g=n[l-1];if(/[~@]$/.test(g)){let d=r.shift();n.length=l,yo([...n,"#"],r);let{v:m}=r[0].pop();for(let p of d)p.v.splice(+(p.v[0]=="dark")-+(m[0]=="dark"),m.length);yo([...n,qd(g.length>1?g.slice(0,-1)+zr(JSON.stringify([g,d])):g+"("+Nl(d)+")",Fe.a,d,/@$/.test(g))],r)}l=n.lastIndexOf("(",l-1)}n.length=l+1}else/[~@]/.test(u)&&e[i+1]=="("&&r.unshift([])}c(!0),_l.set(e,t=r[0])}return t}function $l(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function Bl(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?$l(e,t,n=>xo(n).trim()):t.filter(Boolean).reduce((n,r)=>n+xo(r),e?xo(e):"")}function xo(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Bl(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var w0=jl("@"),S0=jl("~");function jl(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(a,...o){return t(r,a,o)}}});function t(n,r,a){return Nl(ko(n+e+"("+Bl(r,a)+")"))}}function wo(e,t){return Array.isArray(e)?Ml($l(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?Ml(e):[e]}var Kd=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Ml(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=Kd.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,s)=>({[s]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,s)=>({[s]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function zl(e,...t){var n;let r=wo(e,t),a=(r.find(o=>o.label)?.label||"css")+zr(JSON.stringify(r));return n=(o,s)=>Ao(r.flatMap(i=>Fl(i,o,s,Fe.o)),a),Lo.set(a,n),a}var E0=new Proxy(function(e,t){return Pl("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return Pl(t,n,r)}}});function Pl(e,t,n){return{toString(){return zl({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function k(e,t,n){return[e,Gd(t,n)]}function Gd(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):So(n,1)}):n=>e||{[n[1]]:So(n,2)}}function So(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function M(e,t,n,r){return[e,Jd(t,n,r)]}function Jd(e,t,n){let r=typeof t=="string"?(a,o)=>({[t]:n?n(a,o):a._}):t||(({1:a,_:o},s,i)=>({[a||i]:o}));return(a,o)=>{let s=Wl(e||a[1]),i=o.theme(s,a.$$)??Qn(a.$$,s,o);if(i!=null)return a._=So(a,0,i),r(a,o,s)}}function Pe(e,t={},n){return[e,Yd(t,n)]}function Yd(e={},t){return(n,r)=>{let{section:a=Wl(n[0]).replace("-","")+"Color"}=e,[o,s]=Xd(n.$$);if(!o)return;let i=r.theme(a,o)||Qn(o,a,r);if(!i||typeof i=="object")return;let{opacityVariable:c=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=a.replace("Color","Opacity"),property:l=a,selector:g}=e,d=r.theme(u,s||"DEFAULT")||s&&Qn(s,u,r),m=t||(({_:b})=>{let x=Zn(l,b);return g?{[g]:x}:x});n._={value:Mt(i,{opacityVariable:c||void 0,opacityValue:d||void 0}),color:b=>Mt(i,b),opacityVariable:c||void 0,opacityValue:d||void 0};let p=m(n,r);if(!n.dark){let b=r.d(a,o,i);b&&b!==i&&(n._={value:Mt(b,{opacityVariable:c||void 0,opacityValue:d||"1"}),color:x=>Mt(b,x),opacityVariable:c||void 0,opacityValue:d||void 0},p={"&":p,[r.v("dark")]:m(n,r)})}return p}}function Xd(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function Zn(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function Qn(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=mn(Hl(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function Wl(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function mn(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,a="")=>mn(n)+r+mn(a)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var C0=Symbol();var Qd=new Proxy(jd,{apply(e,t,n){return mo(n[0])},get(e,t){let n=mo[t];return typeof n=="function"?function(){return n.apply(mo,arguments)}:n}});var L0=function e(t){return new Proxy(function(n,...r){return Rl(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(a,...o){return Rl(t,r,a,o)}}})}();function Rl(e,t,n,r){return{toString(){let a=wo(n,r),o=Dl(t+zr(JSON.stringify([t,a])));return(typeof e=="function"?e:Qd)(zl({[`@keyframes ${o}`]:wo(n,r)})),o}}}var Zd="inherit",em="currentColor",tm="transparent",nm="#000",rm="#fff",am={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},om={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},sm={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},im={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},lm={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},cm={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},um={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},gm={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},fm={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},dm={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},mm={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},pm={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},hm={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},bm={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},ym={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},xm={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},Tm={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},vm={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},wm={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},Sm={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},Em={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},Cm={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},Lm={__proto__:null,inherit:Zd,current:em,transparent:tm,black:nm,white:rm,slate:am,gray:om,zinc:sm,neutral:im,stone:lm,red:cm,orange:um,amber:gm,yellow:fm,lime:dm,green:mm,emerald:pm,teal:hm,cyan:bm,sky:ym,blue:xm,indigo:Tm,violet:vm,purple:wm,fuchsia:Sm,pink:Em,rose:Cm},Mo={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:Lm,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...Ye(4,"rem",4,.5,.5),...Ye(12,"rem",4,5),14:"3.5rem",...Ye(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:ne("blur"),backdropBrightness:ne("brightness"),backdropContrast:ne("contrast"),backdropGrayscale:ne("grayscale"),backdropHueRotate:ne("hueRotate"),backdropInvert:ne("invert"),backdropOpacity:ne("opacity"),backdropSaturate:ne("saturate"),backdropSepia:ne("sepia"),backgroundColor:ne("colors"),backgroundImage:{none:"none"},backgroundOpacity:ne("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...Ye(200,"",100,0,50),...Ye(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:ne("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:ne("spacing"),borderWidth:{DEFAULT:"1px",...tt(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:ne("colors"),caretColor:ne("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...Ye(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:ne("borderColor"),divideOpacity:ne("borderOpacity"),divideWidth:ne("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:ne("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...er(2,6),...er(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:ne("spacing"),gradientColorStops:ne("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...er(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...er(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...Ye(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...Ye(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:ne("spacing"),placeholderColor:ne("colors"),placeholderOpacity:ne("opacity"),outlineColor:ne("colors"),outlineOffset:tt(8,"px"),outlineWidth:tt(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:ne("colors"),ringOffsetWidth:tt(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...tt(8,"px")},rotate:{...tt(2,"deg"),...tt(12,"deg",3),...tt(180,"deg",45)},saturate:Ye(200,"",100,0,50),scale:{...Ye(150,"",100,0,50),...Ye(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:ne("spacing"),scrollPadding:ne("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...tt(2,"deg"),...tt(12,"deg",3)},space:ne("spacing"),stroke:ne("colors"),strokeWidth:Ye(2),textColor:ne("colors"),textDecorationColor:ne("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...tt(8,"px")},textUnderlineOffset:{auto:"auto",...tt(8,"px")},textIndent:ne("spacing"),textOpacity:ne("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:ne("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...er(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...Ye(50,"",1,0,10),auto:"auto"}};function er(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function tt(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function Ye(e,t="",n=1,r=0,a=1,o={}){for(;r<=e;r+=a)o[r]=r/n+t;return o}function ne(e){return({theme:t})=>t(e)}var Am={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Mo.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Mo.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},km=[k("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:Qn(`[${t}]`,e,n)}}})),k("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),M("aspect-","aspectRatio"),k("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:a}=t("container"),o={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...s("xs")};for(let i in n){let c=n[i];typeof c=="string"&&(o[Wr(c)]={"&":{maxWidth:c,...s(i)}})}return o;function s(i){let c=a&&(typeof a=="string"?a:a[i]||a.DEFAULT);if(c)return{paddingRight:c,paddingLeft:c}}}),M("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),k("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),k("box-(border|content)","boxSizing",({1:e})=>e+"-box"),k("hidden",{display:"none"}),k("table-(auto|fixed)","tableLayout"),k(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",k("isolate","isolation"),k("object-(contain|cover|fill|none|scale-down)","objectFit"),M("object-","objectPosition"),k("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",qr),k("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),k("(static|fixed|absolute|relative|sticky)","position"),M("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),M("-?(top|bottom|left|right)(?:$|-)","inset"),k("visible","visibility"),k("invisible",{visibility:"hidden"}),M("-?z-","zIndex"),k("flex-((row|col)(-reverse)?)","flexDirection",ql),k("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),M("(flex-(?:grow|shrink))(?:$|-)"),M("(flex)-"),M("grow(?:$|-)","flexGrow"),M("shrink(?:$|-)","flexShrink"),M("basis-","flexBasis"),M("-?(order)-"),"-?(order)-(\\d+)",M("grid-cols-","gridTemplateColumns"),k("grid-cols-(\\d+)","gridTemplateColumns",Jl),M("col-","gridColumn"),k("col-(span)-(\\d+)","gridColumn",Gl),M("col-start-","gridColumnStart"),k("col-start-(auto|\\d+)","gridColumnStart"),M("col-end-","gridColumnEnd"),k("col-end-(auto|\\d+)","gridColumnEnd"),M("grid-rows-","gridTemplateRows"),k("grid-rows-(\\d+)","gridTemplateRows",Jl),M("row-","gridRow"),k("row-(span)-(\\d+)","gridRow",Gl),M("row-start-","gridRowStart"),k("row-start-(auto|\\d+)","gridRowStart"),M("row-end-","gridRowEnd"),k("row-end-(auto|\\d+)","gridRowEnd"),k("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>qr(ql(e))),k("grid-flow-(dense)","gridAutoFlow"),M("auto-cols-","gridAutoColumns"),M("auto-rows-","gridAutoRows"),M("gap-x(?:$|-)","gap","columnGap"),M("gap-y(?:$|-)","gap","rowGap"),M("gap(?:$|-)","gap"),"(justify-(?:items|self))-",k("justify-","justifyContent",Vl),k("(content|items|self)-",e=>({["align-"+e[1]]:Vl(e)})),k("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),M("p([xytrbl])?(?:$|-)","padding",pn("padding")),M("-?m([xytrbl])?(?:$|-)","margin",pn("margin")),M("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),k("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),M("w-","width"),M("min-w-","minWidth"),M("max-w-","maxWidth"),M("h-","height"),M("min-h-","minHeight"),M("max-h-","maxHeight"),M("font-","fontWeight"),M("font-","fontFamily","fontFamily",bt),k("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),k("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),k("italic","fontStyle"),k("not-italic",{fontStyle:"normal"}),k("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),M("tracking-","letterSpacing"),M("leading-","lineHeight"),k("list-(inside|outside)","listStylePosition"),M("list-","listStyleType"),k("list-","listStyleType"),M("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),Pe("placeholder-",{property:"color",selector:"&::placeholder"}),k("text-(left|center|right|justify|start|end)","textAlign"),k("text-(ellipsis|clip)","textOverflow"),M("text-opacity-","textOpacity","--tw-text-opacity"),Pe("text-",{property:"color"}),M("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),M("indent-","textIndent"),k("(overline|underline|line-through)","textDecorationLine"),k("no-underline",{textDecorationLine:"none"}),M("underline-offset-","textUnderlineOffset"),Pe("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),M("decoration-","textDecorationThickness"),k("decoration-","textDecorationStyle"),k("(uppercase|lowercase|capitalize)","textTransform"),k("normal-case",{textTransform:"none"}),k("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),k("align-","verticalAlign"),k("whitespace-","whiteSpace"),k("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),k("break-words",{overflowWrap:"break-word"}),k("break-all",{wordBreak:"break-all"}),Pe("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Pe("accent-",{opacityVariable:!1,opacitySection:"opacity"}),k("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${Bt(e," ")},var(--tw-gradient-stops))`),Pe("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Pe("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),Pe("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),k("bg-(fixed|local|scroll)","backgroundAttachment"),k("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),k(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),k("bg-blend-","backgroundBlendMode"),k("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),M("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Pe("bg-",{section:"backgroundColor"}),M("bg-","backgroundImage"),M("bg-","backgroundPosition"),k("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",qr),M("bg-","backgroundSize"),M("rounded(?:$|-)","borderRadius"),M("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${Bt(n[0])}-radius`]:t,[`border-${Bt(n[1])}-radius`]:t}}),k("border-(collapse|separate)","borderCollapse"),M("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),k("border-(solid|dashed|dotted|double|none)","borderStyle"),M("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Pe("border-([xytrbl])-",{section:"borderColor"},pn("border","Color")),Pe("border-"),M("border-([xytrbl])(?:$|-)","borderWidth",pn("border","Width")),M("border(?:$|-)","borderWidth"),M("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),k("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),k("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),M("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${Bt(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${Bt(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),Pe("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),M("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Pe("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),M("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),k("ring-inset",{"--tw-ring-inset":"inset"}),Pe("ring-",{property:"--tw-ring-color"}),M("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":Mt(t("ringOffsetColor","","#fff")),"--tw-ring-color":Mt(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),Pe("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),M("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":bt(e),"--tw-shadow-colored":bt(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),M("(opacity)-"),k("mix-blend-","mixBlendMode"),...Kl(),...Kl("backdrop-"),M("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:bt(e),transitionTimingFunction:e._=="none"?void 0:bt(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:bt(t("transitionDuration",""))})),M("duration(?:$|-)","transitionDuration","transitionDuration",bt),M("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",bt),M("delay(?:$|-)","transitionDelay","transitionDelay",bt),M("animate(?:$|-)","animation",(e,{theme:t,h:n})=>{let r=bt(e),a=r.split(" "),o=t("keyframes",a[0]);return o?{["@keyframes "+(a[0]=n(a[0]))]:o,animation:a.join(" ")}:{animation:r}}),"(transform)-(none)",k("transform",Po),k("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":Yl(e=="gpu")})),M("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...Po()})),M("-?(rotate)-","rotate",_o),M("-?(translate-[xy])-","translate",_o),M("-?(skew-[xy])-","skew",_o),k("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",qr),"(appearance)-",M("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",M("(cursor)-"),"(cursor)-",k("snap-(none)","scroll-snap-type"),k("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),k("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),k("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),k("snap-(normal|always)","scroll-snap-stop"),k("scroll-(auto|smooth)","scroll-behavior"),M("scroll-p([xytrbl])?(?:$|-)","padding",pn("scroll-padding")),M("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",pn("scroll-margin")),k("touch-(auto|none|manipulation)","touch-action"),k("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),k("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),k("outline",{outlineStyle:"solid"}),k("outline-(dashed|dotted|double|hidden)","outlineStyle"),M("(outline-offset)-"),Pe("outline-",{opacityVariable:!1,opacitySection:"opacity"}),M("outline-","outlineWidth"),"(pointer-events)-",M("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],k("select-(none|text|all|auto)","userSelect"),Pe("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Pe("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),M("stroke-","strokeWidth"),k("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),k("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function qr(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function ql(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function Bt(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function bt(e){return e&&""+(e._||e)}function Vl({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function pn(e,t=""){return({1:n,_:r})=>{let a={x:"lr",y:"tb"}[n]||n+n;return a?{...Zn(e+"-"+Bt(a[0])+t,r),...Zn(e+"-"+Bt(a[1])+t,r)}:Zn(e+t,r)}}function Kl(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":n}},[`(${e}filter)-(none)`,k(`${e}filter`,n),...t.map(r=>M(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:a,_:o})=>({[`--tw-${a}`]:et(o).map(s=>`${r}(${s})`).join(" "),...n})))]}function _o({1:e,_:t}){return{["--tw-"+e]:t,...Po()}}function Po(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":Yl()}}}}function Yl(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Gl({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function Jl({1:e}){return`repeat(${e},minmax(0,1fr))`}var _m=[["sticky","@supports ((position: -webkit-sticky) or (position:sticky))"],["motion-reduce","@media (prefers-reduced-motion:reduce)"],["motion-safe","@media (prefers-reduced-motion:no-preference)"],["print","@media print"],["portrait","@media (orientation:portrait)"],["landscape","@media (orientation:landscape)"],["contrast-more","@media (prefers-contrast:more)"],["contrast-less","@media (prefers-contrast:less)"],["marker","& *::marker,&::marker"],["selection","& *::selection,&::selection"],["first-letter","&::first-letter"],["first-line","&::first-line"],["file","&::file-selector-button"],["placeholder","&::placeholder"],["backdrop","&::backdrop"],["first","&:first-child"],["last","&:last-child"],["even","&:nth-child(2n)"],["odd","&:nth-child(odd)"],["open","&[open]"],["((group|peer)(~[^-[]+)?)(-[a-z-]+|-\\[(.+)]|\\[.+])",({1:e,4:t,5:n},{e:r,h:a,v:o})=>{let s=n&&mn(n)||(t[0]=="["?t:o(t.slice(1)));return`${(s.includes("&")?s:"&"+s).replace(/&/g,`:merge(.${r(a(e))})`)}${e[0]=="p"?"~":" "}&`}],["(ltr|rtl)",({1:e})=>`[dir="${e}"] &`],[/^\[(.+)]$/,({1:e})=>/[&@]/.test(e)&&mn(e).replace(/[}]+$/,"").split("{")]];function Vr({disablePreflight:e}={}){return{preflight:e?void 0:Am,theme:Mo,variants:_m,rules:km}}var Mm=Object.create,Ql=Object.defineProperty,Pm=Object.getOwnPropertyDescriptor,Rm=Object.getOwnPropertyNames,Nm=Object.getPrototypeOf,Dm=Object.prototype.hasOwnProperty,Im=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Om=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Rm(t))!Dm.call(e,a)&&a!==n&&Ql(e,a,{get:()=>t[a],enumerable:!(r=Pm(t,a))||r.enumerable});return e},Fm=(e,t,n)=>(n=e!=null?Mm(Nm(e)):{},Om(t||!e||!e.__esModule?Ql(n,"default",{value:e,enumerable:!0}):n,e)),Hm=Im((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(o){if(a[o])return a[o].exports;var s=a[o]={i:o,l:!1,exports:{}};return n[o].call(s.exports,s,s.exports,r),s.l=!0,s.exports}var a={};return r.m=n,r.c=a,r.i=function(o){return o},r.d=function(o,s,i){r.o(o,s)||Object.defineProperty(o,s,{configurable:!1,enumerable:!0,get:i})},r.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(s,"a",s),s},r.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(n,r,a){"use strict";(function(o){var s,i,c,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};(function(l,g){u(r)==="object"&&u(o)==="object"?o.exports=g():(i=[],s=g,c=typeof s=="function"?s.apply(r,i):s,c!==void 0&&(o.exports=c))})(void 0,function(){return function(l){function g(m){if(d[m])return d[m].exports;var p=d[m]={i:m,l:!1,exports:{}};return l[m].call(p.exports,p,p.exports,g),p.l=!0,p.exports}var d={};return g.m=l,g.c=d,g.i=function(m){return m},g.d=function(m,p,b){g.o(m,p)||Object.defineProperty(m,p,{configurable:!1,enumerable:!0,get:b})},g.n=function(m){var p=m&&m.__esModule?function(){return m.default}:function(){return m};return g.d(p,"a",p),p},g.o=function(m,p){return Object.prototype.hasOwnProperty.call(m,p)},g.p="",g(g.s=0)}([function(l,g,d){function m(E,R){var N={};for(var te in E)R.indexOf(te)>=0||Object.prototype.hasOwnProperty.call(E,te)&&(N[te]=E[te]);return N}Object.defineProperty(g,"__esModule",{value:!0});var p=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(E){return typeof E>"u"?"undefined":u(E)}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E>"u"?"undefined":u(E)},b=Object.assign||function(E){for(var R=1;R<arguments.length;R++){var N=arguments[R];for(var te in N)Object.prototype.hasOwnProperty.call(N,te)&&(E[te]=N[te])}return E},x={top:"top",bottom:"bottom"},h={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:x.top,force:x.top,confirm:x.top,input:x.top,select:x.bottom,date:x.top}},y=g.setOptions=function(E){h=b({},h,E,{classes:b({},h.classes,E.classes),ids:b({},h.ids,E.ids),positions:b({},h.positions,E.positions)})},w=function(){return new Promise(function(E){return setTimeout(E,0)})},A=function(E){return new Promise(function(R){return setTimeout(R,1e3*E)})},I=function(){document.activeElement&&document.activeElement.blur()},v=function(){var E="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(R){var N=16*Math.random()|0,te=R==="x"?N:3&N|8;return te.toString(16)});return"notie-"+E},L={1:h.classes.backgroundSuccess,success:h.classes.backgroundSuccess,2:h.classes.backgroundWarning,warning:h.classes.backgroundWarning,3:h.classes.backgroundError,error:h.classes.backgroundError,4:h.classes.backgroundInfo,info:h.classes.backgroundInfo,5:h.classes.backgroundNeutral,neutral:h.classes.backgroundNeutral},O=function(){return h.transitionSelector+" "+h.transitionDuration+"s "+h.transitionCurve},S=function(E){return E.keyCode===13},D=function(E){return E.keyCode===27},U=function(E,R){E.classList.add(h.classes.container),E.style[R]="-10000px",document.body.appendChild(E),E.style[R]="-"+E.offsetHeight+"px",E.listener&&window.addEventListener("keydown",E.listener),w().then(function(){E.style.transition=O(),E.style[R]=0})},P=function(E,R){var N=document.getElementById(E);N&&(N.style[R]="-"+N.offsetHeight+"px",N.listener&&window.removeEventListener("keydown",N.listener),A(h.transitionDuration).then(function(){N.parentNode&&N.parentNode.removeChild(N)}))},_=function(E,R){var N=document.createElement("div");N.id=h.ids.overlay,N.classList.add(h.classes.overlay),N.classList.add(h.classes.backgroundOverlay),N.style.opacity=0,E&&h.overlayClickDismiss&&(N.onclick=function(){P(E.id,R),H()}),document.body.appendChild(N),w().then(function(){N.style.transition=O(),N.style.opacity=h.overlayOpacity})},H=function(){var E=document.getElementById(h.ids.overlay);E.style.opacity=0,A(h.transitionDuration).then(function(){E.parentNode&&E.parentNode.removeChild(E)})},$=g.hideAlerts=function(E){var R=document.getElementsByClassName(h.classes.alert);if(R.length){for(var N=0;N<R.length;N++){var te=R[N];P(te.id,te.position)}E&&A(h.transitionDuration).then(function(){return E()})}},j=g.alert=function(E){var R=E.type,N=R===void 0?4:R,te=E.text,K=E.time,he=K===void 0?h.alertTime:K,we=E.stay,Ke=we!==void 0&&we,Me=E.position,fe=Me===void 0?h.positions.alert||fe.top:Me;I(),$();var ue=document.createElement("div"),de=v();ue.id=de,ue.position=fe,ue.classList.add(h.classes.textbox),ue.classList.add(L[N]),ue.classList.add(h.classes.alert),ue.innerHTML='<div class="'+h.classes.textboxInner+'">'+te+"</div>",ue.onclick=function(){return P(de,fe)},ue.listener=function(z){(S(z)||D(z))&&$()},U(ue,fe),he&&he<1&&(he=1),!Ke&&he&&A(he).then(function(){return P(de,fe)})},Z=g.force=function(E,R){var N=E.type,te=N===void 0?5:N,K=E.text,he=E.buttonText,we=he===void 0?"OK":he,Ke=E.callback,Me=E.position,fe=Me===void 0?h.positions.force||fe.top:Me;I(),$();var ue=document.createElement("div"),de=v();ue.id=de;var z=document.createElement("div");z.classList.add(h.classes.textbox),z.classList.add(h.classes.backgroundInfo),z.innerHTML='<div class="'+h.classes.textboxInner+'">'+K+"</div>";var oe=document.createElement("div");oe.classList.add(h.classes.button),oe.classList.add(L[te]),oe.innerHTML=we,oe.onclick=function(){P(de,fe),H(),Ke?Ke():R&&R()},ue.appendChild(z),ue.appendChild(oe),ue.listener=function(Ne){S(Ne)&&oe.click()},U(ue,fe),_()},ee=g.confirm=function(E,R,N){var te=E.text,K=E.submitText,he=K===void 0?"Yes":K,we=E.cancelText,Ke=we===void 0?"Cancel":we,Me=E.submitCallback,fe=E.cancelCallback,ue=E.position,de=ue===void 0?h.positions.confirm||de.top:ue;I(),$();var z=document.createElement("div"),oe=v();z.id=oe;var Ne=document.createElement("div");Ne.classList.add(h.classes.textbox),Ne.classList.add(h.classes.backgroundInfo),Ne.innerHTML='<div class="'+h.classes.textboxInner+'">'+te+"</div>";var be=document.createElement("div");be.classList.add(h.classes.button),be.classList.add(h.classes.elementHalf),be.classList.add(h.classes.backgroundSuccess),be.innerHTML=he,be.onclick=function(){P(oe,de),H(),Me?Me():R&&R()};var G=document.createElement("div");G.classList.add(h.classes.button),G.classList.add(h.classes.elementHalf),G.classList.add(h.classes.backgroundError),G.innerHTML=Ke,G.onclick=function(){P(oe,de),H(),fe?fe():N&&N()},z.appendChild(Ne),z.appendChild(be),z.appendChild(G),z.listener=function(Oe){S(Oe)?be.click():D(Oe)&&G.click()},U(z,de),_(z,de)},C=function(E,R,N){var te=E.text,K=E.submitText,he=K===void 0?"Submit":K,we=E.cancelText,Ke=we===void 0?"Cancel":we,Me=E.submitCallback,fe=E.cancelCallback,ue=E.position,de=ue===void 0?h.positions.input||de.top:ue,z=m(E,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);I(),$();var oe=document.createElement("div"),Ne=v();oe.id=Ne;var be=document.createElement("div");be.classList.add(h.classes.textbox),be.classList.add(h.classes.backgroundInfo),be.innerHTML='<div class="'+h.classes.textboxInner+'">'+te+"</div>";var G=document.createElement("input");G.classList.add(h.classes.inputField),G.setAttribute("autocapitalize",z.autocapitalize||"none"),G.setAttribute("autocomplete",z.autocomplete||"off"),G.setAttribute("autocorrect",z.autocorrect||"off"),G.setAttribute("autofocus",z.autofocus||"true"),G.setAttribute("inputmode",z.inputmode||"verbatim"),G.setAttribute("max",z.max||""),G.setAttribute("maxlength",z.maxlength||""),G.setAttribute("min",z.min||""),G.setAttribute("minlength",z.minlength||""),G.setAttribute("placeholder",z.placeholder||""),G.setAttribute("spellcheck",z.spellcheck||"default"),G.setAttribute("step",z.step||"any"),G.setAttribute("type",z.type||"text"),G.value=z.value||"",z.allowed&&(G.oninput=function(){var Ue=void 0;if(Array.isArray(z.allowed)){for(var Ge="",At=z.allowed,vt=0;vt<At.length;vt++)At[vt]==="an"?Ge+="0-9a-zA-Z":At[vt]==="a"?Ge+="a-zA-Z":At[vt]==="n"&&(Ge+="0-9"),At[vt]==="s"&&(Ge+=" ");Ue=new RegExp("[^"+Ge+"]","g")}else p(z.allowed)==="object"&&(Ue=z.allowed);G.value=G.value.replace(Ue,"")});var Oe=document.createElement("div");Oe.classList.add(h.classes.button),Oe.classList.add(h.classes.elementHalf),Oe.classList.add(h.classes.backgroundSuccess),Oe.innerHTML=he,Oe.onclick=function(){P(Ne,de),H(),Me?Me(G.value):R&&R(G.value)};var lt=document.createElement("div");lt.classList.add(h.classes.button),lt.classList.add(h.classes.elementHalf),lt.classList.add(h.classes.backgroundError),lt.innerHTML=Ke,lt.onclick=function(){P(Ne,de),H(),fe?fe(G.value):N&&N(G.value)},oe.appendChild(be),oe.appendChild(G),oe.appendChild(Oe),oe.appendChild(lt),oe.listener=function(Ue){S(Ue)?Oe.click():D(Ue)&&lt.click()},U(oe,de),G.focus(),_(oe,de)};g.input=C;var B=g.select=function(E,R){var N=E.text,te=E.cancelText,K=te===void 0?"Cancel":te,he=E.cancelCallback,we=E.choices,Ke=E.position,Me=Ke===void 0?h.positions.select||Me.top:Ke;I(),$();var fe=document.createElement("div"),ue=v();fe.id=ue;var de=document.createElement("div");de.classList.add(h.classes.textbox),de.classList.add(h.classes.backgroundInfo),de.innerHTML='<div class="'+h.classes.textboxInner+'">'+N+"</div>",fe.appendChild(de),we.forEach(function(oe,Ne){var be=oe.type,G=be===void 0?1:be,Oe=oe.text,lt=oe.handler,Ue=document.createElement("div");Ue.classList.add(L[G]),Ue.classList.add(h.classes.button),Ue.classList.add(h.classes.selectChoice);var Ge=we[Ne+1];Ge&&!Ge.type&&(Ge.type=1),Ge&&Ge.type===G&&Ue.classList.add(h.classes.selectChoiceRepeated),Ue.innerHTML=Oe,Ue.onclick=function(){P(ue,Me),H(),lt()},fe.appendChild(Ue)});var z=document.createElement("div");z.classList.add(h.classes.backgroundNeutral),z.classList.add(h.classes.button),z.innerHTML=K,z.onclick=function(){P(ue,Me),H(),he?he():R&&R()},fe.appendChild(z),fe.listener=function(oe){D(oe)&&z.click()},U(fe,Me),_(fe,Me)},X=g.date=function(E,R,N){var te=E.value,K=te===void 0?new Date:te,he=E.submitText,we=he===void 0?"OK":he,Ke=E.cancelText,Me=Ke===void 0?"Cancel":Ke,fe=E.submitCallback,ue=E.cancelCallback,de=E.position,z=de===void 0?h.positions.date||z.top:de;I(),$();var oe="&#9662",Ne=document.createElement("div"),be=document.createElement("div"),G=document.createElement("div"),Oe=function(Se){Ne.innerHTML=h.dateMonths[Se.getMonth()],be.innerHTML=Se.getDate(),G.innerHTML=Se.getFullYear()},lt=function(Se){var ht=new Date(K.getFullYear(),K.getMonth()+1,0).getDate(),ln=Se.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(ln)>ht&&(ln=ht.toString()),Se.target.textContent=ln,Number(ln)<1&&(ln="1"),K.setDate(Number(ln))},Ue=function(Se){var ht=Se.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);Se.target.textContent=ht,K.setFullYear(Number(ht))},Ge=function(Se){Oe(K)},At=function(Se){var ht=new Date(K.getFullYear(),K.getMonth()+Se+1,0).getDate();K.getDate()>ht&&K.setDate(ht),K.setMonth(K.getMonth()+Se),Oe(K)},vt=function(Se){K.setDate(K.getDate()+Se),Oe(K)},yi=function(Se){var ht=K.getFullYear()+Se;ht<0?K.setFullYear(0):K.setFullYear(K.getFullYear()+Se),Oe(K)},Ht=document.createElement("div"),Oa=v();Ht.id=Oa;var Fa=document.createElement("div");Fa.classList.add(h.classes.backgroundInfo);var ct=document.createElement("div");ct.classList.add(h.classes.dateSelectorInner);var an=document.createElement("div");an.classList.add(h.classes.button),an.classList.add(h.classes.elementThird),an.classList.add(h.classes.dateSelectorUp),an.innerHTML=oe;var on=document.createElement("div");on.classList.add(h.classes.button),on.classList.add(h.classes.elementThird),on.classList.add(h.classes.dateSelectorUp),on.innerHTML=oe;var sn=document.createElement("div");sn.classList.add(h.classes.button),sn.classList.add(h.classes.elementThird),sn.classList.add(h.classes.dateSelectorUp),sn.innerHTML=oe,Ne.classList.add(h.classes.element),Ne.classList.add(h.classes.elementThird),Ne.innerHTML=h.dateMonths[K.getMonth()],be.classList.add(h.classes.element),be.classList.add(h.classes.elementThird),be.setAttribute("contentEditable",!0),be.addEventListener("input",lt),be.addEventListener("blur",Ge),be.innerHTML=K.getDate(),G.classList.add(h.classes.element),G.classList.add(h.classes.elementThird),G.setAttribute("contentEditable",!0),G.addEventListener("input",Ue),G.addEventListener("blur",Ge),G.innerHTML=K.getFullYear();var jn=document.createElement("div");jn.classList.add(h.classes.button),jn.classList.add(h.classes.elementThird),jn.innerHTML=oe;var zn=document.createElement("div");zn.classList.add(h.classes.button),zn.classList.add(h.classes.elementThird),zn.innerHTML=oe;var Wn=document.createElement("div");Wn.classList.add(h.classes.button),Wn.classList.add(h.classes.elementThird),Wn.innerHTML=oe,an.onclick=function(){return At(1)},on.onclick=function(){return vt(1)},sn.onclick=function(){return yi(1)},jn.onclick=function(){return At(-1)},zn.onclick=function(){return vt(-1)},Wn.onclick=function(){return yi(-1)};var Ut=document.createElement("div");Ut.classList.add(h.classes.button),Ut.classList.add(h.classes.elementHalf),Ut.classList.add(h.classes.backgroundSuccess),Ut.innerHTML=we,Ut.onclick=function(){P(Oa,z),H(),fe?fe(K):R&&R(K)};var $t=document.createElement("div");$t.classList.add(h.classes.button),$t.classList.add(h.classes.elementHalf),$t.classList.add(h.classes.backgroundError),$t.innerHTML=Me,$t.onclick=function(){P(Oa,z),H(),ue?ue(K):N&&N(K)},ct.appendChild(an),ct.appendChild(on),ct.appendChild(sn),ct.appendChild(Ne),ct.appendChild(be),ct.appendChild(G),ct.appendChild(jn),ct.appendChild(zn),ct.appendChild(Wn),Fa.appendChild(ct),Ht.appendChild(Fa),Ht.appendChild(Ut),Ht.appendChild($t),Ht.listener=function(Se){S(Se)?Ut.click():D(Se)&&$t.click()},U(Ht,z),_(Ht,z)};g.default={alert:j,force:Z,confirm:ee,input:C,select:B,date:X,setOptions:y,hideAlerts:$}}])})}).call(r,a(0)(n))}])})}),Um=Fm(Hm()),{default:Xl,...$m}=Um,Ro=Xl!==void 0?Xl:$m;var z0=Symbol("clean");var W0=Symbol();function No(e,t){if(typeof e=="string")return t(e);{let n={};for(let r in e)n[r]=No(e[r],t);return n}}function ec(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(r,a,o){let s=e(r,a,...o);return(...i)=>n(r,s,i)}}}else return{input:t,transform(n,r,a){return e(n,r,...a)}}}}var Z0=ec((e,t,n)=>No(t,r=>{for(let a in n)r=r.replace(new RegExp(`{${a}}`,"g"),n[a]);return r})),ey=ec((e,t,n)=>{let r=new Intl.PluralRules(e).select(n);return r in t||(r="many"),No(t[r],a=>a.replace(/{count}/g,n))});var Do=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Io(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function oc(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function sc(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function zm(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,a=!0,o=0;o<n.length;o++)r.indexOf(n[o])===-1&&(a=!1);return a}var nr={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Do?173:189,"=":Do?61:187,";":Do?59:186,"'":222,"[":219,"]":221,"\\":220},yt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Ho={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},He={16:!1,18:!1,17:!1,91:!1},ke={};for(tr=1;tr<20;tr++)nr["f".concat(tr)]=111+tr;var tr,pe=[],tc=!1,ic="all",lc=[],Gr=function(e){return nr[e.toLowerCase()]||yt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},Wm=function(e){return Object.keys(nr).find(function(t){return nr[t]===e})},qm=function(e){return Object.keys(yt).find(function(t){return yt[t]===e})};function cc(e){ic=e||"all"}function rr(){return ic||"all"}function Vm(){return pe.slice(0)}function Km(){return pe.map(function(e){return Wm(e)||qm(e)||String.fromCharCode(e)})}function Gm(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function Jm(e){return typeof e=="string"&&(e=Gr(e)),pe.indexOf(e)!==-1}function Ym(e,t){var n,r;e||(e=rr());for(var a in ke)if(Object.prototype.hasOwnProperty.call(ke,a))for(n=ke[a],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;rr()===e&&cc(t||"all")}function Xm(e){var t=e.keyCode||e.which||e.charCode,n=pe.indexOf(t);if(n>=0&&pe.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&pe.splice(0,pe.length),(t===93||t===224)&&(t=91),t in He){He[t]=!1;for(var r in yt)yt[r]===t&&($e[r]=!1)}}function Qm(e){if(typeof e>"u")Object.keys(ke).forEach(function(s){return delete ke[s]});else if(Array.isArray(e))e.forEach(function(s){s.key&&Oo(s)});else if(typeof e=="object")e.key&&Oo(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0],o=n[1];typeof a=="function"&&(o=a,a=""),Oo({key:e,scope:a,method:o,splitKey:"+"})}}var Oo=function(e){var t=e.key,n=e.scope,r=e.method,a=e.splitKey,o=a===void 0?"+":a,s=sc(t);s.forEach(function(i){var c=i.split(o),u=c.length,l=c[u-1],g=l==="*"?"*":Gr(l);if(ke[g]){n||(n=rr());var d=u>1?oc(yt,c):[];ke[g]=ke[g].filter(function(m){var p=r?m.method===r:!0;return!(p&&m.scope===n&&zm(m.mods,d))})}})};function nc(e,t,n,r){if(t.element===r){var a;if(t.scope===n||t.scope==="all"){a=t.mods.length>0;for(var o in He)Object.prototype.hasOwnProperty.call(He,o)&&(!He[o]&&t.mods.indexOf(+o)>-1||He[o]&&t.mods.indexOf(+o)===-1)&&(a=!1);(t.mods.length===0&&!He[16]&&!He[18]&&!He[17]&&!He[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function rc(e,t){var n=ke["*"],r=e.keyCode||e.which||e.charCode;if($e.filter.call(this,e)){if((r===93||r===224)&&(r=91),pe.indexOf(r)===-1&&r!==229&&pe.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(p){var b=Ho[p];e[p]&&pe.indexOf(b)===-1?pe.push(b):!e[p]&&pe.indexOf(b)>-1?pe.splice(pe.indexOf(b),1):p==="metaKey"&&e[p]&&pe.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(pe=pe.slice(pe.indexOf(b))))}),r in He){He[r]=!0;for(var a in yt)yt[a]===r&&($e[a]=!0);if(!n)return}for(var o in He)Object.prototype.hasOwnProperty.call(He,o)&&(He[o]=e[Ho[o]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(pe.indexOf(17)===-1&&pe.push(17),pe.indexOf(18)===-1&&pe.push(18),He[17]=!0,He[18]=!0);var s=rr();if(n)for(var i=0;i<n.length;i++)n[i].scope===s&&(e.type==="keydown"&&n[i].keydown||e.type==="keyup"&&n[i].keyup)&&nc(e,n[i],s,t);if(r in ke){for(var c=0;c<ke[r].length;c++)if((e.type==="keydown"&&ke[r][c].keydown||e.type==="keyup"&&ke[r][c].keyup)&&ke[r][c].key){for(var u=ke[r][c],l=u.splitKey,g=u.key.split(l),d=[],m=0;m<g.length;m++)d.push(Gr(g[m]));d.sort().join("")===pe.sort().join("")&&nc(e,u,s,t)}}}}function Zm(e){return lc.indexOf(e)>-1}function $e(e,t,n){pe=[];var r=sc(e),a=[],o="all",s=document,i=0,c=!1,u=!0,l="+",g=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(o=t.scope),t.element&&(s=t.element),t.keyup&&(c=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(g=t.capture),typeof t.splitKey=="string"&&(l=t.splitKey)),typeof t=="string"&&(o=t);i<r.length;i++)e=r[i].split(l),a=[],e.length>1&&(a=oc(yt,e)),e=e[e.length-1],e=e==="*"?"*":Gr(e),e in ke||(ke[e]=[]),ke[e].push({keyup:c,keydown:u,scope:o,mods:a,shortcut:r[i],method:n,key:r[i],splitKey:l,element:s});typeof s<"u"&&!Zm(s)&&window&&(lc.push(s),Io(s,"keydown",function(d){rc(d,s)},g),tc||(tc=!0,Io(window,"focus",function(){pe=[]},g)),Io(s,"keyup",function(d){rc(d,s),Xm(d)},g))}function ep(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(ke).forEach(function(n){var r=ke[n].filter(function(a){return a.scope===t&&a.shortcut===e});r.forEach(function(a){a&&a.method&&a.method()})})}var Fo={getPressedKeyString:Km,setScope:cc,getScope:rr,deleteScope:Ym,getPressedKeyCodes:Vm,isPressed:Jm,filter:Gm,trigger:ep,unbind:Qm,keyMap:nr,modifier:yt,modifierMap:Ho};for(Kr in Fo)Object.prototype.hasOwnProperty.call(Fo,Kr)&&($e[Kr]=Fo[Kr]);var Kr;typeof document<"u"&&(ac=window.hotkeys,$e.noConflict=function(e){return e&&window.hotkeys===$e&&(window.hotkeys=ac),$e},window.hotkeys=$e);var ac;var Uo=Ro.alert;var tp=0;function f(e,t,n,r,a){var o,s,i={};for(s in t)s=="ref"?o=t[s]:i[s]=t[s];var c={type:e,props:i,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--tp,__source:a,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(s in o)i[s]===void 0&&(i[s]=o[s]);return J.vnode&&J.vnode(c),c}function $o({value:e,defaultCase:t=null,cases:n}){return e==null?null:f(Ze,{children:n[e]!=null?n[e]:t})}function Bo(){let[e,t]=Y(location.hash);return ge(()=>{let n=()=>t(location.hash);return globalThis.addEventListener("hashchange",n,!1),()=>{globalThis.removeEventListener("hashchange",n)}},[]),e}function Xe(e){Uo({type:"success",text:e})}function wt(e){Uo({type:"error",text:e})}var uc={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF(\u5F53\u524D\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF)",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF(\u5F53\u524D\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF)",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00"};var gc={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u8A8C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00"};var fc={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",changelog:"Change Log",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",toggleDebug:"Print debug logs on the console",document:"Document",resetSuccess:"All settings reset successful",goAdvancedSettings:"Go to Advanced Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",translationEngine:"Engine Options",sourceLanguage:"Original language",popupTarget:"Target",popupService:"Service",target:"Target Language",popupSourceLanguage:"Source",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language"};var np=[{code:"zh-CN",messages:uc},{code:"zh-TW",messages:gc},{code:"en",messages:fc}],jt={};for(let e of np)jt[e.code]=e.messages;var zt="Immersive Translate",ye="immersive-translate";var me="immersiveTranslate",Zy=me+"IframeMessage",jo=`${me}Container`,Wt=`${me}SpecifiedContainer`,Yr="buildinConfig",hn="localConfig",dc="openOptionsPage",mc="translateLocalPdfFile",pc=`${me}PageTranslatedStatus`,hc=`${me}PageUrlChanged`,ex=`${me}ReceiveCommand`,tx=`${me}PopupReceiveMessage`,bc="immersive-translate.owenyoung.com",nx=`https://${bc}/`,zo=`https://${bc}/buildin_config.json`,qt=`${me}Mark`,Wo="immersiveTranslateEffect",Re=`${me}Root`,qo=`data-${ye}-effect`,Vt=`${me}TranslatedMark`,Kt=`${me}ParagraphId`,nt=`${me}AtomicBlockMark`,rt=`${me}ExcludeMark`,Xr=`${me}StayOriginalMark`,bn=`${me}PreWhitespaceMark`,St=`${me}InlineMark`,Gt=`${me}BlockMark`,ar=`${me}Left`,Qr=`${me}Right`,rx=`${me}Width`,ax=`${me}Height`,yc=`${me}Top`,xc=`${me}FontSize`;var Vo=`${me}GlobalStyleMark`,Tc=["@","#"],Zr=" --- ",Ko=`
`,at=`${ye}-target-wrapper`,ea=`${ye}-pdf-target-container`,vc=`${ye}-target-inner`,ox=`${ye}-source-wrapper`,Go=`${ye}-target-translation-block-wrapper`,wc=`${ye}-target-translation-pdf-block-wrapper`,Sc=`${ye}-target-translation-pre-whitespace`,Jo=`${ye}-target-translation-inline-wrapper`,Ec=["none","dashed","underline","dashedBorder","mask","dotted","dividingLine","highlight","marker","blockquote","weakening","paper","italic","bold","thinDashed"],yn=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],Yo={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var Cc=["toggleTranslatePage","toggleTranslateTheWholePage","toggleTranslateToThePageEndImmediately","toggleTranslateTheMainPage"],Lc=["https://immersive-translate.owenyoung.com/options/","http://localhost:8000/dist/userscript/options/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"],Ac="Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.",kc="\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002",ta="zh-CN";var Xo=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),r=Math.round(n-this.#e),a=Qe.green;r>1e4?a=Qe.red:r>1e3&&(a=Qe.yellow),console.debug(Qe.dim(zt+" TIMING:"),t,"in",a(r+"ms")),this.#e=n}},or=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(Qe.dim(zt+" DEBUG:"),...t)}info(...t){this.#e<=1&&console.log(Qe.green(zt+" INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(Qe.yellow(zt+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(Qe.red(zt+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(Qe.red(zt+" FATAL:"),...t)}timing(){return this.level===0?new Xo:{reset:()=>{},stop:()=>{}}}},V=new or;var Qo=/iPhone/i,_c=/iPod/i,Mc=/iPad/i,Pc=/\biOS-universal(?:.+)Mac\b/i,Zo=/\bAndroid(?:.+)Mobile\b/i,Rc=/Android/i,xn=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,na=/Silk/i,Et=/Windows Phone/i,Nc=/\bWindows(?:.+)ARM\b/i,Dc=/BlackBerry/i,Ic=/BB10/i,Oc=/Opera Mini/i,Fc=/\b(CriOS|Chrome)(?:.+)Mobile/i,Hc=/Mobile(?:.+)Firefox\b/i,Uc=e=>typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof globalThis.MSStream>"u";function rp(e){return t=>t.test(e)}function ra(e){let t={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});let n=t.userAgent,r=n.split("[FBAN");typeof r[1]<"u"&&(n=r[0]),r=n.split("Twitter"),typeof r[1]<"u"&&(n=r[0]);let a=rp(n),o={apple:{phone:a(Qo)&&!a(Et),ipod:a(_c),tablet:!a(Qo)&&(a(Mc)||Uc(t))&&!a(Et),universal:a(Pc),device:(a(Qo)||a(_c)||a(Mc)||a(Pc)||Uc(t))&&!a(Et)},amazon:{phone:a(xn),tablet:!a(xn)&&a(na),device:a(xn)||a(na)},android:{phone:!a(Et)&&a(xn)||!a(Et)&&a(Zo),tablet:!a(Et)&&!a(xn)&&!a(Zo)&&(a(na)||a(Rc)),device:!a(Et)&&(a(xn)||a(na)||a(Zo)||a(Rc))||a(/\bokhttp\b/i)},windows:{phone:a(Et),tablet:a(Nc),device:a(Et)||a(Nc)},other:{blackberry:a(Dc),blackberry10:a(Ic),opera:a(Oc),firefox:a(Hc),chrome:a(Fc),device:a(Dc)||a(Ic)||a(Oc)||a(Hc)||a(Fc)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}var es="DENO",aa="CHROME",oa="FIREFOX";function $c(e){let t=aa;try{let n=navigator?.userAgent||"";/firefox/i.test(n)?t=oa:/deno/i.test(n)&&(t=es)}catch{}return e===aa&&t===aa||e===oa&&t===oa||e===es&&t===es}function Bc(){return $c(aa)}function jc(){return typeof Deno<"u"}function ts(){return $c(oa)}function zc(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var Wc={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},qc={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:Wc,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:Wc,query:()=>{},sendMessage:()=>{}}};var Q;jc()?Q=qc:Q=globalThis.immersiveTranslateBrowserAPI;var ns={get:(e,t,n)=>{let r=t===void 0?e:{[e]:t};return Q.storage[n].get(r)},set:(e,t,n)=>Q.storage[n].set({[e]:t})};function sa(e,t,n){let[r]=Y(()=>typeof t=="function"?t():t),[a]=Y(n),[o,s]=Y(r),[i,c]=Y(!0),[u,l]=Y("");ge(()=>{ns.get(e,r,a).then(d=>{d[e]&&s(d[e]),c(!0),l("")}).catch(d=>{c(!1),l(d)})},[e,r,a]);let g=Gn(d=>{let m=typeof d=="function"?d(o):d;V.debug("new settings",m),ns.set(e,m,a).then(()=>{s(m),c(!0),l("")}).catch(p=>{s(m),c(!1),l(p)})},[a,e,o]);return[o,g,i,u]}function ia(e,t,n){let r=[];return function(){let[o,s,i,c]=sa(e,t,n),u=Gn(l=>{for(let g of r)g(l)},[]);return ge(()=>(r.push(s),()=>{r.splice(r.indexOf(s),1)}),[s]),[o,u,i,c]}}function Vc(e,t){return ia(e,t,"local")}function Kc(e,t){return ia(e,t,"sync")}var ap="userConfig",op={},ot=Kc(ap,op);function Pt(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=yn.map(a=>a.toLowerCase()),r=n.indexOf(t);if(r===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let a=n.indexOf(t);return a===-1?"auto":yn[a]}else return"auto";else return yn[r]}function sr(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():T}var ae=sr();function xe(){return ae.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function Gc(){return typeof Deno<"u"}var Jc={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","META"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","BDO","MARK","BIG","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],excludeSelectors:["[role=button]"],translationClasses:"immersive-translate-text",detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]},{matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{matches:["mail.qq.com/cgi-bin/frame_html"],selectors:["#thisiddoesnotexists"]}]};function rs(e){return Array.isArray(e)?e:e?[e]:[]}function Tn(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function xt(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function la(e,t){let n=[],r=Object.keys(e);for(let s of r){let i=e[s];Array.isArray(i)&&n.push(s)}let a=e;return Object.keys(t).forEach(s=>{let i=t[s];if(i!==void 0)if(!n.includes(s))a[s]=i;else if(s.startsWith("additional")){let c=rs(i);a[s]=Array.from(new Set([...a[s],...c]))}else a[s]=rs(i)}),a}function Jt(){if(ae.PROD==="1")return{};let e={};if(ae.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&ae.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:ae.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:ae.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(ae.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&ae.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:ae.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:ae.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(ae.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:ae.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(ae.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:ae.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(ae.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&ae.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:ae.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:ae.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(ae.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&ae.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:ae.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:ae.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(ae.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:ae.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return ae.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=ae.IMMERSIVE_TRANSLATE_SERVICE),ae.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),ae.MOCK==="1"&&(e.translationService="mock"),e}async function ir(){let e=await Q.storage.local.get(hn);if(e[hn]){let t=e[hn],n=t.tempTranslationUrlMatches||[],r=n.filter(s=>s.expiredAt>Date.now()),a=!1;r.length!==n.length&&(n=r,a=!0);let o={...t,tempTranslationUrlMatches:[...n]};return a&&await lr(o),o}else return{}}async function lr(e){await Q.storage.local.set({[hn]:e})}async function vn(){await Q.storage.local.set({[hn]:{}})}async function Ce(){let e=await Q.storage.local.get(Yr),t={...Jc,buildinConfigUpdatedAt:ae.BUILD_TIME};if(e[Yr]){let p=e[Yr],b=new Date(p.buildinConfigUpdatedAt),x=new Date(t.buildinConfigUpdatedAt);b>x&&(t=p)}let n={};if(!xe()){let p=await Q.commands.getAll();for(let b of p)b.name&&b.shortcut&&(n[b.name]=b.shortcut)}let r={...t,targetLanguage:ta,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:t.generalRule,translationGeneralConfig:{engine:"google"},rules:[]},a=Jt(),s=(await Q.storage.sync.get("userConfig")||{}).userConfig||{},i=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},c=await ir(),u=new Date;if(c&&c.tempTranslationUrlMatches&&c.tempTranslationUrlMatches.length>0){let p=c.tempTranslationUrlMatches.filter(b=>new Date(b.expiredAt)>u);if(p.length>0){let b=s.translationUrlPattern?s.translationUrlPattern?.matches||[]:[],x=Array.isArray(b)?b:[b],h=Array.from(new Set(x.concat(p.map(y=>y.match))));s.translationUrlPattern={...s.translationUrlPattern,matches:h}}}let l=Object.assign({},i,a,s);if(!l.interfaceLanguage){let p=await sp();l.interfaceLanguage=p}let g=Object.assign(r,t),d=Object.keys(g),m=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let p of d){let b=p;if(b==="generalRule")typeof l[b]=="object"&&(g[b]=la(r[b],l[b]));else if(b==="translationServices"){let x=l[b]||{},h=t[b]||{},y=Object.keys(h),w=Object.keys(x),A=[...new Set([...y,...w])],I={};for(let v of A)I[v]={...h[v],...x[v]};g[b]=I}else if(typeof l[b]!="string"&&typeof l[b]!="boolean"&&typeof l[b]!="number"&&m.includes(b))l[b]&&(g[b]=Object.assign(g[b],l[b])),b==="shortcuts"&&(g[b]={...g[b],...n});else if(b==="rules"){if(Array.isArray(l[b])&&(g[b]=[...l[b],...g[b]]),ae.PROD==="0"&&ae.DEV_RULES){let x=JSON.parse(ae.DEV_RULES);g[b]=[...x,...g[b]]}}else l[b]!==void 0&&(g[b]=l[b])}return g.donateUrl=t.donateUrl,g.minVersion=t.minVersion,g.feedbackUrl=t.feedbackUrl,g}var sp=async()=>{let n=(await Q.i18n.getAcceptLanguages()).map(r=>Pt(r)).find(r=>jt[r]);return n||"en"};async function os(e){if(Math.abs(e)<1024)return e+" B";let n=["KB","MB","GB","TB","PB","EB","ZB","YB"],r=-1;do e/=1024,++r;while(Math.abs(e)>=1024&&r<n.length-1);return e.toFixed(1)+" "+n[r]}function Yc(e,t,n){let r=ip(e,t),a=[],o={from:e[0].from,fromByClient:e[0].fromByClient,to:e[0].to,tempSentences:[],url:e[0].url};for(let s of r)(o.tempSentences.reduce((c,u)=>c+u.text.length,0)+s.text.length>t||o.tempSentences.length>=n)&&(a.push(o),o={fromByClient:o.fromByClient,from:s.from,to:s.to,tempSentences:[],url:s.url}),(o.from!==s.from||o.to!==s.to)&&(o.tempSentences.length>0?(a.push(o),o={fromByClient:o.fromByClient,from:s.from,to:s.to,tempSentences:[],url:s.url}):(o.from=s.from,o.to=s.to)),o.tempSentences.push(s);return o.tempSentences.length>0&&a.push(o),a}function ip(e,t){let n=[];for(let r=0;r<e.length;r++){let a=e[r],{from:o,to:s,text:i,url:c}=a,u=i.split(/\r?\n/),l=[],g="";for(let d=0;d<u.length;d++){let m=u[d];if(m===""){l.length>0?d<u.length-1&&(l[l.length-1].suffix+=`
`):g+=`
`;continue}else if(m.length>t){let p=[];as(m,t,p);for(let b=0;b<p.length;b++){let x=p[b],{text:h,prefix:y,suffix:w}=x;l.push({from:o,to:s,text:h,prefix:y,suffix:w,index:r,url:c})}}else l.push({text:m,prefix:g,suffix:"",from:o,to:s,index:r,url:c});l.length>0&&d<u.length-1&&(l[l.length-1].suffix+=`
`)}n.push(...l)}return n}function cr(e,t){let n=Pt(e),r=Pt(t),a=n===r;return a?!0:(a=n.startsWith("zh")&&r.startsWith("zh"),a)}function as(e,t,n){let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((o,s)=>{let i=e.lastIndexOf(s,t);return i>o?i:o},-1);if(a===-1)n.push({text:e.slice(0,t),prefix:"",suffix:""}),e.length>t&&as(e.slice(t),t,n);else{let o=e.slice(0,a+1);o.startsWith(" ")?n.push({text:o.slice(1),prefix:" ",suffix:""}):n.push({text:o,prefix:"",suffix:""}),a+1<e.length&&as(e.slice(a+1),t,n)}return n}var Be=class extends Error{constructor(n,r,a){super(r);this.name=n,a&&(this.details=a)}};async function wn(e){e.body;let{url:t,responseType:n,...r}=e;n||(n="json"),r={mode:"cors",...r};let o=await(e.fetchPolyfill||fetch)(t,r);if(o.ok&&o.status>=200&&o.status<400){if(n==="json")return await o.json();if(n==="text")return await o.text();if(n==="raw"){let s=await o.text(),i=Object.fromEntries([...o.headers.entries()]),c=o.url;return c||(o.headers.get("X-Final-URL")?c=o.headers.get("X-Final-URL"):c=t),{body:s,headers:i,status:o.status,statusText:o.statusText,url:c}}}else{let s;try{s=await o.text()}catch(i){V.error("parse response failed",i)}throw new Be("fetchError",o.status+": "+o.statusText||"",s)}}function Rt(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function lp(e,t){return e<<t|e>>>32-t}function ua(e,t,n,r,a,o){return Rt(lp(Rt(Rt(t,e),Rt(r,o)),a),n)}function je(e,t,n,r,a,o,s){return ua(t&n|~t&r,e,t,a,o,s)}function ze(e,t,n,r,a,o,s){return ua(t&r|n&~r,e,t,a,o,s)}function We(e,t,n,r,a,o,s){return ua(t^n^r,e,t,a,o,s)}function qe(e,t,n,r,a,o,s){return ua(n^(t|~r),e,t,a,o,s)}function ca(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,a,o,s,i=1732584193,c=-271733879,u=-1732584194,l=271733878;for(n=0;n<e.length;n+=16)r=i,a=c,o=u,s=l,i=je(i,c,u,l,e[n],7,-680876936),l=je(l,i,c,u,e[n+1],12,-389564586),u=je(u,l,i,c,e[n+2],17,606105819),c=je(c,u,l,i,e[n+3],22,-1044525330),i=je(i,c,u,l,e[n+4],7,-176418897),l=je(l,i,c,u,e[n+5],12,1200080426),u=je(u,l,i,c,e[n+6],17,-1473231341),c=je(c,u,l,i,e[n+7],22,-45705983),i=je(i,c,u,l,e[n+8],7,1770035416),l=je(l,i,c,u,e[n+9],12,-1958414417),u=je(u,l,i,c,e[n+10],17,-42063),c=je(c,u,l,i,e[n+11],22,-1990404162),i=je(i,c,u,l,e[n+12],7,1804603682),l=je(l,i,c,u,e[n+13],12,-40341101),u=je(u,l,i,c,e[n+14],17,-1502002290),c=je(c,u,l,i,e[n+15],22,1236535329),i=ze(i,c,u,l,e[n+1],5,-165796510),l=ze(l,i,c,u,e[n+6],9,-1069501632),u=ze(u,l,i,c,e[n+11],14,643717713),c=ze(c,u,l,i,e[n],20,-373897302),i=ze(i,c,u,l,e[n+5],5,-701558691),l=ze(l,i,c,u,e[n+10],9,38016083),u=ze(u,l,i,c,e[n+15],14,-660478335),c=ze(c,u,l,i,e[n+4],20,-405537848),i=ze(i,c,u,l,e[n+9],5,568446438),l=ze(l,i,c,u,e[n+14],9,-1019803690),u=ze(u,l,i,c,e[n+3],14,-187363961),c=ze(c,u,l,i,e[n+8],20,1163531501),i=ze(i,c,u,l,e[n+13],5,-1444681467),l=ze(l,i,c,u,e[n+2],9,-51403784),u=ze(u,l,i,c,e[n+7],14,1735328473),c=ze(c,u,l,i,e[n+12],20,-1926607734),i=We(i,c,u,l,e[n+5],4,-378558),l=We(l,i,c,u,e[n+8],11,-2022574463),u=We(u,l,i,c,e[n+11],16,1839030562),c=We(c,u,l,i,e[n+14],23,-35309556),i=We(i,c,u,l,e[n+1],4,-1530992060),l=We(l,i,c,u,e[n+4],11,1272893353),u=We(u,l,i,c,e[n+7],16,-155497632),c=We(c,u,l,i,e[n+10],23,-1094730640),i=We(i,c,u,l,e[n+13],4,681279174),l=We(l,i,c,u,e[n],11,-358537222),u=We(u,l,i,c,e[n+3],16,-722521979),c=We(c,u,l,i,e[n+6],23,76029189),i=We(i,c,u,l,e[n+9],4,-640364487),l=We(l,i,c,u,e[n+12],11,-421815835),u=We(u,l,i,c,e[n+15],16,530742520),c=We(c,u,l,i,e[n+2],23,-995338651),i=qe(i,c,u,l,e[n],6,-198630844),l=qe(l,i,c,u,e[n+7],10,1126891415),u=qe(u,l,i,c,e[n+14],15,-1416354905),c=qe(c,u,l,i,e[n+5],21,-57434055),i=qe(i,c,u,l,e[n+12],6,1700485571),l=qe(l,i,c,u,e[n+3],10,-1894986606),u=qe(u,l,i,c,e[n+10],15,-1051523),c=qe(c,u,l,i,e[n+1],21,-2054922799),i=qe(i,c,u,l,e[n+8],6,1873313359),l=qe(l,i,c,u,e[n+15],10,-30611744),u=qe(u,l,i,c,e[n+6],15,-1560198380),c=qe(c,u,l,i,e[n+13],21,1309151649),i=qe(i,c,u,l,e[n+4],6,-145523070),l=qe(l,i,c,u,e[n+11],10,-1120210379),u=qe(u,l,i,c,e[n+2],15,718787259),c=qe(c,u,l,i,e[n+9],21,-343485551),i=Rt(i,r),c=Rt(c,a),u=Rt(u,o),l=Rt(l,s);return[i,c,u,l]}function Xc(e){var t,n="",r=e.length*32;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function ss(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=e.length*8;for(t=0;t<r;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function cp(e){return Xc(ca(ss(e),e.length*8))}function up(e,t){var n,r=ss(e),a=[],o=[],s;for(a[15]=o[15]=void 0,r.length>16&&(r=ca(r,e.length*8)),n=0;n<16;n+=1)a[n]=r[n]^909522486,o[n]=r[n]^1549556828;return s=ca(a.concat(ss(t)),512+t.length*8),Xc(ca(o.concat(s),512+128))}function Qc(e){var t="0123456789abcdef",n="",r,a;for(a=0;a<e.length;a+=1)r=e.charCodeAt(a),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function is(e){return unescape(encodeURIComponent(e))}function Zc(e){return cp(is(e))}function gp(e){return Qc(Zc(e))}function eu(e,t){return up(is(e),is(t))}function fp(e,t){return Qc(eu(e,t))}function Sn(e,t,n){return t?n?eu(t,e):fp(t,e):n?Zc(e):gp(e)}var En=[];async function ur(e,t){return await new Promise((n,r)=>{let a=e,o=1,s=indexedDB.open(a,o);s.onsuccess=i=>{n(s.result)},s.onerror=i=>{console.error("onerror: Error opening the database, switching to non-database mode",i),r()},s.onupgradeneeded=i=>{let c=s.result,u=t||"cache";c.createObjectStore(u,{keyPath:"key"})}})}async function ls(e){let t=`${ye}-${e.service}@${e.from}->${e.to}`;return await mp(t,e)}async function cs(e){let t=Sn(e.originalText),n=`${ye}-${e.service}@${e.from}->${e.to}`;return await dp(n,t)}async function dp(e,t){let n=await ur(e);return await new Promise((r,a)=>{if(!n)return a();let o="cache",i=n.transaction([o],"readonly").objectStore(o).get(t);i.onsuccess=c=>{n.close();let u=i.result;r(u)},i.onerror=c=>{n.close(),console.error("queryInDB->onerror:",c),a()}})}async function mp(e,t){let n=await ur(e);return(await us()).includes(e)||await pp(e),await new Promise(a=>{if(!n)return a(!1);let o="cache",i=n.transaction([o],"readwrite").objectStore(o).put(t);i.onsuccess=c=>{n.close(),a(!0)},i.onerror=c=>{console.error("addInDB->onerror:",c),n.close(),a(!1)}})}async function pp(e){let t="cache_list",n=await ur(ye+"-cacheList",t),a=n.transaction([t],"readwrite").objectStore(t).put({key:e});a.onsuccess=o=>{n.close(),En.push(e)},a.onerror=o=>{n.close(),console.error(o)}}async function us(){if(En&&En.length>0)return En;let e=await ur(ye+"-cacheList","cache_list");return En=await new Promise(t=>{let n="cache_list",a=e.transaction([n],"readonly").objectStore(n).getAllKeys();a.onsuccess=o=>{e.close(),t(a.result)},a.onerror=o=>{e.close(),console.error(o),t([])}}),En}async function gs(){try{let e=[];(await us()).forEach(r=>{e.push(hp(r))});let n=await Promise.all(e);return os(n.reduce((r,a)=>r+a,0))}catch(e){return console.error(e),os(0)}}async function hp(e){let t=await ur(e),r=[...t.objectStoreNames].reduce((s,i)=>{let c=bp(t,i);return s.push(c),s},[]),a=await Promise.all(r);return t.close(),a.reduce((s,i)=>s+i,0)}async function bp(e,t){return await new Promise((n,r)=>{if(e==null)return r();let a=0,o=e.transaction([t]).objectStore(t).openCursor();o.onsuccess=s=>{let i=o.result;if(i){let c=i.value;a+=JSON.stringify(c).length,i.continue()}else n(a)},o.onerror=s=>r("error in "+t+": "+s)})}async function tu(){try{let t=(await us()).map(r=>yp(r));return!!(await Promise.all(t)).every(r=>r)}catch(e){return console.error("deleteAll error",e),!1}}async function yp(e){return await new Promise(t=>{let n=indexedDB.deleteDatabase(e);n.onsuccess=()=>{t(!0)},n.onerror=r=>{t(!1)}})}var xp=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Tp=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,vp=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,wp=/(\s+)|([\p{P}\p{S}])/gu,Sp=[["zh-CN",xp],["ja",Tp],["ko",vp]];function nu(e){if(!e)return"auto";let t="auto",n=0,r=0,a=e.match(wp);a&&(r=a.reduce((s,i)=>s+i.length,0));let o=e.length-r;for(let s of Sp){let i=s[1],c=s[0],u=e.match(i),l=u?u.length:0;l>n&&(n=l,t=c)}return n*2.5/o>.5?t:"auto"}function fs(){try{return globalThis.self!==globalThis.top}catch{return!0}}var Ep=sr(),gr=Ep.PROD==="1";function ru(e,t,n){let r=e.querySelectorAll("footer"),a=e.querySelectorAll("aside"),o=Array.from(r).concat(Array.from(a)),s=e.querySelectorAll("header"),i=e.querySelectorAll("main"),c=[];for(let l of s)i.length>0&&i[0].contains(l)||c.push(l);for(let l=0;l<t.length;l++){let g=t[l].element;for(let d=l+1;d<t.length;d++){let m=t[d].element;if(g.contains(m))t.splice(d,1),d--;else if(m.contains(g)){t.splice(l,1),l--;break}else g===m&&(t.splice(d,1),d--)}}return t.filter(l=>{let g=l.element;if(l.reserve)return!0;let d=!1,m=!1;for(let p of o)if(g===p||p.contains(g)){d=!0;break}if(d)return!1;for(let p of c){if(g.nodeName==="H1")continue;let b=p.querySelector("h1");if(!(b&&iu(b.textContent||"",n.paragraphMinTextCount,n.paragraphMinWordCount))&&(g===p||p.contains(g))){m=!0;break}}return!m}).map(l=>l.element)}function Cn(e){for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];if(typeof n!="string")return n}return null}function ga(e){let t=[];for(let n=e.length-1;n>=0;n--){let r=e[n].element||e[n];typeof r!="string"&&t.push(r)}return t}function ds(e){for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!="string")return n}return null}function fr(e,t){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?t?e.textContent:" ":null}function st(e,t){let n=[];for(let r of t){let a=e.querySelectorAll(r);for(let o of a)n.push(o)}return n}function Cp(e,t){let n=function(o){return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE?o.nodeType===Node.ELEMENT_NODE&&Je(o,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),a=!0;for(;r.nextNode();){let o=r.currentNode;if(o.nodeType===Node.ELEMENT_NODE){if(se(o,St)){if(a===!0)return!0;continue}if(!t.inlineTags.includes(o.nodeName))return!1}}return!0}function ut(e,t){let n=t.inlineTags;return e.nodeType===Node.ELEMENT_NODE?n.includes(e.nodeName)?se(e,Gt)||e.nodeName==="BR"?!1:se(e,St)?!0:Cp(e,t):se(e,St):!1}function au(e,t){for(let n of t)if(n===e)return!0;return!1}function ou(e,t){return!!t.metaTags.includes(e.nodeName)}function Je(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:r,excludeTags:a}=t,o=[];return n&&a&&a.length>0?o=a||[]:o=a.filter(s=>!r.includes(s)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&se(e,rt)?!0:e.nodeType===Node.ELEMENT_NODE&&se(e,Wt)?!1:!!o.includes(e.nodeName)}function su(e,t,n,r){let a=mr(r),o=new RegExp(`^${a[0]}(\\d+)${a[1]}$`),s=e.text,i=s.trim();return i===""||i.length===1&&i.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(s)||i.includes("</style>")||i.includes("< styles>")||hs(i)||ms(i)||ps(i)||o.test(i)?!1:iu(s,t,n)}function iu(e,t,n){let r=e.trim();return r.length>=t||r.split(" ").length>=n}function ms(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function ps(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function hs(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function lu(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function se(e,t){return Lp(e,t,"1")}function Lp(e,t,n){return gr?e[Re]?!!(e[Re]&&e[Re][t]===n):!1:e.dataset[t]===n}function cu(e,t){return gr?e[Re]?!!(e[Re]&&e[Re][t]):!1:e.dataset[t]!==void 0}function dr(e){return(e.innerText||e.textContent||"").trim()}function fa(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function ce(e,t,n){e.isContentEditable||(e.dataset[Wo]||(e.dataset[Wo]="1"),gr?(e[Re]||(e[Re]={}),e[Re][t]||(e[Re][t]=n)):e.dataset[t]!==n&&(e.dataset[t]=n))}function uu(e,t){if(gr){if(!e[Re]||!e[Re][t])return;delete e[Re][t]}else delete e.dataset[t]}function Nt(e,t){return gr?!e[Re]||!e[Re][t]?void 0:e[Re][t]:e.dataset[t]}function Ln(e,t){let n=!1;return(t.stayOriginalTags.includes(e.nodeName)||se(e,Xr))&&(n=!0),n}function gu(e,t){return!t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags).includes(e.nodeName)}function mr(e){let{config:t}=e,n=Tc;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function da(e,t){if(!t)return!1;Array.isArray(t)||(t=[t]);for(let n of t)if(e.querySelector(n))return!0;return!1}function fu(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,r=>r.textContent&&r.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),n=null;for(;t.nextNode();)n=t.currentNode;return n?n.parentElement:null}function bs(e,t){let{excludeSelectors:n,additionalExcludeSelectors:r,extraInlineSelectors:a,additionalInlineSelectors:o,extraBlockSelectors:s,atomicBlockSelectors:i,atomicBlockTags:c,globalStyles:u,stayOriginalTags:l,stayOriginalSelectors:g,globalAttributes:d}=t,m=Object.keys(u);if(m.length>0)for(let S of m){let D=st(document.body,[S]);for(let U of D)if(!se(U,Vo)){ce(U,Vo,"1");let P=u[S];U.style.cssText+=P}}let p=Object.keys(d);if(p.length>0)for(let S of p){let D=d[S],U=Object.keys(D),P=st(document.body,[S]);for(let _ of P)for(let H of U){let $=D[H];_.getAttribute(H)!==$&&($===null?_.removeAttribute(H):_.setAttribute(H,$))}}let b=[...n,...r],x=[...a,...o],h=[...i],y=c.map(S=>S.toLowerCase()),w=s;st(document.body,b).forEach(S=>{se(S,rt)||ce(S,rt,"1")});let I=[];if(h.length>0&&(I=st(document.body,h).filter(S=>!se(S,nt))),y.length>0){let S=l.reduce((P,_)=>{let H=_.toLowerCase();return P.push(`<${H}>`,`</${H}>`,`<${H} />`),P},[]),D=[">http://",">https://"];S.push(...D);let U=st(document.body,y).filter(P=>{if(se(P,nt))return!1;{let H=P.innerHTML;return!S.some(j=>H.includes(j))}});I.push(...U)}I.forEach(S=>{se(S,nt)||ce(S,nt,"1")});let v=[];if(x.length>0)for(let S of e)v.push(...st(S,x));v.forEach(S=>{ce(S,St,"1")});let L=[];if(w.length>0)for(let S of e)L.push(...st(S,w));L.forEach(S=>{ce(S,Gt,"1")});let O=[];if(g.length>0)for(let S of e)O.push(...st(S,g));O.forEach(S=>{ce(S,Xr,"1")})}function du(e,t){let n=t.matches||[];if(n&&!Array.isArray(n)&&(n=[n]),n.length===0)return!1;if(n.length>0){if(n.includes(e))return!0;for(let r of n)if(r.includes("*")&&new RegExp(r).test(e))return!0}return!1}async function mu(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await it({text:dr(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=Pt(document.documentElement.lang)),e}function ys(e,t){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:n,state:{translationArea:r}}=t,a=[];if(r==="body")return[e];if(n&&n.selectors.length>0){let s=n.selectors.map(i=>{let c=e.matches(i),u=[];c?u=[e]:u=e.querySelectorAll(i);for(let l of u)se(l,Wt)||ce(l,Wt,"1");return Array.from(u)}).flat();a.push(...s.map(i=>({element:i,reserve:!0})))}else{if(n&&n.additionalSelectors.length>0){let g=st(e,n.additionalSelectors);for(let d of g)se(d,Wt)||ce(d,Wt,"1");a.push(...g.map(d=>({element:d,reserve:!0})))}let s=st(e,["article"]);a.push(...s.map(g=>({element:g,reserve:!0})));let i;if(a.length===0&&(i=e.querySelectorAll("[role=main]"),i.length===0&&(i=e.querySelectorAll("main")),i.length===0&&(i=e.querySelectorAll(".main")),i.length>0)){let g=Array.from(i);a=a.concat(g.map(d=>({element:d,reserve:!0})))}let c=[],u=g=>{if(g.nodeType===Node.ELEMENT_NODE&&Je(g,t.rule,!1))return NodeFilter.FILTER_REJECT;if(g.nodeType===Node.TEXT_NODE&&(g.textContent?g.textContent.trim():"").length>=n.containerMinTextCount){let m=g.parentNode;m&&m.parentNode&&(m=m.parentNode),m&&m.nodeType===Node.ELEMENT_NODE&&(c.includes(m)||c.push(m))}return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,u);for(;l.nextNode(););a.push(...c.map(g=>({element:g,reserve:!1})))}let o=ru(e,a,n);return o.sort(function(s,i){return s.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),o}var xs=[];function pu(e){xs.push(e)}function Ts(){xs.forEach(e=>e()),xs=[]}var bu="auto",ma="auto",hu="auto";function yu(e){bu=e}function An(e){ma=e}function pr(){return ma!=="auto"?ma:hu!=="auto"?hu:bu}function pa(){return ma}function gt(e,t,n){let r=[],{rule:a}=n,o=mr(n);if(e.length===0)return null;e=e.map(d=>d.element?d:{element:d});let s="",i=!1;for(let d=0;d<e.length;d++){let p=e[d].element;if(typeof p=="string"){s+=p;continue}let b="";da(p,`[${rt}]`)?b=Ap(p):b=p.innerText;let x=b.startsWith(" "),h=b.endsWith(" ");p.tagName==="A"&&(x=!0,h=!0);let y=Ln(p,a);if(b===""||y){y&&(x=!0,h=!0);let w={type:"element",value:p};r.push(w);let A=r.length-1,I=`${o[0]}${A}${o[1]}`;s+=(x?" ":"")+I+(h?" ":"");continue}if(!Je(p,a,!0)){{let w=t?b:b.trim().replace(/\n/g," ");if(ms(w)||ps(w)||hs(w)||lu(w)){let A={type:"element",value:p};r.push(A);let I=r.length-1,v=`${o[0]}${I}${o[1]}`;s+=(x?" ":"")+v+(h?" ":"")}else i=!0,s+=(x?" ":"")+w+(h?" ":"")}if(typeof p!="string"){let w=fr(p.nextSibling,t);w&&(s+=w)}}}if(!i)return null;let c=!1,u=s.split(" ").length,l=s.split(`
`).length;u<=a.blockMinWordCount&&s.length<=a.blockMinTextCount&&l<2&&(c=!0);let g={elements:e.map(d=>d.element),text:s,variables:r,inline:c,preWhitespace:t};return su(g,n.state.translationArea==="body"?2:a.paragraphMinTextCount,n.state.translationArea==="body"?1:a.paragraphMinWordCount,n)?g:null}function Ap(e){let t="",n=a=>a.nodeType===Node.ELEMENT_NODE?se(a,rt)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:a.nodeType===Node.TEXT_NODE?(a.textContent&&a.textContent.trim()!==""&&(t+=a.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,n);for(;r.nextNode(););return t}var kp=1,kn=new Map;function vu(){return kn}function Yt(e){return kn.get(e)}function hr(e,t){kn.set(e,t)}function wu(){kn.clear()}function xu(e){if(!se(e,qt))return!1;if(se(e,Vt))return!0;let t=Nt(e,Kt);if(!t)return!1;let n=parseInt(t),r=kn.has(n);if(!r){let a=document.getElementById(`${at}-${n}`);a&&a.remove()}return r}function Ct(e,t){let n={...e,id:kp++,languageByClient:"auto",languageByLocal:"auto"};n.elements.forEach(r=>{r instanceof HTMLElement&&(ce(r,qt,"1"),ce(r,Kt,`${n.id}`))}),t.push(n),kn.set(n.id,{...n,state:"Original",observers:[]})}async function Su(e,t,n){let r=[],{targetLanguage:a,rule:o}=n;for(let d of t){if(Je(d,o,!1))continue;let m=se(d,bn),p=[];if(se(d,nt)){if(!xu(d)){let y=gt([d],m,n);y&&Ct(y,r)}continue}let b=y=>{if(!(y.nodeType===Node.TEXT_NODE||y.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(y.nodeType===Node.ELEMENT_NODE){let w=y;if(w.isContentEditable||xu(y))return NodeFilter.FILTER_REJECT;if(ce(w,qt,"1"),se(w,nt)){if(p.length>0){let I=gt([...p],m,n);I&&Ct(I,r),p.length=0}p.push(w);let A=gt([...p],m,n);return A&&Ct(A,r),p.length=0,NodeFilter.FILTER_REJECT}}if(Je(y,o,!0)){if((y.nodeName==="CODE"||y.nodeName==="TT")&&y.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(ut(y,o))return Tu(y,p,r,m,n),NodeFilter.FILTER_REJECT;if(p.length>0){let w=gt([...p],m,n);w&&Ct(w,r),p.length=0}return NodeFilter.FILTER_REJECT}return y.nodeName==="PRE"?(y.classList.contains("code"),NodeFilter.FILTER_REJECT):ut(y,o)?(Tu(y,p,r,m,n),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},x=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,b),h=x.nextNode();for(;h;){if(p.length>0){let y=gt([...p],m,n);y&&Ct(y,r),p.length=0}h=x.nextNode()}if(p.length>0){let y=gt([...p],m,n);y&&Ct(y,r),p.length=0}}let s=r.map(d=>{let{text:m}=d;return it({text:m})}),i=await Promise.all(s),c=[],u=n?.config?.translationLanguagePattern?.excludeMatches||[],l="auto";n.state.isDetectParagraphLanguage||(l=pa());let g=pr();return i.forEach((d,m)=>{let p=d;p==="auto"&&(p=g);let b={...r[m],languageByLocal:p,languageByClient:l};if(!cr(d,a)){if(u.length>0&&u.some(y=>cr(d,y)))return;c.push(b)}}),c}function _p(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),a=null,o=!1;for(;a=r.nextNode();){let i=a.textContent||"",c=i.trim();if(!o&&i.length>0&&c.length===0){o=!0,n.push(" ");continue}c.length>0&&(n.push(a.parentElement),o=!1)}let s=n[n.length-1];if(s&&typeof s!="string"){let i=fr(s.nextSibling,t);i&&n.push(i)}if(typeof n[n.length-1]!="string"){let i=fr(e.nextSibling,t);i&&n.push(i)}return n}function Tu(e,t,n,r,a){let o=e.previousElementSibling;if(o&&!ut(o,a.rule)&&t.length>0){let i=gt([...t],r,a);i&&Ct(i,n),t.length=0}Je(e,a.rule,!1)?ou(e,a.rule)||t.push(e):Ln(e,a.rule)?t.push(e):da(e,["code","tt"])?t.push(..._p(e,r)):t.push(e)}async function Au(e,t,n,r){let a=[],{rule:o}=n;for(let s=0;s<t.length;s++){let i=t[s],c=r[s];if(!c)throw new Error("targetContainer is null");let u=[],l=!0,g=null,d=function(b){let x=b;if(["DIV","BR"].includes(x.nodeName))return l=!0,NodeFilter.FILTER_REJECT;if(x.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(Pp(b))return NodeFilter.FILTER_REJECT;if(ce(x,qt,"1"),ut(x,o)){let h=Cn(u),y=globalThis.getComputedStyle(x);if(!h)u.push(Lu(x,y));else{let w=globalThis.getComputedStyle(h),A=vs(w),I=vs(y),v=Cu(I,A),L=!1;if(l&&g&&Cu(I,g).left>=1.2&&(L=!0),!L&&l){let S=(x.innerText||x.textContent||"").trim();(S.startsWith("\u2022")||S.charCodeAt(0)===61623||/^\d+\./.test(S))&&(L=!0)}!L&&l&&Cn(u)&&ga(u).reduce((U,P)=>{let _=vs(globalThis.getComputedStyle(P));return Math.max(U,_.right)},0)-A.right>o.pdfNewParagraphIndentRightIndentPx&&(L=!0),l&&(g=I,l=!1),L||(L=Mp(v,o)),L&&Eu(u,a,n,c),u.push(Lu(x,y)),u.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},m=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,d),p=m.nextNode();for(;p;)p=m.nextNode();Eu(u,a,n,c)}return a}function Eu(e,t,n,r){if(e.length>0){let a=gt([...e],!1,n);a&&(a.isPdf=!0,a.targetContainer=r,a.inline=!1,Ct(a,t)),e.length=0}}function vs(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function Mp(e,t){return e.fontSize>2||e.fontSize<-2||e.top>=t.pdfNewParagraphLineHeight||e.top<0}function Cu(e,t){let n=t.fontSize,r=e.fontSize;return{top:(e.top-t.top)/n,left:(e.left-t.left)/n,fontSize:r-n}}function Lu(e,t){return t.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function Pp(e){if(!se(e,qt))return!1;if(se(e,Vt))return!0;let t=Nt(e,Kt);if(!t)return!1;let n=parseInt(t),a=vu().has(n);if(!a){let o=document.getElementById(`${at}-${n}`);o&&o.remove()}return a}function ku(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ws(e,t,n=[],r,a){let o=["notranslate"];return r&&o.push(Sc),e&&(o.push(`${ye}-target-translation-theme-${e}`),t?o.push(`${Jo}-theme-${e}`):o.push(`${Go}-theme-${e}`)),n.length>0&&o.push(...n),t?o.push(Jo):(o.push(Go),a&&o.push(wc)),o}function Ss(e){let t=["notranslate",vc];return e&&t.push(`${ye}-target-translation-theme-${e}-inner`),t}function _u(e,t,n){let{rule:r,translationTheme:a}=n,{variables:o}=e;o=o||[];let{text:s}=t,{wrapperPrefix:i,wrapperSuffix:c}=r,u=mr(n),l="afterend",g=new RegExp(`${u[0]}(\\d+)${u[1]}`,"g"),d=0,m=ku(s);o.length>0&&(m=m.replace(g,x=>{let h=m.indexOf(x),y=m[h-1]===" ",w=m[h+x.length]===" ",A=o[Number(d)];if(d++,A.type==="element"){let I=A.value.outerHTML;return y||(I=" "+I),w||(I=I+" "),I}else V.error("variable type not supported",A);return x}));let p=ws(a,e.inline,r.translationClasses||[],e.preWhitespace,n.rule.isPdf),b=Ss(a);return m=`<span class="${p.join(" ")}"><span class="${b.join(" ")}">${m}</span></span>`,e.inline||(i==="smart"?m=`<br>${m}`:m=`${i}${m}`,c==="smart"?m=`${m}`:m=`${m}${c}`),e.inline&&(m=`<span class="notranslate">&nbsp;</span>${m}`),{html:m,position:l}}function Pu(e,t){let n=[];for(let r of e){if(se(r,nt))continue;if(ce(r,jo,"1"),r.normalize(),t.lineBreakMaxTextCount>0){let o=i=>i.nodeType===Node.ELEMENT_NODE&&Je(i,t,!0)?NodeFilter.FILTER_REJECT:(i.nodeType===Node.TEXT_NODE&&(i.textContent?i.textContent.trim():"").length>=t.lineBreakMaxTextCount&&Cs(i,t.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),s=document.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,o);for(;s.nextNode(););}if(!(t.excludeTags.includes("PRE")||t.additionalExcludeTags.includes("PRE"))&&t.isTransformPreTagNewLine){let o=r.querySelectorAll("pre");for(let s of o)Mu(s)}t.preWhitespaceDetectedTags.includes(r.tagName)&&(cu(r,bn)||(Rp(r)?(ce(r,bn,"1"),t.isTransformPreTagNewLine&&Mu(r)):ce(r,bn,"0"))),Es(0,r,t,n)}return{hiddenElements:n}}function Es(e,t,n,r=[]){if(se(t,nt))return;let a=!1;if(e===0){let o=Ln(t,n);t.childNodes&&t.childNodes.length===1&&t.nodeType===Node.ELEMENT_NODE&&ut(t,n)&&!o&&(a=!0)}if(t&&t.childNodes&&t.childNodes.length>0){for(let o of t.childNodes)if(o.nodeType===Node.ELEMENT_NODE){if(Je(o,n,!1))continue;{let s=globalThis.getComputedStyle(o),i=!1;if(s.display==="none"&&(r.push(o),i=!0),!i){let c=s.clip,u=s.zIndex,l=s.height,g=s.width,d=0;if(u.startsWith("-")){let m=parseInt(u);isNaN(m)||(d=m)}if((c==="rect(1px, 1px, 1px, 1px)"||d<0)&&(i=!0),!i&&o.nodeName!=="BR"){let m=parseInt(l),p=parseInt(g);!isNaN(m)&&!isNaN(p)&&(m>0&&m<8||p>0&&p<=8)&&(i=!0)}}if(i){ce(o,rt,"1");continue}else{if(o.nodeName==="DIV"||gu(o,n)){if((s.display==="inline"||s.display==="inline-flex")&&!se(o,Gt)){ce(o,St,"1");continue}}else if((o.nodeName==="SPAN"||o.nodeName==="A")&&!s.display.startsWith("inline")){se(o,St)||(ce(o,Gt,"1"),Es(e+1,o,n,r));continue}if(ut(o,n)&&!a)continue;Es(e+1,o,n,r)}}}else if(o.nodeType===Node.TEXT_NODE){let s=o.textContent;if(s&&s.trim().length>0){let i=document.createElement("span");o.after(i),i.appendChild(o)}}}}function Rp(e){let t=window.getComputedStyle(e);return t.whiteSpace.startsWith("pre")||t.whiteSpace==="break-spaces"}function Mu(e){let n=e.innerHTML.replace(/\n/g,"<br>");e.innerHTML=n}function Cs(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let o=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((s,i)=>{let c=n.lastIndexOf(i,t);return c>s?c:s},-1);if(o===-1)n.length>t+20&&Cs(e,t+20);else{let s=n.slice(o+1);o++,s.startsWith(" ")&&o++;let i=e.splitText(o),c=document.createElement("br");i.parentNode?.insertBefore(c,i),o+1<n.length&&Cs(i,t)}}function Ru(e,t){let n=[];for(let r of e){let a=0,o=1e5,s=document.createElement("div"),i=l=>{let g=l;if(["DIV","BR"].includes(g.nodeName))return NodeFilter.FILTER_REJECT;if(g.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(g.nodeName==="SPAN"){let d=g.getBoundingClientRect(),m=globalThis.getComputedStyle(g),p=d.right,b=d.left,x=m.top.slice(0,-2),h=m.fontSize.slice(0,-2);return p>a&&(a=p),b<o&&(o=b),ce(g,ar,`${b}`),ce(g,Qr,`${p}`),ce(g,yc,x),ce(g,xc,h),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,i);for(;c.nextNode(););let u=a-o;u<600&&(u=600),n.push(s),s.style.left=a+"px",s.style.width=u+"px",s.classList.add(ea),r.childNodes.length>0&&r.insertBefore(s,r.childNodes[0])}return{targetContainers:n}}var Nu=["*://*/*","*","*://*"],Iu="immersive-translate-wildcard-placeholder.com";function Ls(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(s=>Nu.includes(s)))return e;let r=new URL(e);r.hash="",r.search="";let a=r.href,o=r.hostname;if(n&&n.length>0){let s=n.find(i=>{let c=i;if(i===o)return!0;if(Nu.includes(i))return!0;if(!i.includes("*")&&i.includes("://")){try{let u=new URL(i);return u.pathname==="/"&&!i.endsWith("/")?u.hostname===o:Dp(a,i)}catch{}return!1}else{let u,l=i;i.includes("://")?u=i.split("://")[0]:(u="*",i="https://"+i);let g=i.replace(/\*/g,Iu),d;try{d=new URL(g)}catch{return V.debug("invalid match pattern",g,"raw match value:",l),!1}let m=d.hostname,p=d.pathname;p==="/"&&(l.replace("://","").includes("/")||(p="/*"));let b=Np(u+":",Du(m),Du(p));if(b){let x=new URL(a);return x.port="",b.test(x.href)}else return!1}});if(s)return s}return null}function Du(e){return e.replace(Iu,"*")}function Np(e,t,n){let r="^";return e==="*:"?r+="(http:|https:|file:)":r+=e,r+="//",t&&(e==="file:"||(t==="*"?r+="[^/]+?":(t.match(/^\*\./)&&(r+="[^/]*?",t=t.substring(2)),r+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?r+="(/.*)?":n.includes("*")?(r+=n.replace(/\*/g,".*?"),r+="/?"):r+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):r+="/?",r+="$",new RegExp(r)}function _n(e,t){return Ls(e,t)!==null}function Dp(e,t){let n=new URL(e),r=new URL(t);return n.hostname===r.hostname&&n.pathname===r.pathname&&n.protocol===r.protocol&&n.port===r.port}var Mn="input is invalid type",As=typeof window=="object",Dt=As?window:{};Dt.JS_SHA256_NO_WINDOW&&(As=!1);var Ip=!As&&typeof self=="object",Op=!Dt.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;Op?Dt=global:Ip&&(Dt=self);var Bv=!Dt.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,jv=typeof define=="function"&&define.amd,br=!Dt.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",F="0123456789abcdef".split(""),Fp=[-2147483648,8388608,32768,128],ft=[24,16,8,0],ha=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],ba=["hex","array","digest","arrayBuffer"],De=[];(Dt.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});br&&(Dt.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var Ou=function(e,t){return function(n){return new Ie(t,!0).update(n)[e]()}},Hu=function(e){var t=Ou("hex",e);t.create=function(){return new Ie(e)},t.update=function(a){return t.create().update(a)};for(var n=0;n<ba.length;++n){var r=ba[n];t[r]=Ou(r,e)}return t},Fu=function(e,t){return function(n,r){return new ya(n,t,!0).update(r)[e]()}},Uu=function(e){var t=Fu("hex",e);t.create=function(a){return new ya(a,e)},t.update=function(a,o){return t.create(a).update(o)};for(var n=0;n<ba.length;++n){var r=ba[n];t[r]=Fu(r,e)}return t};function Ie(e,t){t?(De[0]=De[16]=De[1]=De[2]=De[3]=De[4]=De[5]=De[6]=De[7]=De[8]=De[9]=De[10]=De[11]=De[12]=De[13]=De[14]=De[15]=0,this.blocks=De):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}Ie.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(Mn);if(br&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!br||!ArrayBuffer.isView(e)))throw new Error(Mn)}else throw new Error(Mn);t=!0}for(var r,a=0,o,s=e.length,i=this.blocks;a<s;){if(this.hashed&&(this.hashed=!1,i[0]=this.block,i[16]=i[1]=i[2]=i[3]=i[4]=i[5]=i[6]=i[7]=i[8]=i[9]=i[10]=i[11]=i[12]=i[13]=i[14]=i[15]=0),t)for(o=this.start;a<s&&o<64;++a)i[o>>2]|=e[a]<<ft[o++&3];else for(o=this.start;a<s&&o<64;++a)r=e.charCodeAt(a),r<128?i[o>>2]|=r<<ft[o++&3]:r<2048?(i[o>>2]|=(192|r>>6)<<ft[o++&3],i[o>>2]|=(128|r&63)<<ft[o++&3]):r<55296||r>=57344?(i[o>>2]|=(224|r>>12)<<ft[o++&3],i[o>>2]|=(128|r>>6&63)<<ft[o++&3],i[o>>2]|=(128|r&63)<<ft[o++&3]):(r=65536+((r&1023)<<10|e.charCodeAt(++a)&1023),i[o>>2]|=(240|r>>18)<<ft[o++&3],i[o>>2]|=(128|r>>12&63)<<ft[o++&3],i[o>>2]|=(128|r>>6&63)<<ft[o++&3],i[o>>2]|=(128|r&63)<<ft[o++&3]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=i[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};Ie.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=Fp[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};Ie.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,s=this.h6,i=this.h7,c=this.blocks,u,l,g,d,m,p,b,x,h,y,w;for(u=16;u<64;++u)m=c[u-15],l=(m>>>7|m<<25)^(m>>>18|m<<14)^m>>>3,m=c[u-2],g=(m>>>17|m<<15)^(m>>>19|m<<13)^m>>>10,c[u]=c[u-16]+l+c[u-7]+g<<0;for(w=t&n,u=0;u<64;u+=4)this.first?(this.is224?(x=300032,m=c[0]-1413257819,i=m-150054599<<0,r=m+24177077<<0):(x=704751109,m=c[0]-210244248,i=m-1521486534<<0,r=m+143694565<<0),this.first=!1):(l=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),g=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),x=e&t,d=x^e&n^w,b=a&o^~a&s,m=i+g+b+ha[u]+c[u],p=l+d,i=r+m<<0,r=m+p<<0),l=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),g=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),h=r&e,d=h^r&t^x,b=i&a^~i&o,m=s+g+b+ha[u+1]+c[u+1],p=l+d,s=n+m<<0,n=m+p<<0,l=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),g=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),y=n&r,d=y^n&e^h,b=s&i^~s&a,m=o+g+b+ha[u+2]+c[u+2],p=l+d,o=t+m<<0,t=m+p<<0,l=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),g=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),w=t&n,d=w^t&r^y,b=o&s^~o&i,m=a+g+b+ha[u+3]+c[u+3],p=l+d,a=e+m<<0,e=m+p<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0,this.h4=this.h4+a<<0,this.h5=this.h5+o<<0,this.h6=this.h6+s<<0,this.h7=this.h7+i<<0};Ie.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,s=this.h6,i=this.h7,c=F[e>>28&15]+F[e>>24&15]+F[e>>20&15]+F[e>>16&15]+F[e>>12&15]+F[e>>8&15]+F[e>>4&15]+F[e&15]+F[t>>28&15]+F[t>>24&15]+F[t>>20&15]+F[t>>16&15]+F[t>>12&15]+F[t>>8&15]+F[t>>4&15]+F[t&15]+F[n>>28&15]+F[n>>24&15]+F[n>>20&15]+F[n>>16&15]+F[n>>12&15]+F[n>>8&15]+F[n>>4&15]+F[n&15]+F[r>>28&15]+F[r>>24&15]+F[r>>20&15]+F[r>>16&15]+F[r>>12&15]+F[r>>8&15]+F[r>>4&15]+F[r&15]+F[a>>28&15]+F[a>>24&15]+F[a>>20&15]+F[a>>16&15]+F[a>>12&15]+F[a>>8&15]+F[a>>4&15]+F[a&15]+F[o>>28&15]+F[o>>24&15]+F[o>>20&15]+F[o>>16&15]+F[o>>12&15]+F[o>>8&15]+F[o>>4&15]+F[o&15]+F[s>>28&15]+F[s>>24&15]+F[s>>20&15]+F[s>>16&15]+F[s>>12&15]+F[s>>8&15]+F[s>>4&15]+F[s&15];return this.is224||(c+=F[i>>28&15]+F[i>>24&15]+F[i>>20&15]+F[i>>16&15]+F[i>>12&15]+F[i>>8&15]+F[i>>4&15]+F[i&15]),c};Ie.prototype.toString=Ie.prototype.hex;Ie.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,s=this.h6,i=this.h7,c=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,a>>24&255,a>>16&255,a>>8&255,a&255,o>>24&255,o>>16&255,o>>8&255,o&255,s>>24&255,s>>16&255,s>>8&255,s&255];return this.is224||c.push(i>>24&255,i>>16&255,i>>8&255,i&255),c};Ie.prototype.array=Ie.prototype.digest;Ie.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function ya(e,t,n){var r,a=typeof e;if(a==="string"){var o=[],s=e.length,i=0,c;for(r=0;r<s;++r)c=e.charCodeAt(r),c<128?o[i++]=c:c<2048?(o[i++]=192|c>>6,o[i++]=128|c&63):c<55296||c>=57344?(o[i++]=224|c>>12,o[i++]=128|c>>6&63,o[i++]=128|c&63):(c=65536+((c&1023)<<10|e.charCodeAt(++r)&1023),o[i++]=240|c>>18,o[i++]=128|c>>12&63,o[i++]=128|c>>6&63,o[i++]=128|c&63);e=o}else if(a==="object"){if(e===null)throw new Error(Mn);if(br&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!br||!ArrayBuffer.isView(e)))throw new Error(Mn)}else throw new Error(Mn);e.length>64&&(e=new Ie(t,!0).update(e).array());var u=[],l=[];for(r=0;r<64;++r){var g=e[r]||0;u[r]=92^g,l[r]=54^g}Ie.call(this,t,n),this.update(l),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}ya.prototype=new Ie;ya.prototype.finalize=function(){if(Ie.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Ie.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Ie.prototype.finalize.call(this)}};var Pn=Hu();Pn.sha256=Pn;Pn.sha224=Hu(!0);Pn.sha256.hmac=Uu();Pn.sha224.hmac=Uu(!0);var $u=Pn;var Bu=$u.sha256;function dt(e){return Promise.resolve(Bu(e))}function xa(e){return Array.from(new Uint8Array(e)).map(r=>r.toString(16).padStart(2,"0")).join("")}function It(e,t){let n=Bu.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function ju(e,t){let n=await It(e,t);return xa(n)}async function Ta(e,t){let n=Hp(t),r=await It(e,n);return xa(r)}function Hp(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}async function Lt(e){let{url:t,config:n,state:r}=e,a=new URL(t),o="auto",{translationParagraphLanguagePattern:s,translationService:i,translationServices:c,translationTheme:u,translationThemePatterns:l,translationUrlPattern:g,targetLanguage:d,sourceLanguageUrlPattern:m,immediateTranslationPattern:p}=n,b=Rn(t,s),x=Rn(t,p),h=i,y=Object.keys(c);for(let R of y){let N=c[R];if(Rn(t,N)){h=R;break}}let w=u,A=Object.keys(l);for(let R of A){let N=l[R];if(Rn(t,N)){w=R;break}}let I=Rn(t,g),v=Up(t,g);v||(v=_n(t,Lc));let L=Object.keys(m),O={};for(let R of L){let N=m[R];if(N&&N.matches)for(let te of N.matches)O[te]=R}let S=Object.keys(O),D=Ls(t,S);D&&(o=O[D]??"auto",O[D]&&O[D]!=="auto"&&An(O[D]));let U=d||"zh-CN",P=a.hostname,_=await dt(P),H=a.pathname+a.search+a.hash,$=await dt(H),j=`https://${_}.com/${$}`,Z=await ir(),ee=n.translationStartMode;ee==="dynamic"&&x&&(ee="immediate");let C={targetLanguage:U,config:n,translationService:h,translationTheme:w,isTranslateUrl:I,sourceLanguage:o,isTranslateExcludeUrl:v,rule:n.generalRule,url:t,encryptedUrl:j,state:r||{translationArea:n.translationArea,translationStartMode:ee,isAutoTranslate:!1,isNeedClean:!1,isDetectParagraphLanguage:b},localConfig:Z};C.state.translationArea==="body"&&(C.config.generalRule.excludeTags=C.config.generalRule.excludeTags.filter(R=>R!=="BUTTON"&&R!=="LABEL"),C.config.generalRule.additionalExcludeSelectors=C.config.generalRule.additionalExcludeSelectors.filter(R=>R!==".btn")),C.translationService==="d"&&(n.immediateTranslationTextCount=0);let B=n.rules,X;globalThis.PDFViewerApplication?X=B.find(R=>R.isPdf):X=B.find(R=>Rn(t,R));let E=n.generalRule;return X&&(C.rule=la(E,X)),C.rule.isPdf&&(C.state.translationArea="main"),C.state.translationArea==="body"&&(C.rule.paragraphMinTextCount=1,C.rule.paragraphMinWordCount=1),C}function Rn(e,t){if(!t)return!1;let{matches:n,excludeMatches:r,selectorMatches:a,excludeSelectorMatches:o}=t;return r&&r.length>0&&_n(e,r)?!1:n&&n.length>0&&_n(e,n)?!0:o&&o.length>0&&fa(o)?!1:!!(a&&a.length>0&&fa(a))}function Up(e,t){if(!t)return!1;let{excludeMatches:n,excludeSelectorMatches:r}=t;return!!(n&&n.length>0&&_n(e,n)||r&&r.length>0&&fa(r))}var wa="Original",va=[],Ps=new Set,ks=[],Sa=[],Wu=[],Ea=[],zu=globalThis.location.href.split("#")[0],Rs=0,_e,$p=Mr(Jp,300),Bp=Mr(Ku,200),jp=sr(),zp=jp.PROD==="1",yr,xr,Tr="";async function qu(){Tt()==="Original"?await Ot():(Tt()==="Translated"||Tt()==="Error")&&Nn()}function Vu(){let e=document.querySelectorAll(`[${Vt}="1"]`);for(let t of e)t.style.display="none"}function Nn(){Ts(),Ms(),Ve("Translating"),Tr&&(document.title=Tr),document.querySelectorAll("."+at).forEach(r=>{r.remove()}),document.querySelectorAll("."+ea).forEach(r=>{r.remove()}),document.querySelectorAll("["+qo+"]").forEach(r=>{if(zp)delete r[Re];else{let o=Object.keys(r.dataset).filter(s=>s.startsWith(me));for(let s of o)delete r.dataset[s]}r.removeAttribute(qo)}),Ve("Original")}function Wp(e,t){let n=!1,r=ds(e.elements),a=Cn(e.elements);Ps.add(e.id);let o=[];if(r){let i=new IntersectionObserver((c,u)=>{c.forEach(l=>{l.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Sa.push(i),o.push(i),i.observe(r)}if(a&&a!==r){let i=new IntersectionObserver((c,u)=>{c.forEach(l=>{l.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Sa.push(i),o.push(i),i.observe(a)}let s=Yt(e.id);s&&(s.observers=o,hr(e.id,s))}function qp(e,t){if(e){let n=new ResizeObserver((r,a)=>{for(let o of r)o.contentRect.width>10&&(a.disconnect(),t(o.target))});n.observe(e),Wu.push(n)}}async function Ku(e){let t=[...Ea];Ea=[];try{let n=[];for(let r of t){let a=ys(r,e);if(a.length===0)continue;let o=a;n.push(...o)}await Ds(n,e)}catch(n){V.error(`translateNewDynamicNodes error: ${n.message}`)}}function _s(e,t){Ps.delete(e.id);let n=Yt(e.id);n&&(n.observers&&n.observers.length>0&&n.observers.forEach(o=>{o.disconnect()}),n.observers=[],n.state="Translating",hr(e.id,n));let r=e.id;Rs+=e.text.length;let a=ga(e.elements);if(e.isPdf){let o=ds(e.elements),s=window.getComputedStyle(o),i=s.top,c=s.fontSize,u=parseFloat(c.slice(0,-2));isNaN(u)||u>28&&(c="28px");let l=e.targetContainer,g=document.createElement("span");a.length===1&&(g.style.fontSize=c),g.id=`${at}-${r}`,g.style.top=i;let d=Nt(o,ar),m=a.reduce((x,h)=>{let y=Nt(h,ar);return y&&y<x?y:x},1e3),b=a.reduce((x,h)=>{let y=Nt(h,Qr);return y&&y>x?y:x},0)-m;b<30,b>600&&(b=600),d<200&&(d=10),d&&d<0&&(d=0),g.style.left=`${d||10}px`,m<400?g.style.width=b+"px":g.style.width=`calc(100% - ${m}px)`,g.classList.add("notranslate",`${at}`),l.appendChild(g)}else{let o=Cn(e.elements),s="afterend";e.elements.length>0&&o&&(a.length===1?s="beforeend":ut(e.elements[0],t.rule)||(s="beforeend"));let i=document.createElement("span");if(i.classList.add("notranslate",at),i.id=`${at}-${r}`,i.innerHTML=Kp(),s==="beforeend"){let c=fu(o);c?c.appendChild(i):o.appendChild(i)}else if(s==="afterend")o.insertAdjacentElement(s,i);else throw new Error("not support position")}va.push(r),$p(t)}function Vp(e,t){t.state.translationStartMode==="dynamic"&&Rs>t.config.immediateTranslationTextCount?Wp(e,n=>{_s(n,t)}):_s(e,t)}async function Ot(){if(wa==="Translating")return;Ve("Translating");let e=await Xt(globalThis.location.href);if(!e.state.isAutoTranslate&&e.config.tempTranslateDomainMinutes>0){let r=Date.now(),o=new URL(e.url).hostname,s=e.localConfig.tempTranslationUrlMatches||[],i=s.findIndex(u=>u.match===o&&u.expiredAt>r),c=!1;i>-1||(s.push({match:o,expiredAt:r+e.config.tempTranslateDomainMinutes*60*1e3}),c=!0),c&&await lr({...e.localConfig,tempTranslationUrlMatches:[...s]})}e.state.isAutoTranslate=!0;let t=globalThis.scrollY,n=globalThis.innerHeight;t>=n&&(e.config.immediateTranslationTextCount=0),V.debug("ctx",e),e.state.isNeedClean?Nn():_e.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),pu(()=>{Rs=0,wu(),Sa.forEach(r=>{r.disconnect()}),Wu.forEach(r=>{r.disconnect()}),Sa=[],Ps.clear()}),Ve("Translating");try{bs([document.body],e.rule);let r=ys(document.body,e);V.debug("detect containers",r),Ve("Translating");let{rule:a}=e;r.length>0&&await Ds(r,e),Xu(e).catch(o=>{V.error("translateTitle error:",o.name,o.message,o.details||"")}),Yp(a,e),r.length===0&&Ve("Translated")}catch(r){Ve("Error"),V.error(r)}}async function Xt(e){let t=await Qu();if(!_e)_e=await Lt({url:e,config:t});else{let n={url:e,config:t,state:_e.state};_e=await Lt(n)}return _e}async function Gu(){Tt()==="Original"?await Ca():(Tt()==="Translated"||Tt()==="Error")&&(_e=await Xt(globalThis.location.href),_e.state.translationArea!=="main"?await Ca():Nn())}async function Ca(){_e=await Xt(globalThis.location.href),_e.state.translationArea="main",await Ot()}async function Ns(){_e=await Xt(globalThis.location.href),_e.state.translationArea="body",await Ot()}async function Ju(){Tt()==="Original"?await Ns():(Tt()==="Translated"||Tt()==="Error")&&(_e=await Xt(globalThis.location.href),_e.state.translationArea!=="body"?(_e.state.translationArea="body",await Ot()):Nn())}async function Yu(){_e=await Xt(globalThis.location.href),_e.state.translationArea="body",_e.state.translationStartMode="immediate",await Ot(),await Ku(_e)}async function Xu(e){let t=document.title;if(!t||t.includes(Zr))return;Tr!==t&&(Tr=t);let n="auto";if(e.state.isDetectParagraphLanguage||(n=pa()),n==="auto"){let r=await it({text:t});if(cr(r,e.targetLanguage))return}try{let r=await tg({text:t,from:n,to:e.targetLanguage},e);r&&r.text&&(document.title=Tr+Zr+r.text)}catch(r){throw r}}function Kp(){return`&nbsp;<span class="${ye}-loading notranslate"></span>`}async function Ds(e,t){let{rule:n}=t;bs(e,n);let r=[];if(t.rule.isPdf)e.length>0&&(Ve("Translating"),r=Ru(e,n).targetContainers);else{Ve("Translating");let o=Pu(e,n),{hiddenElements:s}=o;for(let i of s)qp(i,()=>{uu(i,rt),Ds([i],t)});Ve("Translating")}let a=[];if(t.rule.isPdf?a=await Au(document.body,e,t,r):(e=e.filter(o=>!Je(o,n,!1)),a=await Su(document.body,e,t)),Ve("Translating"),a.length===0){Ve("Translated");return}V.debug("detect paragraphs",a);for(let o of a)Vp(o,t);Ve("Translated")}function Gp(e,t,n,r){let a=Yt(n.id);if(e||!t){e||(V.error("translate error",t),e=new Error("no response from server"));let o=n.id,s=document.getElementById(`${at}-${o}`),i=e.message.replaceAll(`
`,"");i=i.replaceAll('"',"&quot;"),a&&(a.state="Error",hr(a.id,a));let c=`<span class="${ye}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${i}"><button class="${ye}-clickable-button notranslate" title="${i}">\u2757</button></span> <button class="${ye}-clickable-button notranslate" data-${ye}-paragraph-id="${o}" data-${ye}-action="retry">\u{1F504}</button></span>`;s&&(s.innerHTML=c)}else{let o=Yt(n.id);if(o){o.state="Translated",hr(o.id,o);let s=_u(o,t,r),i=t.id,c=document.getElementById(`${at}-${i}`);c&&(c.innerHTML=s.html,document.querySelectorAll(`[${Kt}="${i}"]`).forEach(l=>{ce(l,Vt,"1")}))}else V.error("paragraph not found",n.id)}}async function Jp(e){if(va.length===0)return Promise.resolve();let t=[...va];va=[];let n="auto";e.state.isDetectParagraphLanguage||(n=pr());let r={sentences:t.filter(o=>Yt(o)).map(o=>{let s=Yt(o),i=s.languageByLocal;return i==="auto"&&(i=n),{id:s.id,url:e.encryptedUrl,text:s.text,from:i,fromByClient:s.languageByClient,to:e.targetLanguage}})};if(r.sentences.length>0){Ve("Translating");try{await Is(r,e,(o,s,i)=>{Gp(o,s,i,e)})}catch(o){Ve("Error"),V.error("translateCurrentQueue error",o.name,o.message,o.details||" ");return}}Ve("Translated")}function Ve(e){wa=e,eg(wa)}function Yp(e,t){V.debug("enableMutatinObserver"),Ms(),ks=[],Ea=[];let n=e.inlineTags.concat(e.excludeTags).concat("#text","BR");yr=new MutationObserver(function(a){a.forEach(o=>{let s=globalThis.location.href;if(s.split("#")[0]!==zu&&e.observeUrlChange){zu=s.split("#")[0],Ts(),Ms(),setTimeout(()=>{V.debug("url changed, reinit page"),Qp()},e.urlChangeDelay);let c=new Event(hc);document.dispatchEvent(c);return}o.addedNodes.forEach(c=>{if(c.nodeType===Node.ELEMENT_NODE){let u=c;if(Xp(e,u)||!n.includes(u.nodeName)){if(u.classList.contains("notranslate"))return;au(u,ks)||(Ea.push(u),ks.push(u),Bp(t))}}})})}),yr.observe(document.body,{childList:!0,subtree:!0});let r=document.querySelector("title");r&&(xr=new MutationObserver(function(a){a.length>0&&(a[0].target.text.includes(Zr)||Xu(t).catch(s=>{V.error("translateTitle error:",s.name,s.message,s.details||"")}))}),xr.observe(r,{subtree:!0,characterData:!0,childList:!0}))}function Xp(e,t){if(e.extraBlockSelectors){for(let n of e.extraBlockSelectors)if(t.matches(n))return!0}return!1}async function Qp(){let e=fs(),t=await Xt(globalThis.location.href);t.rule.urlChangeDelay&&await un(t.rule.urlChangeDelay);let n=t.sourceLanguage;n==="auto"?(xe()?n=await it({text:dr(document.body).slice(0,1e3)}):e?n=await it({text:dr(document.body).slice(0,1e3)}):n=await Zu(),n==="auto"&&(n=await mu()),yu(n)):An(n);let r=t.state.isAutoTranslate||t.isTranslateUrl||t.rule.isPdf;!r&&!t.isTranslateExcludeUrl&&(V.debug(`detect page language: ${n}`),du(n,t.config.translationLanguagePattern)&&(r=!0,V.debug(`match language pattern ${n}, auto translate`))),r?(_e.state.isAutoTranslate=!0,await Ot()):V.debug("do not auto translate",t)}function Ms(){yr&&(yr.disconnect(),yr.takeRecords()),xr&&(xr.disconnect(),xr.takeRecords())}function Tt(){return wa}var vr=new Map,Dn=class{constructor(t,n=!1){this.logger=new or,n&&this.logger.setLevel("debug"),this.fromType=t,vr.has(t)||(vr.set(t,new Map),Q.runtime.onMessage.addListener((r,a,o)=>{let s=r.from,i=r.to,c,u,l;a.tab&&a.tab.id&&(c=a.tab.id,s=`${s}:${c}`,u=a.tab.url,l=a.tab.active),this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`,r.payload.data?r.payload.data:" ");let g=Fs(i),{type:d,name:m}=g;if(d!==t)return!1;let p=Fs(s),x=vr.get(d).get(m);if(!x)return this.logger.debug(`no message handler for ${d}:${i}, but it's ok`),!1;let{messageHandler:h,sync:y}=x,w={type:t,name:p.name,id:c,url:u,active:l};if(y){try{let A=h(r.payload,w);o({ok:!0,data:A})}catch(A){o({ok:!1,errorName:A.name,errorMessage:A.message,errorDetails:A.details})}return!1}else return h(r.payload,w).then(A=>{o({ok:!0,data:A})}).catch(A=>{o({ok:!1,errorName:A.name,errorMessage:A.message,errorDetails:A.details})}),!0}))}getConnection(t,n,r){let a=!1;r&&r.sync&&(a=!0);let o=this.fromType,s=vr.get(o);if(s.has(t))return s.get(t).connectionInstance;{let i=new Os(`${o}:${t}`,this.logger);return vr.get(o).set(t,{messageHandler:n,sync:a,connectionInstance:i}),i}}},Os=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let r=Fs(t),{type:a,id:o}=r;if(a!=="content_script"){let s={to:t,from:this.from,payload:n};this.logger.debug(`${s.from} send message [${s.payload.method}] to ${s.to}`,s.payload.data?s.payload.data:" ");try{let i=await Q.runtime.sendMessage(s);return ng(s,i,this.logger)}catch(i){if(a==="popup"){let c=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(c,n,t,i),Promise.resolve({message:c})}else throw i}}else{let s={from:this.from,to:t,payload:n};this.logger.debug(`${s.from} send message [${s.payload.method}] to ${s.to}`,s.payload.data?s.payload.data:" ");let i=await Q.tabs.sendMessage(o,s);return ng(s,i,this.logger)}}};function ng(e,t,n){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new Be(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function Fs(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let r=parseInt(t[2]);if(!isNaN(r))n.id=r;else throw new Error("tab id not a valid number")}return n}var Zp=async function(e,t){let{method:n,data:r}=e;n==="translateTheWholePage"?await Ns():n==="translateTheMainPage"?await Ca():n==="translateToThePageEndImmediately"?await Yu():n==="toggleTranslatePage"?await qu():n==="toggleTranslateTheWholePage"?await Ju():n==="toggleTranslateTheMainPage"?await Gu():n==="translatePage"?await Ot():n==="restorePage"?Nn():n==="showTranslationOnly"?Vu():n==="setCurrentPageLanguageByClient"&&An(r)};var La;function Hs(){return La||(La=new Dn("content_script",!1).getConnection("main",Zp),La)}async function Qt(e){return await Hs().sendMessage("background:main",e)}function le(e){return xe()||Gc()?(e.fetchPolyfill=globalThis.GM_fetch,wn(e)):Qt({method:"fetch",data:e})}function Qu(){return xe()?Ce():Qt({method:"getConfig"})}function it(e){if(e.text){let t=nu(e.text);if(t!=="auto")return Promise.resolve(t)}else return Promise.resolve("auto");if(xe()){let t=Q.extra.detectLanguage(e.text);return Promise.resolve(t)}return Qt({method:"detectLanguage",data:e})}function Zu(){return Qt({method:"detectTabLanguage"})}function eg(e){if(xe()){let n=new CustomEvent(pc,{detail:e});document.dispatchEvent(n);return}Hs().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function rg(e){return xe()?cs(e):Qt({method:"queryParagraphCache",data:e})}async function ag(e){if(xe()){await ls(e);return}return Qt({method:"setParagraphCache",data:e})}async function Us(){if(xe())return Promise.resolve();await Qt({method:"mockRequest"})}var ie=class{constructor(t,n){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:r}=t,a=[],o=[],s=0,i=new Set,c=null,u=r[0].from,l=!1;r.some(d=>d.from!==u)&&(l=!0);try{o=Yc(r,this.maxTextLength,this.maxTextGroupLength)}catch(d){if(n){i.has(s)&&s++;for(let m=s;m<r.length;m++){let p=r[m];n(d,null,p)}c=d}else c=d}let g=$r({limit:this.throttleLimit,interval:1e3});V.debug("tempSentenceGroups",o.map(d=>d));for(let d=0;d<o.length;d++){let m=o[d],p=m.url,b=g(async()=>{let y=m.from;if(l&&(y="auto"),m.fromByClient!=="auto"&&(y=m.fromByClient),this.isSupportList)return await this.translateList({text:m.tempSentences.map(A=>A.text),from:y,to:m.to,url:p});{let w=m.tempSentences.map(L=>L.text).join(Ko),A=await this.translate({text:w,from:y,to:m.to,url:p}),{text:I}=A;return{text:I.split(Ko),from:A.from,to:A.to}}}),x;try{x=await b()}catch(y){if(n){i.has(s)&&s++;for(let w=s;w<r.length;w++){let A=r[w];n(y,null,A)}c=y;continue}else{c=y;continue}}let{text:h}=x;for(let y=0;y<h.length;y++)try{let w=h[y],A=m.tempSentences[y],{index:I,prefix:v,suffix:L}=A;a[I]===void 0?a[I]={...r[I],from:m.from,to:m.to,text:v+w+L}:a[I].text+=v+w+L,I!==s&&n&&(i.add(s),n(null,a[s],r[s])),s=I}catch(w){if(n){i.has(s)&&s++;for(let A=s;A<r.length;A++){let I=r[A];n(w,null,I)}throw w}else throw w}}if(n&&!i.has(s)&&a[s]&&r[s]&&n(null,a[s],r[s]),c)throw c;return{sentences:a}}detectLanguageLocally(t){return it({text:t})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=32?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var og=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],mt=class extends ie{constructor(n,r){super(n,r);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId,this.secretKey=n.secretKey}static getUTCDate(n){let r=n.getUTCFullYear(),a=`${n.getUTCMonth()+1}`.padStart(2,"0"),o=`${n.getUTCDate()}`.padStart(2,"0");return`${r}-${a}-${o}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,s=JSON.stringify({ProjectId:0,Source:mt.langMap.get(a),SourceText:r,Target:mt.langMap.get(o)}),i=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:s,service:"tmt",version:"2018-03-21"});return{text:i.Response.TargetText,from:mt.langMapReverse.get(i.Response.Source)||a,to:mt.langMapReverse.get(i.Response.Target)||o}}async translateList(n){let{text:r,from:a,to:o}=n,s=JSON.stringify({ProjectId:0,Source:mt.langMap.get(a),SourceTextList:r,Target:mt.langMap.get(o)}),i=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:s,service:"tmt",version:"2018-03-21"});return{text:i.Response.TargetTextList,from:mt.langMapReverse.get(i.Response.Source)||a,to:mt.langMapReverse.get(i.Response.Target)||o}}async signedRequest({secretId:n,secretKey:r,action:a,payload:o,service:s,version:i}){let c=`${s}.tencentcloudapi.com`,u=new Date,l=`${new Date().valueOf()}`.slice(0,10),g=["POST","/","","content-type:application/json; charset=utf-8",`host:${c}`,"","content-type;host",await dt(o)].join(`
`),d=mt.getUTCDate(u),m=["TC3-HMAC-SHA256",l,`${d}/${s}/tc3_request`,await dt(g)].join(`
`),p=await ju(d,`TC3${r}`),b=await Ta(s,p),x=await Ta("tc3_request",b),h=await Ta(m,x),y=await le({url:`https://${s}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:c,"X-TC-Action":a,"X-TC-Timestamp":l,"X-TC-Region":"ap-beijing","X-TC-Version":i,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${d}/${s}/tc3_request, SignedHeaders=content-type;host, Signature=${h}`},body:o});if(y instanceof Error)throw y;if(y.Response&&y.Response.Error&&y.Response.Error.Message)throw new Error(y.Response.Error.Message);return y}},Zt=mt;Zt.langMap=new Map(og),Zt.langMapReverse=new Map(og.map(([n,r])=>[r,n]));var sg=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],wr=class extends ie{constructor(n,r){super(n,r);this.isSupportList=!1;this.throttleLimit=100}async translate(n){let{text:r,from:a,to:o}=n;if(!r)return{...n};let s=wr.langMap.get(a)||"auto",i=wr.langMap.get(o)||"zh-CN",c=await this.fetchWithoutToken(r,s,i);if(!c)throw new Error("google translate NETWORK_ERROR");if(!c.data[0]||c.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:c.data[0].map(l=>l[0]).filter(Boolean).join(""),from:wr.langMapReverse.get(c.data[2])||"auto",to:o}}async fetchWithoutToken(n,r,a){let o=new URLSearchParams({client:"gtx",dt:"t",sl:r,tl:a,q:n}),s="https://translate.googleapis.com/translate_a/single?"+o.toString();return{data:await le({url:s})}}},en=wr;en.langMap=new Map(sg),en.langMapReverse=new Map(sg.map(([n,r])=>[r,n]));function ig(e){return e.result.texts}function eh(e,t){return t?e+(t-e%t):e}function th(e,t){return e.split(t).length-1}function lg(e){let t=Date.now(),n=1;for(let r of e)n+=th(r,"i");return eh(t,n)}function nh(e,t){return Math.floor(Math.random()*(t-e+1))+e}function $s(){return nh(1e6,1e8)}var Bs="https://www2.deepl.com/jsonrpc",Aa="auto",cg=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],ug=["formal","informal"];function fg(e,t=Aa,n=$s()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:t,user_preferred_langs:[]},texts:e},id:n}}function rh(e,t=1){let n=[],r=0;for(let a=0;a<e.length;a++){let o=e[a].chunks;for(let s=0;s<o.length;s++){let i=o[s];n.push({kind:"default",_index:a,sentences:[{id:r,text:i.sentences[0].text,prefix:i.sentences[0].prefix}],raw_en_context_before:o.slice(0,r).map(c=>c.sentences[0].text),raw_en_context_after:r+1<o.length?[o[r+1].sentences[0].text]:[],preferred_num_beams:t}),r++}}return n}function gg(e){return e.reduce((t,n)=>{let r=n.chunks;for(let a of r)t.push(a.sentences[0].text);return t},[])}function ah(e){if(!e)return{};if(!ug.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function dg(e,t,n,r=$s(),a=1,o){let s=gg(n);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:rh(n,a),lang:{user_preferred_langs:[t,e],source_lang_computed:e,target_lang:t},priority:1,commonJobParams:ah(o),timestamp:lg(gg(n))},id:r}}function oh(e=cg){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function js(e){return oh()[e.toLowerCase()]}var mg={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function pg(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}async function sh(e,t,n){let r=fg(e,t,n);return await le({method:"POST",url:Bs+"?method=LMT_split_text",headers:mg,body:pg(r)})}async function ih(e,t,n,r,a,o){let s=await sh(e,n,r),i=dg(n==="auto"?s.result.lang.detected:n,t,ig(s),r,a,o),c=i.params.jobs.map(g=>g._index);i.params.jobs=i.params.jobs.map(g=>{let d={...g};return delete d._index,d});let u=await le({method:"POST",url:Bs+"?method=LMT_handle_jobs",body:pg(i),headers:mg}),l={from:s.result.lang.detected,to:t,text:[]};return u.result.translations.forEach((g,d)=>{let m=c[d];l.text[m]===void 0&&(l.text[m]="");let p=i.params.jobs[d].sentences[0].prefix,b=i.params.jobs[d].sentences[0].prefix;l.text[m]=l.text[m]+p+g.beams[0].sentences[0].text}),l}async function hg(e,t,n=Aa,r,a,o){return e?e&&e.length===1&&e[0]===""?{text:[""],from:n,to:t}:ih(e,js(t),js(n)??"auto",r,a,o):{text:[],from:n,to:t}}var bg=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],In=class extends ie{constructor(n,r){super(n,r);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(n){let{text:r,to:a,from:o}=n,s=await hg(r,In.langMap.get(a),In.langMap.get(o));return{text:s.text,from:In.langMapReverse.get(s.from),to:In.langMapReverse.get(s.to)}}},tn=In;tn.langMap=new Map(bg),tn.langMapReverse=new Map(bg.map(([n,r])=>[r,n]));var yg=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],YS=new Map(yg),XS=new Map(yg.map(([e,t])=>[t,e]));var xg=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],zs="https://transmart.qq.com/api/imt",nn=class extends ie{constructor(n,r){super(n,r);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:r,to:a}=n,o=await this.detectLanguage(r),s=nn.langMap.get(o)||o,i=nn.langMap.get(a)||a;if(o===a)return{text:r,from:o,to:a};let c=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:r,lang:s,orig_url:n.url},target:{lang:i}}),u=await le({url:zs,body:c,method:"POST"});if(u.header.ret_code!=="succ")throw new Error(u.message||u.header.ret_code);return{text:u.auto_translation,from:o||"auto",to:a}}async translateList(n){let{from:r,text:a,to:o}=n;if(a.length===1){let g=await this.translate({from:r,text:a[0],to:o,url:n.url});return{text:[g.text],from:g.from,to:g.to}}let s=await this.detectLanguage(a.join(`
`));if(s===o)return{text:a,from:s,to:o};let i=nn.langMap.get(s)||s,c=nn.langMap.get(o)||o,u=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:a,lang:i,orig_url:n.url},target:{lang:c},type:"plain"}),l=await le({url:zs,body:u,method:"POST"});if(l.header.ret_code!=="succ")throw new Error(l.message||l.header.ret_code);return{text:l.auto_translation,from:s||"auto",to:o}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let r={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},a=await le({url:zs,method:"POST",body:JSON.stringify(r)});if(a.header.ret_code!=="succ")throw new Error(a.message||a.header.ret_code);let o=a.language,s=nn.langMapReverse.get(o);return s||o}},rn=nn;rn.langMap=new Map(xg),rn.langMapReverse=new Map(xg.map(([n,r])=>[r,n]));function Tg(){return Math.random()>=0}var On=class extends ie{constructor(){super(...arguments);this.isSupportList=!0}async translate(n){let{text:r}=n;await Us(),await un(5e3);let a=r.match(/^\s*/)[0].length;return{text:r.slice(0,a)+"\u6A21\u62DF\uFF1A"+r.slice(a,-6),from:n.from,to:n.to}}async translateList(n){let{text:r,from:a,to:o}=n;if(await Us(),!Tg())throw new Error("\u6A21\u62DF\u9519\u8BEF");return r.length===0?{from:a,to:o,text:[""]}:{from:a,to:o,text:r.map(s=>{let i=s.match(/^\s*/)[0].length;return s.slice(0,i)+"\u6A21\u62DF\uFF1A"+s.slice(i,-6)})}}};var Sg=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],vg=new Map(Sg),wg=new Map(Sg.map(([e,t])=>[t,e])),Sr=class extends ie{constructor(n,r){super(n,r);this.apikey="";this.codename=Sr.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey,n.codename&&(this.codename=n.codename)}static getAllProps(){return[...Sr.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:Sr.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(n){let{text:r,from:a,to:o}=n,s=await le({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:r,source_lang:vg.get(a)||"auto",target_lang:vg.get(o)})});if(s.status){let i=s;return{text:i.result,from:wg.get(i.source_lang),to:wg.get(i.target_lang)}}else throw new Error(s.msg)}},ka=Sr;ka.DEFAULT_CODENAME="deepl";var _a=ka;var Cg=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],Eg=new Map(Cg),lh=new Map(Cg.map(([e,t])=>[t,e])),Ws=class extends ie{constructor(n,r){super(n,r);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!n||!n.authKey)throw new Error("authKey are required");this.authKey=n.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(n){let{from:r,to:a,text:o}=n,s={source_lang:Eg.get(r),target_lang:Eg.get(a)},i=new URLSearchParams(s);o.forEach(m=>{i.append("text",m)});let c=i.toString(),u="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(u="https://api.deepl.com/v2/translate");let l=await le({url:u,method:"POST",body:c,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:g}=l;return{text:g.map(m=>m.text),from:g[0]&&lh.get(g[0].detected_source_language)||r,to:a}}},Lg=Ws;var ch=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],Le={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},qs=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},Vs=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let r=qs(t);if(!!r)return Array.isArray(n)?`${r}=${n.map(qs).sort().join(`&${r}=`)}`:`${r}=${qs(n)}`}).filter(t=>t).join("&"),Er=class{constructor(t,n,r){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,r=r||{},this.bodySha256=r.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(r=>{let a=t[r];return typeof a<"u"&&a!==null}).sort().map(r=>{n[r]=t[r]}),n}async addAuthorization(t,n){let r=this.getDateTime(n);await this.addHeaders(t,r),this.request.headers.Authorization=await this.authorization(t,r)}async authorization(t,n){let r=[],a=this.credentialString(n);return r.push(`${Le.algorithm} Credential=${t.accessKeyId}/${a}`),r.push(`SignedHeaders=${this.signedHeaders()}`),r.push(`Signature=${await this.signature(t,n)}`),r.join(", ")}async getSignUrl(t,n){let r=this.getDateTime(n),a={...this.request.params},o=this.request.params,s=this.request.headers;t.sessionToken&&(a[Le.tokenHeader]=t.sessionToken),a[Le.dateHeader]=r,a[Le.notSignBody]="",a[Le.credential]=`${t.accessKeyId}/${this.credentialString(r)}`,a[Le.algorithmKey]=Le.algorithm,a[Le.signHeadersKey]="",a[Le.signQueriesKey]=void 0,a[Le.signatureKey]=void 0,a=this.sortParams(a),this.request.params=a,this.request.headers={};let i=await this.signature(t,r);return this.request.params=o,this.request.headers=s,a[Le.signQueriesKey]=Object.keys(a).sort().join(";"),a[Le.signatureKey]=i,Vs(a)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[Le.dateHeader]=n,t.sessionToken&&(this.request.headers[Le.tokenHeader]=t.sessionToken),this.request.body){let r=this.request.body;this.request.headers[Le.contentSha256Header]=await dt(r)}}async signature(t,n){let r=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return xa(await It(await this.stringToSign(n),r))}async stringToSign(t){let n=[];n.push(Le.algorithm),n.push(t),n.push(this.credentialString(t));let r=await this.canonicalString();return n.push(await this.hexEncodedHash(r)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let r=Vs(this.request.params)||"";return t.push(r),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(r=>{t.push([r,this.request.headers[r]])}),t.sort((r,a)=>r[0].toLowerCase()<a[0].toLowerCase()?-1:1);let n=[];return t.forEach(r=>{let a=r[0].toLowerCase();if(this.isSignableHeader(a)){let o=r[1];if(typeof o>"u"||o===null||typeof o.toString!="function")throw new Error(`Header ${a} contains invalid value`);n.push(`${a}:${this.canonicalHeaderValues(o.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await dt(t)}async hexEncodedBodyHash(){return this.request.headers[Le.contentSha256Header]?this.request.headers[Le.contentSha256Header]:this.request.body?await this.hexEncodedHash(Vs(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return ch.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,r,a){let o=await It(n,`${Le.kDatePrefix}${t.secretKey}`),s=await It(r,o),i=await It(a,s);return It(Le.v4Identifier,i)}createScope(t,n,r){return[t.substr(0,8),n,r,Le.v4Identifier].join("/")}};var kg=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],Ag=new Map(kg),uh=new Map(kg.map(([e,t])=>[t,e])),Ks=class extends ie{constructor(n,r){super(n,r);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId,this.secretAccessKey=n.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async translateList(n){let{text:r,from:a,to:o}=n,s=Ag.get(a),i={TargetLanguage:Ag.get(o)||o,TextList:r};s&&(i.SourceLanguage=s);let c={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(i)},u=new Er(c,"translate");await u.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let l=new URLSearchParams(c.params),g=await le({url:"https://open.volcengineapi.com"+c.pathname+"?"+l.toString(),headers:u.request.headers,method:c.method,body:c.body});if(g.TranslationList){let d=g.TranslationList.map(p=>p.Translation),m=a;return g.TranslationList.length>0&&g.TranslationList[0].DetectedSourceLanguage&&(m=uh.get(g.TranslationList[0].DetectedSourceLanguage)||a),{text:d,from:m,to:o}}else{let d=g.ResponseMetaData.Error;throw new Be(d.Code,d.Message)}}},_g=Ks;var Mg=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],gh=new Map(Mg),fh=new Map(Mg.map(([e,t])=>[t,e])),Cr=class extends ie{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:r,from:a,to:o}=n,i={source_language:gh.get(a)||"detect",target_language:"zh",text:r},c=await le({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(c.base_resp&&c.base_resp.status_code===0){let u=c.translation,l=a;return c.detected_language&&(l=fh.get(c.detected_language)||a),{text:u,from:l,to:o}}else{let u=c.base_resp;throw new Be(u.status_code.toString(),u.status_message)}}};var dh=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Pg=new Map(dh),Lr=class extends ie{constructor(n,r){super(n,r);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(n){let{text:r,from:a,to:o}=n,i=await le({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:Pg.get(a)||a,target_lang:Pg.get(o)||o,text:r})});if(i.code===200)return{text:i.data,from:a,to:o};throw new Error(i.message||i.message||"API Error")}};var Gs="https://{s}bing.com",Og=Gs+"/translator",mh=Gs+"/ttranslatev3",ph=Gs+"/tspellcheckv3",Ma="bingGlobalConfig",Fg=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],Rg=new Map(Fg),Ng=new Map(Fg.map(([e,t])=>[t,e])),Dg=1e3,pt,Fn;function Js(e,t){return e.replace("{s}",t?t+".":"")}async function hh(){if(!pt){let n=await Q.storage.local.get(Ma);return n&&(pt=n[Ma]),!0}let{tokenTs:e,tokenExpiryInterval:t}=pt;return Date.now()-e>t}async function Ig(){let e,t,n,r,a,o,s,i,c,u;try{let l=Js(Og,e),g=await le({url:l,responseType:"raw"}),{body:d,headers:m,url:p}=g;e=p.match(/^https?:\/\/(\w+)\.bing\.com/)[1],u=m["set-cookie"],t=d.match(/IG:"([^"]+)"/)[1],n=d.match(/data-iid="([^"]+)"/)[1],[a,r,o,s,i,c]=JSON.parse(d.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(l){throw console.error("failed to fetch global config",l),l}return pt={subdomain:e,IG:t,IID:n,key:a,token:r,tokenTs:a,tokenExpiryInterval:o,isVertical:s,frontDoorBotClassification:i,isSignedInOrCorporateUser:c,cookie:u,count:0},await Q.storage.local.set({[Ma]:pt}),pt}function bh(e){let{IG:t,IID:n,subdomain:r,isVertical:a}=pt;return Js(e?ph:mh,r)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+pt.count++:"")}function yh(e,t,n,r){let{token:a,key:o}=pt,s={fromLang:n,text:t,token:a,key:o};return!e&&r&&(s.to=r),s}async function Hg(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>Dg)throw new Error(`The supported maximum length of text is ${Dg}. Please shorten the text.`);Fn||(Fn=Ig()),await Fn,await hh()&&(Fn=Ig(),await Fn),t=t||"auto",n=n||"zh-CN",t=Rg.get(t)||t,n=Rg.get(n)||n;let a=bh(!1),o=yh(!1,e,t,n==="auto-detect"?"zh-Hans":n),s={referer:Js(Og,pt.subdomain),"content-type":"application/x-www-form-urlencoded"},i=new URLSearchParams(o),c=a,u=i.toString(),l=await le({url:c,headers:s,method:"POST",body:u});if(l.ShowCaptcha||l.StatusCode===401||l.statusCode){if(pt=null,Fn=null,await Q.storage.local.remove(Ma),l.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${l.StatusCode}.
    `);if(l.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(l.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(l)}.`)}let g=l[0].translations[0],d=l[0].detectedLanguage;return{text:g.text,from:Ng.get(d.language),to:Ng.get(g.to)}}var Ar=class extends ie{constructor(n,r){super(n,r);this.isSupportList=!1;this.maxTextLength=1e3}async translate(n){let{text:r,from:a,to:o}=n;return r?await Hg(r,a,o):{...n}}};var $g=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Ug=new Map($g),xh=new Map($g.map(([e,t])=>[t,e])),Ys=class extends ie{constructor(n,r){super(n,r);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid,this.key=n.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(n){let r=Date.now().toString(),{endpoint:a}=this,{appid:o,key:s}=this,{text:i,from:c,to:u}=n,l=new URLSearchParams({from:Ug.get(c),to:Ug.get(u),q:i,salt:r,appid:o,sign:Sn(o+i+r+s)}),g=new URL(a);g.search=l.toString();let d=await le({url:g.toString()});if(d.error_code)throw console.error(new Error("[Baidu service]"+d.error_msg)),new Be("API_SERVER_ERROR",d.error_msg);let{trans_result:m,from:p}=d,b=m.map(({dst:h})=>h);return{from:xh.get(p),to:u,text:b.join(`
`)}}},Bg=Ys;var Th=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],jg=new Map(Th),Xs=class extends ie{constructor(n,r){super(n,r);this.token="";if(!n||!n.token)throw new Error("token are required");this.token=n.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(n){let{text:r,from:a,to:o}=n;a==="auto"&&(a=await it({text:r.join(" ")}));let s=r;return{text:(await le({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:s,trans_type:`${jg.get(a)}2${jg.get(o)}`})})).target,from:a,to:o}}},zg=Xs;var qg=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],Wg=new Map(qg),vh=new Map(qg.map(([e,t])=>[t,e]));function wh(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var Qs=class extends ie{constructor(n,r){super(n,r);this.isSupportList=!1;this.appId="";this.appSecret="";if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId,this.appSecret=n.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,s=new Date().getTime(),i=Math.round(new Date().getTime()/1e3),c=this.appId+wh(r)+s+i+this.appSecret,u=await dt(c),l={q:r,appKey:this.appId,salt:s.toString(),from:Wg.get(a),to:Wg.get(o),sign:u,signType:"v3",curtime:i.toString()},g=new URLSearchParams(l),m=await le({url:"https://openapi.youdao.com/api",method:"POST",body:g.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),p=m.l,[b,x]=p.split("2");return{text:m.translation.join(`
`),from:vh.get(b),to:o}}},Vg=Qs;var Hn={mock:{class:On,name:"Mock",homepage:"https://www.google.com"},mock2:{class:On,name:"Mock2",homepage:"https://www.google.com"},google:{class:en,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:rn,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:Lg,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:_g,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:Cr,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:Ar,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:Zt,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:Bg,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:zg,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:_a,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:Vg,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:tn,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:Lr,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"}};function Zs(e,t){let n=Hn[e],r=t.config.translationServices[e]||{},a=!0,o=n.class.getAllProps();if(o.length>0){let s=o.filter(i=>i.required);if(s.length>0){for(let i of s)if(!r[i.name]){a=!1;break}}}return{...n,id:e,selected:t.translationService===e,ok:a,config:r,props:n.class.getProps(),allProps:o}}var Sh=Object.keys(Hn),Kg=e=>{let{config:t}=e,n=t.alpha,r=t.debug;return Sh.filter(a=>{let o=Hn[a];return a.startsWith("mock")?!!r:!o.alpha||n||a===e.translationService}).map(a=>Zs(a,e))};async function tg(e,t){if(!e.text)return e;let n=await Is({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new Be("translateFailed","translate failed")}async function Is(e,t,n){if(!e.sentences.length)return{...e};let{config:r,translationService:a}=t,o=r.translationGeneralConfig,s=r.translationServices,i=a,c=s[i]||{};e.sentences=e.sentences.map(x=>x);let u=[],l={sentences:Array(e.sentences.length)},g=e.sentences.length,d=-1;if(r.cache)for(let x of e.sentences){d++;let h=i;i==="openl"&&(h=i+"-"+c.codename||_a.DEFAULT_CODENAME);let y=null;try{y=await _r(rg({originalText:x.text,from:x.from,to:x.to,service:h}),1e3)}catch(w){V.warn("query cache DB error, but it's ok",w)}if(y){let w={...x,text:y.translatedText};l.sentences[d]=w,n&&n(null,w,x)}else u.push(x)}else u.push(...e.sentences);let m=u.length;if(g-m>0&&V.debug(`use ${g-m} sentences from cache`),!u.length)return l;let p;try{p=new Hn[i].class(c,o),await p.init()}catch(x){if(n)for(let h of u)n(x,null,h);throw x}let b=await p.multipleTranslate({sentences:u},(x,h,y)=>{if(n&&(n(x,h,y),!x&&h&&!i.startsWith("mock")&&r.cache)){let w=i;i==="openl"&&(w=i+"-"+c.codename||_a.DEFAULT_CODENAME),r.cache&&_r(ag({translatedText:h.text,from:y.from,to:y.to,detectedFrom:h.from,key:Sn(y.text),service:w}),3e3).catch(A=>{V.warn("set cache DB error",A)})}});for(let x of b.sentences){let h=l.sentences.findIndex(y=>!y);if(h===-1)throw new Be("translateFailed","can not match the result");l.sentences[h]=x}return l}function Gg(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function ei(e,t){let n=e;return t&&Object.keys(t).forEach(r=>{let a=t[r],o=new RegExp("{"+r+"}","gm");n=n.replace(o,a.toString())}),n}function kr(e,t,n){let r=e[t];if(!r)return n;let a=n.split("."),o="";do{o+=a.shift();let s=r[o];s!==void 0&&(typeof s=="object"||!a.length)?(r=s,o=""):a.length?o+=".":r=n}while(a.length);return r}function ti(e,t,n,r,a){if(!e.hasOwnProperty(n))return t;let o=kr(e,n,t);return o===t&&n!==r&&(o=kr(e,r,t)),ei(o,a)}var Un={},Eh={root:"",lang:"en",fallbackLang:"en"};function ni(e,t){let n=Object.assign({},Eh,e);Un=t||Un;let[r,a]=Y(n.lang),[o,s]=Y(Un),[i,c]=Y(!1),u=g=>{if(o.hasOwnProperty(g))return;c(!1);let d=Gg(n.root||"",g);n.getUrl&&(d=n.getUrl(n.root||"",g),fetch(d).then(m=>m.json()).then(m=>{Un[g]=m,s({...Un}),c(!0)}).catch(m=>{s({...Un}),c(!0)}))};return ge(()=>{u(n.fallbackLang||"en"),u(r)},[r]),{lang:r,setLang:a,t:(g,d)=>{if(!o.hasOwnProperty(r))return g;let m=kr(o,r,g);return m===g&&r!==n.fallbackLang&&(m=kr(o,n.fallbackLang,g)),ei(m,d)},isReady:i}}var ai=Wa(null),ri={root:"assets",lang:"en",fallbackLang:"en"},Jg=e=>{let{t,setLang:n,lang:r,isReady:a}=ni({root:e.root||ri.root,lang:e.lang||ri.lang,fallbackLang:e.fallbackLang||ri.fallbackLang,getUrl:e.getUrl},e.translations);return f(ai.Provider,{value:{t,setLang:n,lang:r,isReady:a},children:e.children})};function re(){return Ka(ai)}function ve(e){return f("div",{class:"nav-left",children:[f("div",{class:"title",children:e.title}),f("div",{class:"description",children:e.description})]})}function oi(e){let{items:t,maxWidth:n}=e;return n=n||128,f("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(r=>r.selected)?.value,onChange:r=>{let a=r.target.value,o=t.find(s=>s.value===a);o&&o.onSelected(o)},children:t.map(r=>f("option",{value:r.value,selected:r.selected,children:r.label}))})}function Pa(e){let{t}=re();return f("div",{class:"input-row",children:[f("div",{class:"input-left",children:f("label",{for:e.field.name,children:[e.field.label?t(e.field.label):e.field.name,"\uFF1A"]})}),f("div",{class:"input-right",children:f("input",{required:e.field.required,placeholder:e.field.name,class:"input",value:e.value,type:e.type,onChange:n=>{e.onChange(n.target.value)}})})]})}function si(e){let{field:t,root:n,onChange:r,value:a}=e;a=a||t.default||"";let{t:o}=re();return t.type==="select"?f("div",{class:"flex justify-end mb-2",children:[f("label",{class:"engine",children:[t.label?o(t.label):t.name,"\uFF1A"]}),f(oi,{items:t.options.map(s=>({label:`${s.label?o(s.label):s.value}`,value:a??"",selected:a===s.value,onSelected:()=>{r(s.value)}}))})]}):t.type==="text"?f("div",{children:f(Pa,{field:t,value:a,type:t.type,onChange:r})}):t.type==="password"?f("div",{children:f(Pa,{field:t,value:a,type:t.type,onChange:r})}):null}var Yg={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},ii={...jt,"zh-CN":{...Yg["zh-CN"],...jt["zh-CN"]},"zh-TW":{...Yg["zh-TW"],...jt["zh-TW"]}},Ra=ii;function Xg(e,t,n){return ti(ii,e,t,ta,n)}var Qg=()=>yn.filter(e=>e!=="auto"),Ft=(e,t,n)=>{let r=ti(ii,`languages.${e}`,t,"en");return n?Yo[e]||e:r!==`languages.${e}`?r:Yo[e]};function Na(e){let{t,lang:n}=re();return f("details",{role:"list",class:"nav-right",children:[f("summary",{"aria-haspopup":"listbox",children:t("edit")}),f("ul",{role:"listbox",class:"option-list",children:e.options.map(r=>{let a=Ft(r.value,n);return f("li",{children:f("label",{children:[f("input",{type:"checkbox",onChange:()=>{e.onToggleAlwaysLangs(!r.checked,r.value)},value:r.value,checked:r.checked}),a]})})})})]})}function $n(e){let{t}=re();return f("div",{children:e.urls.map((n,r)=>f("div",{class:"url-list",children:[f("div",{class:"url-left",children:[f("div",{class:"url-name height-tight",children:n}),f("div",{class:"description text-1 height-tight",children:n})]}),f("nav",{children:f("ul",{children:f("li",{children:f("details",{role:"list",dir:"rtl",children:[f("summary",{"aria-haspopup":"listbox",role:"link"}),f("ul",{class:"delete",role:"listbox",children:[f("li",{children:f("a",{onClick:a=>{e.onEditUrl(n,e.type,r)},children:t("edit")})}),f("li",{children:f("a",{onClick:a=>{e.onDeleteUrl(n,e.type)},children:t("delete")})})]})]})})})})]},"menu"+r))})}function Bn(e){let{t}=re(),n=fn(null),{toggleModal:r}=e;return f("dialog",{id:"immersive-translate-overlay",onClick:o=>{o.preventDefault(),o.target&&o.target.id==="immersive-translate-overlay"&&r(o)},open:!0,children:f("article",{class:"add-modal",children:[f("a",{href:"#close","aria-label":"Close",class:"close","data-target":"modal-example",onClick:e.toggleModal}),f("div",{class:"add-text",children:t("add url")}),f("input",{placeholder:"URL",ref:n,value:e.urlValue}),f("blockquote",{children:f("p",{class:"text-sm",children:t("addUrlDescription")})}),f("div",{class:"flex",children:[f("div",{class:"footer-button",children:f("a",{href:"#cancel",role:"button",class:"full-button secondary margin-right","data-target":"modal-example",onClick:e.toggleModal,children:t("cancel")})}),f("div",{class:"footer-button",children:f("a",{href:"#confirm",role:"button",class:"full-button margin-left","data-target":"modal-example",onClick:o=>{if(o.preventDefault(),n.current&&n.current.value){if(e.onSubmitAddUrl){if(e.urlValue!==""){e.onSubmitAddUrl(n.current.value,e.index,e.type,"edit");return}e.onSubmitAddUrl(n.current.value,e.index,e.type);return}else if(e.onAddInterfaceUrl){if(e.urlValue!==""){e.onAddInterfaceUrl(n.current.value,"edit");return}e.onAddInterfaceUrl(n.current.value)}}},children:t("confirm")})})]})]})})}var li=Qg();function Da(){let{t:e}=re(),[t,n,r,a]=ot(),[o,s]=Y(null),[i,c]=Y(null),[u,l]=Y(0),[g,d]=Y(!1),[m,p]=Y(!1),[b,x]=Y(""),h=[];i&&(h=Kg(i));let y=null,w=null,A=[],I=[];if(o&&i){let{translationService:C,translationServices:B}=o;Hn[C]&&(w=Zs(C,i)),B&&B[C]?y=B[C]||{}:y={},A=li.map(X=>o.translationLanguagePattern&&o.translationLanguagePattern.matches&&o.translationLanguagePattern.matches.includes(X)?{checked:!0,value:X}:{checked:!1,value:X}),I=li.map(X=>o.translationLanguagePattern&&o.translationLanguagePattern.excludeMatches&&o.translationLanguagePattern.excludeMatches.includes(X)?{checked:!0,value:X}:{checked:!1,value:X})}ge(()=>($e("esc",()=>{d(!1),p(!1)}),Ce().then(C=>{s(C),V.debug(C)}),()=>{$e.unbind("esc")}),[]),ge(()=>{Ce().then(C=>{s(C)})},[t]),ge(()=>{o&&Lt({url:"http://localhost",config:o}).then(C=>{c(C)})},[o]);let v=C=>{n(B=>({...B,translationService:C}))},L=C=>{n(()=>({...C}))},O=C=>{C.preventDefault(),confirm(e("confirmResetConfig"))&&(L(Jt()),vn().catch(B=>{V.error("clean local config error",B)}),Xe(e("resetSuccess")))},S=C=>{n(B=>({...B,targetLanguage:C}))},D=(C,B)=>{if(!C){n(R=>{let N={...R.translationLanguagePattern};return{...R,translationLanguagePattern:{...R.translationLanguagePattern,matches:xt(B,N.matches),excludeMatches:xt(B,N.excludeMatches)}}});return}let X=C,E=X==="matches"?"excludeMatches":"matches";B&&n(R=>{let N={...R.translationLanguagePattern};return N[X]=Tn(B,N[X]),N[E]=xt(B,N[E]),{...R,translationLanguagePattern:{...R.translationLanguagePattern,...N}}})},U=(C,B)=>{D(C?"matches":void 0,B)},P=(C,B)=>{D(C?"excludeMatches":void 0,B)},_=C=>{C==="matches"?d(!g):p(!m)},H=(C,B,X,E)=>{_(X),n(R=>{let N=t.translationUrlPattern,te=[],K=[];N&&N.matches&&N.excludeMatches&&(te=N.matches,K=N.excludeMatches);let he=[...te],we=[...K];return E==="edit"&&(X==="matches"?he[B]=C:we[B]=C),X==="matches"?(he=Tn(C,he),we=xt(C,K)):(he=xt(C,te),we=Tn(C,we)),{...R,translationUrlPattern:{...R.translationUrlPattern,matches:he,excludeMatches:we}}})},$=(C,B)=>{n(X=>{let E=t.translationUrlPattern,R=[];B==="matches"?E&&E.matches&&(R=E.matches):E&&E.excludeMatches&&(R=E.excludeMatches);let N=[...R];return N=xt(C,N),{...X,translationUrlPattern:{...X.translationUrlPattern,[B]:N}}})},j=(C,B,X)=>{_(B),x(C),l(X)};if(!o)return f("div",{children:"loading"});let Z=[];o&&o.translationLanguagePattern&&o.translationLanguagePattern.matches&&(Z=o.translationLanguagePattern.matches);let ee=[];return o&&o.translationLanguagePattern&&o.translationLanguagePattern.excludeMatches&&(ee=o.translationLanguagePattern.excludeMatches),f("div",{children:[f("div",{class:"nav",children:[f("strong",{class:"text-lg",children:e("general")}),f("a",{class:"text-sm",href:"#",onClick:O,children:e("reset")})]}),f("div",{class:"nav",children:[f(ve,{title:e("target"),description:e("translate other languages into specific language")}),f("select",{class:"select",onChange:C=>{C.preventDefault(),S(C.target.value)},children:li.filter(C=>C!=="auto").map(C=>f("option",{value:C,selected:C===o.targetLanguage,children:Ft(C,o.interfaceLanguage)}))})]}),f("div",{class:"nav",children:[f(ve,{title:e("service"),description:e("select translation service")}),f("select",{class:"select",onChange:C=>{C.preventDefault(),v(C.target.value)},children:h.map(C=>f("option",{value:C.id,selected:C.id===o.translationService,children:`${e("translationServices."+C.id)}`}))})]}),w&&w.docUrl?f("div",{children:[f("a",{class:"pb-1 docUrl",href:w.homepage,children:e(`translationServices.${w.id}`)}),"\xA0",f("span",{class:"description pb-1",children:e("please refer to")}),"\xA0",f("a",{class:"pb-1 docUrl",href:w.docUrl,children:e("KeyAndConfigurationTutorial")})]}):null,y&&w&&w.allProps.length>0&&w.allProps.map(C=>f(si,{field:C,value:y[C.name],onChange:B=>{n(X=>{let E=X.translationServices||{},R=E[w.id]||{};return{...X,translationServices:{...E,[w.id]:{...R,[C.name]:B}}}})}})),f("div",{class:"nav",children:[f(ve,{title:e("always languages"),description:e("always translate the following languages")}),f(Na,{options:A,onToggleAlwaysLangs:U})]}),f("div",{class:"langs-list",children:Z.map((C,B)=>f("div",{class:"lang-card",children:[f("div",{id:`${C}`,children:Ft(C,o.interfaceLanguage)}),f("a",{href:"#close",class:"close",target:"_blank","aria-label":"Close","data-target":`${C}`,onClick:X=>{X.preventDefault(),U(!1,Z[B])}})]}))}),f("div",{class:"nav",children:[f(ve,{title:e("neverTranslateLanguagesLabel"),description:e("neverTranslateTheFollowingLanguagesDescription")}),f(Na,{options:I,onToggleAlwaysLangs:P})]}),f("div",{class:"langs-list",children:ee.map((C,B)=>f("div",{class:"lang-card",children:[f("div",{id:`${C}`,children:Ft(C,o.interfaceLanguage)}),f("a",{href:"#close",class:"close",target:"_blank","aria-label":"Close","data-target":`${C}`,onClick:X=>{X.preventDefault(),P(!1,ee[B])}})]}))}),f("div",{class:"nav",children:[f(ve,{title:e("always sites"),description:e("always translate the following sites")}),f("div",{class:"nav-right",children:f("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:C=>{C.preventDefault(),_("matches")},children:e("add")})}),g?f(Bn,{toggleModal:C=>{C.preventDefault(),_("matches")},onSubmitAddUrl:H,type:"matches",urlValue:b,index:u}):null]}),f($n,{urls:o.translationUrlPattern.matches,type:"matches",onDeleteUrl:$,onEditUrl:j}),f("div",{class:"nav",children:[f(ve,{title:e("never sites"),description:e("never translate the following sites")}),f("div",{class:"nav-right",children:f("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:C=>{C.preventDefault(),_("excludeMatches")},children:e("add")})}),m?f(Bn,{toggleModal:C=>{C.preventDefault(),_("excludeMatches")},onSubmitAddUrl:H,type:"excludeMatches",urlValue:b,index:u}):null]}),f($n,{urls:o.translationUrlPattern.excludeMatches,type:"excludeMatches",onDeleteUrl:$,onEditUrl:j}),f("div",{class:"nav",children:[f(ve,{title:e("advanced"),description:e("advancedDescription")}),f("a",{class:"text-sm",href:"#advanced",children:e("goAdvancedSettings")})]})]})}function ci(e){let{t}=re(),{corfirmText:n,fingerCountToToggleTranslagePageWhenTouching:r,onChange:a,onClose:o,shortcuts:s}=e,i={},c=fn(null);for(let l=0;l<s.length;l++)i[s[l].name]=fn(null);let u=l=>{l.preventDefault(),l.target&&l.target.id==="immersive-translate-overlay"&&o()};return ge(()=>{},[]),f("dialog",{id:"immersive-translate-overlay",onClick:u,open:!0,children:f("article",{class:"add-modal",children:[f("a",{href:"#close","aria-label":"Close",class:"close","data-target":"modal-example",onClick:l=>{l.preventDefault(),o()}}),s.map((l,g)=>{let{name:d,description:m,shortcut:p}=l;return f("div",{class:"flex justify-between items-center",children:[f("label",{class:"mb-2 text-sm",for:d,children:[m,":"]}),f("input",{type:"text",class:"!w-36",ref:i[d],disabled:l.disabled,id:d,name:d,value:p})]},`key-${g}`)}),zc()&&f("div",{class:"flex justify-between items-center",children:[f("label",{for:"switch",class:"text-sm mb-2",children:t("toggleTranslatePageWhenThreeFingersOnTheScreen")}),f("select",{class:"select !w-36",ref:c,onChange:l=>{l.preventDefault()},children:[0,2,3,4,5].map(l=>f("option",{value:l,selected:l===r,children:`${t("fingers."+l)}`}))})]}),e.note&&f(e.note,{}),f("div",{class:"flex",children:[f("div",{class:"footer-button",children:f("a",{href:"#cancel",role:"button",class:"full-button secondary margin-right","data-target":"modal-example",onClick:l=>{l.preventDefault(),o()},children:t("cancel")})}),n&&f("div",{class:"footer-button",children:f("a",{href:"#confirm",role:"button",class:"full-button margin-left","data-target":"modal-example",onClick:l=>{l.preventDefault();let g=[];for(let m=0;m<s.length;m++){let p=s[m],b=i[p.name];if(b.current){let x=b.current.value;g.push({...p,shortcut:x})}}let d={shortcuts:g};if(c.current){let m=c.current.value;d.fingerCountToToggleTranslagePageWhenTouching=parseInt(m)}a(d)},children:n})})]})]})})}var ui=Bc()?["action"]:["browser_action","page_action"],Lh=[{id:"toggleTranslatePage",contexts:["page","frame",...ui]},{id:dc,contexts:ui},{id:mc,contexts:ui}];async function Zg(){let e=await Ce();V.debug("update ContextMenu",e);for(let t of Lh){let n=Xg(`browser.${t.id}`,e.interfaceLanguage);Q.contextMenus.update(t.id,{title:n})}}var Ah=Object.keys(Ra),kh=e=>{let t=e.translationTheme;return e.translationThemePatterns[t]?[...e.translationThemePatterns[t].matches]:[]};function gi(){let[e,t,n,r]=ot(),[a,o]=Y(!1),[s,i]=Y(!1),[c,u]=Y(0),[l,g]=Y(null),{t:d,setLang:m}=re(),[p,b]=Y(""),x=Q.runtime.getManifest();ge(()=>($e("esc",()=>{o(!1),i(!1)}),()=>{$e.unbind("esc")}),[]),ge(()=>{Ce().then(S=>{Lt({config:S,url:globalThis.location.href}).then(D=>{g(D)})})},[e]);let h=S=>{t(D=>({...D,translationTheme:S}))},y=S=>{t(D=>({...D,interfaceLanguage:S}))},w=(S,D,U)=>{o(!a),t(P=>{let _=P.translationThemePatterns||{},H=_[D]||{},$=H.matches||[],j=[...$];return U==="edit"&&(j=xt(p,$)),j=Tn(S,j),{...P,translationThemePatterns:{..._,[D]:{...H,matches:j}}}})},A=(S,D)=>{t(U=>{let P=U.translationThemePatterns||{},_=P[D]||{},$=[..._.matches||[]];return $=xt(S,$),{...U,translationThemePatterns:{...P,[D]:{..._,matches:$}}}})},I=(S,D,U)=>{o(!a),b(S),u(U)};if(!l)return f("div",{children:"loading"});let v=l.config,L=d("confirm"),O=()=>f("blockquote",{class:"text-sm",children:[d("browserShortcutsSucks")," ",f("kbd",{children:"Ctrl+A"}),"\xA0",f("kbd",{children:"Alt+B"}),"\xA0",f("kbd",{children:"Command+C"}),"\xA0 ",f("kbd",{children:"Ctrl+Shift+D"})," ",f("a",{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#shortcut_values",children:[d("help"),"?"]})]});return xe()||(ts()?(O=()=>f("blockquote",{class:"text-sm",children:[d("browserShortcutsNoteForFirefox"),"  ",f("a",{href:"https://support.mozilla.org/zh-CN/kb/%E7%AE%A1%E7%90%86Firefox%E7%9A%84%E6%89%A9%E5%B1%95%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F",children:[d("help"),"?"]})," "]}),L=""):(O=()=>f("blockquote",{class:"text-sm",children:d("browserShortcutsNoteForChrome")}),L=d("goSettings"))),f("div",{children:[f("div",{class:"nav",children:f("strong",{class:"text-lg",children:d("interface")})}),f("div",{class:"nav",children:[f(ve,{title:d("interface language")}),f("select",{class:"select",onChange:S=>{m(S.target.value),y(S.target.value),xe()||setTimeout(()=>{Zg()},200)},children:Ah.map(S=>f("option",{value:S,selected:S===v.interfaceLanguage,children:Ft(S,v.interfaceLanguage,!0)}))})]}),f("div",{class:"nav",children:[f(ve,{title:d("keyboard shortcuts")}),f("div",{class:"nav-right",children:f("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:S=>{S.preventDefault(),i(!s)},children:d("modify")})})]}),f("div",{class:"nav",children:[f(ve,{title:d("enableLineBreak"),description:d("enableLineBreakDescription")}),f("label",{for:"switch",children:f("input",{type:"checkbox",onChange:S=>{let D=S.target.checked;t(U=>{let P=U.generalRule||{};return{...U,generalRule:{...P,lineBreakMaxTextCount:D?280:0}}})},checked:l.rule.lineBreakMaxTextCount>0,id:"switch",name:"switch",role:"switch"})})]}),l.rule.lineBreakMaxTextCount>0&&f("div",{class:"nav",children:[f(ve,{title:d("lineBreakMaxTextCount")}),f("label",{for:"count",children:f("input",{type:"number",id:"count",onChange:S=>{let D=S.target.value;t(U=>{let P=U.generalRule||{};return{...U,generalRule:{...P,lineBreakMaxTextCount:parseInt(D)}}})},name:"count",value:l.rule.lineBreakMaxTextCount,placeholder:"Text Length",required:!0})})]}),(ra().any||xe())&&f("div",{class:"nav",children:[f(ve,{title:d("enableUserscriptPagePopup"),description:d("enableUserscriptPagePopupDescription",{touch:d("fingers."+v.generalRule.fingerCountToToggleTranslagePageWhenTouching)})}),f("label",{for:"switch",children:f("input",{type:"checkbox",onChange:S=>{let D=S.target.checked;t(U=>{let P=U.generalRule||{};return{...U,generalRule:{...P,isShowUserscriptPagePopup:D}}})},checked:l.rule.isShowUserscriptPagePopup,id:"switch",name:"switch",role:"switch"})})]}),f("div",{class:"nav",children:[f(ve,{title:d("translation display"),description:d("select diplay style")}),f("select",{class:"select",onChange:S=>{h(S.target.value)},children:Ec.map(S=>f("option",{value:S,selected:S===v.translationTheme,children:d(`translationTheme.${S}`)}))})]}),f("div",{class:"pt-2 text-sm",children:f("p",{children:[Ac,f("br",{}),f("br",{}),f("span",{class:ws(v.translationTheme,!1,[],!1,!1).join(" "),children:f("span",{class:Ss(v.translationTheme).join(" "),children:kc})})]})}),f("div",{class:"nav",children:[f(ve,{title:"",description:d("useAboveStyleForTheseSites",{theme:d(`translationTheme.${v.translationTheme}`)})}),f("div",{class:"nav-right",children:f("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:S=>{S.preventDefault(),o(!a)},children:d("add")})})]}),a?f(Bn,{toggleModal:S=>{S.preventDefault(),o(!a)},onAddInterfaceUrl:(S,D)=>{w(S,v.translationTheme,D)},urlValue:p,index:c}):null,f($n,{urls:kh(v),type:"matches",onDeleteUrl:S=>{A(S,v.translationTheme)},onEditUrl:I}),s?f(ci,{note:O,corfirmText:L,fingerCountToToggleTranslagePageWhenTouching:v.generalRule.fingerCountToToggleTranslagePageWhenTouching,shortcuts:Cc.map(S=>({name:S,shortcut:v.shortcuts[S],description:d(`browser.${S}`),disabled:!xe()})),onChange:S=>{let{shortcuts:D,fingerCountToToggleTranslagePageWhenTouching:U}=S;xe()?t(P=>{let _=D.reduce(($,j)=>($[j.name]=j.shortcut,$),{...P.shortcuts}),H={...P,shortcuts:_};return U!==void 0&&(H.generalRule={...H.generalRule,fingerCountToToggleTranslagePageWhenTouching:U}),H}):Q.tabs.create({url:"chrome://extensions/shortcuts"}),i(!1)},onClose:()=>{i(!1)}}):null]})}function fi(){let[e,t,n,r]=ot(),[a,o]=Y(null),{t:s}=re();ge(()=>{Ce().then(b=>{o(b)})},[e]);let i=b=>{t(x=>({...x,debug:b}))},c=b=>{t(()=>({...b}))},u=b=>{try{let x=JSON.parse(b.target.value);if(!Array.isArray(x)){wt("Invalid rules, rules must be an array");return}let h={...e};h.rules=x,c(h),Xe(s("saved"))}catch(x){wt(`Invalid JSON ${x.message}`)}},l=b=>{try{let x=JSON.parse(b.target.value);c(x),Xe(s("saved"))}catch(x){wt(`Invalid JSON ${x.message}`)}},g=b=>{b.preventDefault()},d=b=>{b.preventDefault(),c(Jt()),Xe(s("resetSuccess")),setTimeout(()=>{vn().catch(x=>{V.error("clean local config error",x)})},500)},m=b=>{b.preventDefault();let x={...e};delete x.rules,c(x)},p={matches:"www.google.com",selectors:[".title",'[data-testid="title"]'],excludeSelectors:["footer"]};return a?f("div",{children:[f("div",{class:"nav",children:f("strong",{class:"text-lg",children:s("developer")})}),f("fieldset",{children:f("label",{for:"switch",children:[f("input",{type:"checkbox",id:"cache",name:"cache",role:"switch",onChange:()=>{i(!a.debug)},checked:a.debug}),s("toggleDebug")]})}),f("details",{class:"py-2",children:[f("summary",{children:"Edit User Rules"}),f("textarea",{rows:10,onChange:u,placeholder:JSON.stringify(p,null,2),value:e.rules?JSON.stringify(e.rules||[],null,2):""}),f("div",{children:[f("a",{href:"#",class:"mr-3 !py-2",onClick:g,role:"button",children:s("save")}),f("a",{class:"secondary text-sm mr-3",href:"https://immersive-translate.owenyoung.com/advanced",children:[s("help"),"?"]}),f("a",{href:"#",onClick:m,class:"text-sm secondary mr-2",children:s("reset")})]})]}),f("details",{class:"py-2",children:[f("summary",{children:"Edit User Config"}),f("textarea",{rows:10,onChange:l,value:JSON.stringify(e,null,2)}),f("div",{children:[f("a",{href:"#",class:"mr-3 !py-2",onClick:g,role:"button",children:s("save")}),f("a",{class:"secondary text-sm mr-3",href:"https://immersive-translate.owenyoung.com/advanced",children:[s("help"),"?"]}),f("a",{href:"#",onClick:d,class:"text-sm secondary mr-2",children:s("reset")})]})]}),f("details",{class:"py-2",children:[f("summary",{children:"Click to expand the final config"}),f("pre",{children:f("code",{children:JSON.stringify(a,null,2)})})]})]}):f("div",{children:"loading"})}function di(){let[e,t,n,r]=ot(),[a,o]=Y(null),{t:s}=re();ge(()=>{Ce().then(g=>{o(g)})},[]);let i=g=>{t(()=>({...g}))},c=g=>{try{let d=JSON.parse(g.target.value);i(d)}catch(d){wt(`Invalid JSON ${d.message}`)}},u=g=>{g.preventDefault();let d=document.createElement("input");d.setAttribute("type","file"),d.setAttribute("accept","text/plain"),d.style.display="none",document.body.appendChild(d),d.oninput=m=>{let p=m.target,b=new FileReader;b.onload=function(){try{let x=JSON.parse(b.result);i(x),Xe(s("successImportConfig"))}catch(x){wt(`Invalid JSON ${x.message}`)}},b.readAsText(p.files[0])},d.click(),document.body.removeChild(d)},l=g=>{g.preventDefault(),confirm(s("confirmResetConfig"))&&(i(Jt()),Xe(s("resetSuccess")),setTimeout(()=>{vn().catch(d=>{V.error("clean local config error",d)})},500))};return f("div",{children:[f("div",{class:"nav",children:f("strong",{class:"text-lg",children:s("import_export")})}),f("div",{class:"pb-2",children:[f("a",{class:"mr-2 secondary",onClick:u,href:"#",role:"button",children:[f("svg",{class:"inline mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[f("path",{fill:"none",d:"M0 0h24v24H0z"}),f("path",{d:"M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z"})]}),s("import")]}),f("a",{href:"data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,2)),download:"immersive-translate-backup-"+new Date().toISOString().replace(/T/,"_").replace(/\..+/,"").replace(/\:/g,".")+".txt",class:"secondary mr-4",role:"button",children:[f("svg",{class:"inline mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[f("path",{fill:"none",d:"M0 0h24v24H0z"}),f("path",{d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"})]}),s("export")]}),f("a",{href:"#",onClick:l,class:"secondary text-sm",children:s("reset")})]}),f("details",{class:"pt-4",children:[f("summary",{children:s("clickToExpandConfig")}),f("pre",{children:f("code",{children:JSON.stringify(e,null,2)})})]})]})}function Ia(){return Q.runtime.getManifest().version}var _h="buildinConfig",Mh={},ef=Vc(_h,Mh);function mi(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})>=0}function pi(e,t=2e3){return n=>{let r,a=0;return o=>{++a==e&&(n(o),a=0),clearTimeout(r),r=setTimeout(()=>a=0,t)}}}async function tf(){let e=["bingGlobalConfig","baiduGlobalConfig"];for(let t of e)await Q.storage.local.remove(t);xe()||await tu()}function nf(){return xe()?Promise.resolve("0 B"):gs()}var Ph=({date:e})=>{let{t}=re();return f("p",{class:"text-sm",children:[t("The local rules are up to date")," ",new Date(e).toLocaleString()]})},Rh=({date:e})=>{let{t}=re();return f("p",{class:"text-sm",children:[t("Successfully synchronized with the latest official rules:")," ",new Date(e).toLocaleString()]})},Nh=()=>{let{t:e}=re();return f("p",{class:"text-sm","aria-busy":!0,children:[e("Checking for updates"),"..."]})},Dh=()=>{let{t:e}=re();return f("p",{class:"text-sm",children:[e("Rules are being synchronized"),"..."]})},Ih=({minVersion:e})=>{let{t}=re();return f("p",{class:"text-sm",children:t("localVersionIsTooOld",{minVersion:e})})},Oh=({latestVersion:e})=>{let{t}=re();return f("p",{class:"text-sm",children:[t("foundNewVersion"),":"," ",f("a",{href:"https://github.com/immersive-translate/immersive-translate/releases",children:e})]})},Fh=()=>{let{t:e}=re();return f("p",{class:"text-sm",children:e("theLocalExtensionIsUpToUpdate")})},Hh=({message:e,handleSyncing:t,date:n})=>{let{t:r}=re();return f("p",{class:"text-sm",children:[r("failToSyncRules")," ",f("a",{onClick:t,children:r("retry")}),f("br",{}),r("failedReason"),"\uFF1A",e,f("br",{}),r("currentRuleVersion"),"\uFF1A",n]})};function hi(){let[e,t]=Y(null),{t:n}=re(),[r,a]=Y(n("calculating")+"..."),[o,s]=Y(null),[i,c]=ef(),[u,l]=Y(null),[g,d]=Y(""),[m,p]=Y(!1),[b,x]=Y(!1),[h,y]=Y(null),[w,A]=Y(null),[I,v,L,O]=ot(),[S,D]=Y(!1),U=Ia(),P=async()=>{d("");let j=o;if(o===null)try{let Z=await wn({url:zo});Z?(s(Z),j=Z,p(!0)):(d(n("unknownError")),l(null))}catch(Z){l(null),d(Z.message);return}j!==null?(c(j),l(!1),t(j.buildinConfigUpdatedAt)):(d(n("canNotFetchRemoteRule")),l(null))};ge(()=>{Ce().then(j=>{let Z=j.buildinConfigUpdatedAt;y(j);let ee=new Date(Z);t(Z),wn({url:zo}).then(C=>{let B=C.minVersion,X=U;s(C);let E=C.latestVersion;if(E&&(mi(X,E)?A(!0):A(!1)),mi(X,B)){let R=C.buildinConfigUpdatedAt;new Date(R)>ee?(l(!0),P()):l(!1)}else x(!0),l(null)}).catch(C=>{l(null),d(C.message)})}),nf().then(j=>{a(j)})},[]),ge(()=>{Ce().then(j=>{y(j)})},[I,e]);let _=j=>{v(Z=>{let ee=!Z.alpha;return ee?Xe(n("enableAlphaSuccess")):Xe(n("disableAlphaSuccess")),{...Z,alpha:ee}})},H=j=>{j.preventDefault(),j.stopPropagation(),D(!0),tf().then(()=>{D(!1),Xe("\u6E05\u7406\u6210\u529F"),a("0 B")}).catch(Z=>{D(!1),wt(Z.message)})},$=j=>{v(Z=>({...Z,cache:j}))};return h?f("div",{class:"text-sm",children:[f("div",{class:"nav",children:f("strong",{onClick:pi(7)(_),class:"text-lg immersive-translate-no-select",children:n("about")})}),f("p",{onClick:pi(7)(_),class:"mb-2 immersive-translate-no-select",children:["V",U]}),w===!1&&f(Oh,{latestVersion:o?.latestVersion}),w===!0&&f(Fh,{}),f("fieldset",{children:f("label",{for:"switch",children:[f("input",{type:"checkbox",id:"cache",name:"cache",role:"switch",onChange:()=>{$(!h.cache)},checked:h.cache}),n("allowCacheTranslations")]})}),!xe()&&r&&f("p",{class:"text-sm",children:[n("cacheSize"),"\xA0",r," \xA0 ",S?f("span",{children:[n("cleaning"),"..."]}):f("a",{class:"text-sm",href:"#",onClick:H,children:n("cleanCache")})]}),g?f(Hh,{handleSyncing:P,message:g,date:e||""}):b?f(Ih,{minVersion:o.minVersion}):u===null?f(Nh,{}):u===!0?f(Dh,{}):m?f(Rh,{date:e}):f(Ph,{date:e})]}):null}function bi(){let[e,t,n,r]=ot(),[a,o]=Y(null),{t:s}=re();ge(()=>{Ce().then(l=>{Lt({config:l,url:globalThis.location.href}).then(g=>{o(g)})})},[e]);let i=l=>{t(g=>({...g,translationTheme:l}))},c=l=>{t(g=>({...g,interfaceLanguage:l}))};if(!a)return f("div",{children:"loading"});let u=a.config;return f("div",{children:[f("div",{class:"nav",children:f("strong",{class:"text-lg",children:s("advanced")})}),f("div",{class:"nav",children:[f(ve,{title:s("translate all areas of the page"),description:s("translationAreaDescription")}),f("label",{for:"switch",children:f("input",{type:"checkbox",id:"switch",name:"switch",role:"switch",onChange:l=>{let g=l.target.checked;t(d=>({...d,translationArea:g?"body":"main"}))},checked:u.translationArea==="body"})})]}),f("div",{class:"nav",children:[f(ve,{title:s("translate to the bottom of the page"),description:s("translateToThePageEndImmediatelyDescription")}),f("label",{for:"switch",children:f("input",{type:"checkbox",onChange:l=>{let g=l.target.checked;t(d=>({...d,translationStartMode:g?"immediate":"dynamic"}))},checked:u.translationStartMode==="immediate",id:"switch",name:"switch",role:"switch"})})]}),f("div",{class:"nav",children:[f(ve,{title:s("tempTranslateDomainTitle"),description:s("tempTranslateDomainDescription")}),f("select",{class:"select",onChange:l=>{t(g=>({...g,tempTranslateDomainMinutes:parseInt(l.target.value)}))},children:[f("option",{value:0,selected:u.tempTranslateDomainMinutes===0,children:s("disabled")}),f("option",{value:5,selected:u.tempTranslateDomainMinutes===5,children:s("xMinutes",{count:5})}),f("option",{value:10,selected:u.tempTranslateDomainMinutes===10,children:s("xMinutes",{count:10})}),f("option",{value:30,selected:u.tempTranslateDomainMinutes===30,children:s("xMinutes",{count:30})})]})]}),f("div",{class:"nav",children:[f(ve,{title:s("the number of characters to be translated first")}),f("label",{for:"count",children:f("input",{type:"number",id:"count",onChange:l=>{let g=l.target.value;t(d=>({...d,immediateTranslationTextCount:parseInt(g)}))},name:"count",value:u.immediateTranslationTextCount,placeholder:"Text Length",required:!0})})]})]})}var rf=Xn({presets:[jr(),Vr()]});function af(){let e=document.getElementById("mount");e&&(async()=>{fo(rf);let t=await Ce();t.debug&&V.setLevel("debug"),za(f(Jg,{lang:t.interfaceLanguage,fallbackLang:"zh-CN",translations:Ra,children:f(Uh,{donateUrl:t.donateUrl})}),e)})()}function Uh(e){let t=Bo(),{t:n}=re(),r=Ia(),a=[{name:n("general"),props:{href:"#general",className:"secondary"}},{name:n("interface"),props:{href:"#interface",className:"secondary"}},{name:n("import_export"),props:{href:"#import_export",className:"secondary"}},{name:n("about"),props:{href:"#about",className:"secondary"}}];return a.forEach(o=>{t===o.props.href&&(o.props.className="primary",o.props["aria-current"]="page")}),f(Ze,{children:f("main",{class:"container-fluid",children:[f("aside",{children:f("nav",{class:"flex flex-col h-full justify-between",children:[f("div",{children:[f("hgroup",{children:[f("h4",{class:"cursor-pointer p-0 m-0",onClick:()=>{globalThis.location.hash="#general"},children:n("browser.brandName")}),f("h6",{class:"!text-sm",children:r})]}),f("ul",{children:a.map((o,s)=>f("li",{class:"li",children:f("a",{...o.props,children:o.name})},`nav-${s}`))})]}),f("div",{class:"m-0 p-0 flex flex-col",children:[f("a",{class:"py-3 text-xs no-focus secondary",href:e.donateUrl,children:[n("donateCafe"),"\u2615\uFE0F"]}),f("a",{class:"py-3 text-xs no-focus secondary",href:"https://immersive-translate.owenyoung.com/CHANGELOG.html",children:n("changelog")}),f("a",{class:"py-3 text-xs no-focus secondary",href:"https://immersive-translate.owenyoung.com/",children:n("document")}),f("a",{class:"py-3 text-xs no-focus secondary",href:"#developer",children:n("developer")})]})]})}),f("div",{role:"main",children:f($o,{value:t,defaultCase:f(Da,{}),cases:{"#general":f(Da,{}),"#interface":f(gi,{}),"#import_export":f(di,{}),"#about":f(hi,{}),"#advanced":f(bi,{}),"#developer":f(fi,{})}})})]})})}af();
