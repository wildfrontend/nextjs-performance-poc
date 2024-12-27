const imageSizes = (mobile: string, tablet: string, desktop: string) => {
  return `(max-width: 450px) ${mobile}, (min-width: 1024px) ${tablet}, ${desktop}`;
};

export default imageSizes;
