const imageSizes = (mobile: string, tablet: string, desktop: string) => {
  return `(max-width: 450px) ${mobile}, (max-width: 1440px) ${tablet}, ${desktop}`;
};

export default imageSizes;
