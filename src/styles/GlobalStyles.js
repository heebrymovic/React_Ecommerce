import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

	:root{
		--color-white:#fff;
		--color-blue:#007bff;
		--color-blue-0:rgb(125 150 177);
		--color-gray--0:#f1f1f1;
		--color-gray--1:#d1cccc;
		--color-gray--2:#ebe3e3;
		--color-green:#3dbd3d;
		--color-error:#ff4040;
		--color-yellow:#fece51;
		--color-black:black;
		--color-black-0:#999;
	}
	
	/*CSS RESETS*/
	
	*{box-sizing:border-box;color:currentColor;outline:none;resize:none;text-decoration:none; font-family: "Roboto", sans-serif;padding:0; margin:0}
	html{-webkit-tap-highlight-color:transparent;smooth-behavior:scroll; }
	body{overflow-x:hidden;margin:0!important;font-family: "Roboto", sans-serif;}
	span{display:inline-block}
	img{width:100%;}
	button, input, textarea {border:none; background:transparent}
	select{ border:1px solid var(--color-gray--1); border-radius:5px;}
	ul{list-style:none;padding:0}



	body.dark { background:var(--color-black); transition:0.5s;}
	body.dark *{color:white;}
	body.dark :is(select, option){color:black;}



`;
