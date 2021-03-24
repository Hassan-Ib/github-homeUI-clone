import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    :root{
        --scale : 1;
        
        --letter-spacing: 1px;
        --letter-spacing-md: 2px;
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
        --color-scale-blue-7: #044289;
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
        --padding-button: 0.4rem 0.5rem;
        --border-radius: 10px;
        --font-size-sm: .8rem;
        --font-size-md: 1rem;
        --font-size: 1.1rem;
        --media-screen-big:75em;

    }   
    
    [data-theme=dark]{

    }

    *,
    ::after,
    ::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 1.2rem;
    }
    body{
        font-family: sans-serif;
        line-height: 1.5;
        color: var(--color-text-primary);
    }
    button, input[type="button"]{
        border: 0;
        outline: 0;
        background:none;
        cursor: pointer;
        text-transform:capitalize;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: inherit;
        text-transform: capitalize;
    }


`;

export default GlobalStyle;
