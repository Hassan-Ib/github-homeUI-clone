import { createGlobalStyle } from "styled-components";
import { theme } from "./utils/theme";

const GlobalStyle = createGlobalStyle`
    
    :root{
        --color-slight-white: #fefefefe;
        --color-scale-black: #1b1f23;
        --color-scale-white: #fff;
        --color-scale-gray-0: #fafbfc;
        --color-scale-gray-1: #f6f8fa;
        --color-scale-gray-2: #e1e4e8;
        --color-scale-gray-3: #d1d5da;
        --color-scale-gray-4: #959da5;
        --color-scale-gray-5: #6a737d;
        --color-scale-gray-6: #586069;
        --color-scale-gray-7: #444d56;
        --color-scale-gray-8: #2f363d;
        --color-scale-gray-9: #24292e;
        --color-scale-blue-0: #f1f8ff;
        --color-scale-blue-1: #dbedff;
        --color-scale-blue-2: #c8e1ff;
        --color-scale-blue-3: #79b8ff;
        --color-scale-blue-4: #2188ff;
        --color-scale-blue-5: #0366d6;
        --color-scale-blue-6: #005cc5;
        --color-scale-blue-7: #042d6b;
        --color-scale-blue-8: #032f62;
        --color-scale-blue-9: #05264c;
        --color-text-primary: #24292e;
        --color-text-secondary: #586069;
        --color-text-tertiary: #6a737d;
        --color-text-placeholder: #caccd0;
        --color-text-white: #fff;
        --color-text-white-1: rgba(256,256,256, .8);
        --color-text-black: #000;
        --color-text-black-1: rgba(0,0,0,.8);
        --color-icon-primary: #24292e;
        --color-icon-secondary: #586069;
        --color-icon-tertiary: #959da5;
        --color-bg-input: #293244;
        --color-bg-white: #fefefe;
        --color-bg-black: #111;
        --scale : 1;
        --fs-title: calc(2.3rem * var(--scale));
        --fw-title : 900;
        --fs-subtitle: calc(1.6rem * var(--scale));
        --fs-paragraphy: calc(1.2rem * var(--scale));
        --fs-sm: calc(.8rem * var(--scale));
        --fs-md: calc(1rem * var(--scale));
        --fs: calc(1.1rem * var(--scale));
        --letter-spacing: 1px;
        --letter-spacing-md: 2px;
        --spacing-xsm: .6rem;
        --spacing-sm: 1rem;
        --spacing-md: 3rem;
        --spacing-lg: 5rem;

        --linear-gradient : linear-gradient(130deg, var(--color-scale-blue-7) , #04112a 18%);
    }
    @media (min-width: ${theme.media.sm}){
        :root{
            --scale: 1.2;
        }
    }   
    @media (min-width: ${theme.media.md}){
        :root{
            --scale: 1.4;
        }
    }
    [data-theme=dark]{

    }

    *,
    *::after,
    *::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
    
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
    body{
        font-family: sans-serif;
        line-height: 1.3;
        color: var(--color-text-primary);
    }
    h1{
        line-height: 1.1;
    }
    img,
    picture {
        max-width: 100%;
        display: block;
    }

   
    
    button, input[type="button"]{
        border: 0;
        outline: 0;
        background:none;
        cursor: pointer;
        /* text-transform:capitalize; */
    }
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }
    ul,ol{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
        text-transform: capitalize;
    }


`;

export default GlobalStyle;
