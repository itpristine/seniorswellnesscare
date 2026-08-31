// Declare CSS module imports so TypeScript does not raise TS2882
declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

// Declare common static asset imports
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}
declare module '*.ico' {
  const src: string;
  export default src;
}
