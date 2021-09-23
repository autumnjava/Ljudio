/// <reference types="react-scripts" />


// Behövs för att använda import av video filer. 
declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}