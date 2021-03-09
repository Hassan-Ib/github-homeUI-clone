import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    :root [data-color-mode=light][data-light-theme=light]{
 
        --size : 1.2;
        --color-white: #fff;
        --letter-spacing: 1px;
        --letter-spacing-md:2px;
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
        --color-scale-green-0: #f0fff4;
        --color-scale-green-1: #dcffe4;
        --color-scale-green-2: #bef5cb;
        --color-scale-green-3: #85e89d;
        --color-scale-green-4: #34d058;
        --color-scale-green-5: #28a745;
        --color-scale-green-6: #22863a;
        --color-scale-green-7: #176f2c;
        --color-scale-green-8: #165c26;
        --color-scale-green-9: #144620;
        --color-scale-yellow-0: #fffdef;
        --color-scale-yellow-1: #fffbdd;
        --color-scale-yellow-2: #fff5b1;
        --color-scale-yellow-3: #ffea7f;
        --color-scale-yellow-4: #ffdf5d;
        --color-scale-yellow-5: #ffd33d;
        --color-scale-yellow-6: #f9c513;
        --color-scale-yellow-7: #dbab09;
        --color-scale-yellow-8: #b08800;
        --color-scale-yellow-9: #735c0f;
        --color-scale-orange-0: #fff8f2;
        --color-scale-orange-1: #ffebda;
        --color-scale-orange-2: #ffd1ac;
        --color-scale-orange-3: #ffab70;
        --color-scale-orange-4: #fb8532;
        --color-scale-orange-5: #f66a0a;
        --color-scale-orange-6: #e36209;
        --color-scale-orange-7: #d15704;
        --color-scale-orange-8: #c24e00;
        --color-scale-orange-9: #a04100;
        --color-scale-red-0: #ffeef0;
        --color-scale-red-1: #ffdce0;
        --color-scale-red-2: #fdaeb7;
        --color-scale-red-3: #f97583;
        --color-scale-red-4: #ea4a5a;
        --color-scale-red-5: #d73a49;
        --color-scale-red-6: #cb2431;
        --color-scale-red-7: #b31d28;
        --color-scale-red-8: #9e1c23;
        --color-scale-red-9: #86181d;
        --color-scale-purple-0: #f5f0ff;
        --color-scale-purple-1: #e6dcfd;
        --color-scale-purple-2: #d1bcf9;
        --color-scale-purple-3: #b392f0;
        --color-scale-purple-4: #8a63d2;
        --color-scale-purple-5: #6f42c1;
        --color-scale-purple-6: #5a32a3;
        --color-scale-purple-7: #4c2889;
        --color-scale-purple-8: #3a1d6e;
        --color-scale-purple-9: #29134e;
        --color-scale-pink-0: #ffeef8;
        --color-scale-pink-1: #fedbf0;
        --color-scale-pink-2: #f9b3dd;
        --color-scale-pink-3: #f692ce;
        --color-scale-pink-4: #ec6cb9;
        --color-scale-pink-5: #ea4aaa;
        --color-scale-pink-6: #d03592;
        --color-scale-pink-7: #b93a86;
        --color-scale-pink-8: #99306f;
        --color-scale-pink-9: #6d224f;
        --color-auto-black: #1b1f23;
        --color-auto-white: #fff;
        --color-auto-gray-0: #fafbfc;
        --color-auto-gray-1: #f6f8fa;
        --color-auto-gray-2: #e1e4e8;
        --color-auto-gray-3: #d1d5da;
        --color-auto-gray-4: #959da5;
        --color-auto-gray-5: #6a737d;
        --color-auto-gray-6: #586069;
        --color-auto-gray-7: #444d56;
        --color-auto-gray-8: #2f363d;
        --color-auto-gray-9: #24292e;
        --color-auto-blue-0: #f1f8ff;
        --color-auto-blue-1: #dbedff;
        --color-auto-blue-2: #c8e1ff;
        --color-auto-blue-3: #79b8ff;
        --color-auto-blue-4: #2188ff;
        --color-auto-blue-5: #0366d6;
        --color-auto-blue-6: #005cc5;
        --color-auto-blue-7: #044289;
        --color-auto-blue-8: #032f62;
        --color-auto-blue-9: #05264c;
        --color-auto-green-0: #f0fff4;
        --color-auto-green-1: #dcffe4;
        --color-auto-green-2: #bef5cb;
        --color-auto-green-3: #85e89d;
        --color-auto-green-4: #34d058;
        --color-auto-green-5: #28a745;
        --color-auto-green-6: #22863a;
        --color-auto-green-7: #176f2c;
        --color-auto-green-8: #165c26;
        --color-auto-green-9: #144620;
        --color-auto-yellow-0: #fffdef;
        --color-auto-yellow-1: #fffbdd;
        --color-auto-yellow-2: #fff5b1;
        --color-auto-yellow-3: #ffea7f;
        --color-auto-yellow-4: #ffdf5d;
        --color-auto-yellow-5: #ffd33d;
        --color-auto-yellow-6: #f9c513;
        --color-auto-yellow-7: #dbab09;
        --color-auto-yellow-8: #b08800;
        --color-auto-yellow-9: #735c0f;
        --color-auto-orange-0: #fff8f2;
        --color-auto-orange-1: #ffebda;
        --color-auto-orange-2: #ffd1ac;
        --color-auto-orange-3: #ffab70;
        --color-auto-orange-4: #fb8532;
        --color-auto-orange-5: #f66a0a;
        --color-auto-orange-6: #e36209;
        --color-auto-orange-7: #d15704;
        --color-auto-orange-8: #c24e00;
        --color-auto-orange-9: #a04100;
        --color-auto-red-0: #ffeef0;
        --color-auto-red-1: #ffdce0;
        --color-auto-red-2: #fdaeb7;
        --color-auto-red-3: #f97583;
        --color-auto-red-4: #ea4a5a;
        --color-auto-red-5: #d73a49;
        --color-auto-red-6: #cb2431;
        --color-auto-red-7: #b31d28;
        --color-auto-red-8: #9e1c23;
        --color-auto-red-9: #86181d;
        --color-auto-purple-0: #f5f0ff;
        --color-auto-purple-1: #e6dcfd;
        --color-auto-purple-2: #d1bcf9;
        --color-auto-purple-3: #b392f0;
        --color-auto-purple-4: #8a63d2;
        --color-auto-purple-5: #6f42c1;
        --color-auto-purple-6: #5a32a3;
        --color-auto-purple-7: #4c2889;
        --color-auto-purple-8: #3a1d6e;
        --color-auto-purple-9: #29134e;
        --color-auto-pink-0: #ffeef8;
        --color-auto-pink-1: #fedbf0;
        --color-auto-pink-2: #f9b3dd;
        --color-auto-pink-3: #f692ce;
        --color-auto-pink-4: #ec6cb9;
        --color-auto-pink-5: #ea4aaa;
        --color-auto-pink-6: #d03592;
        --color-auto-pink-7: #b93a86;
        --color-auto-pink-8: #99306f;
        --color-auto-pink-9: #6d224f;
        --color-text-primary: #24292e;
        --color-text-secondary: #586069;
        --color-text-tertiary: #6a737d;
        --color-text-placeholder: #6a737d;
        --color-text-disabled: #959da5;
        --color-text-inverse: #fff;
        --color-text-link: #0366d6;
        --color-text-danger: #cb2431;
        --color-text-success: #22863a;
        --color-text-warning: #b08800;
        --color-text-white: #fff;
        --color-icon-primary: #24292e;
        --color-icon-secondary: #586069;
        --color-icon-tertiary: #959da5;

    }

    *,
    ::after,
    ::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 1rem;
    }
    body{
        font-family: sans-serif;
        line-height: 1.4;
    }
    button, input[type="button"]{
        border: 0;
        outline: 0;
        background:none;
        cursor: pointer;
    }


`;

export default GlobalStyle;
